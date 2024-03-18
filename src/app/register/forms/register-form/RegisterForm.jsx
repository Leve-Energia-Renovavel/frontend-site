/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreAddress, useStoreCompany, useStoreCookies, useStoreUser } from "@/app/hooks/useStore";
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
import { Box, Button, CircularProgress, Divider, MenuItem, Snackbar, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import InputMask from "react-input-mask";
import RegisterModal from "../../modals/installation-number-modal/InstallationNumberModal";
import RegisterFormProgress from "./RegisterFormProgress";
import RegisterFormTitle from "./RegisterFormTitle";
import { companySchema, userSchema } from "./schema";
import { FileUploadContainer, FileUploadItem, FormContainer, FormContent, FormHeader, FormLastRow, FormRow, SnackbarMessageAlert, SnackbarMessageNotification, fileInputStyles } from "./styles";
import { allCities } from "@/app/utils/form-options/citiesOptions";
import { FixedSizeList as List } from 'react-window';
import Cookies from "js-cookie";
import { statesAcronymOptions } from "@/app/utils/form-options/statesIdOptions";

export default function RegisterForm() {

    const store = useStoreUser()
    const storeAddress = useStoreAddress()
    const storeCompany = useStoreCompany()
    const { hasDataCookies, setDataCookies } = useStoreCookies();

    const router = useRouter()

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isForeigner, setIsForeigner] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [socialContractFile, setSocialContractFile] = useState(null);
    const [energyExtractFile, setEnergyExtractFile] = useState(null);
    const [validationErrors, setValidationErrors] = useState([]);
    const [notifications, setNotifications] = useState([])

    const uuid = store.user.uuid || Cookies.get('leveUUID')

    const user = JSON.parse(localStorage.getItem('user')) || store.user

    const isCompany = user.user.isCompany

    const { name, email, phone, companyName, cost, distributor } = user.user

    const { street, neighborhood, city, state, stateId, cityId, cep } = storeAddress.address
    const company = useStoreCompany().company

    const [userCost, setUserCost] = useState(cost || null)
    const [stateValue, setStateValue] = useState(stateOptions[stateId] || stateOptions[(statesAcronymOptions[state])] || null);

    const meuID = stateValue?.cod_estados || 26

    const allCitiesByState = allCities.filter(city => city.hasOwnProperty(meuID)).map(city => city[meuID]);

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
        cost: useRef(null),
    };

    const companyRefs = {
        razao_social: useRef(null),
        cnpj: useRef(null),
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
                .then(async () => {
                    return await signUp(data)

                })
                .catch((err) => {
                    console.log(err.errors);
                    return err.errors
                });

        } else {
            response = await userSchema.validate(data, { abortEarly: false })
                .then(async () => {
                    return await signUp(data)

                })
                .catch((err) => {
                    console.log(err.errors);
                    return err.errors
                });
        }
        return response
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)

        var submitData = {
            uuid: uuid,
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
            valor: parseInt(userRefs.cost.current.value.replace(/[^0-9]/g, ""), 10) / 100,
            rg: userRefs.rg.current.value,
            data_nascimento: userRefs.birthDate.current.value,
            nacionalidade: userRefs.nationality.current.value,
            profissao: userRefs.profession.current.value,
            estado_civil: userRefs.maritalStatus.current.value,
            cpf: userRefs.cpf.current.value,
            numero_instalacao: addressRefs.installationNumber.current.value
        }
        if (isCompany) {
            submitData["razao_social"] = companyRefs.razao_social.current.value
            submitData["cnpj"] = companyRefs.cnpj.current.value
        }

        setDataCookies();

        const response = await schemaValidation(isCompany, submitData)
        console.log("registerForm response ==>>", response)

        if (requestSuccessful(response.status) || hasToSignContract(response?.data?.message)) {
            console.log("Data successfully saved!")

            store.updateUser({
                birthDate: submitData.data_nascimento,
                rg: submitData.rg,
                cpf: submitData.cpf,
                maritalStatus: submitData.estado_civil,
                profession: submitData.profissao,
                nationality: submitData.nacionalidade,
            });

            const updatedAddress = {
                street: submitData.endereco,
                number: submitData.numero,
                neighborhood: submitData.bairro,
                city: addressRefs.city.current.value,
                state: addressRefs.state.current.value,
                cep: submitData.cep,
                installationNumber: submitData.numero_instalacao,
            }

            storeAddress.updateAddress(updatedAddress)

            router.push(`/register/contract-signature`)
        } else {
            setValidationErrors([response?.response?.data?.message])
        }

        setIsLoading(false)

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
        setStateValue(stateOptions[stateId] || stateOptions[(statesAcronymOptions[state])] || null)
    }, [storeAddress, hasDataCookies])


    const handleChangeState = (value) => {
        setStateValue(stateOptions[value])
        // addressRefs.address.current.value = ""
        // addressRefs.addressNumber.current.value = ""
        // addressRefs.addressCep.current.value = ""
        // addressRefs.neighborhood.current.value = ""
        // addressRefs.complement.current.value = ""
        // addressRefs.city.current.value = ""

        // storeAddress.updateAddress({ stateId: value, cep: "", neighborhood: "" })
    }
    const handleChangeUserCost = (event) => {
        var newCost = event.target.value

        newCost = newCost.replace(/\D/g, '');

        const integerPart = newCost.slice(0, -2);
        const decimalPart = newCost.slice(-2);
        newCost = integerPart + ',' + decimalPart;

        setUserCost(newCost)
    }

    const Row = ({ index, style }) => {
        const city = allCitiesByState[0][index];
        const cityValue = Object.values(city)[0];

        return (
            <div style={style}>
                <MenuItem key={cityValue.cod_cidades} value={cityValue.cod_cidades}>
                    {cityValue.nome}
                </MenuItem>
            </div>
        );
    };

    return (
        <>
            <FormContainer isCompany={isCompany}>
                <FormHeader>
                    <RegisterFormTitle />
                    <RegisterFormProgress />
                </FormHeader>
                <FormContent acceptCharset="UTF-8" method="POST" onSubmit={handleSubmit}>
                    {isCompany && (
                        <FormRow suppressHydrationWarning={true}>
                            <TextField className="formInput" defaultValue={company.razao_social || ''} inputRef={companyRefs.razao_social} label="Razão Social" variant="outlined" placeholder="Razão Social" type="text" InputLabelProps={{ shrink: true }} required />
                            <InputMask mask="99.999.999/9999-99">
                                {() => <TextField className="formInput" inputRef={companyRefs.cnpj} label="CNPJ" variant="outlined" placeholder="CNPJ" type="text" required
                                    InputProps={{
                                        endAdornment: <SearchIcon
                                            sx={{ cursor: 'pointer' }}
                                            onClick={() => fetchCNPJ(companyRefs.cnpj.current.value)} />,
                                    }} />}
                            </InputMask>
                        </FormRow>)}
                    <FormRow>
                        <TextField
                            className="formInput"
                            inputRef={userRefs.name}
                            defaultValue={name || ''}
                            label={`Nome Completo ${isCompany ? 'do Responsável' : ''}`}
                            variant="outlined"
                            placeholder={`Nome Completo ${isCompany ? 'do Responsável' : ''}`}
                            type="text"
                            InputLabelProps={{ shrink: true }}
                            required
                        />
                        <TextField
                            inputRef={userRefs.email}
                            defaultValue={email || ''}
                            className="formInput"
                            label={`Email ${isCompany ? 'do Responsável' : ''}`}
                            variant="outlined"
                            placeholder={`Email ${isCompany ? 'do Responsável' : ''}`}
                            type="text"
                            InputLabelProps={{ shrink: true }}
                            required
                        />
                    </FormRow>

                    <InputMask mask="(99) 99999-9999" value={formatPhoneNumber(phone) || ""} onChange={(e) => storeCompany.updateCompany({ phone: e.target.value })}>
                        {() => (
                            <TextField
                                inputRef={userRefs.phone}
                                className="formInput"
                                label={`Telefone ${isCompany ? 'do Responsável' : ''}`}
                                variant="outlined"
                                placeholder={`Telefone ${isCompany ? 'do Responsável' : ''}`}
                                type="text"
                                InputLabelProps={{ shrink: true }}
                                required
                            />
                        )}
                    </InputMask>
                    {isForeigner ?
                        (<InputMask mask="*******-*" required >
                            {() => <TextField inputRef={userRefs.rg} className="formInput" label="RNE" variant="outlined" placeholder="RNE" type="text" InputLabelProps={{ shrink: true }} required />}
                        </InputMask>)
                        :
                        (<InputMask mask="********-*" required defaultValue={store.user.rg ? store.user.rg : ""}>
                            {() => <TextField
                                inputRef={userRefs.rg}
                                className="formInput"
                                label="RG"
                                variant="outlined"
                                placeholder="RG"
                                type="text"
                                required
                                InputLabelProps={hasDataCookies ? { shrink: true } : {}}
                            />}
                        </InputMask>)}
                    <InputMask mask="999.999.999-99" required defaultValue={store.user.cpf ? store.user.cpf : ""}>
                        {() => <TextField inputRef={userRefs.cpf} className="formInput" label="CPF" variant="outlined" placeholder="CPF" type="text" required
                            InputLabelProps={hasDataCookies ? { shrink: true } : {}} />}
                    </InputMask>

                    <InputMask mask="99/99/9999" required defaultValue={store.user.birthDate ? store.user.birthDate : ""}>
                        {() => <TextField inputRef={userRefs.birthDate} className="formInput" label="Data de Nascimento" variant="outlined" placeholder="Data de Nascimento" type="text" required
                            InputLabelProps={hasDataCookies ? { shrink: true } : {}} />}
                    </InputMask>
                    <TextField
                        id="maritalStatus"
                        placeholder={"test"}
                        select
                        defaultValue={store.user.maritalStatus ? store.user.maritalStatus : ""}
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
                        defaultValue={store.user.nationality ? store.user.nationality : ""}
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
                    <TextField
                        id="profession"
                        select
                        defaultValue={store.user.profession ? store.user.profession : ""}
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

                    <TextField
                        className="formInput"
                        inputRef={userRefs.cost}
                        value={userCost || user.cost || ""}
                        onChange={(event) => handleChangeUserCost(event)}
                        label="Custo Mensal em R$"
                        variant="outlined"
                        placeholder="Custo Mensal em R$"
                        type="text"
                        InputLabelProps={{ shrink: true }}
                        required />

                    {/* <div style={{ margin: 'auto', }}>
                        <Divider sx={{ width: '107px', border: '1px solid #A0A0A0' }} />
                    </div> */}

                    <InputMask mask="99999-999"
                        defaultValue={cep ? cep : ""}
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

                    <TextField className="formInput" inputRef={addressRefs.complement} label="Complemento" variant="outlined" placeholder="Complemento" type="text" InputLabelProps={{ shrink: true }} />
                    <TextField className="formInput" defaultValue={neighborhood || ''} inputRef={addressRefs.neighborhood} label="Bairro" variant="outlined" placeholder="Bairro" type="text" InputLabelProps={{ shrink: true }} required />

                    <TextField
                        id="state"
                        select
                        value={stateValue ? stateValue.cod_estados : ""}
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

                    {/* <TextField
                        select
                        label="Cidade"
                        placeholder="Cidade"
                        variant="outlined"
                        className="formInput"
                        defaultValue={city.toUpperCase() || ''}
                        InputLabelProps={{
                            component: 'span',
                        }}
                        inputRef={addressRefs.city}
                        required>
                        <List
                            height={150}
                            itemCount={allCitiesByState[0].length}
                            itemSize={35}
                            width={300}
                        >
                            {Row}
                        </List>
                    </TextField> */}

                    <TextField className="formInput" defaultValue={city.toUpperCase() || ''} inputRef={addressRefs.city} label="Cidade" variant="outlined" placeholder="Cidade" type="text"
                        InputLabelProps={{ shrink: true }} required />

                    <FormLastRow>
                        <TextField
                            className="installationNumberField"
                            inputRef={addressRefs.installationNumber} label="Número de Instalação" variant="outlined" placeholder="Número de Instalação" type="text"
                            InputLabelProps={{ shrink: true }} />
                        <Typography
                            className="linkInstallationNumberTutorial"
                            variant="body2" onClick={() => setIsModalOpen(true)}>Não encontrou o número? <a >Clique aqui para saber onde encontrá-lo.</a></Typography>
                        {isLoading ?
                            <Box sx={{ margin: "0 auto" }}>
                                <CircularProgress />
                            </Box>
                            : <FormButton className="formInput" variant="outlined" type="submit" text="Continuar" />}
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

                </FormContent>
                {isModalOpen && <RegisterModal isModalOpen={isModalOpen} closeModal={closeModal} distribuitor={distributor ? distributor.toLowerCase() : ""} />}
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
        </>

    );
}