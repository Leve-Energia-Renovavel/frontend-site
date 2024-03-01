/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import FormButton from "@/app/pages/components/utils/buttons/FormButton";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Divider, MenuItem, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import InputMask from "react-input-mask";
import RegisterModal from "../../modals/installation-number-modal/InstallationNumberModal";
import RegisterFormProgress from "./RegisterFormProgress";
import RegisterFormTitle from "./RegisterFormTitle";
import { companySchema, userSchema } from "./schema";
import { FileUploadContainer, FileUploadItem, FormContainer, FormContent, FormHeader, FormLastRow, FormRow, fileInputStyles } from "./styles";
import { useStoreUser, useStoreAddress, useStoreCompany } from "@/app/hooks/useStore";
import { requestSuccessful } from "@/app/service/utils/Validations";
import { maritalStatusOptions, nationalityOptions, professionOptions } from "@/app/utils/form-options/formOptions";

export default function RegisterForm() {

    const store = useStoreUser()
    const storeAddress = useStoreAddress()
    const storeCompany = useStoreCompany()

    const router = useRouter()

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isForeigner, setIsForeigner] = useState(false);

    const [socialContractFile, setSocialContractFile] = useState(null);
    const [energyExtractFile, setEnergyExtractFile] = useState(null);
    const [validationErrors, setValidationErrors] = useState([]);

    const { username, email, phone, cep, companyName, cost } = store
    const { street, neighborhood, city, state } = storeAddress.address

    const company = storeCompany.company

    const isCompany = store.isCompany

    const params = useParams()
    const search = useSearchParams()

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

    const schemaValidation = (isCompany, data) => {
        if (isCompany) {
            companySchema.validate(data, { abortEarly: false })
                .then(() => {
                })
                .catch((err) => {
                    console.log(err.errors);
                    setValidationErrors(err.errors)
                });

        } else {
            userSchema.validate(data, { abortEarly: false })
                .then(() => {
                })
                .catch((err) => {
                    console.log(err.errors);
                    setValidationErrors(err.errors)
                });
        }
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
            }

        }

        schemaValidation(isCompany, data)

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

        store.setUsername(data.user.name)
        store.setEmail(data.user.email)
        store.setPhone(data.user.phone)

        router.push(`/register/contract-signature`)

    }

    useEffect(() => {
    }, [validationErrors])



    function formatPhoneNumber(phoneNumber) {
        const matches = phoneNumber.match(/^(\d{2})(\d{5})(\d{4})$/);
        if (matches) {
            return `(${matches[1]}) ${matches[2]}-${matches[3]}`;
        } else {
            return phoneNumber
        }
    };

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

            const company = response?.data?.estabelecimento

            storeCompany.updateCompany({
                name: company?.nome_fantasia,
                phone: company?.ddd1 + company?.telefone1,
                corporateReason: response?.data?.razao_social,
                cnpj: company?.cnpj,
            })

        } catch (error) {
            console.error('Error fetching CNPJ data:', error);
        }
    }

    const handleNationalityChange = (value) => {
        setIsForeigner(value === "estrangeiro");
    };

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
                            <TextField className="formInput" defaultValue={company.name || ''} inputRef={companyRefs.companyName} label="Nome da Empresa" variant="outlined" placeholder="Nome da Empresa" type="text" InputLabelProps={{ shrink: true }} required />
                            <TextField className="formInput" defaultValue={company.corporateReason || ''} inputRef={companyRefs.corporateReason} label="Razão Social" variant="outlined" placeholder="Razão Social" type="text" InputLabelProps={{ shrink: true }} required />
                            <InputMask mask="99.999.999/9999-99">
                                {() => <TextField className="formInput" inputRef={companyRefs.cnpj} label="CNPJ" variant="outlined" placeholder="CNPJ" type="text" required
                                    InputProps={{
                                        endAdornment: <SearchIcon
                                            sx={{ cursor: 'pointer' }}
                                            onClick={() => getCNPJ()} />,
                                    }} />}
                            </InputMask>
                            <TextField className="formInput" inputRef={companyRefs.responsibleName} defaultValue={username || ''} label="Nome Completo do Responsável" variant="outlined" placeholder="Nome Completo do Responsável" type="text" InputLabelProps={{ shrink: true }} required />
                            <TextField inputRef={companyRefs.companyEmail} defaultValue={email || ''} className="formInput" label="Email" variant="outlined" placeholder="Email" type="text" InputLabelProps={{ shrink: true }} required />
                            <InputMask mask="(99) 99999-9999" value={formatPhoneNumber(company.phone) || ""} onChange={(e) => storeCompany.updateCompany({ phone: e.target.value })}>
                                {() => <TextField sx={{ width: '300px' }} inputRef={companyRefs.companyPhone} className="formInput" label="Telefone do Responsável" variant="outlined" placeholder="Telefone do Responsável" type="text" InputLabelProps={{ shrink: true }} required />}
                            </InputMask>

                        </>
                    ) : (
                        <>
                            <FormRow>
                                <TextField inputRef={userRefs.name} defaultValue={username || ''} className="formInput" label="Nome Completo" variant="outlined" placeholder="Nome Completo" type="text" required InputLabelProps={{ shrink: true }} />
                                <TextField inputRef={userRefs.email} defaultValue={email || ''} className="formInput" label="Email" variant="outlined" placeholder="Email" type="text" required InputLabelProps={{ shrink: true }} />
                            </FormRow>

                            <InputMask mask="(99) 99999-9999" required value={formatPhoneNumber(phone) || ""} onChange={(e) => store.setPhone(e.target.value)}>
                                {() => <TextField
                                    inputRef={userRefs.phone} className="formInput" label="Celular" placeholder="Celular" variant="outlined" type="text" InputLabelProps={{ shrink: true }} required />}
                            </InputMask>
                            {isForeigner ?
                                <TextField inputRef={userRefs.rg} className="formInput" label="RNE" variant="outlined" placeholder="RNE" type="text" InputLabelProps={{ shrink: true }} required />
                                :
                                <InputMask mask="99999999-9" required>
                                    {() => <TextField inputRef={userRefs.rg} className="formInput" label="RG" variant="outlined" placeholder="RG" type="text" InputLabelProps={{ shrink: true }} required />}
                                </InputMask>}
                            <InputMask mask="999.999.999-99" required>
                                {() => <TextField inputRef={userRefs.cpf} className="formInput" label="CPF" variant="outlined" placeholder="CPF" type="text" InputLabelProps={{ shrink: true }} required />}
                            </InputMask>

                            <InputMask mask="99/99/9999" required>
                                {() => <TextField inputRef={userRefs.birthday} className="formInput" label="Data de Nascimento" variant="outlined" placeholder="Data de Nascimento" type="text" required />}
                            </InputMask>
                            <TextField
                                id="maritalStatus"
                                placeholder={"test"}
                                select
                                defaultValue={""}
                                label="Estado Civil"
                                className="formInput"
                                InputLabelProps={{
                                    component: 'span',
                                }}
                                inputRef={userRefs.maritalStatus || ''}>
                                {maritalStatusOptions.map((maritalStatus) => {
                                    return (
                                        <MenuItem key={maritalStatus.label} value={maritalStatus.value}>{maritalStatus.label}</MenuItem>
                                    )
                                })}
                            </TextField>

                            <TextField
                                id="nationality"
                                select
                                defaultValue={""}
                                inputRef={userRefs.nationality}
                                className="formInput"
                                label="Nacionalidade"
                                variant="outlined"
                                placeholder="Nacionalidade"
                                type="text"
                                onChange={(event) => handleNationalityChange(event.target.value)}
                                InputLabelProps={{
                                    component: 'span',
                                }}
                                required>
                                {nationalityOptions.map((nationality) => {
                                    return (
                                        <MenuItem key={nationality.label} value={nationality.value}>{nationality.label}</MenuItem>
                                    )
                                })}
                            </TextField>
                        </>

                    )}
                    <TextField
                        id="profession"
                        select
                        defaultValue={""}
                        inputRef={userRefs.profession}
                        className="formInput"
                        label="Profissão"
                        variant="outlined"
                        placeholder="Profissão"
                        InputLabelProps={{
                            component: 'span',
                        }}
                        type="text"
                        required>
                        {professionOptions.map((profession) => {
                            return (
                                <MenuItem key={profession.label} value={profession.value}>{profession.label}</MenuItem>
                            )
                        })}
                    </TextField>

                    <div style={{ margin: 'auto', }}>
                        <Divider sx={{ width: '107px', border: '1px solid #A0A0A0' }} />
                    </div>

                    <InputMask mask="99999-999" value={cep || ''} onChange={(e) => store.setCEP(e.target.value)}>
                        {() => <TextField className="formInput" inputRef={addressRefs.addressCep} label="CEP" variant="outlined" placeholder="CEP" type="text" InputLabelProps={{ shrink: true }} required />}
                    </InputMask>

                    <TextField className="formInput" defaultValue={street || ''} inputRef={addressRefs.address} label="Endereço" variant="outlined" placeholder="Endereço" type="text" InputLabelProps={{ shrink: true }} required />
                    <InputMask mask="99999">
                        {() => <TextField className="formInput" inputRef={addressRefs.addressNumber} label="Nº" variant="outlined" placeholder="Nº" type="text" required />}
                    </InputMask>

                    <TextField className="formInput" inputRef={addressRefs.addressComplement} label="Complemento" variant="outlined" placeholder="Complemento" type="text" />
                    <TextField className="formInput" defaultValue={neighborhood || ''} inputRef={addressRefs.neighborhood} label="Bairro" variant="outlined" placeholder="Bairro" type="text" InputLabelProps={{ shrink: true }} required />

                    <TextField className="formInput" defaultValue={state || ''} inputRef={addressRefs.state} label="Estado" variant="outlined" placeholder="Estado" type="text" InputLabelProps={{ shrink: true }} required />
                    <TextField className="formInput" defaultValue={city || ''} inputRef={addressRefs.city} label="Cidade" variant="outlined" placeholder="Cidade" type="text" InputLabelProps={{ shrink: true }} required />

                    <FormLastRow>
                        <TextField
                            className="installationNumberField"
                            inputRef={addressRefs.installationNumber} label="Número de Instalação" variant="outlined" placeholder="Número de Instalação" type="text" />
                        <Typography
                            className="linkInstallationNumberTutorial"
                            variant="body2" onClick={() => setIsModalOpen(true)}>Não encontrou o número? <a >Clique aqui para saber onde encontrá-lo.</a></Typography>
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

                    {/* {validationErrors.length >= 1 && (
                        <ValidationErrorsContainer>
                            <Typography>Erro nos campos:</Typography>
                            {validationErrors.map((error, index) => (
                                <p key={index}>- {error}</p>
                            ))}
                        </ValidationErrorsContainer>
                    )} */}

                    <Button onClick={() => router.push('/dashboard')}>Dashboard</Button>

                </FormContent>
                {isModalOpen && <RegisterModal isModalOpen={isModalOpen} closeModal={closeModal} distribuitor={"cemig"} />}
            </FormContainer >
        </>

    );
}