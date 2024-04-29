"use client"

import { startSignUp } from '@/app/service/lead-service/LeadService';
import { requestSuccessful } from '@/app/service/utils/Validations';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import { Snackbar, TextField, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useRef, useState } from "react";
import InputMask from "react-input-mask";
import infoJson from '../../../../../public/home-info.json';
import economyIcon from "../../../../resources/icons/small/economy-icon-small.png";
import companyCardImage from "../../../../resources/img/large/leve-confraternizacao-image-large.png";
import homeCardImage from "../../../../resources/img/large/leve-familia-brincando-image-large.png";
import bannerImage from "../../../../resources/img/large/leve-mulher-sorrindo-banner-image-large.png";
import { leadSchema } from './schema';
import { ButtonSimulateYourEconomy, HomeContainer as Container, HomeMainForm as Form, FormButton, HomeMainFormContainer as FormContainer, FormSlider, FormTitleContainer, HomeContentContainer as HomeBanner, HomeContent, HomeFormContainer, HomeFourthSectionContainer, HomeMainContent, HomeMainFormSimulationContainer, HomeMainTitle, HomeMainTitleContainer, HomeSecondaryImagesContainer, HomeSecondaryImagesContent, HomeSecondarySectionContainer, HomeSubtitleContainer, Loading, FormSelect as Select, SnackbarMessageAlert, SnackbarMessageNotification, UserTypeFormButtonContainer, UserTypeFormContainer } from "./styles";

const BoxesContainer = dynamic(() => import('./HomeBoxes'), { ssr: false });
const BrandsContainer = dynamic(() => import('./HomeBrands'), { ssr: false });
const HomeEconomyBanner = dynamic(() => import('./HomeEconomyBanner'), { ssr: false });
const HomeSoleBanner = dynamic(() => import('./HomeSoleBanner'), { ssr: false });
const TutorialContainer = dynamic(() => import('./HomeTutorial'), { ssr: false });


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

    const schemaValidation = async (data) => {
        const response = await leadSchema.validate(data, { abortEarly: false })
            .then(async () => {
                return await startSignUp(data)

            })
            .catch((error) => {
                console.log(error);
                return error
            });

        return response
    }

    const handleScroll = () => {
        const element = document.getElementById('howLeveWorks');
        if (element) {
            window.scrollTo({ top: element.offsetTop - 60, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 500, behavior: 'smooth' })
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)

        const isValidString = /^[a-zA-Z\s]+$/.test(nameRef.current.value);

        if (isValidString) {
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
                const uuid = response?.data?.uuid
                setNotifications(["Simulação realizada com sucesso!"])
                router.push(`/signup/?uuid=${uuid}`)

            } else {
                setErrorMessage([response?.message])
            }

        } else {
            setErrorMessage(["Nome inválido. Por favor, revise as informações"])
        }

    }

    const texts = infoJson


    return (
        <>
            <Container>
                <HomeBanner>
                    <HomeMainContent image={bannerImage}>
                        <HomeContent>
                            <HomeMainTitleContainer>
                                <HomeMainTitle variant="h1">{texts.title}<span className='underline'>{texts.leve}</span></HomeMainTitle>
                                <HomeSubtitleContainer onClick={() => handleScroll()}>
                                    <Typography variant="subtitle1" className='moreAboutLeve'>{texts.about}</Typography>
                                    <ArrowCircleDownIcon className='arrowIcon' />
                                </HomeSubtitleContainer>
                            </HomeMainTitleContainer>
                        </HomeContent>
                    </HomeMainContent>
                    <HomeFormContainer>
                        <FormContainer>
                            <Form id='leadForm' onSubmit={handleSubmit}>
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
                            <HomeMainFormSimulationContainer>
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
                            </HomeMainFormSimulationContainer>
                        </FormContainer>
                        <FormButton
                            type='submit'
                            form='leadForm'
                            endIcon={!isLoading ? <ArrowForwardIcon /> : <ArrowForwardIcon sx={{ display: "none" }} />}>
                            {isLoading ? <Loading size={20} /> : <span>{texts.discountCalculate}</span>}
                        </FormButton>
                        <Typography className='privacyPolicyDisclaimer'>Ao informar seu e-mail, você concorda em receber e-mails da Leve Energia Renovável e aceita nossa <span className='privacyPolicy'>Política de Privacidade</span>.</Typography>
                    </HomeFormContainer>
                </HomeBanner>

                <HomeSecondarySectionContainer>
                    <BoxesContainer />
                    <HomeSecondaryImagesContainer >
                        <HomeSecondaryImagesContent image={homeCardImage} onClick={() => handlePreSignup("Residencia")} >
                            <Typography variant="subtitle1">{texts.forYourHouse}</Typography>
                            <ArrowCircleRightOutlinedIcon className='arrowIcon' />
                        </HomeSecondaryImagesContent>
                        <HomeSecondaryImagesContent invertedBox={true} image={companyCardImage} onClick={() => handlePreSignup("Empresa")}>
                            <Typography variant="subtitle1">{texts.forYourCompany}</Typography>
                            <ArrowCircleRightOutlinedIcon className='arrowIcon' />
                        </HomeSecondaryImagesContent>
                    </HomeSecondaryImagesContainer>
                </HomeSecondarySectionContainer>

                <HomeSoleBanner />

                <HomeFourthSectionContainer id="howLeveWorks">
                    <TutorialContainer />
                    <ButtonSimulateYourEconomy onClick={() => handlePreSignup()}>
                        <span>{texts.simulateYourEconomy}</span>
                    </ButtonSimulateYourEconomy>
                </HomeFourthSectionContainer>

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