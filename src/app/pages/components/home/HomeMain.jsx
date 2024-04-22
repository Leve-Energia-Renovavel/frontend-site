"use client"

import { useStoreUser } from '@/app/hooks/useStore';
import { startSignUp } from '@/app/service/lead-service/LeadService';
import { requestSuccessful } from '@/app/service/utils/Validations';
import { brands, homeBoxes, homeTutorialCards } from '@/app/utils/helper/homeBoxesHelper';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import { Snackbar, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useRef, useState } from "react";
import InputMask from "react-input-mask";
import infoJson from '../../../../../public/info.json';
import soleImage from "../../../../resources/icons/large/sole-icon-large.png";
import economyIcon from "../../../../resources/icons/small/economy-icon-small.png";
import companyCardImage from "../../../../resources/img/large/leve-confraternizacao-image-large.png";
import homeCardImage from "../../../../resources/img/large/leve-familia-brincando-image-large.png";
import bannerImage from "../../../../resources/img/large/leve-mulher-sorrindo-banner-image-large.png";
import secondBannerImage from "../../../../resources/img/large/leve-pai-e-filho-image-large.png";
import { leadSchema } from './schema';
import { HomeContainer as Container, HomeMainForm as Form, FormButton, HomeMainFormContainer as FormContainer, FormSlider, FormTitleContainer, HomeContentContainer as HomeBanner, HomeContent, HomeFifthSectionBanner, HomeFifthSectionBannerContainer, HomeFifthSectionContainer, HomeFifthSectionContentContainer, HomeFifthSectionDescriptionContainer, HomeFifthSectionTitleContainer, HomeFormContainer, HomeFourthSectionCard, HomeFourthSectionCardContainer, HomeFourthSectionContainer, HomeFourthSectionDescription, HomeFourthSectionIcon, HomeFourthSectionTitle, HomeFourthSectionTitleContainer, HomeMainContent, HomeMainFormSimulationContainer, HomeMainTitle, HomeMainTitleContainer, HomeSecondaryBoxContent, HomeSecondaryBoxTitle, HomeSecondaryBoxesContainer, HomeSecondaryImagesContainer, HomeSecondaryImagesContent, HomeSecondarySectionContainer, HomeSixthSectionCard, HomeSixthSectionCardContainer, HomeSixthSectionContainer, HomeSixthSectionTitleContainer, HomeSubtitleContainer, HomeThirdSectionContainer, HomeThirdSectionSoleContainer, HomeThirdSectionSubTitle, HomeThirdSectionTitleContainer, Loading, FormSelect as Select, SnackbarMessageAlert, SnackbarMessageNotification, UserTypeFormButtonContainer, UserTypeFormContainer } from "./styles";


export default function HomeMain() {

    const router = useRouter()
    const store = useStoreUser()

    const [isLoading, setLoading] = useState(false)
    const [simulationCost, setSimulationCost] = useState(150)
    const [selectedUserType, setSelectedUserType] = useState('Residencia');

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const cepRef = useRef()

    const [validationErrors, setValidationErrors] = useState([]);
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
                router.push(`/signup/?uuid=${uuid}`)

            } else {
                setValidationErrors([response?.message])
            }

        } else {
            setValidationErrors(["Nome inválido. Por favor, revise as informações"])
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
                                    <Image src={economyIcon} className='logoLeve' alt={"Logo Leve"} loading="eager" priority={true} />
                                    <Typography variant="h2">{texts.simulate}</Typography>
                                </FormTitleContainer>
                                <Typography variant="body1">{texts.in}<span className="highlighted">{texts.threeClicks}</span>{texts.guarantee}<span className="highlighted">{texts.solarEnergy}</span>{texts.reduceInvoices}</Typography>
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
                                    label={`E-mail`}
                                    placeholder={`E-mail`}
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
                                <Typography variant="subtitle1" className='averageUserCost'>{texts.averageCost} <span className='simulationCost'>R${simulationCost}</span></Typography>
                                <FormSlider
                                    onChange={(event) => setSimulationCost(event.target.value)}
                                    value={simulationCost}
                                    step={10}
                                    defaultValue={150}
                                    min={150}
                                    max={3000}
                                    valueLabelDisplay="off" />
                            </HomeMainFormSimulationContainer>
                        </FormContainer>
                        <FormButton
                            type='submit'
                            form='leadForm'
                            endIcon={!isLoading ? <ArrowForwardIcon /> : <ArrowForwardIcon sx={{ display: "none" }} />}>
                            {isLoading ? <Loading size={20} /> : <span>{texts.discountCalculate}</span>}</FormButton>
                    </HomeFormContainer>
                </HomeBanner>

                <HomeSecondarySectionContainer>
                    <HomeSecondaryBoxesContainer>
                        {homeBoxes.map((box) => {
                            return (
                                <HomeSecondaryBoxContent color={box.backgroundColor} descriptionColor={box.descriptionColor} key={box.description}>
                                    <HomeSecondaryBoxTitle titleColor={box.titleColor} >
                                        <Image src={box.icon} className="titleIcon" alt={box.description} loading="eager" priority={true} />
                                        <Typography variant="subtitle1">{box.title}</Typography>
                                    </HomeSecondaryBoxTitle>
                                    <Typography variant="subtitle1" className='boxDescription'>{box.description}</Typography>
                                </HomeSecondaryBoxContent>
                            )
                        })}
                    </HomeSecondaryBoxesContainer>

                    <HomeSecondaryImagesContainer >
                        <HomeSecondaryImagesContent image={homeCardImage} onClick={() => handlePreSignup("Residencia")} >
                            <Typography variant="subtitle1">{texts.forYourHouse}</Typography>
                            <ArrowCircleRightOutlinedIcon className='arrowIcon' />
                        </HomeSecondaryImagesContent>
                        <HomeSecondaryImagesContent image={companyCardImage} onClick={() => handlePreSignup("Empresa")}>
                            <Typography variant="subtitle1">{texts.forYourCompany}</Typography>
                            <ArrowCircleRightOutlinedIcon className='arrowIcon' />
                        </HomeSecondaryImagesContent>
                    </HomeSecondaryImagesContainer>
                </HomeSecondarySectionContainer>

                <HomeThirdSectionContainer>
                    <HomeThirdSectionTitleContainer >
                        <Typography variant="subtitle1" className='sectionTitle'>{texts.accession}<span className='highlighted'>{texts.hundredDigital}</span>{texts.guarantee}<span className='highlighted'>{texts.solarEnergy}</span>{texts.houseOrBusiness}</Typography>
                    </HomeThirdSectionTitleContainer>
                    <div className='rowToBeReversed'>
                        <HomeThirdSectionSoleContainer >
                            <Image src={soleImage} className="sole" alt={"Imagem de Sole, personagem da Leve, carregando uma placa solar"} loading="eager" priority={true} />
                        </HomeThirdSectionSoleContainer>
                        <HomeThirdSectionSubTitle >
                            <Typography variant="subtitle1" className='sectionSubtitle'>{texts.simpleFastFree}</Typography>
                        </HomeThirdSectionSubTitle>
                    </div>
                </HomeThirdSectionContainer>

                <HomeFourthSectionContainer id="howLeveWorks">
                    <HomeFourthSectionTitleContainer>
                        <Typography variant="subtitle1" className='sectionTitle'>{texts.howItWorks}</Typography>
                    </HomeFourthSectionTitleContainer>

                    <HomeFourthSectionCardContainer >
                        {homeTutorialCards.map((card, index) => {
                            return (
                                <HomeFourthSectionCard key={index}>
                                    <HomeFourthSectionIcon>
                                        <Image src={card.icon} className="titleIcon" alt={card.description} loading="eager" priority={true} />
                                    </HomeFourthSectionIcon>
                                    <div className='invisible'>
                                        <HomeFourthSectionTitle>
                                            <Typography variant="subtitle1" className='cardTitle'>{`${index}.`}</Typography>
                                        </HomeFourthSectionTitle>
                                        <HomeFourthSectionDescription>
                                            <Typography variant="subtitle1" className='cardDescription'>{card.description}</Typography>
                                        </HomeFourthSectionDescription>
                                    </div>
                                </HomeFourthSectionCard>

                            )
                        })}
                    </HomeFourthSectionCardContainer>
                </HomeFourthSectionContainer>

                <HomeFifthSectionContainer>
                    <HomeFifthSectionBannerContainer>
                        <HomeFifthSectionBanner image={secondBannerImage} />
                    </HomeFifthSectionBannerContainer>
                    <HomeFifthSectionContentContainer>
                        <HomeFifthSectionTitleContainer>
                            <Typography variant="subtitle1" className='sectionTitle'>{texts.weBelieve}</Typography>
                        </HomeFifthSectionTitleContainer>
                        <HomeFifthSectionDescriptionContainer>
                            <Typography variant="subtitle1" className='sectionDescription'>{texts.moreToKnow}<ArrowForwardIcon /></Typography>
                        </HomeFifthSectionDescriptionContainer>
                    </HomeFifthSectionContentContainer>
                </HomeFifthSectionContainer>


                <HomeSixthSectionContainer>
                    <HomeSixthSectionTitleContainer>
                        <Typography variant="subtitle1" className='sectionTitle'>{texts.brandsThatTrust}</Typography>
                    </HomeSixthSectionTitleContainer>

                    <HomeSixthSectionCardContainer >
                        {brands.map((brand, index) => {
                            return (
                                <HomeSixthSectionCard key={brand.company}>
                                    <Image src={brand.logo} alt={brand.company} className='brandLogo' loading="eager" priority={true} />
                                </HomeSixthSectionCard>
                            )
                        })}

                    </HomeSixthSectionCardContainer>
                </HomeSixthSectionContainer>
            </Container >

            <>
                {validationErrors.map((error, index) => {
                    return (
                        <Snackbar
                            key={index}
                            open={validationErrors.length >= 1}
                            autoHideDuration={3000}
                            message={error}
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            onClose={() => setValidationErrors([])}>
                            <SnackbarMessageAlert
                                sx={{ marginBottom: `${index * 5}rem` }}
                                severity="error"
                                variant="filled"
                                onClose={() => setValidationErrors([])}
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