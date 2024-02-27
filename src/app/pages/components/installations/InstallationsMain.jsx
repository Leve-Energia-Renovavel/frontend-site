"use client"

import { TextField, Typography } from "@mui/material";
import { useState } from "react";
import NewInstallationButton from "../utils/buttons/NewInstallationButton";
import { ButtonContainer, InstallationsMainContainer as Container, HomeIconStyled, InstallationsMainContent, MainInstallationInfoContainer as MainInstallationInfo, NewInstallationContent, TitleContainer } from "./styles";
import { useRouter } from "next/navigation";
import FormButton from "../utils/buttons/FormButton";
import InputMask from "react-input-mask";
import { FormContent } from "@/app/register/forms/register-form/styles";
import SearchIcon from '@mui/icons-material/Search';
import { useRef } from "react";
import axios from "axios";

export default function InstallationsMain() {


    const router = useRouter()
    const newInstallationCEPRef = useRef(null)

    const [openForm, setOpenForm] = useState(false)

    const [installation, setInstallation] = useState({
        address: "Alameda José de Oliveira Guimarães 563 casa 23.",
        city: "Uberlândia",
        state: "MG",
        zipCode: "38412324",
        amount: 80.75,
        dueDate: "05/02/2024",
        status: "pendente",
    });

    const newInstallationRef = {
        address: useRef(null),
        addressNumber: useRef(null),
        addressCep: useRef(null),
        addressComplement: useRef(null),
        neighborhood: useRef(null),
        state: useRef(null),
        city: useRef(null),
        installationNumber: useRef(null)
    }

    const getCEP = async () => {
        const cep = newInstallationCEPRef.current.value
        console.log("cep ===>>>", cep)
        const url = `https://viacep.com.br/ws/${cep}/json/`

        try {
            const response = await axios.get(url);
            console.log(response)
            if (response.status === 200) {
                newInstallationRef.address.current.value = response.data.logradouro
                newInstallationRef.neighborhood.current.value = response.data.bairro
                newInstallationRef.addressCep.current.value = response.data.cep
                newInstallationRef.city.current.value = response.data.localidade
                newInstallationRef.state.current.value = response.data.uf

            }
        } catch (error) {
            console.error('Error fetching CEP data:', error);
        }
    }

    const handleSubmit = () => {
        console.log("InstallationsMain handleSubmit")
    }

    return (
        <Container>
            <Typography variant="h1">Meus Endereços</Typography>
            <InstallationsMainContent>
                <TitleContainer>
                    <HomeIconStyled />
                    <Typography variant="h2">Meu Endereço Selecionado</Typography>
                </TitleContainer>
                <MainInstallationInfo>
                    <Typography variant="h3" className="mainAddress">{installation.address}</Typography>
                    <Typography variant="h3">{installation.city} - {installation.state}</Typography>
                    <Typography variant="h3">CEP: {installation.zipCode}</Typography>
                </MainInstallationInfo>
                <ButtonContainer>
                    <NewInstallationButton text="Editar Endereço" onClick={() => router.push("/profile")} />
                    <NewInstallationButton text="Adicionar Novo Endereço" onClick={() => setOpenForm(true)} />
                </ButtonContainer>
            </InstallationsMainContent>
            {openForm ?
                (
                    <>
                        <Typography variant="h1">Novo Endereço</Typography>
                        <NewInstallationContent>
                            <FormContent acceptCharset="UTF-8" method="POST" onSubmit={handleSubmit}>
                                <InputMask mask="99999-999">
                                    {() => <TextField className="formInput" inputRef={newInstallationCEPRef} label="CEP" variant="outlined" placeholder="CEP" type="text" InputLabelProps={{ shrink: true }}
                                        InputProps={{
                                            endAdornment: <SearchIcon
                                                sx={{ cursor: 'pointer' }}
                                                onClick={() => getCEP()} />,
                                        }} />}
                                </InputMask>

                                <TextField className="formInput" inputRef={newInstallationRef.address} label="Endereço" variant="outlined" placeholder="Endereço" type="text" InputLabelProps={{ shrink: true }} />
                                <InputMask mask="99999">
                                    {() => <TextField className="formInput" label="Nº" variant="outlined" placeholder="Nº" type="text" />}
                                </InputMask>

                                <TextField className="formInput" inputRef={newInstallationRef.addressComplement} label="Complemento" variant="outlined" placeholder="Complemento" type="text" />
                                <TextField className="formInput" inputRef={newInstallationRef.neighborhood} label="Bairro" variant="outlined" placeholder="Bairro" type="text" InputLabelProps={{ shrink: true }} />

                                <TextField className="formInput" inputRef={newInstallationRef.state} label="Estado" variant="outlined" placeholder="Estado" type="text" InputLabelProps={{ shrink: true }} />
                                <TextField className="formInput" inputRef={newInstallationRef.city} label="Cidade" variant="outlined" placeholder="Cidade" type="text" InputLabelProps={{ shrink: true }} />


                            </FormContent>
                            <ButtonContainer>
                                <NewInstallationButton text="Cancelar" onClick={() => setOpenForm(false)} />
                                <FormButton text="Confirmar Novo Endereço" />
                            </ButtonContainer>
                        </NewInstallationContent>
                    </>
                ) : null}
        </Container>
    );
}