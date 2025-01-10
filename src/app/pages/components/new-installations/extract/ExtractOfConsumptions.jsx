"use client"

import { useStoreBillingHistory } from '@/app/hooks/stores/useStore'
import { formatFullMonthAndYear } from '@/app/utils/formatters/dateFormatter'
import { useState } from 'react'
import NewInstallationButton from '../../utils/buttons/NewInstallationButton'
import ExtractHeader from './header/ExtractHeader'
import { Extract, ExtractContainer, ExtractDetail, ExtractDetailValue } from './styles'

export default function ExtractOfConsumptions() {

  const billings = useStoreBillingHistory()?.billings

  const [quantityBillsShown, setQuantityBillsShown] = useState(-6)

  const loadMoreBills = () => {
    setQuantityBillsShown(quantityBillsShown => quantityBillsShown - 3)
  }

  const loadedAllBills = quantityBillsShown <= -billings.length
  const dontHaveAnyBillsYet = billings?.length < 1


  return (
    <>
      <ExtractHeader />
      <ExtractContainer>

        {dontHaveAnyBillsYet && (
          <Extract>
            <p className='dontHaveAnyBillsYet'>Você ainda não possui histórico de faturas</p>
          </Extract>
        )}
        {billings?.slice(quantityBillsShown)?.reverse()?.map((bill) => {

          const kwhByDistributor = parseFloat(bill?.energyConsumed) - parseFloat(bill?.energyInjected)
          const kwhPriceByDistributor = 1.08855
          const formattedDistributorValue = (kwhByDistributor * kwhPriceByDistributor).toFixed(2).toString().replace(".", ",")

          const kwhPriceByLeve = (parseFloat(bill?.value) / parseFloat(bill?.energyConsumed)).toFixed(4).toString().replace(".", ",")
          const formattedBillValue = parseFloat(bill?.value).toFixed(2).toString().replace(".", ",")


          return (
            <Extract key={bill?.uuid}>
              <p className='dueDate'>{formatFullMonthAndYear(bill?.billDate)}</p>

              {/* values details from distributor */}
              <ExtractDetail distributor>
                <ExtractDetailValue distributor>
                  <span className='energyConsumed'>{`${kwhByDistributor} kWh`}</span>
                  <span className='billValue'>{`R$ ${formattedDistributorValue}`}</span>
                </ExtractDetailValue>
                <span className='measureUnit'>1kWh = R$ {kwhPriceByDistributor}</span>
              </ExtractDetail>

              {/* values details from Leve */}
              <ExtractDetail leve>
                <ExtractDetailValue leve>
                  <span className='energyConsumed'>{`${parseInt(bill?.energyConsumed)} kWh`}</span>
                  <span className='billValue'>{`R$ ${formattedBillValue}`}</span>
                </ExtractDetailValue>
                <span className='measureUnit'>1kWh = R$ {kwhPriceByLeve}</span>
              </ExtractDetail>

            </Extract>
          )
        })}
        {!loadedAllBills &&
          <NewInstallationButton
            text={"Carregar mais..."}
            variant="contained"
            onClick={() => loadMoreBills()} />}

      </ExtractContainer>
    </>
  )
}