"use client"

import { useStoreInstallations, useStoreMainInstallation } from "@/app/hooks/useStore";
import { BoxInstallation, NewInvoicesHeader as Header, InstallationIcon, KeyArrowDownIcon, NewInvoicesSelectButton as SelectButton, NewInvoicesSelectInstallation as SelectContainer, SelectInstallation } from "./styles";

export default function NewInvoicesHeader() {

    const storeInstallations = useStoreInstallations()
    const storeMainInstallation = useStoreMainInstallation()

    const { id } = storeMainInstallation?.mainInstallation || {}

    const allInstallations = storeInstallations?.installations || {}

    const filteredInstallations = allInstallations?.filter(installation => installation?.id !== id);

    const handleChangeSelectedInstallation = () => {

    }

    return (
        <Header className="invoicesHeader">
            <h1 className="pageTitle">Minhas faturas</h1>
            <SelectContainer className="invoicesSelectContainer">
                <h6 className="selectInstallation">Selecione a unidade:</h6>
                <SelectButton className="invoicesSelectButton">
                    <InstallationIcon className="installationIcon" />
                    <BoxInstallation>
                        <SelectInstallation
                            fullWidth
                            value={0}
                            displayEmpty
                            IconComponent={KeyArrowDownIcon}>
                            <li value={0} style={{ display: 'none' }}>
                                <span className="defaultInstallation">Casa 1</span>
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
                </SelectButton>
            </SelectContainer>
        </Header>
    )
}