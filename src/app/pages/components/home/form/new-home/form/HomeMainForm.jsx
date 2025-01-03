"use client"

import { createSignupPayload } from '@/app/service/lead-service/LeadService';
import { clearCookiesAndStorageData } from '@/app/utils/browser/BrowserUtils';
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
import { labelColorHelper, labelColorHelperForMasked } from '@/app/utils/helper/globalHelper';
import { schemaValidation } from '../../../schema';
import HomeMainFormSimulator from '../../simulator/HomeMainFormSimulator';

export default function HomeMainForm() {

    const router = useRouter()

    const search = useSearchParams()
    const storeUser = useStoreUser()
    const storeMessage = useStoreMessages()
    const storeHome = useStoreHome()

    const texts = infoJson.home

    const setNotifications = storeMessage.setNotifications
    const setErrors = storeMessage.setErrors

    const cupom = search.get("cupom")
    const selectedType = storeHome?.selectedUserType
    const isCompany = selectedType === USER_TYPE.EMPRESA

    const [isLoading, setLoading] = useState(false)
    const [simulationCost, setSimulationCost] = useState(200)

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        cep: '',
        cost: simulationCost,
        type: selectedType,
        coupon: cupom,
        ...(isCompany && {
            companyName: '',
        })

    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    clearCookiesAndStorageData()

    const handleSelect = (userType) => {
        storeHome.setSelectedUserType(userType);
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

        const response = await schemaValidation(submitData, setErrors)
        await requestValidation(submitData, response, setNotifications, setErrors, storeUser, router)
        setLoading(false)
    }

    return (
        <HomeFormContainer className={`leveHomeMainFormContainer`}>
            <Form id={`leadForm`} onSubmit={handleSubmit}>

                <FormTitleContainer className='formTitleContainer'>
                    <h2 className='formTitle'>Calcule sua economia e o impacto positivo que você pode promover</h2>
                </FormTitleContainer>

                <HomeFormInput
                    className="homeFormInput"
                    label={`Nome completo`}
                    placeholder={`Nome completo`}
                    name='name'
                    onChange={handleInputChange}
                    value={formState?.name}
                    type="text"
                    disabled={isLoading}
                    required
                    InputLabelProps={{ style: { color: labelColorHelper(formState?.name) } }}

                />
                {/* {isCompany && (<HomeFormInput
                    className="homeFormInput"
                    label={`Nome da empresa`}
                    placeholder={`Nome da empresa`}
                    name='companyName'
                    onChange={handleInputChange}
                    value={formState?.companyName}
                    type="text"
                    disabled={isLoading}
                    required
                />)} */}
                <InputMask mask="(99) 99999-9999"
                    value={formState?.phone}
                    onChange={handleInputChange}
                    disabled={isLoading}>
                    {() =>
                        <HomeFormInput
                            className="homeFormInput"
                            label={`Celular / Whatsapp`}
                            placeholder={`Celular / Whatsapp`}
                            name='phone'
                            onChange={handleInputChange}
                            type="text"
                            disabled={isLoading}
                            required
                            InputLabelProps={{ style: { color: labelColorHelperForMasked(formState?.phone) } }}
                            InputProps={{
                                inputProps: {
                                    inputMode: 'numeric'
                                }
                            }}

                        />}
                </InputMask>
                <HomeFormInput
                    className="homeFormInput"
                    name='email'
                    onChange={handleInputChange}
                    value={formState?.email}
                    label={`E-mail ${isCompany ? "corporativo" : ""}`}
                    placeholder={`E-mail ${isCompany ? "corporativo" : ""}`}
                    type="text"
                    disabled={isLoading}
                    required
                    InputLabelProps={{ style: { color: labelColorHelper(formState?.email) } }}

                />

                <InputMask mask="99999-999" disabled={isLoading} onChange={handleInputChange} value={formState?.cep}>
                    {() =>
                        <HomeFormInput
                            className="homeFormInput"
                            name='cep'
                            label={`CEP`}
                            placeholder={`CEP`}
                            type="text"
                            disabled={isLoading}
                            required
                            InputProps={{
                                inputProps: {
                                    inputMode: 'numeric'
                                }
                            }}
                            InputLabelProps={{ style: { color: labelColorHelperForMasked(formState?.cep) } }} />}
                </InputMask>

                <HomeFormInput
                    className="homeFormInput"
                    name='coupon'
                    onChange={handleInputChange}
                    value={formState?.coupon}
                    defaultValue={cupom ? cupom : ""}
                    label={`Cupom de desconto`}
                    placeholder={`Cupom`}
                    type="text"
                    disabled={isLoading}
                    InputLabelProps={{ style: { color: labelColorHelper(formState?.coupon) } }} />

                <UserTypeFormContainer className='homeFormUserTypeFormContainer'>
                    <p className='chooseWhereToEconomy'>{texts.iWantToEconomy}</p>
                    <UserTypeFormButtonContainer className='homeFormUserTypeButtons'>
                        <Select
                            className='homeFormHouseSelect'
                            startIcon={<HomeIcon />}
                            onClick={() => handleSelect(USER_TYPE.RESIDENCIA)}
                            selected={!isCompany} >
                            {texts.house}
                        </Select>
                        <Select
                            className='homeFormCompanySelect'
                            startIcon={<StoreIcon />}
                            onClick={() => handleSelect(USER_TYPE.EMPRESA)}
                            selected={isCompany} >
                            {texts.company}
                        </Select>
                    </UserTypeFormButtonContainer>
                </UserTypeFormContainer>

                <HomeMainFormSimulator
                    simulationCost={simulationCost}
                    handleSimulationCost={setSimulationCost} />

                <HomeFormButton title={"Calcular"} isLoading={isLoading} />

                <p className='mobilePrivacyPolicyDisclaimer'>{texts.mobile.byClickingButtonAbove}<span className='mobilePrivacyPolicy' onClick={() => router.push(`/politica-de-privacidade`)}>{texts.mobile.privacyPolicy}</span></p>
                <p className='privacyPolicyDisclaimer'>{texts.mobile.byClickingButtonAbove}<span className='privacyPolicy' onClick={() => router.push(`politica-de-privacidade`)}>{texts.privacyPolicy}</span>.</p>
            </Form>
        </HomeFormContainer>
    )
}