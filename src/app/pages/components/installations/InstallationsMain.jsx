"use client"

import { useStoreInstallations } from "@/app/hooks/useStore";
import { requestSuccessful } from "@/app/service/utils/Validations";
import { findCityIdByName } from "@/app/service/utils/addressUtilsService";
import { stateOptions } from "@/app/utils/form-options/addressFormOptions";
import { statesAcronymOptions } from "@/app/utils/form-options/statesIdOptions";
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, MenuItem, TextField, Typography } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { useRef, useState } from "react";
import InputMask from "react-input-mask";
import NewInstallationButton from "../utils/buttons/NewInstallationButton";
import NewInstallationButtonConfirm from "../utils/buttons/NewInstallationButtonConfirm";
import { ButtonContainer, InstallationsMainContainer as Container, FormContentNewInstallation, HomeIconStyled, InstallationsMainContent, MainInstallationInfoContainer as MainInstallationInfo, NewInstallationContent, TitleContainer, TitleIconsContainer } from "./styles";

export default function InstallationsMain() {

    const storeInstallations = useStoreInstallations()
    const allInstallations = JSON.parse(localStorage.getItem('installations')) || storeInstallations.installations
    const installations = allInstallations.installations

    const [openForm, setOpenForm] = useState(false)
    const [isMainEdition, setIsMainEdition] = useState(false)
    const [isEdition, setIsEdition] = useState(false)
    const [installationCost, setInstallationCost] = useState()

    const [stateValue, setStateValue] = useState(null);

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
            console.log(response)
            if (requestSuccessful(response.status)) {
                newInstallationRef.address.current.value = response?.data.logradouro
                newInstallationRef.neighborhood.current.value = response?.data.bairro
                newInstallationRef.zipCode.current.value = response?.data.cep
                newInstallationRef.city.current.value = response?.data.localidade
                newInstallationRef.state.current.value = response?.data.uf

                setStateValue(stateOptions[(statesAcronymOptions[response?.data.uf])])

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
            valor_base_consumo: newInstallationRef.cost.current.value,
            numero_instalacao: newInstallationRef.installationNumber.current.value,

            cidade_id: await findCityIdByName(newInstallationRef.city.current.value, stateValue.cod_estados),
            estado_id: stateValue.cod_estados,
        }

        console.log("add installation data ===>>", data)
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/add-uc`, data, { headers });
            console.log("add installation response ===>>", response)
            console.log(response)
            if (requestSuccessful(response.status)) {
                // const otherInstallation = {
                //     uuid: installation?.uuid,
                //     address: installation?.endereco,
                //     neighborhood: installation?.bairro,
                //     number: installation?.numero,
                // }

                // storeInstallations.addInstallation(otherInstallation);

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
    // const handleDeleteInstallation = (installation, index) => {
    //     storeInstallations.deleteInstallation(index)
    // }
    const handleChangeState = (value) => {
        setStateValue(stateOptions[value])
    }

    return (
        <Container>
            <div style={{ marginLeft: '5rem' }}>
                <Typography variant="h1">Meus Endereços</Typography>
            </div>
            {installations.length >= 1 ?
                (<>
                    {installations.map((installation, index) => {
                        return (
                            <InstallationsMainContent key={installation.address}>
                                <TitleContainer>
                                    <TitleIconsContainer>
                                        <HomeIconStyled />
                                        <Typography variant="h2">{`Meu Endereço ${index === 0 ? "Principal" : ""}`}</Typography>
                                    </TitleIconsContainer>
                                    {/* {installations.length > 1 && <IconButton onClick={() => handleDeleteInstallation(installation, index)}>
                                        <DeleteIcon className="deleteIcon" />
                                    </IconButton>} */}
                                </TitleContainer>
                                <MainInstallationInfo>
                                    <TextField
                                        label="CEP"
                                        value={`${installation.zipCode}`}
                                        disabled={index === 0 ? !isMainEdition : !isEdition}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                    <TextField
                                        label="Endereço"
                                        className="mainAddress"
                                        value={installation.address}
                                        disabled={index === 0 ? !isMainEdition : !isEdition}
                                        InputLabelProps={{ shrink: true }}

                                    />
                                    <TextField
                                        label="Estado"
                                        value={`${installation.state}`}
                                        disabled={index === 0 ? !isMainEdition : !isEdition}
                                        InputLabelProps={{ shrink: true }}

                                    />
                                    <TextField
                                        label="Cidade"
                                        value={`${installation.city}`}
                                        disabled={index === 0 ? !isMainEdition : !isEdition}
                                        InputLabelProps={{ shrink: true }}

                                    />
                                    <TextField
                                        label="Bairro"
                                        value={`${installation.city}`}
                                        disabled={index === 0 ? !isMainEdition : !isEdition}
                                        InputLabelProps={{ shrink: true }}

                                    />
                                    <TextField
                                        label="Número de Instalação"
                                        value={`${installation.city}`}
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
                                                    onClick={() => setIsMainEdition(true)}
                                                />
                                            )}
                                            {isMainEdition && (
                                                <NewInstallationButton
                                                    text="Cancelar"
                                                    onClick={() => setIsMainEdition(false)}
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
                        <Typography variant="h1">Novo Endereço</Typography>
                        <NewInstallationContent>
                            <FormContentNewInstallation acceptCharset="UTF-8" method="POST" onSubmit={handleSubmit}>
                                <InputMask mask="99999-999">
                                    {() => <TextField className="formInput" inputRef={newInstallationRef.zipCode} label="CEP" variant="outlined" placeholder="CEP" type="text" InputLabelProps={{ shrink: true }}
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
        </Container>
    );
}