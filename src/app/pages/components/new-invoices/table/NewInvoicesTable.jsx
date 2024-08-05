/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreBillingHistory, useStoreUser } from '@/app/hooks/useStore';
import { useGetInvoicesParcialData } from '@/app/service/invoices-service/InvoicesService';
import { billingStatusOptions } from '@/app/utils/form-options/billingStatusOptions';
import { formatDateClearYear, formatFullMonthAndYear } from '@/app/utils/formatters/dateFormatter';
import { useState } from 'react';
import NewInstallationButton from '../../utils/buttons/NewInstallationButton';
import NewInvoicesActionButtonContainer from '../action-button-container/NewInvoicesActionButton';
import { InvoicesTableDistributorBill, InvoicesTableLeveBill, MobileActionButtonContainer, NewInvoicesTableContent, NewInvoicesTableHeader } from './styles';


export default function NewInvoicesTable() {

    const storeUser = useStoreUser()?.user
    const billingsHistory = useStoreBillingHistory()?.billings

    const user = JSON.parse(localStorage.getItem('user'))?.user || storeUser
    const billings = JSON.parse(localStorage.getItem('billingHistory')) || billingsHistory

    const [quantityBillsShown, setQuantityBillsShown] = useState(-6)

    useGetInvoicesParcialData()

    const loadMoreBills = () => {
        setQuantityBillsShown(quantityBillsShown => quantityBillsShown - 3)
    }

    const loadedAllBills = quantityBillsShown <= -billings.length
    const dontHaveAnyBillsYet = billings?.length < 1

    return (
        <>
            <NewInvoicesTableHeader className='newInvoicesTableHeader'>
                <p className='tableHeader'>Mes e Ano</p>
                <p className='tableHeader'>Valor</p>
                <p className='tableHeader'>Vencimento</p>
                <p className='tableHeaderStatus'>Status</p>
            </NewInvoicesTableHeader>

            {dontHaveAnyBillsYet && (
                <NewInvoicesTableContent>
                    <InvoicesTableLeveBill>
                        <p className='dontHaveAnyBillsYet'>Você ainda não possui faturas</p>
                    </InvoicesTableLeveBill>
                </NewInvoicesTableContent>
            )}

            {billings?.slice(quantityBillsShown).reverse().map((billing, index) => {
                return (
                    <NewInvoicesTableContent key={billing?.uuid} className={`newInvoicesTableContent-${billing?.uuid}`}>
                        <InvoicesTableLeveBill
                            className='invoicesTableLeveBill'
                            status={billing?.status}
                            aria-controls="panel1-content"
                            id="panel1-header">
                            <p className='leveBillValue'>{formatFullMonthAndYear(billing?.billDate)}</p>
                            <p className='leveBillValue'>{`R$ ${parseFloat(billing?.value).toFixed(2)}`}</p>
                            <p className='leveBillValue'>{formatDateClearYear(billing?.dueDate)}</p>
                            <p className='leveBillStatus'>{billingStatusOptions[billing?.status]}</p>

                            <div className="desktopActionButtonContainer">
                                <NewInvoicesActionButtonContainer
                                    status={billing?.status}
                                    urlBill={billing?.urlBill}
                                    uuid={billing?.uuid}
                                    referenceDate={formatFullMonthAndYear(billing?.billDate)} />
                            </div>
                        </InvoicesTableLeveBill>

                        <MobileActionButtonContainer className="mobileActionButtonContainer">
                            <NewInvoicesActionButtonContainer
                                status={billing?.status}
                                urlBill={billing?.urlBill}
                                uuid={billing?.uuid}
                                referenceDate={formatFullMonthAndYear(billing?.billDate)} />
                        </MobileActionButtonContainer>
                        {/* <InvoicesTableDistributorBill className='distributorBill'>
                            <p className='distributorBillValue'>{formatFullMonthAndYear(billing?.billDate)}</p>
                            <p className='distributorBillValue'>{`R$ ${parseFloat(billing?.value).toFixed(2)}`}</p>
                            <p className='distributorBillValue'>{formatDateClearYear(billing?.dueDate)}</p>
                            <p className='distributorBillStatus'>{`Boleto ${user.distributor ? user.distributor : "Distribuidora"}`}</p>
                        </InvoicesTableDistributorBill> */}
                    </NewInvoicesTableContent>
                )
            })}
            {!loadedAllBills &&
                <NewInstallationButton
                    text={"Carregar mais..."}
                    variant="contained"
                    onClick={() => loadMoreBills()} />}

        </>
    )
}