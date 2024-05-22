"use client"

import { serviceAreas } from '@/app/utils/helper/serviceAreaHelper';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { AreaContent, ServiceAreaContainer as Container, ServiceAreaContent, ServiceAreaHeaderContainer as HeaderContainer } from './styles';
import { TextField } from '@mui/material';

export default function ServiceArea() {

    const [selectedState, setSelectState] = useState("Todos")
    const [county, setCounty] = useState("")

    const allStates = [...Object.keys(serviceAreas), "Todos"]

    const handleChange = (event) => {
        setSelectState(event.target.value);
    };

    const handleChangeCounty = (value) => {
        setCounty(value)
    }

    const filteredCounties = selectedState === "Todos"
        ? Object.keys(serviceAreas).reduce((acc, state) => {
            const filtered = serviceAreas[state].filter(c => c.toLowerCase().includes(county.toLowerCase()));
            if (filtered.length > 0) {
                acc[state] = filtered;
            }
            return acc;
        }, {})
        : {
            [selectedState]: serviceAreas[selectedState].filter(c => c.toLowerCase().includes(county.toLowerCase()))
        };

    const hasCounties = Object.keys(filteredCounties).length > 0 &&
        Object.values(filteredCounties).some(counties => counties.length > 0);

    return (
        <Container>
            <ServiceAreaContent>
                <h1 className='title'>Área de atuação Leve</h1>
                <HeaderContainer className='headerContainer'>
                    <Box >
                        <FormControl>
                            <InputLabel id="leve-service-area-select-label">Estados</InputLabel>
                            <Select
                                className='stateSelect'
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedState}
                                label="Estado"
                                onChange={(e) => handleChange(e)}>
                                {allStates.map((option, index) => {
                                    return (
                                        <MenuItem key={index} value={option}>{option}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                    <TextField
                        onChange={(event) => handleChangeCounty(event.target.value)}
                        defaultValue={""}
                        className='countyTextField'
                        value={county}
                        label={`Digite seu município`}
                        placeholder={`Digite seu município`}
                        variant="outlined"
                        type="text"
                    />
                </HeaderContainer>
                <AreaContent>
                    {hasCounties ? (
                        selectedState === "Todos"
                            ? Object.keys(filteredCounties).map((state) => (
                                <div key={state}>
                                    {filteredCounties[state].length > 0 && (
                                        <>
                                            <h2 className='stateTitle'>{state}</h2>
                                            <p className='counties'>{filteredCounties[state].join(", ")}</p>
                                        </>
                                    )}
                                </div>
                            ))
                            : (
                                filteredCounties[selectedState].length > 0 && (
                                    <div>
                                        <h2 className='stateTitle'>{selectedState}</h2>
                                        <p className='counties'>{filteredCounties[selectedState].join(", ")}</p>
                                    </div>
                                )
                            )
                    ) : (
                        <p className='areaNotFound'>A Leve ainda não chegou na sua região 😔</p>
                    )}
                </AreaContent>
            </ServiceAreaContent>

        </Container>
    )
}