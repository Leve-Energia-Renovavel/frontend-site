"use client"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import { TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from 'react';
import InputMask from "react-input-mask";
import infoJson from '../../../../../public/home-info.json';
import economyIcon from "../../../../resources/icons/small/economy-icon-small.png";
import bannerImage from "../../../../resources/img/large/leve-paineis-solares-filtro-grao-image-large.webp";
import BrandsContainer from '../home/HomeBrands';
import TutorialContainer from '../home/HomeTutorial';
import BoxesContainer from './LandingPageBoxes';
import {
    LandingPageContainer as Container, LandingPageContent as Content, LandingPageForm as Form, FormButton, LandingMainFormContainer as FormContainer, FormSlider, FormTitleContainer,
    LandingPageBannerFooter,
    LandingPageBannerSecondFooter,
    LandingPageFormContainer, LandingPageFormSimulationContainer,
    Loading, LandingPageBanner as MainBanner, LandingPageMainContent as MainContent, LandingPageMainTitle as MainTitle,
    MoreAboutLeveFooter,
    SecondSectionBanner,
    SecondSectionContainer,
    FormSelect as Select,
    LandingPageSubtitle as Subtitle,
    TutorialBannerContainer,
    UserTypeFormButtonContainer, UserTypeFormContainer
} from "./styles";

export default function LandingPageMain() {

    const [isLoading, setLoading] = useState(false)
    const [simulationCost, setSimulationCost] = useState(150)
    const [selectedUserType, setSelectedUserType] = useState('Residencia');

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const cepRef = useRef()

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
    }


    const handleSelect = (userType) => {
        setSelectedUserType(userType);
    };

    const handlePreSignup = () => {
        const element = document.getElementById('leadForm');
        if (element) {
            window.scrollTo({ top: element.offsetTop - 60, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })

        }
    }

    const texts = infoJson

    return (
        <>
            <Container>
                <MainBanner>
                    <MainContent>
                        <Content>
                            <MainTitle variant="h1">Imagine <span className='highlighted'>R$1.200</span> a mais na sua conta bancária todo final de ano…</MainTitle>
                            <Subtitle>É exatamente isso que a <span className='underlined'>Leve Energia</span> pode fazer por você – e pelo seu bolso</Subtitle>
                            <LandingPageBannerFooter>
                                <LandingPageBannerSecondFooter>
                                    <Typography variant='subtitle1' className='footerTitle'>Sem obras. Sem instalações.</Typography>
                                    <Typography variant='subtitle1' className='footerSubtitle'>E sem gastar R$1 a mais sequer.</Typography>
                                </LandingPageBannerSecondFooter>
                                <MoreAboutLeveFooter>
                                    <Typography variant='subtitle1'>Mais sobre a Leve</Typography>
                                    <ArrowCircleDownIcon className='arrowIcon' />
                                </MoreAboutLeveFooter>
                            </LandingPageBannerFooter>
                        </Content>
                    </MainContent>
                    <LandingPageFormContainer>
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
                        <Typography className='privacyPolicyDisclaimer'>Ao informar seu e-mail, você concorda em receber e-mails da Leve Energia Renovável e aceita nossa <span className='privacyPolicy'>Política de Privacidade</span>.</Typography>
                    </LandingPageFormContainer>
                </MainBanner>

                <SecondSectionContainer image={bannerImage}>
                    <BoxesContainer />
                    <SecondSectionBanner>
                        <Typography className='bannerTitle'>Viu como é Leve?</Typography>
                        <Typography className='bannerDescription'>Clique no botão abaixo e veja que aqui a sua economia é real:</Typography>
                        <Typography className='simulateButton' onClick={() => handlePreSignup()}>Simular agora</Typography>
                    </SecondSectionBanner>
                </SecondSectionContainer>

                <TutorialBannerContainer>
                    <TutorialContainer />
                </TutorialBannerContainer>

                <BrandsContainer />

            </Container>
        </>
    )
}