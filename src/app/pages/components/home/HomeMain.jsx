"use client"

import { homeBoxes } from '@/app/utils/helper/homeBoxesHelper';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import { TextField, Typography, Snackbar } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";
import InputMask from "react-input-mask";
import logoLeve from "../../../../resources/icons/small/leve-new-logo-small.svg";
import companyCardImage from "../../../../resources/img/large/leve-confraternizacao-image-large.png";
import homeCardImage from "../../../../resources/img/large/leve-familia-brincando-image-large.png";
import bannerImage from "../../../../resources/img/large/leve-mulher-sorrindo-banner-image-large.png";
import { HomeContainer as Container, HomeMainForm as Form, FormButton, HomeMainFormContainer as FormContainer, FormSlider, HomeContentContainer as HomeBanner, HomeFormContainer, HomeMainContent, HomeMainFormSimulationContainer, HomeMainTitle, HomeSecondaryBoxContent, HomeSecondaryBoxTitle, HomeSecondaryBoxesContainer, HomeSecondaryImagesContainer, HomeSecondaryImagesContent, HomeSecondarySectionContainer, HomeThirdSectionContainer, HomeThirdSectionSoleContainer, HomeThirdSectionTitleContainer, FormSelect as Select, SnackbarMessageAlert, SnackbarMessageNotification, UserTypeFormButtonContainer, UserTypeFormContainer } from "./styles";
import soleImage from "../../../../resources/icons/large/sole-icon-large.png"
import { leadSchema } from './schema';
import { startSignUp } from '@/app/service/lead-service/LeadService';
import { requestSuccessful } from '@/app/service/utils/Validations';

export default function HomeMain() {

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
            .catch((err) => {
                console.log(err.errors);
                return err.errors
            });

        return response
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const submitData = {
            nome: nameRef.current.value,
            email: emailRef.current.value,
            telefone: phoneRef.current.value,
            cep: cepRef.current.value,
            valor: simulationCost,
            redirect_to: "www.leveenergia.com.br",
            type: selectedUserType === "Residencia" ? "PF" : "PJ"
        }

        console.log("submitData ===>>", submitData)

        const response = await schemaValidation(submitData)
        console.log("response ===>>", response)

        // if (requestSuccessful(response.status)) {

        // }

    }

    return (
        <>
            <Container>
                <HomeBanner>
                    <HomeMainContent image={bannerImage}>
                        <Image src={logoLeve} className='logoLeve' alt={"Logo Leve"} />
                        <HomeMainTitle variant="h1">A energia do futuro é <span className='underline'>Leve</span></HomeMainTitle>
                    </HomeMainContent>
                    <HomeFormContainer>
                        <FormContainer>
                            <Form id='leadForm' onSubmit={handleSubmit} >
                                <Typography variant="h2">Simule sua economia real:</Typography>
                                <Typography variant="body1">Em <span className="highlighted">3 cliques</span>, você garante <span className="highlighted">energia solar por assinatura</span> e reduz sua despesa na conta de luz todos os meses:</Typography>
                                <TextField
                                    inputRef={nameRef}
                                    className="homeFormInput"
                                    label={`Nome Completo`}
                                    placeholder={`Nome Completo`}
                                    variant="outlined"
                                    type="text"
                                    required
                                />
                                <InputMask mask="(99) 99999-9999">
                                    {() => <TextField
                                        className="homeFormInput"
                                        inputRef={phoneRef}
                                        label={`Telefone (com DDD)`}
                                        placeholder={`Telefone`}
                                        variant="outlined"
                                        type="text"
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
                                    required
                                />

                                <UserTypeFormContainer>
                                    <Typography variant="body1">Quero economizar na minha:</Typography>
                                    <UserTypeFormButtonContainer>
                                        <Select
                                            startIcon={<StoreIcon />}
                                            onClick={() => handleSelect('Empresa')}
                                            selected={selectedUserType === 'Empresa'} >
                                            Empresa
                                        </Select>
                                        <Select
                                            startIcon={<HomeIcon />}
                                            onClick={() => handleSelect('Residencia')}
                                            selected={selectedUserType === 'Residencia'}>
                                            Residência
                                        </Select>
                                    </UserTypeFormButtonContainer>
                                </UserTypeFormContainer>
                                <InputMask mask="99999-999">
                                    {() => <TextField
                                        className="homeFormInput"

                                        inputRef={cepRef}
                                        label={`CEP`}
                                        placeholder={`CEP`}
                                        variant="outlined"
                                        type="text"
                                        required
                                    />}
                                </InputMask>
                            </Form>
                            <HomeMainFormSimulationContainer>
                                <Typography variant="subtitle1">Valor médio da fatura: <span className='simulationCost'>R$ {simulationCost}</span></Typography>
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
                            endIcon={<ArrowForwardIcon />}>
                            <span>Calcular desconto</span></FormButton>
                    </HomeFormContainer>
                </HomeBanner>

                <HomeSecondarySectionContainer>
                    <HomeSecondaryBoxesContainer>
                        {homeBoxes.map((box) => {
                            return (
                                <HomeSecondaryBoxContent color={box.backgroundColor} descriptionColor={box.descriptionColor} key={box.description}>
                                    <HomeSecondaryBoxTitle titleColor={box.titleColor} >
                                        <Image src={box.icon} className="titleIcon" alt={box.description} />
                                        <Typography variant="subtitle1">{box.title}</Typography>
                                    </HomeSecondaryBoxTitle>
                                    <Typography variant="subtitle1" className='boxDescription'>{box.description}</Typography>
                                </HomeSecondaryBoxContent>
                            )
                        })}
                    </HomeSecondaryBoxesContainer>

                    <HomeSecondaryImagesContainer>
                        <HomeSecondaryImagesContent image={homeCardImage} onClick={() => handlePreSignup("Residencia")}>
                            <Typography variant="subtitle1">Para a sua residência</Typography>
                            <ArrowCircleRightOutlinedIcon className='arrowIcon' />
                        </HomeSecondaryImagesContent>
                        <HomeSecondaryImagesContent image={companyCardImage} onClick={() => handlePreSignup("Empresa")}>
                            <Typography variant="subtitle1">Para o seu comércio ou empresa</Typography>
                            <ArrowCircleRightOutlinedIcon className='arrowIcon' />
                        </HomeSecondaryImagesContent>
                    </HomeSecondaryImagesContainer>



                </HomeSecondarySectionContainer>
                <HomeThirdSectionContainer>
                    <HomeThirdSectionTitleContainer>
                        <Typography variant="subtitle1" className='sectionTitle'>Com adesão <span className='highlighted'>100% digital</span>, você garante <span className='highlighted'>energia solar por assinatura</span> para sua casa e/ou seu negócio.</Typography>
                        <Typography variant="subtitle1" className='sectionSubtitle'>É simples, rápido, sem obras e livre de burocracias!</Typography>
                    </HomeThirdSectionTitleContainer>
                    <HomeThirdSectionSoleContainer>
                        <Image src={soleImage} className="sole" alt={"Imagem de Sole, personagem da Leve, carregando uma placa solar"} />
                    </HomeThirdSectionSoleContainer>

                </HomeThirdSectionContainer>


            </Container>

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