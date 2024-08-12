/* eslint-disable react-hooks/exhaustive-deps */
import { useStoreBillingHistory, useStoreMainInstallation, useStoreNextBills } from '@/app/hooks/useStore';
import { requestSuccessful } from '@/app/service/utils/Validations';
import { billHasToBePaid, billingStatusOptions } from '@/app/utils/form-options/billingStatusOptions';
import axios from 'axios';
import Cookies from 'js-cookie';
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

  const billings = useStoreBillingHistory().billings
  const nextBills = useStoreNextBills().nextBills

  const mainInstallation = JSON.parse(localStorage?.getItem('mainInstallation'))

  const { hasStartedBilling } = mainInstallation?.mainInstallation ?? (storeMainInstallation?.mainInstallation || {})

  useEffect(() => {
    const fetchInvoicesData = async () => {

      try {
        const headers = {
          "Authorization": `Bearer ${Cookies.get('accessToken')}`
        };

        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/painel/`, { headers });
        if (requestSuccessful(response?.status)) {
          const ciclosConsumo = response?.data?.ciclosConsumo
          ciclosConsumo?.forEach(bill => {
            const newBilling = {
              uuid: bill.uuid,
              installationId: bill.cliente_instalacao_id,

              energyConsumed: bill.consumo,
              energyInjected: bill.energia_injetada,
              availability: bill.disponibilidade,

              value: bill.valor_fatura,
              billDate: bill.data_fatura,
              dueDate: bill.vencimento_fatura,
              status: bill.pagamento_status,
              urlBill: bill.url_fatura,
              urlPayment: bill.url_pagamento,
            }
            storeBilling.addBilling(newBilling)

            if (billHasToBePaid[newBilling.status]) {
              storeNextBills.updateExists(true)
              storeNextBills.addNextBill(newBilling)
            }
          })

        } else {
          console.error("Failed to fetch invoices data");
        }
      } catch (error) {
        console.error("Error fetching invoices data:", error);
      }
    };

    fetchInvoicesData();
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
                    <NewDefaultButton variant="outlined-inverse" text="Pagar Fatura" onClick={() => router.push(`/dashboard/invoices/`)} />
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