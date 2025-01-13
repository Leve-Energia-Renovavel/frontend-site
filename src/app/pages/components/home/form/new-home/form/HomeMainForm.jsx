"use client"

import { createSignupPayload } from '@/app/service/lead-service/LeadService';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import InputMask from "react-input-mask";
import infoJson from '../../../../../../../../public/info.json';
import { requestValidation } from '../../../validation';
import { HomeMainForm as Form, FormTitleContainer, HomeFormContainer, HomeFormInput, FormSelect as Select, UserTypeFormButtonContainer, UserTypeFormContainer } from "./styles";

import { useStoreHome } from '@/app/hooks/stores/home/useStoreHome';
import { useStoreUser } from '@/app/hooks/stores/useStore';
import { useStoreMessages } from '@/app/hooks/stores/useStoreMessages';
import HomeFormButton from '@/app/pages/components/utils/buttons/home/form/HomeFormButton';
import { USER_TYPE } from '@/app/pages/enums/globalEnums';
import { cepInputComplete, cepInputIncomplete, couponInputComplete, emailInputComplete, emailInputIncomplete, labelColorHelper, labelColorHelperForMasked, nameInputCompleted, nameInputIncomplete, phoneInputComplete, phoneInputIncomplete } from '@/app/utils/helper/form/formHelper';
import { schemaValidation } from '../../../schema';
import HomeMainFormSimulator from '../../simulator/HomeMainFormSimulator';
import HomeMainFormHeader from '../../header/HomeMainFormHeader';

const texts = infoJson.home

export default function HomeMainForm() {

    const router = useRouter()

    const search = useSearchParams()
    const storeUser = useStoreUser()
    const storeMessage = useStoreMessages()
    const storeHome = useStoreHome()

    const cupom = search.get("cupom")

    const selectedUserType = storeHome.selectedUserType
    const texts = infoJson.home

    const setNotifications = storeMessage.setNotifications
    const setErrors = storeMessage.setErrors

    const selectedType = storeHome?.selectedUserType
    const changeUserType = storeHome?.changeUserType

    const isCompany = selectedType === USER_TYPE.PJ

    const [isLoading, setLoading] = useState(false)

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        cep: '',
        cost: 200,
        type: selectedType,
        coupon: cupom,
        ...(isCompany && {
            companyName: '',
        })

    })

    const handleChangeUserType = (usertype) => {
        changeUserType(usertype)
        setFormState((prevState) => ({
            ...prevState,
            type: usertype,
        }));
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)

        const submitData = createSignupPayload(
            formState?.name,
            formState?.email?.toLowerCase(),
            formState?.phone,
            formState?.cep,
            formState?.cost,
            formState?.type,
            formState?.coupon,
        )

        const response = await schemaValidation(submitData)
        await requestValidation(submitData, response, setNotifications, setErrors, storeUser, router)
        setLoading(false)
    };

    const required = true

    return (
        <HomeFormContainer className={`leveHomeMainFormContainer`}>
            <Form acceptCharset="UTF-8" method="POST" id={`leadForm`} onSubmit={handleSubmit}>

                <HomeMainFormHeader />

                <FormTitleContainer className='formTitleContainer'>
                    <h2 className='formTitle'>Calcule sua economia e o impacto positivo que você pode promover</h2>
                </FormTitleContainer>

                <HomeFormInput
                    name='name'
                    type="text"
                    variant="outlined"
                    className="homeFormInput"
                    label={`Nome completo`}
                    placeholder={`Nome completo`}
                    required={required}
                    disabled={isLoading}
                    value={formState?.name}
                    error={nameInputIncomplete(formState?.name)}
                    success={nameInputCompleted(formState?.name)}
                    onChange={handleInputChange}
                    InputLabelProps={{ style: { color: labelColorHelper(formState?.name) } }} />

                <InputMask mask="(99) 99999-9999"
                    value={formState?.phone}
                    onChange={handleInputChange}
                    disabled={isLoading}>
                    {() =>
                        <HomeFormInput
                            type="text"
                            name='phone'
                            variant="outlined"
                            className="homeFormInput"
                            label={`Celular / Whatsapp`}
                            placeholder={`Celular / Whatsapp`}
                            value={formState?.phone}
                            onChange={handleInputChange}
                            error={phoneInputIncomplete(formState?.phone)}
                            success={phoneInputComplete(formState?.phone)}
                            disabled={isLoading}
                            required={required}
                            InputLabelProps={{ style: { color: labelColorHelperForMasked(formState?.phone) } }} />}

                </InputMask>
                <HomeFormInput
                    type="text"
                    name='email'
                    variant="outlined"
                    className="homeFormInput"
                    onChange={handleInputChange}
                    error={emailInputIncomplete(formState?.email)}
                    success={emailInputComplete(formState?.email)}
                    value={formState?.email}
                    label={`E-mail ${isCompany ? "corporativo" : ""}`}
                    placeholder={`E-mail ${isCompany ? "corporativo" : ""}`}
                    disabled={isLoading}
                    required
                    InputLabelProps={{ style: { color: labelColorHelper(formState?.email) } }} />

                <InputMask mask="99999-999" disabled={isLoading} onChange={handleInputChange} value={formState?.cep} >
                    {() =>
                        <HomeFormInput
                            type="text"
                            name='cep'
                            label={`CEP`}
                            placeholder={`CEP`}
                            value={formState?.cep}
                            className="homeFormInput"
                            disabled={isLoading}
                            required={required}
                            success={cepInputComplete(formState?.cep)}
                            error={cepInputIncomplete(formState?.cep)}
                            InputLabelProps={{ style: { color: labelColorHelperForMasked(formState?.cep) } }} />}
                </InputMask>

                <HomeFormInput
                    type="text"
                    name='coupon'
                    className="homeFormInput"
                    placeholder={`Cupom`}
                    label={`Cupom de desconto`}
                    onChange={handleInputChange}
                    required={false}
                    success={couponInputComplete(formState?.coupon)}
                    value={formState?.coupon?.toUpperCase()}
                    defaultValue={cupom ? cupom : ""}
                    disabled={isLoading}
                    InputLabelProps={{ style: { color: labelColorHelper(formState?.coupon) } }} />

                <UserTypeFormContainer className='homeFormUserTypeFormContainer'>
                    <p className='chooseWhereToEconomy'>{texts.iWantToEconomy}</p>
                    <UserTypeFormButtonContainer className='homeFormUserTypeButtons'>
                        <Select
                            className='homeFormHouseSelect'
                            startIcon={<HomeIcon />}
                            onClick={() => handleChangeUserType(USER_TYPE.PF)}
                            selected={!isCompany} >
                            {texts.house}
                        </Select>
                        <Select
                            className='homeFormCompanySelect'
                            startIcon={<StoreIcon />}
                            onClick={() => handleChangeUserType(USER_TYPE.PJ)}
                            selected={isCompany} >
                            {texts.company}
                        </Select>
                    </UserTypeFormButtonContainer>
                </UserTypeFormContainer>

                <HomeMainFormSimulator
                    simulationCost={formState?.cost}
                    handleSimulationCost={handleInputChange} />

                <HomeFormButton title={"Calcular"} isLoading={isLoading} />

                <p className='mobilePrivacyPolicyDisclaimer'>{texts.mobile.byClickingButtonAbove}<span className='mobilePrivacyPolicy' onClick={() => router.push(`/politica-de-privacidade`)}>{texts.mobile.privacyPolicy}</span></p>
                <p className='privacyPolicyDisclaimer'>{texts.mobile.byClickingButtonAbove}<span className='privacyPolicy' onClick={() => router.push(`politica-de-privacidade`)}>{texts.privacyPolicy}</span>.</p>
            </Form>
        </HomeFormContainer>
    )
}