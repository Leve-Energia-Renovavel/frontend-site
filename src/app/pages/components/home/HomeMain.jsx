"use client"

import HomeIcon from '@mui/icons-material/Home'
import StoreIcon from '@mui/icons-material/Store'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { TextField, Typography } from "@mui/material"
import Image from "next/image"
import { useRef, useState } from "react"
import InputMask from "react-input-mask"
import logoLeve from "../../../../resources/icons/small/leve-new-logo-small.svg"
import bannerImage from "../../../../resources/img/large/leve-mulher-sorrindo-banner-image-large.png"
import { HomeContainer as Container, HomeMainForm as Form, FormButton, HomeMainFormContainer as FormContainer, HomeContentContainer, HomeFormContainer, HomeMainContent, HomeMainTitle, FormSelect as Select, UserTypeFormButtonContainer, UserTypeFormContainer } from "./styles"
export default function HomeMain() {

    const [selectedUserType, setSelectedUserType] = useState('Residencia');

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const cepRef = useRef()

    const handleSelect = (userType) => {
        setSelectedUserType(userType);
    };

    return (
        <Container>
            <HomeContentContainer>
                <HomeMainContent image={bannerImage}>
                    <Image src={logoLeve} width={370} height={62} alt={"banner da Leve com uma mulher sorrindo ao usar notebook"} />
                    <HomeMainTitle variant="h1">A energia do futuro é <span className='underline'>Leve</span></HomeMainTitle>
                </HomeMainContent>
                <HomeFormContainer>
                    <FormContainer>
                        <Form>
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
                                    label={`Telefone`}
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
                    </FormContainer>
                    <FormButton
                        endIcon={<ArrowForwardIcon />}>
                        <span>Calcular desconto</span></FormButton>
                </HomeFormContainer>

            </HomeContentContainer>
        </Container>
    )
}