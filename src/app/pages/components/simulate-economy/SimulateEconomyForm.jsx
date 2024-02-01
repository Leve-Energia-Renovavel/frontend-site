"use client"

import { FormControl, FormControlLabel, Radio, RadioGroup, Slider, TextField, Typography, CircularProgress } from "@mui/material"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
import InputMask from "react-input-mask"
import FormButton from "../utils/buttons/FormButton"
import SimulateEconomyTitle from "./SimulateEconomyTitle"
import { FormContainer, SimulateEconomyHeader as Header, SimulateEconomyContainer as Container, radioButtonLabelStyle, radioButtonStyle, RadioContainer } from "./styles"

export default function SimulateEconomy() {

    const router = useRouter()

    const nameRef = useRef()
    const companyNameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const cepRef = useRef()

    const minCostValue = 150
    const defaultSelectedRadioButton = "cpf"

    const [userCost, setUserCost] = useState(minCostValue)
    const [userType, setUserType] = useState(defaultSelectedRadioButton)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const userInitialData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            cep: cepRef.current.value,
            cost: userCost,
            type: userType,
        }

        userType == "cnpj" ? userInitialData["companyName"] = companyNameRef.current.value : null

        history.pushState(userInitialData, "");
        localStorage.setItem('leveData', JSON.stringify(userInitialData));  //TODO: check this usage
        router.push(`/register/${userType}`)

    }
    return (
        <Container>
            <Header>
                <SimulateEconomyTitle />
                <RadioContainer>
                    <Typography className="whereToSimulate">Escolha onde quer simular a economia:</Typography>
                    <RadioGroup
                        className="radioGroup"
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={defaultSelectedRadioButton}
                        name="radio-buttons-group"
                        onChange={(event) => setUserType(event.target.value)}
                    >
                        <FormControlLabel value="cpf" control={<Radio sx={radioButtonStyle} />} label={<Typography variant="subtitle1">Minha casa</Typography>} />
                        <FormControlLabel className="radioLabel" value="cnpj" control={<Radio sx={radioButtonStyle} />} label={<Typography variant="subtitle1">Minha empresa</Typography>} />
                    </RadioGroup>
                </RadioContainer>
            </Header>
            <FormContainer acceptCharset="UTF-8" method="POST" onSubmit={handleSubmit}>
                {userType === "cnpj" && (
                    <FormControl className="isCNPJ">
                        <TextField required label="Nome da Empresa" variant="outlined" placeholder="Nome da Empresa" type="text" inputRef={companyNameRef} />
                    </FormControl>
                )}

                <FormControl>
                    <TextField required label={`Nome Completo ${userType === "cnpj" ? "do Responsavel" : ""}`} variant="outlined" placeholder="Nome Completo" type="text" inputRef={nameRef} />
                </FormControl>
                <FormControl>
                    <TextField required label={`E-mail ${userType === "cnpj" ? "do Responsavel" : ""}`} variant="outlined" placeholder="E-mail" type="email" inputRef={emailRef} />
                </FormControl>
                <FormControl>
                    <InputMask mask="(99) 99999-9999">
                        {() => <TextField required label={`Telefone ${userType === "cnpj" ? "do Responsavel" : ""}`} variant="outlined" placeholder="Telefone" type="phone" inputRef={phoneRef} />}
                    </InputMask>
                </FormControl>
                <FormControl>
                    <InputMask mask="99999-999">
                        {() => <TextField required label="CEP" variant="outlined" placeholder="CEP" type="phone" inputRef={cepRef} />}
                    </InputMask>

                </FormControl>
                <FormControl className="slider">
                    <Typography className="averageMonthlyCost">Custo mensal médio <span className="monthyCostValue">R$ {userCost}</span></Typography>
                    <Slider onChange={(event) => setUserCost(event.target.value)}
                        min={150}
                        max={3000}
                        sx={{
                            color: '#FFE04C', //color of the slider between thumbs
                            height: '0.5rem',
                            "& .MuiSlider-thumb": {
                                backgroundColor: '#0075FF' //color of thumbs
                            },
                            "& .MuiSlider-rail": {
                                color: 'lightblue'
                            }
                        }}
                        valueLabelDisplay="auto" />
                </FormControl>
                <FormControl >
                    <FormButton variant="outlined" type="submit" text={"Quero economizar!"} />
                </FormControl>
            </FormContainer>
        </Container >
    )
}