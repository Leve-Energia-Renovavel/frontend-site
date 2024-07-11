import { useStoreInstallations, useStoreMainInstallation } from "@/app/hooks/useStore";
import { BoxInstallation, NewInstallationsHeader as Header, KeyArrowDownIcon, NewInstallationAddButton, NewInstallationsContainer as Container, NewInvoicesSelectButton, SelectInstallation, SelectOrCreateNewInstallation } from "./styles";
import StatusStepper from "../new-dashboard/status-stepper/StatusStepper";

export default function NewInstallationsMain() {

    const storeInstallations = useStoreInstallations()
    const storeMainInstallation = useStoreMainInstallation()

    const { id, street } = storeMainInstallation?.mainInstallation || {}

    const allInstallations = storeInstallations?.installations || {}

    const filteredInstallations = allInstallations?.filter(installation => installation?.id !== id);

    return (
        <Container>
            <h1 className="pageTitle">Unidades cadastradas</h1>

            <Header>
                <h6 className="mainInstallation">{`Casa 1`}</h6>
                <SelectOrCreateNewInstallation>
                    <NewInvoicesSelectButton className="invoicesSelectButton">
                        <BoxInstallation>
                            <SelectInstallation
                                fullWidth
                                value={0}
                                displayEmpty
                                IconComponent={KeyArrowDownIcon}>
                                <li value={0} style={{ display: 'none' }}>
                                    <span className="defaultInstallation">Selecione uma unidade</span>
                                </li>
                                {filteredInstallations?.map((otherInstallation, index) => {
                                    return (
                                        <li key={otherInstallation?.id} value={index + 1}>
                                            <span onClick={() => handleChangeSelectedInstallation(otherInstallation)}>{otherInstallation.street}</span>
                                        </li>
                                    )
                                })}
                            </SelectInstallation>
                        </BoxInstallation>
                    </NewInvoicesSelectButton>

                    <NewInstallationAddButton>
                        <span>+</span>
                        <span>Nova Unidade</span>
                    </NewInstallationAddButton>
                </SelectOrCreateNewInstallation>
            </Header>

            <StatusStepper />

        </Container>
    )
}
