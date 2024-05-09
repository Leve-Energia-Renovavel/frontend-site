"use client"

import { informationNotAccepted, requestSuccessful } from '@/app/service/utils/Validations';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Snackbar, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import InputMask from "react-input-mask";
import infoJsonHome from '../../../../../../public/home-info.json';
import infoJsonLp from '../../../../../../public/lp-info.json';
import economyIcon from "../../../../../resources/icons/small/economy-icon-small.png";
import faqIcon from "../../../../../resources/icons/small/faq-icon-yellow-small.svg";

import FaqContainer from '../../faq/FaqContainer';
import BrandsContainer from '../../home/HomeBrands';
import TutorialContainer from '../../home/HomeTutorial';
import LandingPageMainContent from './LandingPageMainContent';

import { schemaValidation } from '../../home/schema';
import LandingPageSecondaryBanner from './LandingPageSecondaryBanner';
import {
    ContactBannerContainer,
    LandingPageContainer as Container,
    FaqBannerContainer, LandingPageForm as Form, FormButton, LandingMainFormContainer as FormContainer, FormSlider, FormTitleContainer,
    LandingPageFormContainer, LandingPageFormSimulationContainer,
    Loading, LandingPageBanner as MainBanner,
    FormSelect as Select,
    SnackbarMessageAlert,
    SnackbarMessageNotification,
    TutorialBannerContainer,
    UserTypeFormButtonContainer, UserTypeFormContainer
} from "./styles";

export default function LandingPageMain() {

    const router = useRouter()

    const [isLoading, setLoading] = useState(false)
    const [simulationCost, setSimulationCost] = useState(150)
    const [selectedUserType, setSelectedUserType] = useState('Residencia');

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const cepRef = useRef()

    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)

        const submitData = {
            nome: nameRef.current.value,
            email: emailRef.current.value,
            telefone: phoneRef.current.value,
            cep: cepRef.current.value,
            valor: simulationCost,
            redirect_to: "www.leveenergia.com.br",
            type: selectedUserType === "Residencia" ? "PF" : "PJ"
        }

        const response = await schemaValidation(submitData)

        if (requestSuccessful(response?.status)) {
            if (response?.data?.message === "Você já possui cadastro") {
                setNotifications(["Você já possui cadastro! Faça login ou continue o cadastro pelo link enviado ao seu e-mail. "])
                router.push(`/login`)
            }
            else if (response?.data?.message === "Você não completou seu cadastro, por favor continue através do link enviado em seu e-mail") {
                setNotifications(["Continue seu cadastro pelo link enviado ao seu e-mail. "])
            } else {
                const uuid = response?.data?.uuid
                setNotifications(["Simulação realizada com sucesso!"])
                router.push(`/signup/?uuid=${uuid}`)
            }

        } else if (informationNotAccepted(response?.status)) {
            if (response?.data?.message === "Fora de rateio") {
                router.push(`/fail/out-of-range`)
            }
            else if (response?.data?.message === "Seu consumo já é leve") {
                router.push(`/fail/low-cost`)
            }
        }
        else if (response?.message === "Seu consumo já é leve") {
            router.push(`/fail/low-cost`)
        }
        else if (response?.message === "Fora de rateio") {
            router.push(`/fail/out-of-range`)
        }
        else if (response?.errors) {
            setErrorMessage(response?.errors)
        }

        else {
            setErrorMessage(["Erro de servidor. Por favor, tente novamente mais tarde"])
        }
        setLoading(false)
    }


    const handleSelect = (userType) => {
        setSelectedUserType(userType);
    };

    const handleWhatsapp = () => {
        const url = `https://api.whatsapp.com/send/?phone=551131818210&text=Ol%C3%A1%2C+estou+na+home+do+site+Leve+Energia+e+tenho+uma+d%C3%BAvida%E2%80%A6&type=phone_number&app_absent=0`;
        window.open(url, '_blank', 'noopener noreferrer');
    }

    const texts = infoJsonHome
    const lpTexts = infoJsonLp

    return (
        <>
            <Container>
                <MainBanner>
                    <LandingPageMainContent />
                    <LandingPageFormContainer>
                        <FormContainer>
                            <Form id='leadForm' acceptCharset="UTF-8" method="POST" onSubmit={handleSubmit}>
                                <FormTitleContainer>
                                    <Image src={economyIcon} className='economyIcon' alt={"Logo Leve"} priority />
                                    <Typography variant="h2">{texts.simulate}</Typography>
                                </FormTitleContainer>
                                <Typography variant="body1">{texts.in}<span className="highlighted">{texts.threeClicks}</span>{texts.guarantee}<span className="highlighted">{texts.solarEnergy}</span>{texts.reduceInvoices}</Typography>
                                <TextField
                                    inputRef={nameRef}
                                    className="homeFormInput"
                                    label={`Nome Completo ${selectedUserType === 'Empresa' ? "do Responsável" : ""}`}
                                    placeholder={`Nome Completo ${selectedUserType === 'Empresa' ? "do Responsável" : ""}`}
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
                                    label={`E-mail ${selectedUserType === 'Empresa' ? "do Responsável" : ""}`}
                                    placeholder={`E-mail ${selectedUserType === 'Empresa' ? "do Responsável" : ""}`}
                                    variant="outlined"
                                    type="text"
                                    disabled={isLoading}
                                    required
                                />

                                <UserTypeFormContainer>
                                    <Typography className='chooseWhereToEconomy'>{texts.iWantToEconomy}</Typography>
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
                            </Form>
                            <LandingPageFormSimulationContainer>
                                <Typography variant="subtitle1" className='averageUserCost'>{texts.averageCost} <span className='simulationCost'>R${simulationCost}{simulationCost === 3000 ? "+" : ""}</span></Typography>
                                <FormSlider
                                    onChange={(event) => setSimulationCost(event.target.value)}
                                    value={simulationCost}
                                    step={10}
                                    defaultValue={150}
                                    min={150}
                                    max={3000}
                                    valueLabelDisplay="off"
                                    aria-labelledby="simulationSlider"
                                />
                            </LandingPageFormSimulationContainer>
                        </FormContainer>
                        <FormButton
                            type='submit'
                            form='leadForm'
                            endIcon={!isLoading ? <ArrowForwardIcon /> : <ArrowForwardIcon sx={{ display: "none" }} />}>
                            {isLoading ? <Loading size={20} /> : <span>{texts.discountCalculate}</span>}
                        </FormButton>
                        <p className='privacyPolicyDisclaimer' onClick={() => router.push("/politica-de-privacidade")}>{texts.agreedToReceiveEmails}<span className='privacyPolicy'>{texts.privacyPolicy}</span>.</p>

                    </LandingPageFormContainer>
                </MainBanner>

                <LandingPageSecondaryBanner />

                <TutorialBannerContainer>
                    <TutorialContainer />
                </TutorialBannerContainer>

                <BrandsContainer />

                <ContactBannerContainer>
                    <Typography variant='h4'>{lpTexts.anyDoubt}</Typography>
                    <Typography variant='h5'>{lpTexts.contactOutTeam}</Typography>
                    <Typography className='contactButton' onClick={() => handleWhatsapp()}><WhatsAppIcon />{lpTexts.whatsappLeve}</Typography>
                </ContactBannerContainer>

                <FaqBannerContainer>
                    <Image src={faqIcon} className='faqIcon' alt={"Ícone de interrogação sobre dúvidas frequentes"} priority={false} loading='lazy' />
                    <Typography className='faqTitle' variant='subtitle1'>{lpTexts.faqTitle}</Typography>
                    <FaqContainer />
                </FaqBannerContainer>

            </Container>
            <>
                {errors.map((error, index) => {
                    return (
                        <Snackbar
                            key={index}
                            open={errors.length >= 1}
                            autoHideDuration={3000}
                            message={error}
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            onClose={() => setErrorMessage([])}>
                            <SnackbarMessageAlert
                                sx={{ marginBottom: `${index * 5}rem` }}
                                severity="error"
                                variant="filled"
                                onClose={() => setErrorMessage([])}
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
    )
}