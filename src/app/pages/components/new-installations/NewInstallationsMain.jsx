"use client"

import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import DefaultTitle from "../utils/titles/DefaultTitle";
import NewInstallationsMainHeader from "./header/NewInstallationsMainHeader";
import { AntSwitch, ConsumptionHistoryContainer as ConsumptionHistory, NewInstallationsContainer as Container, ConsuptiomHistorySwitchContainer as SwitchContainer, ConsumptionHistoryTitleContainer as TitleContainer } from "./styles";
import ExtractOfConsumptions from './extract/ExtractOfConsumptions';
import { useStoreMainInstallation } from '@/app/hooks/useStore';

const NewInstallationsCarrousel = dynamic(() => import("./carrousel/NewInstallationsCarrousel"), { ssr: false });
const StatusStepper = dynamic(() => import("../new-dashboard/status-stepper/StatusStepper"), { ssr: false });

export default function NewInstallationsMain() {

    const [dataType, setDataType] = useState("energy")

    const handleDataType = () => {
        dataType === "money" ? setDataType("energy") : setDataType("money")
    }

    const storeMainInstallation = useStoreMainInstallation()
    const mainInstallation = JSON.parse(localStorage?.getItem('mainInstallation'))

    const { hasStartedBilling } = mainInstallation?.mainInstallation ?? (storeMainInstallation?.mainInstallation || {})


    return (
        <>{hasStartedBilling ? (
            <Container className='installationsMainContainer'>
                <h1 className="pageTitle">Unidades cadastradas</h1>

                <NewInstallationsMainHeader />
                <StatusStepper />

                <ConsumptionHistory className='installationsConsumptionHistory'>
                    <TitleContainer className='installationsTitleContainer'>
                        <DefaultTitle icon={<EqualizerOutlinedIcon className='icon' />} title={`Histórico de Consumo`} />
                        <SwitchContainer className='installationsSwitchContainer'>
                            <p className='label'>R$</p>
                            <AntSwitch defaultChecked={true} disabled />
                            <p className='label'>kWh</p>
                        </SwitchContainer>
                    </TitleContainer>

                    <NewInstallationsCarrousel dataType={dataType} />

                </ConsumptionHistory>

                {/* <ExtractOfConsumptions /> */}

            </Container>
        ) : <></>}
        </>

    )
}
