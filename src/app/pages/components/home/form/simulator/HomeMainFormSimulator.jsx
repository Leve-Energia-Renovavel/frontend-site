"use client"

import { USER_COST } from '@/enums/globalEnums';
import infoJson from '../../../../../../../public/info.json';
import { FormSlider, HomeMainFormSimulationContainer } from './styles';

export default function HomeMainFormSimulator({ simulationCost, handleSimulationCost }) {

    const texts = infoJson.home

    return (
        <HomeMainFormSimulationContainer className={`homeSimulatorContainer`}>
            <h6 className='averageUserCost'>{texts.averageCost} <span className='simulationCost'>R${simulationCost}{simulationCost === USER_COST.MAX ? "+" : ""}</span></h6>
            <FormSlider
                className='formSlider'
                name='cost'
                onChange={handleSimulationCost}
                value={simulationCost}
                step={10}
                defaultValue={USER_COST.MIN}
                min={USER_COST.MIN}
                max={USER_COST.MAX}
                valueLabelDisplay="auto"
                aria-labelledby="simulationSlider"
            />
        </HomeMainFormSimulationContainer>
    )
}