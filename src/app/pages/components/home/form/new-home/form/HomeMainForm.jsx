"use client"

import { createSignupPayload } from '@/app/service/lead-service/LeadService';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import InputMask from "react-input-mask";
import infoJson from '../../../../../../../../public/info.json';
import { HomeMainForm as Form, FormTitleContainer, HomeFormContainer, HomeFormInput } from "./styles";

import { useStoreHome } from '@/app/hooks/stores/home/useStoreHome';
import HomeFormButton from '@/app/pages/components/utils/buttons/home/form/HomeFormButton';
import { USER_TYPE } from '@/app/pages/enums/globalEnums';
import { saveDataToDropbox } from '@/app/service/dropbox-service/DropboxService';
import { cepInputComplete, cepInputIncomplete, emailInputComplete, emailInputIncomplete, labelColorHelper, labelColorHelperForMasked, nameInputCompleted, nameInputIncomplete, phoneInputComplete, phoneInputIncomplete } from '@/app/utils/helper/form/formHelper';

const texts = infoJson.home

export default function HomeMainForm() {

    const router = useRouter()

    const storeHome = useStoreHome()

    const texts = infoJson.home

    const selectedType = storeHome?.selectedUserType

    const isCompany = selectedType === USER_TYPE.PJ

    const [isLoading, setLoading] = useState(false)
    const [hasSubmitedForm, setHasSubmitedForm] = useState(false)

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        cep: '',
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const submitData = createSignupPayload(
            formState?.name,
            formState?.email?.toLowerCase(),
            formState?.phone,
            formState?.cep,
        );

        submitData.data = new Date().toLocaleString('pt-BR');
        await saveDataToDropbox(submitData, setHasSubmitedForm, setLoading)
    }


    const required = true

    return (
        <HomeFormContainer className={`leveHomeMainFormContainer`}>
            <Form acceptCharset="UTF-8" method="POST" id={`leadForm`} className="leveHomeMainForm" onSubmit={handleSubmit}>

                <FormTitleContainer className='formTitleContainer'>
                    <h2 className='formTitle'>Faça seu cadastro para receber o contato do nosso time comercial</h2>
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
                            label={`CEP da conta de luz`}
                            placeholder={`CEP da conta de luz`}
                            value={formState?.cep}
                            className="homeFormInput"
                            disabled={isLoading}
                            required={required}
                            success={cepInputComplete(formState?.cep)}
                            error={cepInputIncomplete(formState?.cep)}
                            InputLabelProps={{ style: { color: labelColorHelperForMasked(formState?.cep) } }} />}
                </InputMask>

                {!hasSubmitedForm ?
                    (<>
                        <HomeFormButton title={"Enviar"} isLoading={isLoading} />
                        <p className='privacyPolicyDisclaimer'>{texts.mobile.byClickingButtonAbove}<span className='privacyPolicy' onClick={() => router.push(`politica-de-privacidade`)}>{texts.privacyPolicy}</span>.</p>
                    </>
                    ) :
                    (<FormTitleContainer className='formTitleContainer'>
                        <h2 className='formTitle'>Recebemos o seu cadastro! Em breve entraremos em contato.</h2>
                    </FormTitleContainer>)
                }

            </Form>
        </HomeFormContainer>
    )
}