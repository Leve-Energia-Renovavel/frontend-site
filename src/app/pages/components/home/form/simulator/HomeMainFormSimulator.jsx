"use client"

import { USER_COST } from '@/enums/globalEnums';
import infoJson from '../../../../../../../public/info.json';
import { FormSlider, HomeMainFormSimulationContainer } from './styles';

export default function HomeMainFormSimulator({ isMobile, simulationCost, handleSimulationCost }) {

    const texts = infoJson.home

    return (
        <HomeMainFormSimulationContainer className={`homeSimulatorContainer${isMobile ? 'Mobile' : ""}`} isMobile={isMobile}>
            <h6 className='averageUserCost'>{texts.averageCost} <span className='simulationCost'>R${simulationCost}{simulationCost === USER_COST.MAX ? "+" : ""}</span></h6>
            <FormSlider
                className='formSlider'
                onChange={(event) => handleSimulationCost(event.target.value)}
                value={simulationCost}
                step={10}
                defaultValue={USER_COST.MIN}
                min={USER_COST.MIN}
                max={USER_COST.MAX}
                valueLabelDisplay="off"
                aria-labelledby="simulationSlider"
            />
        </HomeMainFormSimulationContainer>
    )
}