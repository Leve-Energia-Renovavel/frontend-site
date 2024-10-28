/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreBillingHistory, useStoreMainInstallation } from '@/app/hooks/useStore';
import { billHasExpired } from '@/app/utils/date/DateUtils';
import { billingStatusOptions } from '@/app/utils/form-options/billingStatusOptions';
import { formatDateClearYear, formatFullMonthAndYear } from '@/app/utils/formatters/dateFormatter';
import { getAddress } from '@/app/utils/helper/installations/installationsHelper';
import { useState } from 'react';
import NewInstallationButton from '../../utils/buttons/NewInstallationButton';
import NewInvoicesActionButtonContainer from '../action-button-container/NewInvoicesActionButton';
import { InvoicesTableLeveBill, MobileActionButtonContainer, NewInvoicesSelectedInstallation, NewInvoicesTableContent, NewInvoicesTableHeader } from './styles';

export default function NewInvoicesTable() {

    const storeBilling = useStoreBillingHistory();
    const storeMainInstallation = useStoreMainInstallation()
    const { id, street, address } = storeMainInstallation?.mainInstallation || {}

    const billings = storeBilling?.getFilteredBillings()

    const [quantityBillsShown, setQuantityBillsShown] = useState(-6)

    const loadMoreBills = () => {
        setQuantityBillsShown(quantityBillsShown => quantityBillsShown - 3)
    }

    const loadedAllBills = quantityBillsShown <= -billings.length
    const dontHaveAnyBillsYet = billings?.length < 1

    return (
        <>
            <NewInvoicesSelectedInstallation>
                <h6 className="mainInstallation">{`${getAddress(address, street)}`}</h6>
            </NewInvoicesSelectedInstallation>

            <NewInvoicesTableHeader className='newInvoicesTableHeader'>
                <p className='tableHeader'>Mês e Ano</p>
                <p className='tableHeader'>Valor</p>
                <p className='tableHeader'>Vencimento</p>
                <p className='tableHeaderStatus'>Status</p>
            </NewInvoicesTableHeader>

            {dontHaveAnyBillsYet && (
                <NewInvoicesTableContent className='newInvoicesTableLeveBill' noBills={dontHaveAnyBillsYet}>
                    <InvoicesTableLeveBill className='newInvoicesTableLeveBill'>
                        <p className='dontHaveAnyBillsYet'>Você ainda não possui faturas</p>
                    </InvoicesTableLeveBill>
                </NewInvoicesTableContent>
            )}

            {billings?.slice(quantityBillsShown).reverse().map((billing, index) => {

                if (id === billing?.installationId) {
                    return (
                        <NewInvoicesTableContent key={billing?.uuid} className={`newInvoicesTableContent-${billing?.uuid}`}>
                            <InvoicesTableLeveBill
                                className='invoicesTableLeveBill'
                                status={billHasExpired(billing?.status, billing?.dueDate)}
                                aria-controls="panel1-content"
                                id="panel1-header">
                                <p className='leveBillValue'>{formatFullMonthAndYear(billing?.billDate)}</p>
                                <p className='leveBillValue'>{`R$ ${billing?.value}`}</p>
                                <p className='leveBillValue'>{formatDateClearYear(billing?.dueDate)}</p>
                                <p className='leveBillStatus'>{billingStatusOptions[billHasExpired(billing?.status, billing?.dueDate)]}</p>

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
                }
            })}

            {!loadedAllBills &&
                <NewInstallationButton
                    text={"Carregar mais..."}
                    variant="contained"
                    onClick={() => loadMoreBills()} />}

        </>
    )
}