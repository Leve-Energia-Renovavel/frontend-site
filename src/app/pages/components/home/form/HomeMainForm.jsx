"use client"

import { createSignupPayload } from '@/app/service/lead-service/LeadService';
import { clearCookiesAndStorageData } from '@/app/utils/browser/BrowserUtils';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import { TextField } from "@mui/material";
import { useRouter, useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import InputMask from "react-input-mask";
import infoJson from '../../../../../../public/info.json';
import { schemaValidation } from '../schema';
import { HomeMainForm as Form, FormButton, HomeMainFormContainer as FormContainer, FormFooterContainer, FormSlider, HomeFormContainer, HomeMainFormSimulationContainer, Loading, FormSelect as Select, UserTypeFormButtonContainer, UserTypeFormContainer } from "../styles";
import { requestValidation } from '../validation';

import HomeMainFormHeader from './header/HomeMainFormHeader';
import HomeMainFormSimulator from './simulator/HomeMainFormSimulator';
import HomeFormButton from '../../utils/buttons/home/form/HomeFormButton';

export default function HomeMainForm({ setErrorMessage, setNotifications, selectedUserType, setSelectedUserType }) {

    const router = useRouter()
    const search = useSearchParams()

    const cupom = search.get("cupom")

    const [isLoading, setLoading] = useState(false)

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const cepRef = useRef()
    const couponRef = useRef()

    const texts = infoJson.home

    const handleSelect = (userType) => {
        setSelectedUserType(userType);
    };

    clearCookiesAndStorageData()

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)

        const submitData = createSignupPayload(
            nameRef.current.value,
            emailRef.current.value?.toLowerCase(),
            phoneRef.current.value,
            cepRef.current.value,
            simulationCost,
            selectedUserType === "Residencia" ? "PF" : "PJ",
            couponRef.current.value,
        )

        const response = await schemaValidation(submitData, setErrorMessage)
        await requestValidation(response, setNotifications, setErrorMessage, router)
        setLoading(false)
    }


    return (
        <HomeFormContainer>
            <FormContainer>
                <Form id='leadForm' onSubmit={handleSubmit}>
                    <HomeMainFormHeader />

                    <TextField
                        inputRef={nameRef}
                        className="homeFormInput"
                        label={`Nome Completo ${selectedUserType === 'Empresa' ? "do Responsável" : ""}`}
                        placeholder={`Nome Completo ${selectedUserType === 'Empresa' ? "do Responsável" : ""}`}
                        variant="outlined"
                        type="text"
                        FormHelperTextProps={{
                            style: {
                                textAlign: `center`
                            }
                        }}
                        disabled={isLoading}
                        required
                    />
                    <InputMask mask="(99) 99999-9999"
                        disabled={isLoading}>
                        {() => <TextField
                            className="homeFormInput"
                            inputRef={phoneRef}
                            label={`Telefone (com DDD)`}
                            placeholder={`Telefone`}
                            variant="outlined"
                            type="text"
                            inputProps={{ inputMode: 'numeric' }}
                            disabled={isLoading}
                            required
                        />}
                    </InputMask>
                    <TextField
                        className="homeFormInput"
                        inputRef={emailRef}
                        label={`E-mail ${selectedUserType === 'Empresa' ? "do Responsável" : ""}`}
                        placeholder={`E-mail ${selectedUserType === 'Empresa' ? "do Responsável" : ""}`}
                        variant="outlined"
                        type="text"
                        disabled={isLoading}
                        required
                    />

                    <UserTypeFormContainer>
                        <p className='chooseWhereToEconomy'>{texts.iWantToEconomy}</p>
                        <UserTypeFormButtonContainer>
                            <Select
                                startIcon={<StoreIcon />}
                                onClick={() => handleSelect('Empresa')}
                                selected={selectedUserType === 'Empresa'} >
                                {texts.company}
                            </Select>
                            <Select
                                startIcon={<HomeIcon />}
                                onClick={() => handleSelect('Residencia')}
                                selected={selectedUserType === 'Residencia'}>
                                {texts.house}
                            </Select>
                        </UserTypeFormButtonContainer>
                    </UserTypeFormContainer>
                    <FormFooterContainer>
                        <InputMask mask="99999-999" disabled={isLoading}>
                            {() => <TextField
                                className="homeFormInput"
                                inputRef={cepRef}
                                label={`CEP`}
                                placeholder={`CEP`}
                                variant="outlined"
                                type="text"
                                disabled={isLoading}
                                inputProps={{ inputMode: 'numeric' }}
                                required
                            />}
                        </InputMask>
                        <TextField
                            className="homeFormInput"
                            inputRef={couponRef}
                            defaultValue={cupom ? cupom : ""}
                            label={`Cupom de Desconto`}
                            placeholder={`Cupom`}
                            variant="outlined"
                            type="text"
                            disabled={isLoading}
                        />
                    </FormFooterContainer>
                    <HomeMainFormSimulator isMobile={true} />
                    <HomeFormButton title={texts.discountCalculate} isLoading={isLoading} isMobile={true} />
                </Form>

                <HomeMainFormSimulator isMobile={false} />
            </FormContainer>

            <HomeFormButton title={texts.discountCalculate} isLoading={isLoading} isMobile={false} />
            <p className='privacyPolicyDisclaimer'>{texts.agreedToReceiveEmails}<span className='privacyPolicy' onClick={() => router.push(`politica-de-privacidade`)}>{texts.privacyPolicy}</span>.</p>
        </HomeFormContainer>
    )
}