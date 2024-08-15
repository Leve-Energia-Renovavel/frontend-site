/* eslint-disable react-hooks/exhaustive-deps */
import { useStoreBillingHistory, useStoreMainInstallation, useStoreNextBills } from '@/app/hooks/useStore';
import { getInvoicesData } from '@/app/service/invoices-service/InvoicesService';
import { billingStatusOptions } from '@/app/utils/form-options/billingStatusOptions';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import NewDefaultButton from '../../utils/buttons/NewDefaultButton';
import DashboardInvoicesDummy from './DashboardInvoicesDummy';
import { AllBillsPaidContainer, DashboardInvoicesContainer as Container, DashboardInvoicesContent as Content, NextBill, NextBillDivider, NextBillInfo, NextBillsContainer, NextBillsFooter, NoBillsContainer, PayBillButtonContainer } from './styles';

export default function DashboardInvoices() {

  const router = useRouter()

  const [isLoading, setLoading] = useState(true)

  const storeMainInstallation = useStoreMainInstallation()
  const storeNextBills = useStoreNextBills()
  const storeBilling = useStoreBillingHistory()

  const billings = storeBilling?.getFilteredBillings()
  const nextBills = storeNextBills?.getFilteredNextBills()

  const mainInstallation = JSON.parse(localStorage?.getItem('mainInstallation'))

  const { uuid, hasStartedBilling } = mainInstallation?.mainInstallation ?? (storeMainInstallation?.mainInstallation || {})

  useEffect(() => {
    const fetchInvoicesData = async () => {
      await getInvoicesData(storeNextBills, storeBilling)
    }

    if(!uuid) {
      fetchInvoicesData();
    }

    setLoading(false)
  }, []);

  const dontHaveBills = billings?.length === 0
  const dontHaveNextBills = nextBills?.length === 0

  return (
    <>
      {hasStartedBilling ? (
        <Container className='dashboardInvoicesContainer'>
          <h2 className='myInvoices'>Minhas Faturas</h2>
          <Content className='dashboardInvoicesContent'>
            {billings?.length > 0 ? (
              <>
                <NextBillsContainer className='nextBillsContainer'>
                  {isLoading ?
                    <DashboardInvoicesDummy />
                    : nextBills?.length > 0 ? nextBills?.slice(-2).reverse()?.map((bill) => {
                      return (
                        <NextBill key={bill.uuid} className='nextBill'>
                          <h6 className='billDate'>{bill.billDate}</h6>
                          <NextBillInfo status={bill.status}>
                            <h6 className='value'>R$ {bill.value}</h6>
                            <p className='status'>{billingStatusOptions[bill.status]}</p>
                          </NextBillInfo>
                          <NextBillInfo>
                            <p className='label'>Vencimento</p>
                            <p className='info'>{bill.dueDate}</p>
                          </NextBillInfo>
                          <NextBillDivider className='divider' />
                          <NextBillInfo>
                            <p className='label'>Créditos de energia</p>
                            <p className='info'>{parseInt(bill.energyConsumed) + " kWh"}</p>
                          </NextBillInfo>
                          <NextBillDivider className='divider' />
                        </NextBill>
                      )
                    }) :
                      billings?.slice(-2).reverse()?.map((bill) => {
                        return (
                          <NextBill key={bill.uuid} className='nextBill'>
                            <h6 className='billDate'>{bill.billDate}</h6>
                            <NextBillInfo status={bill.status}>
                              <h6 className='value'>R$ {bill.value}</h6>
                              <p className='status'>{billingStatusOptions[bill.status]}</p>
                            </NextBillInfo>
                            <NextBillInfo>
                              <p className='label'>Vencimento</p>
                              <p className='info'>{bill.dueDate}</p>
                            </NextBillInfo>
                            <NextBillDivider className='divider' />
                            <NextBillInfo>
                              <p className='label'>Créditos de energia</p>
                              <p className='info'>{parseInt(bill.energyConsumed) + " kWh"}</p>
                            </NextBillInfo>
                            <NextBillDivider className='divider' />
                          </NextBill>
                        )
                      })}
                </NextBillsContainer>
                {dontHaveBills || dontHaveNextBills ?
                  <AllBillsPaidContainer>
                    <p>Tudo em dia! Você não tem faturas pendentes.</p>
                  </AllBillsPaidContainer>
                  :
                  <PayBillButtonContainer>
                    <NewDefaultButton variant="outlined-inverse" text={nextBills?.length > 1 ? "Pagar Faturas" : "Pagar Fatura"} onClick={() => router.push(`/dashboard/invoices/`)} />
                  </PayBillButtonContainer>}
              </>)
              :
              (<NoBillsContainer>
                <span className='noBillsYet'>Você ainda não possui dados de faturamento</span>
              </NoBillsContainer>)
            }
            <NextBillsFooter>
              <p className='checkAllInvoices'
                onClick={() => router.push("/dashboard/invoices")}>{dontHaveBills || dontHaveNextBills ? "Ver página de faturas" : "Ver todas as faturas"}</p>
            </NextBillsFooter>

          </Content>
        </Container>
      ) : <></>}
    </>

  )
}