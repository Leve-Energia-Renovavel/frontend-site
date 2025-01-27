"use client"

import { USER_COST } from '@/enums/globalEnums';
import infoJson from '../../../../../../../public/info.json';
import { FormSlider, HomeMainFormSimulationContainer } from './styles';
import { formatBrazillianCurrency } from '@/app/utils/formatters/costFormatter';

export default function HomeMainFormSimulator({ simulationCost, handleSimulationCost }) {

    const texts = infoJson.home

    return (
        <HomeMainFormSimulationContainer className={`homeSimulatorContainer`}>
            <label htmlFor="simulationSlider" className='averageUserCost'>{texts.averageCost} <span className='simulationCost'>R${formatBrazillianCurrency(simulationCost)}{simulationCost === USER_COST.MAX ? "+" : ""}</span></label>
            <FormSlider
                className='formSlider'
                name='cost'
                onChange={handleSimulationCost}
                value={simulationCost}
                step={10}
                defaultValue={USER_COST.MIN}
                min={USER_COST.MIN}
                max={USER_COST.MAX}
                aria-label="Slider de simulação"
                valueLabelDisplay="auto"
                aria-labelledby="simulationSlider"
            />
        </HomeMainFormSimulationContainer>
    )
}