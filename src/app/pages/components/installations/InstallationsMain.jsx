"use client"

import { useStoreInstallations, useStoreMainInstallation } from "@/app/hooks/useStore";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import InputMask from "react-input-mask";
import FormButton from "../utils/buttons/FormButton";
import NewInstallationButton from "../utils/buttons/NewInstallationButton";
import { ButtonContainer, InstallationsMainContainer as Container, FormContentNewInstallation, HomeIconStyled, InstallationsMainContent, InstallationsTitleContainer, MainInstallationInfoContainer as MainInstallationInfo, NewInstallationContent, TitleContainer, TitleIconsContainer } from "./styles";
import NewInstallationButtonConfirm from "../utils/buttons/NewInstallationButtonConfirm";
import DeleteIcon from '@mui/icons-material/Delete';

export default function InstallationsMain() {


    const router = useRouter()

    const storeInstallations = useStoreInstallations()
    const installations = useStoreInstallations().installations
    const mainInstallation = useStoreMainInstallation().mainInstallation

    const [openForm, setOpenForm] = useState(false)
    const [installationCost, setInstallationCost] = useState()

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
            if (response.status === 200) {
                newInstallationRef.address.current.value = response.data.logradouro
                newInstallationRef.neighborhood.current.value = response.data.bairro
                newInstallationRef.zipCode.current.value = response.data.cep
                newInstallationRef.city.current.value = response.data.localidade
                newInstallationRef.state.current.value = response.data.uf

            }
        } catch (error) {
            console.error('Error fetching CEP data:', error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = {
            address: newInstallationRef.address.current.value,
            addressNumber: newInstallationRef.addressNumber.current.value,
            zipCode: newInstallationRef.zipCode.current.value,
            addressComplement: newInstallationRef.addressComplement.current.value,
            neighborhood: newInstallationRef.neighborhood.current.value,
            state: newInstallationRef.state.current.value,
            city: newInstallationRef.city.current.value,
            cost: newInstallationRef.cost.current.value,
            installationNumber: newInstallationRef.installationNumber.current.value
        }

        storeInstallations.addInstallation(data);
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
    const handleDeleteInstallation = (installation, index) => {
        storeInstallations.deleteInstallation(index)
    }

    return (
        <Container>
            <Typography variant="h1">Meus Endereços</Typography>
            {installations.map((installation, index) => {
                return (
                    <InstallationsMainContent key={installation.address}>
                        <TitleContainer>
                            <TitleIconsContainer>
                                <HomeIconStyled />
                                <Typography variant="h2">Meu Endereço</Typography>
                            </TitleIconsContainer>
                            {installations.length > 1 && <IconButton onClick={() => handleDeleteInstallation(installation, index)}>
                                <DeleteIcon className="deleteIcon" />
                            </IconButton>}
                        </TitleContainer>
                        <MainInstallationInfo>
                            <Typography variant="h3" className="mainAddress">{installation.address}</Typography>
                            <Typography variant="h3">{installation.city} - {installation.state}</Typography>
                            <Typography variant="h3">CEP: {installation.zipCode}</Typography>
                        </MainInstallationInfo>
                        <ButtonContainer>
                            <NewInstallationButton text="Editar Endereço" onClick={() => router.push("/profile")} />
                            {!openForm ? <NewInstallationButton text="Adicionar Novo Endereço" onClick={() => setOpenForm(true)} /> : null}
                        </ButtonContainer>
                    </InstallationsMainContent>
                )
            })}

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

                                <TextField className="formInput" inputRef={newInstallationRef.state} label="Estado" variant="outlined" placeholder="Estado" type="text" InputLabelProps={{ shrink: true }} />
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