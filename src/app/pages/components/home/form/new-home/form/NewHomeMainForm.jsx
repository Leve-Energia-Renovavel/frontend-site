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
import infoJson from '../../../../../../../../public/info.json';
import { requestValidation } from '../../../validation';
import { HomeMainForm as Form, HomeFormContainer, FormSelect as Select, UserTypeFormButtonContainer, UserTypeFormContainer } from "./styles";

import { USER_TYPE } from '@/app/pages/enums/globalEnums';
import { schemaValidation } from '../../../schema';
import NewHomeMainFormHeader from './header/NewHomeMainFormHeader';

const HomeFormButton = dynamic(() => import('../../../../utils/buttons/home/form/HomeFormButton'), { ssr: false });
const HomeMainFormSimulator = dynamic(() => import('../../simulator/HomeMainFormSimulator'), { ssr: false });

export default function NewHomeMainForm({ setErrorMessage, setNotifications, isMobile, selectedUserType, setSelectedUserType }) {

    const router = useRouter()

    const search = useSearchParams()

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
            emailRef.current.value?.toLowerCase(),
            phoneRef.current.value,
            cepRef.current.value,
            simulationCost,
            selectedUserType === USER_TYPE.RESIDENCIA ? USER_TYPE.PF : USER_TYPE.PJ,
            couponRef.current.value,
        )

        const response = await schemaValidation(submitData, setErrorMessage)
        await requestValidation(response, setNotifications, setErrorMessage, router)
        setLoading(false)
    }

    return (
        <HomeFormContainer isMobile={isMobile} className={`leveHomeMainFormContainer${isMobile ? "Mobile" : ""}`}>
            <Form id={`leadForm`} onSubmit={handleSubmit}>
                <NewHomeMainFormHeader />

                <TextField
                    inputRef={nameRef}
                    className="homeFormInput"
                    label={`Nome completo ${selectedUserType === USER_TYPE.EMPRESA ? "do responsável" : ""}`}
                    placeholder={`Nome completo ${selectedUserType === USER_TYPE.EMPRESA ? "do responsável" : ""}`}
                    variant="outlined"
                    type="text"
                    disabled={isLoading}
                    required
                    InputProps={{
                        inputProps: {
                            style: { textAlign: "center" }
                        }
                    }}
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
                        disabled={isLoading}
                        required
                        InputProps={{
                            inputProps: {
                                style: { textAlign: "center" },
                                inputMode: 'numeric'
                            }
                        }}

                    />}
                </InputMask>
                <TextField
                    className="homeFormInput"
                    inputRef={emailRef}
                    label={`E-mail ${selectedUserType === USER_TYPE.EMPRESA ? "do responsável" : ""}`}
                    placeholder={`E-mail ${selectedUserType === USER_TYPE.EMPRESA ? "do responsável" : ""}`}
                    variant="outlined"
                    type="text"
                    disabled={isLoading}
                    required
                    InputProps={{
                        inputProps: {
                            style: { textAlign: "center" }
                        }
                    }}
                />

                <InputMask mask="99999-999" disabled={isLoading}>
                    {() => <TextField
                        className="homeFormInput"
                        inputRef={cepRef}
                        label={`CEP`}
                        placeholder={`CEP`}
                        variant="outlined"
                        type="text"
                        disabled={isLoading}
                        required
                        InputProps={{
                            inputProps: {
                                style: { textAlign: "center" },
                                inputMode: 'numeric'
                            }
                        }}
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
                            className='homeFormHouseSelect'
                            startIcon={<HomeIcon />}
                            onClick={() => handleSelect('Residencia')}
                            selected={selectedUserType === USER_TYPE.RESIDENCIA}>
                            {texts.house}
                        </Select>
                        <Select
                            className='homeFormCompanySelect'
                            startIcon={<StoreIcon />}
                            onClick={() => handleSelect('Empresa')}
                            selected={selectedUserType === USER_TYPE.EMPRESA} >
                            {texts.company}
                        </Select>
                    </UserTypeFormButtonContainer>
                </UserTypeFormContainer>

                <HomeMainFormSimulator isMobile={true}
                    simulationCost={simulationCost}
                    handleSimulationCost={setSimulationCost} />

                <HomeMainFormSimulator
                    isMobile={false}
                    simulationCost={simulationCost}
                    handleSimulationCost={setSimulationCost} />

                <HomeFormButton title={"Calcular"} isLoading={isLoading} isMobile={true} />

                <HomeFormButton title={"Calcular"} isLoading={isLoading} isMobile={false} />

                <p className='mobilePrivacyPolicyDisclaimer'>{texts.mobile.byClickingButtonAbove}<span className='mobilePrivacyPolicy' onClick={() => router.push(`/politica-de-privacidade`)}>{texts.mobile.privacyPolicy}</span></p>
                <p className='privacyPolicyDisclaimer'>{texts.mobile.byClickingButtonAbove}<span className='privacyPolicy' onClick={() => router.push(`politica-de-privacidade`)}>{texts.privacyPolicy}</span>.</p>
            </Form>
        </HomeFormContainer>
    )
}