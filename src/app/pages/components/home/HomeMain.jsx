"use client"

import { informationNotAccepted, requestSuccessful } from '@/app/service/utils/Validations';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import { Snackbar, TextField } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useRef, useState } from "react";
import InputMask from "react-input-mask";
import infoJson from '../../../../../public/home-info.json';
import economyIcon from "../../../../resources/icons/small/economy-icon-small.png";
import companyCardImage from "../../../../resources/img/large/leve-confraternizacao-image-large.webp";
import homeCardImage from "../../../../resources/img/large/leve-familia-brincando-image-large.webp";
import { schemaValidation } from './schema';
import { HomeContainer as Container, HomeMainForm as Form, FormButton, HomeMainFormContainer as FormContainer, FormSlider, FormTitleContainer, HomeContentContainer as HomeBanner, HomeFormContainer, HomeMainFormSimulationContainer, HomeSecondaryImagesContainer, HomeSecondaryImagesContent, HomeSecondarySectionContainer, Loading, FormSelect as Select, SnackbarMessageAlert, SnackbarMessageNotification, UserTypeFormButtonContainer, UserTypeFormContainer } from "./styles";

const BoxesContainer = dynamic(() => import('./HomeBoxes'), { ssr: false });
const BrandsContainer = dynamic(() => import('./HomeBrands'), { ssr: false });
const HomeEconomyBanner = dynamic(() => import('./HomeEconomyBanner'), { ssr: false });
const HomeSoleBanner = dynamic(() => import('./HomeSoleBanner'), { ssr: false });
const TutorialContainer = dynamic(() => import('./HomeTutorial'), { ssr: false });

import HomeMainBanner from './HomeMainBanner';


export default function HomeMain() {

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

    const handleSelect = (userType) => {
        setSelectedUserType(userType);
    };


    const handlePreSignup = (userType) => {
        const element = document.getElementById('leadForm');
        if (element) {
            window.scrollTo({ top: element.offsetTop - 60, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })

        }
        setSelectedUserType(userType);
    }

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

        else {
            setErrorMessage(["Erro de servidor. Por favor, tente novamente mais tarde"])
            // setErrorMessage([response?.message])
        }

        setLoading(false)

    }

    const texts = infoJson

    return (
        <>
            <Container>
                <HomeBanner>
                    <HomeMainBanner />
                    <HomeFormContainer>
                        <FormContainer>
                            <Form id='leadForm' onSubmit={handleSubmit}>
                                <FormTitleContainer>
                                    <Image src={economyIcon} className='economyIcon' alt={"Logo Leve"} priority />
                                    <h2>{texts.simulate}</h2>
                                </FormTitleContainer>
                                <p variant="body1">{texts.in}<span className="highlighted">{texts.threeClicks}</span>{texts.guarantee}<span className="highlighted">{texts.solarEnergy}</span>{texts.reduceInvoices}</p>
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
                            <HomeMainFormSimulationContainer>
                                <h6 variant="subtitle1" className='averageUserCost'>{texts.averageCost} <span className='simulationCost'>R${simulationCost}{simulationCost === 3000 ? "+" : ""}</span></h6>
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
                            </HomeMainFormSimulationContainer>
                        </FormContainer>
                        <FormButton
                            type='submit'
                            form='leadForm'
                            endIcon={!isLoading ? <ArrowForwardIcon /> : <ArrowForwardIcon sx={{ display: "none" }} />}>
                            {isLoading ? <Loading size={20} /> : <span>{texts.discountCalculate}</span>}
                        </FormButton>
                        <p className='privacyPolicyDisclaimer'>{texts.agreedToReceiveEmails}<span className='privacyPolicy'>{texts.privacyPolicy}</span>.</p>
                    </HomeFormContainer>
                </HomeBanner>

                <HomeSecondarySectionContainer>
                    <BoxesContainer />
                    <HomeSecondaryImagesContainer >
                        <HomeSecondaryImagesContent image={homeCardImage} onClick={() => handlePreSignup("Residencia")} >
                            <h6 variant="subtitle1">{texts.forYourHouse}</h6>
                            <ArrowCircleRightOutlinedIcon className='arrowIcon' />
                        </HomeSecondaryImagesContent>
                        <HomeSecondaryImagesContent invertedBox={true} image={companyCardImage} onClick={() => handlePreSignup("Empresa")}>
                            <h6 variant="subtitle1">{texts.forYourCompany}</h6>
                            <ArrowCircleRightOutlinedIcon className='arrowIcon' />
                        </HomeSecondaryImagesContent>
                    </HomeSecondaryImagesContainer>
                </HomeSecondarySectionContainer>

                <HomeSoleBanner />

                <TutorialContainer />

                <HomeEconomyBanner />

                <BrandsContainer />

            </Container >

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