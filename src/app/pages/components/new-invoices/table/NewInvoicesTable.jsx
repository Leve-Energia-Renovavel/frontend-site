/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreBillingHistory, useStoreUser } from '@/app/hooks/useStore';
import { useGetInvoicesData } from '@/app/service/invoices-service/InvoicesService';
import { billingStatusOptions } from '@/app/utils/form-options/billingStatusOptions';
import { formatDateClearYear, formatFullMonthAndYear } from '@/app/utils/formatters/dateFormatter';
import { DownloadIcon, DueButton, GraphIcon, IconButton, InvoicesTableActionButtonContainer, InvoicesTableDistributorBill, InvoicesTableLeveBill, LinkIcon, NewInvoicesTableContent, NewInvoicesTableHeader, PaidButton, PendingButton } from './styles';


export default function NewInvoicesTable() {

    const storeUser = useStoreUser()?.user
    const billingsHistory = useStoreBillingHistory()?.billings

    const user = JSON.parse(localStorage.getItem('user'))?.user || storeUser
    const billings = JSON.parse(localStorage.getItem('billingHistory')) || billingsHistory

    useGetInvoicesData()

    return (
        <>
            <NewInvoicesTableHeader>
                <p className='tableHeader'>Mes e Ano</p>
                <p className='tableHeader'>Valor</p>
                <p className='tableHeader'>Vencimento</p>
                <p className='tableHeaderStatus'>Status</p>
            </NewInvoicesTableHeader>

            {billings.reverse().map((billing, index) => {
                return (
                    <NewInvoicesTableContent key={billing?.uuid} >
                        <InvoicesTableLeveBill
                            status={billing?.status}
                            aria-controls="panel1-content"
                            id="panel1-header">
                            <p className='leveBillValue'>{formatFullMonthAndYear(billing?.billDate)}</p>
                            <p className='leveBillValue'>{`R$ ${parseFloat(billing?.value).toFixed(2)}`}</p>
                            <p className='leveBillValue'>{formatDateClearYear(billing?.dueDate)}</p>
                            <p className='leveBillStatus'>{billingStatusOptions[billing?.status]}</p>
                            <InvoicesTableActionButtonContainer>
                                {billing?.status === "due" && (
                                    <DueButton>
                                        <GraphIcon />
                                        <span>Ver consumo</span>
                                    </DueButton>
                                )}
                                {billing?.status === "paid" && (
                                    <PaidButton>
                                        <DownloadIcon />
                                        <span>Baixar PDF</span>
                                    </PaidButton>
                                )}
                                {billing?.status === "pending" && (
                                    <>
                                        <PendingButton>
                                            <span>Pagar</span>
                                        </PendingButton>
                                        <IconButton>
                                            <LinkIcon className='icon' />
                                        </IconButton>
                                        <IconButton>
                                            <DownloadIcon className='icon'/>
                                        </IconButton>
                                    </>
                                )}
                            </InvoicesTableActionButtonContainer>
                        </InvoicesTableLeveBill>
                        <InvoicesTableDistributorBill className='distributorBill'>
                            <p className='distributorBillValue'>{formatFullMonthAndYear(billing?.billDate)}</p>
                            <p className='distributorBillValue'>{`R$ ${parseFloat(billing?.value).toFixed(2)}`}</p>
                            <p className='distributorBillValue'>{formatDateClearYear(billing?.dueDate)}</p>
                            <p className='distributorBillStatus'>{`Boleto ${user.distributor ? user.distributor : "Distribuidora"}`}</p>
                        </InvoicesTableDistributorBill>
                    </NewInvoicesTableContent>
                )
            })}

        </>
    )
}