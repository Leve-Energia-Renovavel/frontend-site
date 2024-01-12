"use client"

import { useState } from "react"
import { FormControl, Slider, TextField, Typography, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material"
import FormButton from "../utils/buttons/FormButton"
import SimulateEconomyTitle from "./SimulateEconomyTitle"
import { FormContainer, SimulateEconomyContainer } from "./styles"
import { useRouter } from 'next/navigation';


export default function SimulateEconomy() {

    const router = useRouter()

    const minCostValue = 150
    const defaultSelectedRadioButton = "cpf"

    const [userCost, setUserCost] = useState(minCostValue)
    const [userType, setUserType] = useState(defaultSelectedRadioButton)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("userCost ==>> ", userCost, " userType ==>> ", userType)

        // router.push("/")
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
                            style={{ display: 'flex', flexDirection: 'row' }}
                        >
                            <FormControlLabel value="cpf" control={<Radio />} label="Minha Casa" />
                            <FormControlLabel value="cnpj" control={<Radio />} label="Minha Empresa" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl className="formField" >
                        <TextField sx={{ width: '400px' }} className="formInput" label="Nome Completo" variant="outlined" placeholder="Nome Completo" type="text" />
                    </FormControl>
                    <FormControl className="formField">
                        <TextField sx={{ width: '300px' }} className="formInput" label="E-mail" variant="outlined" placeholder="E-mail" type="email" />
                    </FormControl>
                    <FormControl className="formField">
                        <TextField sx={{ width: '180px' }} className="formInput" label="Telefone" variant="outlined" placeholder="Telefone" type="phone" />
                    </FormControl>
                    <FormControl className="formField">
                        <TextField className="formInput" label="CEP" variant="outlined" placeholder="CEP" type="phone" />
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
                        <FormButton className="formInput" variant="outlined" type="submit" text="Simular Economia" />
                    </FormControl>
                </form>
            </FormContainer>
        </SimulateEconomyContainer >
    )
}