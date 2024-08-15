"use client"

import { useStoreBillingHistory, useStoreInstallations, useStoreMainInstallation, useStoreNextBills, useStoreUser } from "@/app/hooks/useStore";
import { getInstallationByUUID } from "@/app/service/installation-service/InstallationService";
import { changeInvoiceDate } from "@/app/service/invoices-service/InvoicesService";
import { availableDueDates } from "@/app/utils/helper/invoices/invoicesHelper";
import { useState } from "react";
import NewDefaultModal from "../../utils/modals/default-modal/NewDefaultModal";
import { BoxInstallation, BoxInstallationDueDate, NewInvoicesHeader as Header, InstallationIcon, InstallationItem, KeyArrowDownIcon, NewInvoicesSelectButton as SelectButton, NewInvoicesSelectInstallation as SelectContainer, NewInvoicesSelectDueDateButton as SelectDueDate, SelectDueDateChoose, SelectInstallation, StyledMenuItem, WarningBox } from "./styles";

export default function NewInvoicesHeader({ setErrorMessage, setNotifications }) {

    const [openConfirmationModal, setOpenConfirmationModal] = useState(false)
    const [changedDueDate, setChangedDueDate] = useState(null)

    const store = useStoreUser()
    const storeInstallations = useStoreInstallations()
    const storeMainInstallation = useStoreMainInstallation()
    const storeNextBills = useStoreNextBills()
    const storeBilling = useStoreBillingHistory()

    const user = JSON.parse(localStorage.getItem('user'))

    const { id } = storeMainInstallation?.mainInstallation || {}
    const { invoiceDate } = user?.user ?? (store?.user || {})

    const allInstallations = storeInstallations?.installations || {}

    const filteredInstallations = allInstallations?.filter(installation => installation?.id !== id);

    const handleChangeSelectedInstallation = async (selectedInstallation) => {
        const uuid = selectedInstallation?.uuid
        await getInstallationByUUID(uuid, storeMainInstallation, storeInstallations, storeNextBills, storeBilling)
    }

    const handleChangeDueDate = async () => {
        await changeInvoiceDate(changedDueDate, setErrorMessage, setNotifications, store)
        setOpenConfirmationModal(false)
    }

    const handleConfirmChangeDueDate = async (newDate) => {
        if (newDate !== invoiceDate) {
            setChangedDueDate(newDate)
            setOpenConfirmationModal(current => !current)
        }
    }

    const closeConfirmModal = () => {
        setOpenConfirmationModal(false)
    }

    return (
        <>
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
                                    IconComponent={filteredInstallations.length > 0 ? KeyArrowDownIcon : ""}>
                                    <li value={0} style={{ display: 'none' }}>
                                        <span className="defaultInstallation">Casa</span>
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
                        </SelectButton>
                    </div>

                    <div>
                        <h6 className="selectInstallation">Alterar dia de vencimento da fatura:</h6>
                        <SelectDueDate className="invoicesSelectDueDate">
                            <BoxInstallationDueDate>
                                <SelectDueDateChoose
                                    value={invoiceDate || 5}
                                    displayEmpty
                                    IconComponent={KeyArrowDownIcon}>
                                    {availableDueDates?.map((dueDate) => {
                                        return (
                                            <StyledMenuItem key={dueDate} value={dueDate} className="dueDateAvailableOption" onClick={() => handleConfirmChangeDueDate(dueDate)}>
                                                <span className="dueDateOption">Dia {dueDate}</span>
                                            </StyledMenuItem>
                                        )
                                    })}
                                </SelectDueDateChoose>
                            </BoxInstallationDueDate>
                        </SelectDueDate>
                    </div>

                </SelectContainer>

                <WarningBox severity="warning"><span className='highlighted'>Atenção:</span> Caso você opte pelo método de pagamento via <span className='highlighted'>cartão de crédito</span>, a sua fatura Leve será cobrada próxima ao <span className='underlined'>dia 15 do mês referente</span>.</WarningBox>

            </Header>


            {openConfirmationModal &&
                <NewDefaultModal
                    title={"Tem certeza que deseja alterar o dia da fatura?"}
                    description={"Atenção: A data do vencimento não altera a data da cobrança do pagamento, que é sempre próximo ao dia 15 de cada mês."}
                    buttonTitle={"Confirmar"}
                    cancel={"Cancelar"}
                    confirmModal={handleChangeDueDate}
                    closeModal={closeConfirmModal}
                    isOpen={openConfirmationModal}
                />}
        </>

    )
}