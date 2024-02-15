/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import FormButton from "@/app/pages/components/utils/buttons/FormButton";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Divider, MenuItem, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import InputMask from "react-input-mask";
import RegisterModal from "../../modal/Modal";
import RegisterFormProgress from "./RegisterFormProgress";
import RegisterFormTitle from "./RegisterFormTitle";
import { FileUploadContainer, FileUploadItem, FormContainer, FormContent, FormHeader, FormLastRow, FormRow, fileInputStyles } from "./styles";

export default function RegisterForm(props) {

    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [socialContractFile, setSocialContractFile] = useState(null);
    const [energyExtractFile, setEnergyExtractFile] = useState(null);

    const { email, cep, companyName, cost, browserInfo } = props.userData
    const name = props.userData?.nome
    const phone = props.userData?.telefone

    const isCompany = props.isCompany

    const userRefs = {
        name: useRef(null),
        rg: useRef(null),
        cpf: useRef(null),
        birthday: useRef(null),
        nationality: useRef(null),
        maritalStatus: useRef(null),
        profession: useRef(null),
        email: useRef(null),
        phone: useRef(null),

    };

    const companyRefs = {
        companyName: useRef(null),
        corporateReason: useRef(null),
        cnpj: useRef(null),
        responsibleName: useRef(null),
        companyEmail: useRef(null),
        companyPhone: useRef(null),

        socialContract: useRef(null),
        energyExtract: useRef(null),

    }

    const addressRefs = {
        address: useRef(null),
        addressNumber: useRef(null),
        addressCep: useRef(null),
        addressComplement: useRef(null),
        neighborhood: useRef(null),
        state: useRef(null),
        city: useRef(null),
        installationNumber: useRef(null)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        var data = {}
        if (isCompany) {
            data = {
                company: {
                    companyName: companyRefs.companyName.current.value,
                    corporateReason: companyRefs.corporateReason.current.value,
                    cnpj: companyRefs.cnpj.current.value,
                    responsibleName: companyRefs.responsibleName.current.value,
                    companyEmail: companyRefs.companyEmail.current.value,
                    companyPhone: companyRefs.companyPhone.current.value,
                },
                address: {
                    address: addressRefs.address.current.value,
                    addressNumber: addressRefs.addressNumber.current.value,
                    addressCep: addressRefs.addressCep.current.value,
                    addressComplement: addressRefs.addressComplement.current.value,
                    neighborhood: addressRefs.neighborhood.current.value,
                    state: addressRefs.state.current.value,
                    city: addressRefs.city.current.value,
                    installationNumber: addressRefs.installationNumber.current.value
                },

            }
        } else {
            data = {
                user: {
                    name: userRefs.name.current.value,
                    rg: userRefs.rg.current.value,
                    cpf: userRefs.cpf.current.value,
                    birthday: userRefs.birthday.current.value,
                    nationality: userRefs.nationality.current.value,
                    maritalStatus: userRefs.maritalStatus.current.value,
                    profession: userRefs.profession.current.value,
                    email: userRefs.email.current.value,
                    phone: userRefs.phone.current.value,
                },
                address: {
                    address: addressRefs.address.current.value,
                    addressNumber: addressRefs.addressNumber.current.value,
                    addressCep: addressRefs.addressCep.current.value,
                    addressComplement: addressRefs.addressComplement.current.value,
                    neighborhood: addressRefs.neighborhood.current.value,
                    state: addressRefs.state.current.value,
                    city: addressRefs.city.current.value,
                    installationNumber: addressRefs.installationNumber.current.value
                },
                browserInfo: browserInfo
            }

        }

        var submitData = {}
        if (isCompany) {
            submitData = {
                nome: companyRefs.companyName.current.value,
                email: companyRefs.companyEmail.current.value,
                telefone: companyRefs.companyPhone.current.value,
                cep: addressRefs.addressCep.current.value,
                endereco: addressRefs.address.current.value,
                numero: addressRefs.addressNumber.current.value,
                bairro: addressRefs.neighborhood.current.value,
                estado_id: "14",
                cidade_id: "2754",
                valor: cost
            }

        } else {
            submitData = {
                nome: userRefs.name.current.value,
                email: userRefs.email.current.value,
                telefone: userRefs.phone.current.value,
                cep: addressRefs.addressCep.current.value,
                endereco: addressRefs.address.current.value,
                numero: addressRefs.addressNumber.current.value,
                bairro: addressRefs.neighborhood.current.value,
                estado_id: "14",
                cidade_id: "2754",
                valor: cost
            }

        }

        console.log(data)
        // console.log(submitData)

        history.pushState(data, "");
        localStorage.setItem('leveLeadData', JSON.stringify(data));
        router.push(`/register/contract-signature`)

    }



    const statusIsSuccessful = (status) => {
        return status === 200
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://viacep.com.br/ws/${cep}/json/`
                await axios.get(url).then(response => {
                    if (statusIsSuccessful(response.status)) {
                        addressRefs.address.current.value = response.data.logradouro
                        addressRefs.neighborhood.current.value = response.data.bairro
                        addressRefs.addressCep.current.value = response.data.cep
                        addressRefs.city.current.value = response.data.localidade
                        addressRefs.state.current.value = response.data.uf

                    }
                })


            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [isModalOpen, socialContractFile, energyExtractFile]);


    const formatPhoneNumber = (phoneNumber) => {
        const match = phoneNumber.match(/^(\d{2})(\d{5})(\d{4})$/);
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        } else {
            return phoneNumber
        }
    };

    const formattedPhone = formatPhoneNumber(phone);

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleClickFiles = (fileType) => {
        companyRefs[fileType].current.click();
    };

    const handleChangeFiles = (event, fileType) => {
        console.log(event.target.files)
        const fileUploaded = event.target.files[0];
        if (fileType === 'socialContract') {
            setSocialContractFile(fileUploaded);
        } else if (fileType === 'energyExtract') {
            setEnergyExtractFile(fileUploaded);
        }
    };

    const handleDeleteFiles = (event, fileType) => {
        if (fileType === 'socialContract') {
            setSocialContractFile(null);
        } else if (fileType === 'energyExtract') {
            setEnergyExtractFile(null);
        }
    };

    async function getCNPJ() {
        const cnpj = companyRefs.cnpj.current.value.replace(/\D/g, '');

        try {
            const response = await axios.get(`https://publica.cnpj.ws/cnpj/${cnpj}`);
            console.log(response)
        } catch (error) {
            console.error('Error fetching CNPJ data:', error);
        }
    }

    return (
        <>
            <FormContainer>
                <FormHeader>
                    <RegisterFormTitle />
                    <RegisterFormProgress />
                </FormHeader>
                <FormContent acceptCharset="UTF-8" method="POST" onSubmit={handleSubmit}>
                    {isCompany ? (
                        <>
                            <TextField className="formInput" inputRef={companyRefs.companyName} defaultValue={companyName || ''} label="Nome da Empresa" variant="outlined" placeholder="Nome da Empresa" type="text" InputLabelProps={{ shrink: true }} />
                            <TextField className="formInput" inputRef={companyRefs.corporateReason} label="Razão Social" variant="outlined" placeholder="Razão Social" type="text" />
                            <InputMask mask="99.999.999/9999-99">
                                {() => <TextField className="formInput" inputRef={companyRefs.cnpj} label="CNPJ" variant="outlined" placeholder="CNPJ" type="text"
                                    InputProps={{
                                        endAdornment: <SearchIcon
                                            sx={{ cursor: 'pointer' }}
                                            onClick={() => getCNPJ()} />,
                                    }} />}
                            </InputMask>
                            <TextField className="formInput" inputRef={companyRefs.responsibleName} defaultValue={name || ''} label="Nome Completo do Responsável" variant="outlined" placeholder="Nome Completo do Responsável" type="text" InputLabelProps={{ shrink: true }} />
                            <TextField inputRef={companyRefs.companyEmail} defaultValue={email || ''} className="formInput" label="Email" variant="outlined" placeholder="Email" type="text" InputLabelProps={{ shrink: true }} />
                            <InputMask mask="(99) 99999-9999" value={formattedPhone || ''}>
                                {() => <TextField sx={{ width: '300px' }} inputRef={companyRefs.companyPhone} className="formInput" label="Telefone do Responsável" variant="outlined" placeholder="Telefone do Responsável" type="text" InputLabelProps={{ shrink: true }} />}
                            </InputMask>

                        </>
                    ) : (
                        <>
                            <FormRow>
                                <TextField inputRef={userRefs.name} defaultValue={name || ''} className="formInput" label="Nome Completo" variant="outlined" placeholder="Nome Completo" type="text" />
                                <TextField inputRef={userRefs.email} defaultValue={email || ''} className="formInput" label="Email" variant="outlined" placeholder="Email" type="text" />
                            </FormRow>

                            <InputMask mask="(99) 99999-9999" value={formattedPhone || ''}>
                                {() => <TextField
                                    inputRef={userRefs.phone} className="formInput" label="Celular" placeholder="Celular" variant="outlined" type="text" InputLabelProps={{ shrink: true }} />}
                            </InputMask>
                            <InputMask mask="99999999-9">
                                {() => <TextField inputRef={userRefs.rg} className="formInput" label="RG" variant="outlined" placeholder="RG" type="text" InputLabelProps={{ shrink: true }} />}
                            </InputMask>
                            <InputMask mask="999.999.999-99">
                                {() => <TextField inputRef={userRefs.cpf} className="formInput" label="CPF" variant="outlined" placeholder="CPF" type="text" InputLabelProps={{ shrink: true }} />}
                            </InputMask>

                            <InputMask mask="99/99/9999">
                                {() => <TextField inputRef={userRefs.birthday} className="formInput" label="Data de Nascimento" variant="outlined" placeholder="Data de Nascimento" type="text" />}
                            </InputMask>
                            <TextField
                                placeholder={"test"}
                                select
                                defaultValue={""}
                                label="Estado Civil"

                                className="formInput"
                                inputRef={userRefs.maritalStatus || ''}
                            >
                                <MenuItem value={"solteiro"}>Solteiro(a)</MenuItem>
                                <MenuItem value={"casado"}>Casado(a)</MenuItem>
                                <MenuItem value={"viuvo"}>Viúvo(a)</MenuItem>
                            </TextField>
                            <TextField select defaultValue={""} inputRef={userRefs.nationality} className="formInput" label="Nacionalidade" variant="outlined" placeholder="Nacionalidade" type="text">
                                <MenuItem value={"brasileiro"}>Brasileiro(a)</MenuItem>
                                <MenuItem value={"estrangeiro"}>Estrangeiro(a)</MenuItem>
                            </TextField>
                        </>

                    )}
                    <TextField select defaultValue={""} inputRef={userRefs.profession} className="formInput" label="Profissão" variant="outlined" placeholder="Profissão" type="text">
                        <MenuItem value={"autonomo"}>Autônomo(a)</MenuItem>
                        <MenuItem value={"assalariado"}>Assaláriado(a)</MenuItem>
                        <MenuItem value={"aposentado"}>Aposentado(a)</MenuItem>
                        <MenuItem value={"estudante"}>Estudante</MenuItem>
                    </TextField>

                    <div style={{ margin: 'auto', }}>
                        <Divider sx={{ width: '107px', border: '1px solid #A0A0A0' }} />
                    </div>

                    <InputMask mask="99999-999">
                        {() => <TextField className="formInput" inputRef={addressRefs.addressCep} defaultValue={cep || ''} label="CEP" variant="outlined" placeholder="CEP" type="text" InputLabelProps={{ shrink: true }} />}
                    </InputMask>

                    <TextField className="formInput" inputRef={addressRefs.address} label="Endereço" variant="outlined" placeholder="Endereço" type="text" InputLabelProps={{ shrink: true }} />
                    <TextField className="formInput" inputRef={addressRefs.addressNumber} label="Nº" variant="outlined" placeholder="Nº" type="text" />

                    <TextField className="formInput" inputRef={addressRefs.addressComplement} label="Complemento" variant="outlined" placeholder="Complemento" type="text" />
                    <TextField className="formInput" inputRef={addressRefs.neighborhood} label="Bairro" variant="outlined" placeholder="Bairro" type="text" InputLabelProps={{ shrink: true }} />

                    <TextField className="formInput" inputRef={addressRefs.state} label="Estado" variant="outlined" placeholder="Estado" type="text" InputLabelProps={{ shrink: true }} />
                    <TextField className="formInput" inputRef={addressRefs.city} label="Cidade" variant="outlined" placeholder="Cidade" type="text" InputLabelProps={{ shrink: true }} />



                    <FormLastRow>
                        <TextField sx={{
                            borderColor: '#0075FF',
                            '& label': {
                                color: '#0075FF',
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#0075FF',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#0075FF',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#0075FF',
                                },
                            },
                        }} inputRef={addressRefs.installationNumber} label="Número de Instalação" variant="outlined" placeholder="Número de Instalação" type="text" />
                        <Typography variant="body2" sx={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => setIsModalOpen(true)}>Não encontrou o número? <a >Clique aqui para saber onde encontrá-lo.</a></Typography>
                        <FormButton className="formInput" variant="outlined" type="submit" text="Continuar" />
                    </FormLastRow>

                    {isCompany ? (
                        <FileUploadContainer>
                            <FileUploadItem>
                                <Button
                                    startIcon={<FileUploadIcon />}
                                    onClick={() => handleClickFiles('socialContract')}>Enviar Contrato Social</Button>
                                <input
                                    type="file"
                                    onChange={(event) => handleChangeFiles(event, 'socialContract')}
                                    ref={companyRefs.socialContract}
                                    style={{ display: 'none' }} />
                                {socialContractFile && (
                                    <>
                                        <p>{socialContractFile.name}</p>
                                        <button
                                            style={fileInputStyles}
                                            onClick={(event) => handleDeleteFiles(event, 'socialContract')}>x</button>
                                    </>
                                )}
                            </FileUploadItem>

                            <FileUploadItem>
                                <Button
                                    startIcon={<FileUploadIcon />}
                                    onClick={() => handleClickFiles('energyExtract')}>Enviar Fatura de Energia</Button>
                                <input
                                    type="file"
                                    onChange={(event) => handleChangeFiles(event, 'energyExtract')}
                                    ref={companyRefs.energyExtract}
                                    style={{ display: 'none' }} />
                                {energyExtractFile && (
                                    <>
                                        <p>{energyExtractFile.name}</p>
                                        <button
                                            style={fileInputStyles}
                                            onClick={(event) => handleDeleteFiles(event, 'energyExtract')}>x</button>
                                    </>
                                )}
                            </FileUploadItem>
                        </FileUploadContainer>
                    ) : null}

                </FormContent>
                {isModalOpen && <RegisterModal isModalOpen={isModalOpen} closeModal={closeModal} distribuitor={"cemig"} />}
            </FormContainer >
        </>

    );
}