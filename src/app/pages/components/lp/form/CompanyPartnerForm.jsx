import { createCompanyPartnerPayload } from '@/app/service/lead-service/LeadService';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { TextField } from "@mui/material";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import InputMask from "react-input-mask";
import infoJson from '../../../../../../public/info.json';
import economyIcon from "../../../../../resources/icons/small/economy-icon-small.png";
import { requestValidation } from '../../home/validation';
import { companyPartnerSchemaValidation } from './companySchema';
import {
    HomeMainForm as Form,
    FormButton,
    HomeMainFormContainer as FormContainer,
    FormFooterContainer,
    FormSlider, FormTitleContainer,
    HomeFormContainer,
    HomeMainFormSimulationContainer,
    Loading
} from "./styles";

export default function CompanyPartnerForm({ setErrorMessage, setNotifications }) {

    const router = useRouter()

    const [isLoading, setLoading] = useState(false)
    const [simulationCost, setSimulationCost] = useState(150)

    const nameRef = useRef()
    const emailRef = useRef()
    const corporateNameRef = useRef()
    const phoneRef = useRef()
    const cepRef = useRef()

    const texts = infoJson.home

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)

        const submitData = createCompanyPartnerPayload(
            nameRef.current.value,
            corporateNameRef.current.value,
            emailRef.current.value?.toLowerCase(),
            phoneRef.current.value,
            cepRef.current.value,
            simulationCost,
            "PJ"
        )

        const response = await companyPartnerSchemaValidation(submitData)
        console.log("response ===>>", response)
        await requestValidation(response, setNotifications, setErrorMessage, router)

        setLoading(false)
    }


    return (
        <HomeFormContainer className='homeFormContainer' >
            <FormContainer className='formContainer' >
                <Form id='leadForm' onSubmit={handleSubmit} >
                    <FormTitleContainer>
                        <Image src={economyIcon} className='economyIcon' alt={"Logo Leve"} priority />
                        <h2>Economize hoje</h2>
                    </FormTitleContainer>
                    <p variant="body1">Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível:</p>
                    <TextField
                        inputRef={nameRef}
                        className="homeFormInput"
                        label={`Nome do Responsável`}
                        placeholder={`Nome do Responsável`}
                        variant="outlined"
                        type="text"
                        disabled={isLoading}
                        required
                    />
                    <TextField
                        className="homeFormInput"
                        inputRef={corporateNameRef}
                        label={`Empresa`}
                        placeholder={`Empresa`}
                        variant="outlined"
                        type="text"
                        disabled={isLoading}
                        required />
                    <TextField
                        className="homeFormInput"
                        inputRef={emailRef}
                        label={`E-mail `}
                        placeholder={`E-mail`}
                        variant="outlined"
                        type="text"
                        disabled={isLoading}
                        required
                    />
                    <InputMask mask="(99) 99999-9999"
                        disabled={isLoading}>
                        {() => <TextField
                            className="homeFormInput"
                            inputRef={phoneRef}
                            label={`Celular (com DDD)`}
                            placeholder={`Celular (com DDD)`}
                            variant="outlined"
                            type="text"
                            inputProps={{ inputMode: 'numeric' }}
                            disabled={isLoading}
                            required
                        />}
                    </InputMask>
                    <FormFooterContainer >
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
                    </FormFooterContainer>
                </Form>
                <HomeMainFormSimulationContainer className="mainFormSimulationContainer" >
                    <h6 variant="subtitle1" className='averageUserCost'>{texts.averageCost} <span className='simulationCost'>R${simulationCost}{simulationCost === 3000 ? "+" : ""}</span></h6>
                    <FormSlider
                        className='formSlider'
                        onChange={(event) => setSimulationCost(event.target.value)}
                        value={simulationCost}
                        step={10}
                        defaultValue={150}
                        min={150}
                        max={3000}
                        valueLabelDisplay="off"
                        aria-labelledby="simulationSlider"
                    />
                    {/* <SwipeRightOutlinedIcon className='sliderTip' /   */}
                </HomeMainFormSimulationContainer>
            </FormContainer>
            <FormButton
                type='submit'
                form='leadForm'
                endIcon={!isLoading ? <ArrowForwardIcon /> : <ArrowForwardIcon sx={{ display: "none" }} />}>
                {isLoading ? <Loading size={20} /> : <span>{texts.discountCalculate}</span>}
            </FormButton>
            <p className='privacyPolicyDisclaimer'>{texts.agreedToReceiveEmails}<span className='privacyPolicy' onClick={() => router.push(`/politica-de-privacidade`)}>{texts.privacyPolicy}</span>.</p>
        </HomeFormContainer>
    )
}