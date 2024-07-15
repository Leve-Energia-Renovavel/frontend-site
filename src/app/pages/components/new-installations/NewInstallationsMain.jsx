import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import StatusStepper from "../new-dashboard/status-stepper/StatusStepper";
import DefaultTitle from "../utils/titles/DefaultTitle";
import NewInstallationsCarrousel from "./carrousel/NewInstallationsCarrousel";
import NewInstallationsMainHeader from "./header/NewInstallationsMainHeader";
import { ConsumptionHistoryContainer as ConsumptionHistory, ConsumptionHistoryTitleContainer, NewInstallationsContainer as Container } from "./styles";

export default function NewInstallationsMain() {

    return (
        <Container>
            <h1 className="pageTitle">Unidades cadastradas</h1>

            <NewInstallationsMainHeader />
            <StatusStepper />

            <ConsumptionHistory>
                <ConsumptionHistoryTitleContainer>
                    <DefaultTitle icon={<EqualizerOutlinedIcon className='icon' />} title={`Histórico de Consumo`} />

                </ConsumptionHistoryTitleContainer>

                <NewInstallationsCarrousel />
            </ConsumptionHistory>


        </Container>
    )
}
