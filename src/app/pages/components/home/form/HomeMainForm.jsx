"use client"

import { createSignupPayload } from '@/app/service/lead-service/LeadService';
import { clearCookiesAndStorageData } from '@/app/utils/browser/BrowserUtils';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import { TextField } from "@mui/material";
import dynamic from 'next/dynamic';
import { useRouter, useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import InputMask from "react-input-mask";
import infoJson from '../../../../../../public/info.json';
import { schemaValidation } from '../schema';
import { HomeMainForm as Form, HomeMainFormContainer as FormContainer, HomeFormContainer, FormSelect as Select, UserTypeFormButtonContainer, UserTypeFormContainer } from "../styles";
import { requestValidation } from '../validation';

import { useStoreMessages } from '@/app/hooks/stores/useStoreMessages';
import { USER_TYPE } from '@/app/pages/enums/globalEnums';
import NewHomeMainFormHeader from './new-home/form/header/NewHomeMainFormHeader';

const HomeFormButton = dynamic(() => import('../../utils/buttons/home/form/HomeFormButton'), { ssr: false });
const HomeMainFormSimulator = dynamic(() => import('./simulator/HomeMainFormSimulator'), { ssr: false });

export default function HomeMainForm({ selectedUserType, setSelectedUserType, isMobile }) {

    const router = useRouter()
    const search = useSearchParams()
    const storeMessages = useStoreMessages()

    const cupom = search.get("cupom")

    const [isLoading, setLoading] = useState(false)
    const [simulationCost, setSimulationCost] = useState(200)

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
            emailRef.current.value,
            phoneRef.current.value,
            cepRef.current.value,
            simulationCost,
            selectedUserType === USER_TYPE.RESIDENCIA ? USER_TYPE.PF : USER_TYPE.PJ,
            couponRef.current.value,
        )

        const response = await schemaValidation(submitData)
        await requestValidation(response, storeMessages.setNotifications, storeMessages.setErrors, router)
        setLoading(false)
    }

    return (
        <HomeFormContainer isMobile={isMobile} className='homeMainFormGeneralContainer'>
            <FormContainer className='homeMainFormContainer'>
                <Form id={`${isMobile ? "leadFormMobile" : "leadForm"}`} onSubmit={handleSubmit}>
                    <NewHomeMainFormHeader />

                    <TextField
                        inputRef={nameRef}
                        className="homeFormInput"
                        label={`Nome completo ${selectedUserType === USER_TYPE.EMPRESA ? "do responsável" : ""}`}
                        placeholder={`Nome completo ${selectedUserType === USER_TYPE.EMPRESA ? "do responsável" : ""}`}
                        variant="outlined"
                        type="text"
                        FormHelperTextProps={{
                            style: {
                                textAlign: `center`
                            }
                        }}
                        InputProps={{
                            inputProps: {
                                style: { textAlign: "center" }
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
                            InputProps={{
                                inputProps: {
                                    style: { textAlign: "center" },
                                    inputMode: 'numeric'
                                }
                            }}
                            disabled={isLoading}
                            required
                        />}
                    </InputMask>
                    <TextField
                        className="homeFormInput"
                        inputRef={emailRef}
                        label={`E-mail ${selectedUserType === USER_TYPE.EMPRESA ? "do responsável" : ""}`}
                        placeholder={`E-mail ${selectedUserType === USER_TYPE.EMPRESA ? "do responsável" : ""}`}
                        variant="outlined"
                        type="text"
                        InputProps={{
                            inputProps: {
                                style: { textAlign: "center" }
                            }
                        }}
                        disabled={isLoading}
                        required
                    />

                    <InputMask mask="99999-999" disabled={isLoading}>
                        {() => <TextField
                            className="homeFormInput"
                            inputRef={cepRef}
                            label={`CEP`}
                            placeholder={`CEP`}
                            variant="outlined"
                            type="text"
                            InputProps={{
                                inputProps: {
                                    style: { textAlign: "center" },
                                    inputMode: 'numeric'
                                }
                            }}
                            disabled={isLoading}
                            required
                        />}
                    </InputMask>
                    <TextField
                        className="homeFormInput"
                        inputRef={couponRef}
                        defaultValue={cupom ? cupom : ""}
                        label={`Cupom de desconto`}
                        placeholder={`Cupom`}
                        variant="outlined"
                        InputProps={{
                            inputProps: {
                                style: { textAlign: "center" }
                            }
                        }}
                        type="text"
                        disabled={isLoading}
                    />

                    <UserTypeFormContainer className='homeFormUserTypeFormContainer'>
                        <p className='chooseWhereToEconomy'>{texts.iWantToEconomy}</p>
                        <UserTypeFormButtonContainer className='homeFormUserTypeButtons'>
                            <Select
                                className='homeFormCompanySelect'
                                startIcon={<StoreIcon />}
                                onClick={() => handleSelect(USER_TYPE.EMPRESA)}
                                selected={selectedUserType === USER_TYPE.EMPRESA} >
                                {texts.company}
                            </Select>
                            <Select
                                className='homeFormHouseSelect'
                                startIcon={<HomeIcon />}
                                onClick={() => handleSelect(USER_TYPE.RESIDENCIA)}
                                selected={selectedUserType === USER_TYPE.RESIDENCIA}>
                                {texts.house}
                            </Select>
                        </UserTypeFormButtonContainer>
                    </UserTypeFormContainer>
                    <HomeMainFormSimulator isMobile={true}
                        simulationCost={simulationCost}
                        handleSimulationCost={setSimulationCost} />
                    <HomeFormButton title={texts.discountCalculate} isLoading={isLoading} isMobile={true} />
                    <p className='mobilePrivacyPolicyDisclaimer'>{texts.mobile.byClickingButtonAbove}<span className='mobilePrivacyPolicy' onClick={() => router.push(`/politica-de-privacidade`)}>{texts.mobile.privacyPolicy}</span></p>
                </Form>

                <HomeMainFormSimulator
                    isMobile={false}
                    simulationCost={simulationCost}
                    handleSimulationCost={setSimulationCost} />
            </FormContainer>

            <p className='privacyPolicyDisclaimer'>{texts.agreedToReceiveEmails}<span className='privacyPolicy' onClick={() => router.push(`politica-de-privacidade`)}>{texts.privacyPolicy}</span>.</p>
        </HomeFormContainer>
    )
}