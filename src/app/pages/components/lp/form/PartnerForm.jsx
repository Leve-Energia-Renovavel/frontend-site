import { capitalizeFirstLetter, partnerTokens } from '@/app/utils/helper/partnerHelper';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import { TextField } from "@mui/material";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import InputMask from "react-input-mask";
import infoJson from '../../../../../../public/info.json';
import economyIcon from "../../../../../resources/icons/small/economy-icon-small.png";
import { requestValidation } from '../../home/validation';
import { partnerSchemaValidation } from './schema';
import {
    HomeMainForm as Form,
    FormButton,
    HomeMainFormContainer as FormContainer,
    FormFooterContainer,
    FormSlider, FormTitleContainer,
    HomeFormContainer,
    HomeMainFormSimulationContainer,
    Loading,
    FormSelect as Select,
    UserTypeFormButtonContainer,
    UserTypeFormContainer
} from "./styles";

export default function PartnerForm({ partner, setErrorMessage, setNotifications }) {

    const router = useRouter()

    const [isLoading, setLoading] = useState(false)
    const [simulationCost, setSimulationCost] = useState(150)

    const nameRef = useRef()
    const emailRef = useRef()
    const corporateEmailRef = useRef()
    const phoneRef = useRef()
    const cepRef = useRef()
    const martinsRegistrationRef = useRef()

    const isMartins = partner == "martins"
    const isLocaliza = partner == "localiza"

    const texts = infoJson.home

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)

        const submitData = {
            nome: nameRef.current.value,
            email: emailRef.current.value?.toLowerCase(),
            email_corporativo: corporateEmailRef.current.value?.toLowerCase(),
            telefone: phoneRef.current.value,
            cep: cepRef.current.value,
            valor: simulationCost,
            type: "PF",
            redirect_to: "www.leveenergia.com.br",
            token: partnerTokens[partner]
        }
        if (isMartins) {
            submitData["matricula"] = martinsRegistrationRef.current.value
        }

        console.log("submitData ==>>", submitData)

        const response = await partnerSchemaValidation(submitData)
        await requestValidation(response, setNotifications, setErrorMessage, router)

        setLoading(false)
    }


    return (
        <HomeFormContainer className='homeFormContainer' isLocaliza={isLocaliza}>
            <FormContainer className='formContainer' isLocaliza={isLocaliza}>
                <Form id='leadForm' onSubmit={handleSubmit} isLocaliza={isLocaliza}>
                    <FormTitleContainer>
                        <Image src={economyIcon} className='economyIcon' alt={"Logo Leve"} priority />
                        <h2>{texts.simulate}</h2>
                    </FormTitleContainer>
                    <p variant="body1">Sou colaborador <span className="highlighted">{capitalizeFirstLetter(partner)}</span> e quero economizar</p>
                    <TextField
                        inputRef={nameRef}
                        className="homeFormInput"
                        label={`Nome Completo`}
                        placeholder={`Nome Completo`}
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
                        label={`E-mail `}
                        placeholder={`E-mail`}
                        variant="outlined"
                        type="text"
                        disabled={isLoading}
                        required
                    />
                    <TextField
                        className="homeFormInput"
                        inputRef={corporateEmailRef}
                        label={`E-mail Corporativo `}
                        placeholder={`E-mail Corporativo`}
                        variant="outlined"
                        type="text"
                        disabled={isLoading}
                        required={!isMartins ? true : false} />

                    <UserTypeFormContainer>
                        <p className='chooseWhereToEconomy'>{texts.iWantToEconomy}</p>
                        <UserTypeFormButtonContainer className='formButtonContainer'>
                            <Select
                                isLocaliza={isLocaliza}
                                startIcon={<HomeIcon />}
                                selected>
                                {texts.house}
                            </Select>
                        </UserTypeFormButtonContainer>
                    </UserTypeFormContainer>
                    <FormFooterContainer isMartins={isMartins}>
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
                        {isMartins &&
                            <TextField
                                inputRef={martinsRegistrationRef}
                                className="homeFormInput"
                                label={`Matrícula`}
                                placeholder={`Matrícula`}
                                variant="outlined"
                                type="text"
                                disabled={isLoading}
                                required />}

                    </FormFooterContainer>
                </Form>
                <HomeMainFormSimulationContainer className="mainFormSimulationContainer" isLocaliza={isLocaliza}>
                    <h6 variant="subtitle1" className='averageUserCost'>{texts.averageCost} <span className='simulationCost'>R${simulationCost}{simulationCost === 3000 ? "+" : ""}</span></h6>
                    <FormSlider
                        isLocaliza={isLocaliza}
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
                isLocaliza={isLocaliza}
                type='submit'
                form='leadForm'
                endIcon={!isLoading ? <ArrowForwardIcon /> : <ArrowForwardIcon sx={{ display: "none" }} />}>
                {isLoading ? <Loading size={20} /> : <span>{texts.discountCalculate}</span>}
            </FormButton>
            <p className='privacyPolicyDisclaimer'>{texts.agreedToReceiveEmails}<span className='privacyPolicy' onClick={() => router.push(`/politica-de-privacidade`)}>{texts.privacyPolicy}</span>.</p>
        </HomeFormContainer>
    )
}