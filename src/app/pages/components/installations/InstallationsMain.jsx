/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreInstallations, useStoreMainInstallation } from "@/app/hooks/useStore";
import { requestSuccessful } from "@/app/service/utils/Validations";
import { findCityIdByName } from "@/app/service/utils/addressUtilsService";
import { stateOptions } from "@/app/utils/form-options/addressFormOptions";
import { statesAcronymOptions } from "@/app/utils/form-options/statesIdOptions";
import { statusOptions } from "@/app/utils/form-options/statusOptions";
import SearchIcon from '@mui/icons-material/Search';
import { Breadcrumbs, Link, MenuItem, Snackbar, TextField, Typography } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import InputMask from "react-input-mask";
import { background } from "../../styles";
import NewInstallationButton from "../utils/buttons/NewInstallationButton";
import NewInstallationButtonConfirm from "../utils/buttons/NewInstallationButtonConfirm";
import { ButtonContainer, InstallationsMainContainer as Container, FormContentNewInstallation, HomeIconStyled, InstallationsMainContent, MainInstallationInfoContainer as MainInstallationInfo, MainTitleContainer, NewInstallationContent, SnackbarMessageAlert, SnackbarMessageNotification, TitleContainer, TitleIconsContainer } from "./styles";

export default function InstallationsMain() {

    const storeMainInstallation = useStoreMainInstallation()
    const storeInstallations = useStoreInstallations()
    const allInstallations = JSON.parse(localStorage.getItem('installations')) || storeInstallations.installations
    const installations = allInstallations.installations

    const [openForm, setOpenForm] = useState(false)
    const [isMainEdition, setIsMainEdition] = useState(false)
    const [isEdition, setIsEdition] = useState(false)
    const [installationCost, setInstallationCost] = useState()

    const [stateValue, setStateValue] = useState();

    const [validationErrors, setValidationErrors] = useState([])
    const [notifications, setNotifications] = useState([])

    const newInstallationRef = {
        address: useRef(null),
        addressNumber: useRef(null),
        zipCode: useRef(null),
        addressComplement: useRef(null),
        neighborhood: useRef(null),
        cost: useRef(null),
        state: useRef(null),
        city: useRef(null),
        installationNumber: useRef(null)
    }

    const getCEP = async () => {
        const cep = newInstallationRef.zipCode.current.value
        const url = `https://viacep.com.br/ws/${cep}/json/`

        try {
            const response = await axios.get(url);
            if (requestSuccessful(response.status)) {
                newInstallationRef.address.current.value = response?.data?.logradouro
                newInstallationRef.neighborhood.current.value = response?.data?.bairro
                newInstallationRef.zipCode.current.value = response?.data?.cep
                newInstallationRef.city.current.value = response?.data?.localidade
                newInstallationRef.state.current.value = response?.data?.uf

                const id = statesAcronymOptions[response.data.uf]
                setStateValue(stateOptions[id])

            }
        } catch (error) {
            console.error('Error fetching CEP data:', error);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const headers = {
            Authorization: `Bearer ${Cookies.get('accessToken')}`
        };

        const data = {
            endereco: newInstallationRef.address.current.value,
            numero: newInstallationRef.addressNumber.current.value,
            cep: newInstallationRef.zipCode.current.value,
            bairro: newInstallationRef.neighborhood.current.value,
            valor_base_consumo: parseFloat(newInstallationRef.cost.current.value.replace(",", ".")),
            numero_instalacao: newInstallationRef.installationNumber.current.value,

            cidade_id: await findCityIdByName(newInstallationRef.city.current.value, stateValue.cod_estados),
            estado_id: stateValue.cod_estados,
        }

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/add-uc`, data, { headers });
            if (requestSuccessful(response.status)) {
                const newInstallation = response.data
                // const otherInstallation = {
                //     uuid: installation?.uuid,
                //     address: installation?.endereco,
                //     neighborhood: installation?.bairro,
                //     number: installation?.numero,
                // }

                storeInstallations.addInstallation(otherInstallation);

            }
        } catch (error) {
            console.error('Error fetching CEP data:', error);
        }

        setOpenForm(false)

    }
    const handleChangeInstallationCost = (event) => {
        var newCost = event.target.value

        newCost = newCost.replace(/\D/g, '');

        const integerPart = newCost.slice(0, -2);
        const decimalPart = newCost.slice(-2);
        newCost = integerPart + ',' + decimalPart;

        setInstallationCost(newCost)
    }

    const handleEditInstallation = () => {
        setIsMainEdition(current => !current)
        setValidationErrors(["Ainda não é possível editar um Endereço cadastrado."])
    }

    const handleChangeState = (value) => {
        setStateValue(stateOptions[value])
    }

    useEffect(() => {
        const fetchInstallationsData = async () => {
            try {
                const headers = {
                    "Authorization": `Bearer ${Cookies.get('accessToken')}`
                };

                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/`, { headers });

                if (requestSuccessful(response?.status)) {
                    const { consumidor, instalacao } = response?.data
                    const outrasInstalacoes = response?.data?.outras_instalacoes

                    const updatedMainInstallation = {
                        id: instalacao?.id,
                        uuid: instalacao?.uuid,
                        address: instalacao?.nome,
                        street: instalacao?.nome,
                        number: instalacao?.numero,
                        cityId: instalacao?.cidade_id,
                        stateId: instalacao?.estado_id,
                        neighborhood: instalacao?.bairro,
                        complement: instalacao?.complemento,
                        zipCode: instalacao?.cep,
                        amount: instalacao?.valor_base_consumo,
                        dueDate: consumidor?.dia_fatura,
                        status: instalacao?.situacao,
                        installationNumber: instalacao?.numero_instalacao,

                        percentageAllocatedEnergy: instalacao?.porcentagem_energia_alocada,
                        kwhContracted: instalacao?.kwh_contratado,
                        discount: instalacao?.desconto,

                        clientId: instalacao?.clientes_id,
                        isSelected: instalacao?.selecionada,
                        status: instalacao?.status
                    }

                    storeMainInstallation.updateMainInstallation(updatedMainInstallation)
                    storeInstallations.addInstallation(updatedMainInstallation);

                    outrasInstalacoes?.forEach(installation => {
                        const otherInstallation = {
                            uuid: installation?.uuid,
                            address: installation?.endereco,
                            neighborhood: installation?.bairro,
                            number: installation?.numero,
                            zipCode: installation?.cep,
                            cityId: installation?.cidade_id,
                            stateId: installation?.estado_id,
                            status: installation?.situacao,
                            installationNumber: installation?.numero_instalacao,
                        }

                        storeInstallations.addInstallation(otherInstallation);
                    });

                } else {
                    console.error("Failed to fetch installations data");
                }
            } catch (error) {
                console.error("Error fetching installations data:", error);
            }
        };
        fetchInstallationsData();
    }, []);

    return (
        <Container>
            <MainTitleContainer>
                <Typography variant="h1">Meus Endereços</Typography>
                <Breadcrumbs aria-label="breadcrumb" separator={">"} style={{ padding: '1rem 1rem 0 0' }}>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/dashboard/"
                    >
                        Painel
                    </Link>
                    <Typography style={{ fontWeight: 'bold', color: background.orange }}>Meus Endereços</Typography>
                </Breadcrumbs>
            </MainTitleContainer>
            {installations?.length >= 1 ?
                (<>
                    {installations.map((installation, index) => {
                        return (
                            <InstallationsMainContent key={installation.address}>
                                <TitleContainer>
                                    <TitleIconsContainer>
                                        <HomeIconStyled />
                                        <Typography variant="h2">{`Meu Endereço ${index === 0 ? "Principal" : ""}`}</Typography>
                                    </TitleIconsContainer>
                                    <Typography variant="subititle1">{statusOptions[installation.status]}</Typography>
                                    {/* {installations.length > 1 && <IconButton onClick={() => handleDeleteInstallation(installation, index)}>
                                        <DeleteIcon className="deleteIcon" />
                                    </IconButton>} */}
                                </TitleContainer>
                                <MainInstallationInfo>
                                    <InputMask mask="99999-999" value={`${installation.zipCode || ""}`} disabled={index === 0 ? !isMainEdition : !isEdition}>
                                        {() => <TextField label="CEP"
                                            value={`${installation.zipCode || ""}`}
                                            disabled={index === 0 ? !isMainEdition : !isEdition}
                                            InputLabelProps={{ shrink: true }}
                                        />}
                                    </InputMask>
                                    <TextField
                                        label="Endereço"
                                        className="mainAddress"
                                        value={installation.address}
                                        disabled={index === 0 ? !isMainEdition : !isEdition}
                                        InputLabelProps={{ shrink: true }}

                                    />
                                    <TextField
                                        label="Estado"
                                        value={`${stateOptions[installation.stateId]?.nome}`}
                                        disabled={index === 0 ? !isMainEdition : !isEdition}
                                        InputLabelProps={{ shrink: true }}

                                    />
                                    <TextField
                                        label="Cidade"
                                        value={`${getCityName(installation.stateId, installation.cityId) || ""}`}
                                        disabled={index === 0 ? !isMainEdition : !isEdition}
                                        InputLabelProps={{ shrink: true }}

                                    />
                                    <TextField
                                        label="Bairro"
                                        value={`${installation.neighborhood}`}
                                        disabled={index === 0 ? !isMainEdition : !isEdition}
                                        InputLabelProps={{ shrink: true }}

                                    />
                                    <TextField
                                        label="Número de Instalação"
                                        value={`${installation.installationNumber ? installation.installationNumber : ""}`}
                                        disabled={index === 0 ? !isMainEdition : !isEdition}
                                        InputLabelProps={{ shrink: true }}

                                    />

                                </MainInstallationInfo>
                                <ButtonContainer>
                                    {index === 0 ? (
                                        <>
                                            {!isMainEdition && (
                                                <NewInstallationButton
                                                    text="Editar Endereço Principal"
                                                    onClick={() => handleEditInstallation()}
                                                />
                                            )}
                                            {isMainEdition && (
                                                <NewInstallationButton
                                                    text="Cancelar"
                                                    onClick={() => handleEditInstallation()}
                                                />
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            {!isEdition && (
                                                <NewInstallationButton
                                                    text="Editar Endereço"
                                                    onClick={() => setIsEdition(true)}
                                                />
                                            )}
                                            {isEdition && (
                                                <NewInstallationButton
                                                    text="Cancelar"
                                                    onClick={() => setIsEdition(false)}
                                                />
                                            )}
                                        </>
                                    )}
                                </ButtonContainer>
                            </InstallationsMainContent>
                        )
                    })}
                </>) :
                <>
                    <Typography variant="subtitle1" className="noInstallationRegistered">Não há endereços cadastrados</Typography>
                </>}

            <div style={{ margin: '0 auto' }}>
                {!openForm ? <NewInstallationButton text="Adicionar Novo Endereço" onClick={() => setOpenForm(true)} /> : null}
            </div>

            {openForm ?
                (
                    <>
                        <MainTitleContainer>
                            <Typography variant="h1">Novo Endereço</Typography>
                        </MainTitleContainer>
                        <NewInstallationContent>
                            <FormContentNewInstallation acceptCharset="UTF-8" method="POST" onSubmit={handleSubmit}>
                                <InputMask mask="99999-999">
                                    {() => <TextField
                                        className="formInput"
                                        inputRef={newInstallationRef.zipCode}
                                        label="CEP"
                                        variant="outlined"
                                        placeholder="CEP"
                                        type="text"
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{
                                            endAdornment: <SearchIcon
                                                sx={{ cursor: 'pointer' }}
                                                onClick={() => getCEP()} />,
                                        }} />}
                                </InputMask>

                                <TextField className="formInput" inputRef={newInstallationRef.cost} value={installationCost} onChange={(event) => handleChangeInstallationCost(event)} label="Custo Mensal em R$" variant="outlined" placeholder="Custo Mensal em R$" type="text" />

                                <TextField className="formInput" inputRef={newInstallationRef.address} label="Endereço" variant="outlined" placeholder="Endereço" type="text" InputLabelProps={{ shrink: true }} />
                                <InputMask mask="99999">
                                    {() => <TextField className="formInput" inputRef={newInstallationRef.addressNumber} label="Nº" variant="outlined" placeholder="Nº" type="text" />}
                                </InputMask>

                                <TextField className="formInput" inputRef={newInstallationRef.addressComplement} label="Complemento" variant="outlined" placeholder="Complemento" type="text" />
                                <TextField className="formInput" inputRef={newInstallationRef.neighborhood} label="Bairro" variant="outlined" placeholder="Bairro" type="text" InputLabelProps={{ shrink: true }} />

                                <TextField
                                    id="state"
                                    select
                                    value={stateValue ? stateValue.cod_estados : ''}
                                    onChange={(event) => handleChangeState(event.target.value)}
                                    label="Estado"
                                    placeholder="Estado"
                                    variant="outlined"
                                    className="formInput"
                                    InputLabelProps={{
                                        component: 'span',
                                    }}
                                    inputRef={newInstallationRef.state}
                                    required>
                                    {Object.values(stateOptions).map((state) => {
                                        return (
                                            <MenuItem key={state.cod_estados} value={state.cod_estados}>{state.sigla}</MenuItem>
                                        )
                                    })}
                                </TextField>

                                <TextField className="formInput" inputRef={newInstallationRef.city} label="Cidade" variant="outlined" placeholder="Cidade" type="text" InputLabelProps={{ shrink: true }} />

                                <TextField
                                    className="installationNumberField"
                                    inputRef={newInstallationRef.installationNumber} label="Número de Instalação" variant="outlined" placeholder="Número de Instalação" type="text" />
                                <ButtonContainer>
                                    <NewInstallationButton text="Cancelar" onClick={() => setOpenForm(false)} />
                                    <NewInstallationButtonConfirm text="Confirmar Novo Endereço" type="submit" />
                                </ButtonContainer>
                            </FormContentNewInstallation>
                        </NewInstallationContent>
                    </>
                ) : null}
            <>
                {validationErrors.map((error, index) => {
                    return (
                        <Snackbar
                            key={index}
                            open={validationErrors.length >= 1}
                            autoHideDuration={3000}
                            message={error}
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            onClose={() => setValidationErrors([])}>
                            <SnackbarMessageAlert
                                sx={{ marginBottom: `${index * 5}rem` }}
                                severity="error"
                                variant="filled"
                                onClose={() => setValidationErrors([])}
                            >
                                {error}
                            </SnackbarMessageAlert>
                        </Snackbar>
                    )
                })}
            </>
            <>
                {notifications.map((notification, index) => {
                    return (
                        <Snackbar
                            key={index}
                            open={notifications.length >= 1}
                            autoHideDuration={6000}
                            message={notification}
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            onClose={() => setNotifications([])}>
                            <SnackbarMessageNotification
                                sx={{ marginBottom: `${index * 5}rem` }}
                                severity="error"
                                variant="filled"
                                onClose={() => setNotifications([])}
                            >
                                {notification}
                            </SnackbarMessageNotification>
                        </Snackbar>
                    )
                })}
            </>
        </Container>
    );
}