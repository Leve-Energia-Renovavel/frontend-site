"use client"

import { useStoreUser } from '@/app/hooks/useStore';
import Messages from '@/app/pages/components/messages/Messages';
import { getAddressByCEP } from '@/app/service/address-service/AddressService';
import { findCityIdByName } from '@/app/service/utils/addressUtilsService';
import { stateOptions } from '@/app/utils/form-options/addressFormOptions';
import { maritalStatusOptions, nationalityOptions } from '@/app/utils/form-options/formOptions';
import { statesAcronymOptions } from '@/app/utils/form-options/statesIdOptions';
import { costValidation } from '@/app/utils/formatters/costFormatter';
import { formatCpfUnrestricted } from '@/app/utils/formatters/documentFormatter';
import formatPhoneNumber from '@/app/utils/formatters/phoneFormatter';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import { Box, CircularProgress, MenuItem, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import InputMask from "react-input-mask";
import { Form, FormButtonContainer, FormCancelButton, FormContent, FormInput, FormLastRow, FormRow, FormSubmitButton, InstallationFormContainer, InstallationInput, InstallationNumberDisclaimer } from './styles';

export default function InstallationForm({ closeModal }) {

    const store = useStoreUser()

    const user = JSON.parse(localStorage.getItem('user'))
    const { name, email, phone, rg, cpf, distributor, companyName, cnpj, nationality, profession, maritalStatus, birthDate, isCompany } = user?.user ?? (store?.user || {})

    const [userCost, setUserCost] = useState(0)
    const [stateValue, setStateValue] = useState("");

    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingCEP, setIsLoadingCEP] = useState(false);

    const userRefs = {
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


    const handleChangeState = (value) => {
        setStateValue(stateOptions[value])
    }

    const handleChangeUserCost = (event) => {
        var newCost = event.target.value

        newCost = newCost.replace(/\D/g, '');

        const integerPart = newCost.slice(0, -2);
        const decimalPart = newCost.slice(-2);
        newCost = integerPart + ',' + decimalPart;
        setUserCost(newCost)
    }

    const handleGetCEP = async (cep) => {
        if (cep !== "" || cep.length < 8) {
            setIsLoadingCEP(true)
            const response = await getAddressByCEP(cep, setNotifications, setErrorMessage, setIsLoadingCEP)
            updateAddressFormData(response?.data)
        }
    }
    const updateAddressFormData = (data) => {
        addressRefs.address.current.value = data?.logradouro
        addressRefs.city.current.value = data?.cidade
        addressRefs.neighborhood.current.value = data?.bairro
        // addressRefs.state.current.value = data?.uf
        console.log(stateOptions[statesAcronymOptions[data?.uf]])
        setStateValue(stateOptions[statesAcronymOptions[data?.uf]])

        // handleChangeState(statesAcronymOptions[data?.uf])
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const validatedCost = costValidation(userRefs.cost.current.value)

        const submitData = {
            nome: name,
            email: email,
            rg: rg,
            cpf: cpf,
            data_nascimento: birthDate,
            telefone: phone,
            nacionalidade: nationality,
            profissao: profession,
            cep: addressRefs.addressCep.current.value,
            endereco: addressRefs.address.current.value,
            numero: parseFloat(addressRefs.addressNumber.current.value?.replace(/[^0-9.]/g, "")),
            bairro: addressRefs.neighborhood.current.value,
            complemento: addressRefs.complement.current.value,
            estado_id: stateValue.cod_estados,
            cidade_id: await findCityIdByName(addressRefs.city.current.value, stateValue.cod_estados),
            valor: validatedCost,
            numero_instalacao: addressRefs.installationNumber.current.value
        }

        console.log("submitData ===>>>", submitData)
    }

    const labelColor = "#005940"

    return (
        <>
            <InstallationFormContainer>
                <Form id='signupForm' acceptCharset="UTF-8" method="POST" onSubmit={handleSubmit}>
                    <FormRow>
                        <FormInput
                            className='inputForm'
                            label={`Nome Completo ${isCompany ? 'do Responsável' : ''} (Titular da Conta de Luz)`}
                            placeholder={`Nome Completo ${isCompany ? 'do Responsável' : ''} (Titular da Conta de Luz)`}
                            defaultValue={name || ''}
                            variant="outlined"
                            type="text"
                            InputLabelProps={{ shrink: true, style: { color: labelColor } }}
                            disabled
                        />
                        <FormInput
                            className='inputForm'
                            label={`Email ${isCompany ? 'do Responsável' : ''}`}
                            placeholder={`Email ${isCompany ? 'do Responsável' : ''}`}
                            defaultValue={email || ''}
                            variant="outlined"
                            InputLabelProps={{ shrink: true, style: { color: labelColor } }}
                            type="text"
                            disabled
                        />
                    </FormRow>
                    <FormContent>
                        <InputMask mask="(99) 99999-9999" value={formatPhoneNumber(phone) || ""} disabled >
                            {() => (
                                <FormInput
                                    className="inputForm"
                                    inputProps={{ inputMode: 'numeric' }}
                                    label={`Telefone ${isCompany ? 'do Responsável' : ''}`}
                                    variant="outlined"
                                    placeholder={`Telefone ${isCompany ? 'do Responsável' : ''}`}
                                    type="text"
                                    InputLabelProps={{ shrink: true, style: { color: labelColor } }}
                                    disabled
                                />
                            )}
                        </InputMask>
                        <InputMask mask="********-*" disabled defaultValue={rg || ""}>
                            {() => <FormInput
                                defaultValue={rg || ""}
                                className="inputForm"
                                label="RG"
                                variant="outlined"
                                placeholder="RG"
                                type="text"
                                disabled
                                inputProps={{ inputMode: 'numeric' }}
                                InputLabelProps={{ shrink: false },
                                    { style: { color: labelColor } }}
                            />}
                        </InputMask>
                        <InputMask mask="999.999.999-99" disabled defaultValue={formatCpfUnrestricted(cpf) || ""}>
                            {() =>
                                <FormInput
                                    defaultValue={formatCpfUnrestricted(cpf) || ""}
                                    className="inputForm"
                                    label="CPF"
                                    variant="outlined"
                                    placeholder="CPF"
                                    inputProps={{ inputMode: 'numeric' }}
                                    type="text"
                                    disabled
                                    InputLabelProps={{ shrink: false },
                                        { style: { color: labelColor } }} />}
                        </InputMask>

                        <InputMask mask="99/99/9999" disabled value={birthDate || ""} onChange={(e) => store.updateUser({ birthDate: e.target.value })}>
                            {() => <FormInput
                                className="inputForm"
                                label="Data de Nascimento"
                                variant="outlined"
                                placeholder="Data de Nascimento"
                                type="text"
                                disabled
                                inputProps={{ inputMode: 'numeric' }}
                                InputLabelProps={{ shrink: birthDate !== "" },
                                    { style: { color: labelColor } }
                                }
                            />}
                        </InputMask>
                        <FormInput
                            id="maritalStatus"
                            disabled
                            select
                            defaultValue={maritalStatus ? maritalStatus : ""}
                            label="Estado Civil"
                            className="inputForm"
                            inputProps={{ inputMode: 'numeric' }}
                            InputLabelProps={{
                                component: 'span',
                                style: { color: labelColor }
                            }}
                            inputRef={userRefs.maritalStatus || ''}>
                            {maritalStatusOptions?.map((maritalStatus) => {
                                return (
                                    <MenuItem key={maritalStatus.label} value={maritalStatus.value}>{maritalStatus.label}</MenuItem>
                                )
                            })}
                        </FormInput>

                        <FormInput
                            id="nationality"
                            select
                            defaultValue={nationality ? nationality : ""}
                            className="inputForm"
                            label="Nacionalidade"
                            variant="outlined"
                            placeholder="Nacionalidade"
                            type="text"
                            InputLabelProps={{
                                component: 'span',
                                style: { color: labelColor }
                            }}
                            disabled>
                            {nationalityOptions?.map((nationality) => {
                                return (
                                    <MenuItem key={nationality.label} value={nationality.value}>{nationality.label}</MenuItem>
                                )
                            })}
                        </FormInput>

                        <FormInput
                            className="inputForm"
                            inputRef={userRefs.cost}
                            value={userCost || ""}
                            onChange={(event) => handleChangeUserCost(event)}
                            label="Custo Mensal em R$"
                            variant="outlined"
                            placeholder="Custo Mensal em R$"
                            type="text"
                            inputProps={{ inputMode: 'numeric' }}
                            InputLabelProps={{ shrink: true, style: { color: labelColor } }}
                            required />

                    </FormContent>
                    {/* <div style={{ display: "flex", justifyContent: "center", margin: "1.5rem auto" }}>
                        <FormInput
                            className="inputForm"
                            inputRef={userRefs.cost}
                            value={userCost || ""}
                            onChange={(event) => handleChangeUserCost(event)}
                            label="Custo Mensal em R$"
                            variant="outlined"
                            placeholder="Custo Mensal em R$"
                            type="text"
                            inputProps={{ inputMode: 'numeric' }}
                            InputLabelProps={{ shrink: true, style: { color: labelColor } }}
                            required />
                    </div> */}
                    <FormContent>
                        <InputMask mask="99999-999"
                            onBlur={(e) => handleGetCEP(addressRefs.addressCep.current.value)}>
                            {() => <FormInput
                                className="inputForm"
                                inputRef={addressRefs.addressCep}
                                label="CEP"
                                variant="outlined"
                                placeholder="CEP"
                                type="text"
                                inputProps={{ inputMode: 'numeric' }}
                                InputLabelProps={{ shrink: true, style: { color: labelColor } }}
                                InputProps={{
                                    endAdornment: !isLoadingCEP ? <SearchIcon className="searchIcon"
                                        onClick={() => handleGetCEP(addressRefs.addressCep.current.value)} /> :
                                        <Box>
                                            <CircularProgress className='formLoading' size={"25px"} />
                                        </Box>,
                                }}
                                required />}
                        </InputMask>

                        <FormInput className="inputForm"
                            inputRef={addressRefs.address}
                            label="Endereço" variant="outlined"
                            placeholder="Endereço"
                            type="text"
                            InputLabelProps={{ shrink: true, style: { color: labelColor } }}
                            required />

                        <InputMask mask="99999">
                            {() => <FormInput
                                className="inputForm"
                                inputRef={addressRefs.addressNumber}
                                label="Nº"
                                variant="outlined"
                                placeholder="Nº"
                                type="text"
                                inputProps={{ inputMode: 'numeric' }}
                                InputLabelProps={{ style: { color: labelColor } }}
                                required />}
                        </InputMask>

                        <FormInput className="inputForm"
                            inputRef={addressRefs.complement}
                            label="Complemento" variant="outlined" placeholder="Complemento"
                            type="text"
                            InputLabelProps={addressRefs?.complement?.current?.value ? { shrink: true } : {},
                                { style: { color: labelColor } }} />

                        <FormInput className="inputForm"
                            inputRef={addressRefs.neighborhood}
                            label="Bairro" variant="outlined" placeholder="Bairro"
                            type="text"
                            InputLabelProps={{ shrink: true, style: { color: labelColor } }} required />

                        <FormInput
                            id="state"
                            select
                            onChange={(event) => handleChangeState(event.target.value)}
                            label="Estado"
                            placeholder="Estado"
                            variant="outlined"
                            className="inputForm"
                            value={stateValue?.cod_estados || ""}
                            InputLabelProps={{
                                component: 'span',
                                style: { color: labelColor }
                            }}
                            inputRef={addressRefs.state}
                            required>
                            {Object.values(stateOptions).map((state) => {
                                return (
                                    <MenuItem key={state.cod_estados} value={state.cod_estados}>{state.sigla}</MenuItem>
                                )
                            })}
                        </FormInput>

                        <FormInput
                            className="inputForm"
                            inputRef={addressRefs.city}
                            label="Cidade"
                            variant="outlined"
                            placeholder="Cidade"
                            type="text"
                            InputLabelProps={{ shrink: true, style: { color: labelColor } }} required />
                    </FormContent>

                    <FormLastRow>
                        <InstallationInput
                            inputRef={addressRefs.installationNumber}
                            className="inputForm"
                            label={`Número de Instalação`}
                            variant="outlined"
                            placeholder={`Número de Instalação`}
                            type="text"
                        />
                        <InstallationNumberDisclaimer>
                            <InfoIcon className='infoIcon' />
                            <Typography className='installationNumberDisclaimer'><span className='underlined'>Encontre este número</span> no canto superior direito de sua fatura atual.</Typography>
                        </InstallationNumberDisclaimer>
                    </FormLastRow>
                </Form>

                <FormButtonContainer>
                    {isLoading ?
                        <Box>
                            <CircularProgress className='submitLoading' />
                        </Box>
                        : (
                            <>
                                <FormCancelButton onClick={closeModal} form='signupForm'>
                                    Cancelar
                                </FormCancelButton>
                                <FormSubmitButton
                                    type='submit'
                                    form='signupForm'
                                    endIcon={<ArrowForwardIcon />}>Continuar</FormSubmitButton>
                            </>
                        )}
                </FormButtonContainer>

            </InstallationFormContainer>

            <Messages
                notifications={notifications}
                errors={errors}
                setErrorMessage={setErrorMessage}
                setNotifications={setNotifications} />
        </>
    )
}