import { useStoreBillingHistory, useStoreInstallations, useStoreMainInstallation, useStoreNextBills } from "@/app/hooks/useStore";
import { getInstallationByUUIDandUpdateStore } from "@/app/service/installation-service/InstallationService";
import { BoxInstallation, NewInstallationsHeader as Header, InstallationItem, KeyArrowDownIcon, NewInvoicesSelectButton, SelectInstallation, SelectOrCreateNewInstallation } from "./styles";

export default function NewInstallationsMainHeader() {

    const storeInstallations = useStoreInstallations()
    const storeMainInstallation = useStoreMainInstallation()
    const storeNextBills = useStoreNextBills()
    const storeBilling = useStoreBillingHistory()

    const { id, street } = storeMainInstallation?.mainInstallation || {}

    const allInstallations = storeInstallations?.installations || {}

    const filteredInstallations = allInstallations?.filter(installation => installation?.id !== id);

    const handleChangeSelectedInstallation = async (selectedInstallation) => {
        const uuid = selectedInstallation?.uuid
        await getInstallationByUUIDandUpdateStore(uuid, storeMainInstallation, storeInstallations, storeNextBills, storeBilling)
    }

    return (
        <Header className='installationsMainHeader'>
            <h6 className="mainInstallation">{`${street}`}</h6>
            <SelectOrCreateNewInstallation>
                {filteredInstallations?.length > 0 && (
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
                                        <InstallationItem key={otherInstallation?.id} value={index + 1}>
                                            <span onClick={() => handleChangeSelectedInstallation(otherInstallation)}>{otherInstallation.street}</span>
                                        </InstallationItem>
                                    )
                                })}
                            </SelectInstallation>
                        </BoxInstallation>
                    </NewInvoicesSelectButton>
                )}

                {/* <NewInstallationAddButton>
                    <span>+</span>
                    <span>Nova Unidade</span>
                </NewInstallationAddButton> */}
            </SelectOrCreateNewInstallation>
        </Header>
    )
}