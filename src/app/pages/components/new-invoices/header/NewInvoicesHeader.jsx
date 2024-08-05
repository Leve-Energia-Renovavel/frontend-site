"use client"

import { useStoreInstallations, useStoreMainInstallation, useStoreUser } from "@/app/hooks/useStore";
import { changeInvoiceDate } from "@/app/service/invoices-service/InvoicesService";
import { availableDueDates } from "@/app/utils/helper/invoices/invoicesHelper";
import { BoxInstallation, BoxInstallationDueDate, NewInvoicesHeader as Header, InstallationIcon, KeyArrowDownIcon, NewInvoicesSelectButton as SelectButton, NewInvoicesSelectInstallation as SelectContainer, NewInvoicesSelectDueDateButton as SelectDueDate, SelectDueDateChoose, SelectInstallation, StyledMenuItem } from "./styles";

export default function NewInvoicesHeader({ setErrorMessage, setNotifications }) {

    const storeInstallations = useStoreInstallations()
    const storeMainInstallation = useStoreMainInstallation()

    const { id } = storeMainInstallation?.mainInstallation || {}


    const store = useStoreUser()
    const user = JSON.parse(localStorage.getItem('user'))

    const { invoiceDate } = user?.user ?? (store?.user || {})

    const allInstallations = storeInstallations?.installations || {}

    const filteredInstallations = allInstallations?.filter(installation => installation?.id !== id);

    const handleChangeSelectedInstallation = () => {

    }
    const handleChangeDueDate = async (newDate) => {
        if (newDate !== invoiceDate) {
            await changeInvoiceDate(newDate, setErrorMessage, setNotifications, store)
        }
    }

    return (
        <Header className="invoicesHeader">
            <h1 className="pageTitle">Minhas faturas</h1>

            <SelectContainer className="invoicesSelectContainer">
                <div>
                    <h6 className="selectInstallation">Selecione a unidade:</h6>
                    <SelectButton className="invoicesSelectButton">
                        <InstallationIcon className="installationIcon" />
                        <BoxInstallation>
                            <SelectInstallation
                                fullWidth
                                value={0}
                                displayEmpty
                                // IconComponent={KeyArrowDownIcon}
                                IconComponent={""}
                            >
                                <li value={0} style={{ display: 'none' }}>
                                    <span className="defaultInstallation">Casa</span>
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
                </div>

                <div>
                    <h6 className="selectInstallation">Dia de vencimento da fatura:</h6>
                    <SelectDueDate className="invoicesSelectDueDate">
                        <BoxInstallationDueDate>
                            <SelectDueDateChoose
                                value={invoiceDate || 5}
                                displayEmpty
                                IconComponent={KeyArrowDownIcon}>
                                {availableDueDates?.map((dueDate) => {
                                    return (
                                        <StyledMenuItem key={dueDate} value={dueDate} className="dueDateAvailableOption" onClick={() => handleChangeDueDate(dueDate)}>
                                            <span className="dueDateOption">Dia {dueDate}</span>
                                        </StyledMenuItem>
                                    )
                                })}
                            </SelectDueDateChoose>
                        </BoxInstallationDueDate>
                    </SelectDueDate>
                </div>
            </SelectContainer>
        </Header>
    )
}