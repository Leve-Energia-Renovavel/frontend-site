"use client"

import { FormControl, FormControlLabel, Radio, RadioGroup, Slider, TextField, Typography } from "@mui/material"
import { useState } from "react"
import FormButton from "../utils/buttons/FormButton"
import SimulateEconomyTitle from "./SimulateEconomyTitle"
import { FormContainer, SimulateEconomyContainer } from "./styles"
import Link from "next/link"
import { useRef } from "react"
import { useRouter } from "next/navigation"
import { red } from "@mui/material/colors"

export default function SimulateEconomy() {

    const router = useRouter()

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const cepRef = useRef()

    const minCostValue = 150
    const defaultSelectedRadioButton = "cpf"

    const [userCost, setUserCost] = useState(minCostValue)
    const [userType, setUserType] = useState(defaultSelectedRadioButton)

    const radioButtonStyle = {
        color: 'black',
        '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)': {
            color: 'blue',
        },
        '&.Mui-checked': {
            color: 'yellow',
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const userInitialData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            cep: cepRef.current.value,
            cost: userCost,
            type: userType,
        }

        history.pushState(userInitialData, "");
        router.push(`/register/${userType}`)

    }
    return (
        <SimulateEconomyContainer>
            <SimulateEconomyTitle />
            <FormContainer>
                <form
                    acceptCharset="UTF-8"
                    method="POST"
                    onSubmit={handleSubmit}>

                    <FormControl className="formField" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Typography variant="subtitle1">Escolha onde quer simular a economia:</Typography>

                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={defaultSelectedRadioButton}
                            name="radio-buttons-group"
                            onChange={(event) => setUserType(event.target.value)}
                            // style={{ display: 'flex', flexDirection: 'row' }}
                            sx={{ display: 'flex', flexDirection: 'row' }}
                        >
                            <FormControlLabel value="cpf" control={<Radio sx={radioButtonStyle} />} label="Minha Casa" />
                            <FormControlLabel value="cnpj" control={<Radio sx={radioButtonStyle} />} label="Minha Empresa" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl className="formField" >
                        <TextField sx={{ width: '400px' }} className="formInput" label="Nome Completo" variant="outlined" placeholder="Nome Completo" type="text" inputRef={nameRef} />
                    </FormControl>
                    <FormControl className="formField">
                        <TextField sx={{ width: '300px' }} className="formInput" label="E-mail" variant="outlined" placeholder="E-mail" type="email" inputRef={emailRef} />
                    </FormControl>
                    <FormControl className="formField">
                        <TextField sx={{ width: '180px' }} className="formInput" label="Telefone" variant="outlined" placeholder="Telefone" type="phone" inputRef={phoneRef} />
                    </FormControl>
                    <FormControl className="formField">
                        <TextField className="formInput" label="CEP" variant="outlined" placeholder="CEP" type="phone" inputRef={cepRef} />
                    </FormControl>
                    <FormControl className="formField" sx={{ width: '280px' }}>
                        <Typography variant="subtitle1"> Custo mensal (em média) <span>R$ {userCost}</span></Typography>
                        <Slider onChange={(event) => setUserCost(event.target.value)}
                            className="formInput"
                            min={150}
                            max={3000}
                            valueLabelDisplay="auto" />
                    </FormControl>
                    <FormControl className="formField" >
                        {/* <Link href={{
                            pathname: `/register/${userType}`,
                            query: { userCost: userCost }
                        }}>
                        </Link> */}
                        <FormButton className="formInput" variant="outlined" type="submit" text="Simular Economia" />
                    </FormControl>
                </form>
            </FormContainer>
        </SimulateEconomyContainer >
    )
}