"use client"

import { useState } from 'react';
import infoJson from '../../../../../../../public/info.json';
import { FormSlider, HomeMainFormSimulationContainer } from './styles';

export default function HomeMainFormSimulator({ isMobile }) {

    const [simulationCost, setSimulationCost] = useState(200)
    const minSimulationCost = 200

    const texts = infoJson.home

    return (
        <HomeMainFormSimulationContainer className={`homeSimulatorContainer${isMobile ? 'Mobile' : ""}`} isMobile={isMobile}>
            <h6 className='averageUserCost'>{texts.averageCost} <span className='simulationCost'>R${simulationCost}{simulationCost === 3000 ? "+" : ""}</span></h6>
            <FormSlider
                className='formSlider'
                onChange={(event) => setSimulationCost(event.target.value)}
                value={simulationCost}
                step={10}
                defaultValue={minSimulationCost}
                min={minSimulationCost}
                max={3000}
                valueLabelDisplay="off"
                aria-labelledby="simulationSlider"
            />
        </HomeMainFormSimulationContainer>
    )
}