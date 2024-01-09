"use client"

import { useState } from "react"
import { FormControl, Slider, TextField, Typography } from "@mui/material"
import FormButton from "../utils/buttons/FormButton"
import SimulateEconomyTitle from "./SimulateEconomyTitle"
import { FormContainer, SimulateEconomyContainer } from "./styles"

export default function SimulateEconomy() {

    const minCostValue = 150

    const [userCost, setUserCost] = useState(minCostValue)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("handleSubmit")
    }
    return (
        <SimulateEconomyContainer>
            <SimulateEconomyTitle />
            <FormContainer>
                <form
                    acceptCharset="UTF-8"
                    method="POST"
                    onSubmit={handleSubmit}>
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
                        <FormButton className="formInput" variant="outlined" type="submit" >Simular Economia</FormButton>
                    </FormControl>
                </form>
            </FormContainer>
        </SimulateEconomyContainer >
    )
}