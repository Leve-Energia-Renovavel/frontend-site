/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreAddress, useStoreCompany, useStoreUser } from "@/app/hooks/useStore";
import useGetCEP from '@/app/hooks/utils/useGetCEP';
import useGetCNPJ from "@/app/hooks/utils/useGetCNPJ";
import FormButton from "@/app/pages/components/utils/buttons/FormButton";
import { signUp } from "@/app/service/user-service/UserService";
import { hasToSignContract, requestSuccessful } from "@/app/service/utils/Validations";
import { stateOptions } from "@/app/utils/form-options/addressFormOptions";
import { maritalStatusOptions, nationalityOptions, professionOptions } from "@/app/utils/form-options/formOptions";
import formatPhoneNumber from "@/app/utils/formatters/phoneFormatter";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Divider, MenuItem, Snackbar, TextField, Typography } from "@mui/material";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import InputMask from "react-input-mask";
import RegisterModal from "../../modals/installation-number-modal/InstallationNumberModal";
import RegisterFormProgress from "./RegisterFormProgress";
import RegisterFormTitle from "./RegisterFormTitle";
import { companySchema, userSchema } from "./schema";
import { FileUploadContainer, FileUploadItem, FormContainer, FormContent, FormHeader, FormLastRow, FormRow, SnackbarMessageAlert, fileInputStyles } from "./styles";

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

    const { name, email, phone, cep, companyName, cost } = store.user
    const { street, neighborhood, city, state, stateId, cityId } = storeAddress.address

    const [stateValue, setStateValue] = useState(stateOptions[stateId] || null);

    const company = storeCompany.company
    const isCompany = store.user.isCompany

    const params = useParams()
    const search = useSearchParams()

    const fetchCEP = useGetCEP();
    const fetchCNPJ = useGetCNPJ();

    const userRefs = {
        name: useRef(null),
        rg: useRef(null),
        cpf: useRef(null),
        birthDate: useRef(null),
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
        complement: useRef(null),
        neighborhood: useRef(null),
        state: useRef(null),
        city: useRef(null),
        installationNumber: useRef(null)
    }

    const schemaValidation = async (isCompany, data) => {
        var response = null
        if (isCompany) {
            response = await companySchema.validate(data, { abortEarly: false })
                .then(() => {

                })
                .catch((err) => {
                    console.log(err.errors);
                    setValidationErrors(err.errors)
                });

        } else {
            response = await userSchema.validate(data, { abortEarly: false })
                .then(async () => {
                    return await signUp(data)

                })
                .catch((err) => {
                    console.log(err.errors);
                    setValidationErrors(err.errors)
                    return err.errors
                });
        }

        return response

    }



    const handleSubmit = async (event) => {
        event.preventDefault()

        const submitData = {
            uuid: store.user.uuid,
            nome: userRefs.name.current.value,
            email: userRefs.email.current.value,
            telefone: userRefs.phone.current.value,
            cep: addressRefs.addressCep.current.value,
            endereco: addressRefs.address.current.value,
            numero: parseFloat(addressRefs.addressNumber.current.value.replace(/[^0-9.]/g, "")),
            bairro: addressRefs.neighborhood.current.value,
            complemento: addressRefs.complement.current.value,
            estado_id: storeAddress.address.stateId,
            cidade_id: storeAddress.address.cityId,
            valor: cost,
            rg: userRefs.rg.current.value,
            data_nascimento: userRefs.birthDate.current.value,
            nacionalidade: userRefs.nationality.current.value,
            profissao: userRefs.profession.current.value,
            estado_civil: userRefs.maritalStatus.current.value,
            cpf: userRefs.cpf.current.value,
            numero_instalacao: addressRefs.installationNumber.current.value
        }

        const response = await schemaValidation(isCompany, submitData)

        if (requestSuccessful(response) || hasToSignContract(response?.data?.message)) {
            console.log("Data successfully saved!")

            store.updateUser({
                birthDate: submitData.data_nascimento,
                rg: submitData.rg,
                cpf: submitData.cpf,
                maritalStatus: submitData.estado_civil,
                profession: submitData.profissao,
                nationality: submitData.nacionalidade,
            });

            storeAddress.updateAddress({
                street: submitData.endereco,
                number: submitData.numero,
                neighborhood: submitData.bairro,
                city: addressRefs.city.current.value,
                state: addressRefs.state.current.value,
                cep: submitData.cep,
                installationNumber: submitData.numero_instalacao,

            })

            router.push(`/register/contract-signature`)
        }

    }

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



    const handleNationalityChange = (value) => {
        setIsForeigner(value === "estrangeira");
    };

    useEffect(() => {
        setStateValue(stateOptions[stateId] || null)
    }, [storeAddress])


    const handleChangeState = (value) => {
        setStateValue(stateOptions[value])
        addressRefs.address.current.value = ""
        addressRefs.addressNumber.current.value = ""
        addressRefs.addressCep.current.value = ""
        addressRefs.complement.current.value = ""
        addressRefs.city.current.value = ""

        storeAddress.updateAddress({ stateId: value })
        store.updateUser({ cep: "" })
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
                            <TextField className="formInput" defaultValue={company.name || ''} inputRef={companyRefs.companyName} label="Nome da Empresa" variant="outlined" placeholder="Nome da Empresa" type="text" InputLabelProps={{ shrink: true }} required />
                            <TextField className="formInput" defaultValue={company.corporateReason || ''} inputRef={companyRefs.corporateReason} label="Razão Social" variant="outlined" placeholder="Razão Social" type="text" InputLabelProps={{ shrink: true }} required />
                            <InputMask mask="99.999.999/9999-99">
                                {() => <TextField className="formInput" inputRef={companyRefs.cnpj} label="CNPJ" variant="outlined" placeholder="CNPJ" type="text" required
                                    InputProps={{
                                        endAdornment: <SearchIcon
                                            sx={{ cursor: 'pointer' }}
                                            onClick={() => fetchCNPJ(companyRefs.cnpj.current.value)} />,
                                    }} />}
                            </InputMask>
                            <TextField className="formInput" inputRef={companyRefs.responsibleName} defaultValue={name || ''} label="Nome Completo do Responsável" variant="outlined" placeholder="Nome Completo do Responsável" type="text" InputLabelProps={{ shrink: true }} required />
                            <TextField inputRef={companyRefs.companyEmail} defaultValue={email || ''} className="formInput" label="Email" variant="outlined" placeholder="Email" type="text" InputLabelProps={{ shrink: true }} required />
                            <InputMask mask="(99) 99999-9999" value={formatPhoneNumber(company.phone) || ""} onChange={(e) => storeCompany.updateCompany({ phone: e.target.value })}>
                                {() => <TextField sx={{ width: '300px' }} inputRef={companyRefs.companyPhone} className="formInput" label="Telefone do Responsável" variant="outlined" placeholder="Telefone do Responsável" type="text" InputLabelProps={{ shrink: true }} required />}
                            </InputMask>

                        </>
                    ) : (
                        <>
                            <FormRow>
                                <TextField inputRef={userRefs.name} defaultValue={name || ''} className="formInput" label="Nome Completo" variant="outlined" placeholder="Nome Completo" type="text" required InputLabelProps={{ shrink: true }} />
                                <TextField inputRef={userRefs.email} defaultValue={email || ''} className="formInput" label="Email" variant="outlined" placeholder="Email" type="text" required InputLabelProps={{ shrink: true }} />
                            </FormRow>

                            <InputMask mask="(99) 99999-9999" required value={formatPhoneNumber(phone) || ""} onChange={(e) => store.updateUser({ phone: e.target.value })}>
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
                                {() => <TextField inputRef={userRefs.birthDate} className="formInput" label="Data de Nascimento" variant="outlined" placeholder="Data de Nascimento" type="text" required />}
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
                                {maritalStatusOptions?.map((maritalStatus) => {
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
                                {nationalityOptions?.map((nationality) => {
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
                        {professionOptions?.map((profession) => {
                            return (
                                <MenuItem key={profession.label} value={profession.value}>{profession.label}</MenuItem>
                            )
                        })}
                    </TextField>

                    <div style={{ margin: 'auto', }}>
                        <Divider sx={{ width: '107px', border: '1px solid #A0A0A0' }} />
                    </div>

                    <InputMask mask="99999-999"
                        value={cep || ''}
                        onChange={(e) => store.updateUser({ cep: e.target.value })}>
                        {() => <TextField
                            className="formInput"
                            inputRef={addressRefs.addressCep}
                            label="CEP"
                            variant="outlined"
                            placeholder="CEP"
                            type="text"
                            InputLabelProps={{ shrink: true }}
                            InputProps={{
                                endAdornment: <SearchIcon
                                    sx={{ cursor: 'pointer' }}
                                    onClick={() => fetchCEP(addressRefs.addressCep.current.value)} />,
                            }} required />}
                    </InputMask>

                    <TextField className="formInput" defaultValue={street || ''} inputRef={addressRefs.address} label="Endereço" variant="outlined" placeholder="Endereço" type="text" InputLabelProps={{ shrink: true }} required />
                    <InputMask mask="99999">
                        {() => <TextField className="formInput" inputRef={addressRefs.addressNumber} label="Nº" variant="outlined" placeholder="Nº" type="text" required />}
                    </InputMask>

                    <TextField className="formInput" inputRef={addressRefs.complement} label="Complemento" variant="outlined" placeholder="Complemento" type="text" />
                    <TextField className="formInput" defaultValue={neighborhood || ''} inputRef={addressRefs.neighborhood} label="Bairro" variant="outlined" placeholder="Bairro" type="text" InputLabelProps={{ shrink: true }} required />

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
                        inputRef={addressRefs.state}
                        required>
                        {Object.values(stateOptions).map((state) => {
                            return (
                                <MenuItem key={state.cod_estados} value={state.cod_estados}>{state.sigla}</MenuItem>
                            )
                        })}
                    </TextField>

                    <TextField className="formInput" defaultValue={city.toUpperCase() || ''} inputRef={addressRefs.city} label="Cidade" variant="outlined" placeholder="Cidade" type="text" InputLabelProps={{ shrink: true }} required />

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

                    {/* <Button onClick={() => router.push('/dashboard')}>Dashboard</Button> */}
                    <Button onClick={() => console.log(storeAddress.address)}>STATE</Button>

                </FormContent>
                {isModalOpen && <RegisterModal isModalOpen={isModalOpen} closeModal={closeModal} distribuitor={"cemig"} />}
            </FormContainer >
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
        </>

    );
}