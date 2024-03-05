"use client"

import { FormControl, FormControlLabel, RadioGroup, TextField, Typography } from "@mui/material"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import InputMask from "react-input-mask"
import FormButton from "../utils/buttons/FormButton"
import SimulateEconomyTitle from "./SimulateEconomyTitle"
import { SimulateEconomyContainer as Container, FormContainer, SimulateEconomyHeader as Header, RadioContainer, Radios, Sliders, ValidationErrorsContainer } from "./styles"

import { getCurrentDate } from "@/app/utils/date/DateUtils"
import { loadBrowserInfos } from "@/app/utils/browser/BrowserUtils"
import { validationSchema } from "./schema"

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
    const [validationErrors, setValidationErrors] = useState([])

    useEffect(() => {
    }, [validationErrors])


    const handleSubmit = async (event) => {
        event.preventDefault()

        const userInitialData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            cep: cepRef.current.value,
            cost: userCost,
            type: userType,
            simulationDate: getCurrentDate(),
            browserInfo: loadBrowserInfos()
        }

        userType == "cnpj" ? userInitialData["companyName"] = companyNameRef.current.value : null

        validationSchema.validate(userInitialData, { abortEarly: false })
            .then(() => {
                history.pushState(userInitialData, "");
                localStorage.setItem('leveData', JSON.stringify(userInitialData));  //TODO: check this usage

                const path = `/register/${userType}?nome=${userInitialData.name}&email=${userInitialData.email}&telefone=${userInitialData.phone}&cep=${userInitialData.cep}&valor=${userInitialData.cost}&lp=true`;
                router.push(path)
            })
            .catch((err) => {
                console.log(err.errors);
                setValidationErrors(err.errors)
            });


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
                        <FormControlLabel value="cpf" control={<Radios />} label={<Typography variant="subtitle1">Minha casa</Typography>} />
                        <FormControlLabel className="radioLabel" value="cnpj" control={<Radios />} label={<Typography variant="subtitle1">Minha empresa</Typography>} />
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
                    <Sliders onChange={(event) => setUserCost(event.target.value)}
                        min={150}
                        max={3000}
                        valueLabelDisplay="auto" />
                </FormControl>
                <FormControl >
                    <FormButton variant="outlined" type="submit" text={"Quero economizar!"} />
                </FormControl>
            </FormContainer>
            {/* {validationErrors.length >= 1 && (
                <ValidationErrorsContainer>
                    <Typography>Erro nos campos:</Typography>
                    {validationErrors.map((error, index) => (
                        <p key={index}>- {error}</p>
                    ))}
                </ValidationErrorsContainer>
            )} */}

        </Container >
    )
}