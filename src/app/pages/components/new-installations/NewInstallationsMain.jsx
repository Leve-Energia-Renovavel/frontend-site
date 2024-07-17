"use client"

import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import StatusStepper from "../new-dashboard/status-stepper/StatusStepper";
import DefaultTitle from "../utils/titles/DefaultTitle";
import NewInstallationsMainHeader from "./header/NewInstallationsMainHeader";
import { AntSwitch, ConsumptionHistoryContainer as ConsumptionHistory, NewInstallationsContainer as Container, ConsuptiomHistorySwitchContainer as SwitchContainer, ConsumptionHistoryTitleContainer as TitleContainer } from "./styles";
import ExtractOfConsumptions from './extract/ExtractOfConsumptions';

const NewInstallationsCarrousel = dynamic(() => import("./carrousel/NewInstallationsCarrousel"), { ssr: false });

export default function NewInstallationsMain() {

    const [dataType, setDataType] = useState("money")

    const handleDataType = () => {
        dataType === "money" ? setDataType("energy") : setDataType("money")
    }

    return (
        <Container>
            <h1 className="pageTitle">Unidades cadastradas</h1>

            <NewInstallationsMainHeader />
            <StatusStepper />

            <ConsumptionHistory>
                <TitleContainer>
                    <DefaultTitle icon={<EqualizerOutlinedIcon className='icon' />} title={`Histórico de Consumo`} />
                    <SwitchContainer>
                        <p className='label'>R$</p>
                        <AntSwitch onChange={() => handleDataType()} />
                        <p className='label'>kWh</p>
                    </SwitchContainer>
                </TitleContainer>

                <NewInstallationsCarrousel dataType={dataType} />

            </ConsumptionHistory>

            <ExtractOfConsumptions />

        </Container>
    )
}
