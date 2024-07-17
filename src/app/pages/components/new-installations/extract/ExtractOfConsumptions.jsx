import { useStoreBillingHistory } from '@/app/hooks/useStore'
import { formatFullMonthAndYear } from '@/app/utils/formatters/dateFormatter'
import ExtractHeader from './header/ExtractHeader'
import { Extract, ExtractContainer, ExtractDetail, ExtractDetailValue } from './styles'

export default function ExtractOfConsumptions() {

  const billings = useStoreBillingHistory().billings

  console.log("billings ===>>", billings)


  return (
    <>
      <ExtractHeader />
      <ExtractContainer>
        {billings.map((bill) => {
          return (
            <Extract key={bill?.uuid}>
              <p className='dueDate'>{formatFullMonthAndYear(bill?.billDate)}</p>

              {/* values details from distributor */}
              <ExtractDetail>
                <ExtractDetailValue>
                  <span className='energyConsumed'>{`${parseInt(bill?.energyConsumed)} kWh`}</span>
                  <span className='billValue'>{`R$ ${bill?.value}`}</span>
                </ExtractDetailValue>
                <span>1kWh = R$ 1,08855</span>
              </ExtractDetail>

              {/* values details from Leve */}
              <ExtractDetail>
                <ExtractDetailValue>
                  <span className='energyConsumed'>{`${parseInt(bill?.energyConsumed)} kWh`}</span>
                  <span className='billValue'>{`R$ ${bill?.value}`}</span>
                </ExtractDetailValue>
                <span>1kWh = R$ 1,08855</span>
              </ExtractDetail>

            </Extract>
          )
        })}

      </ExtractContainer>
    </>
  )
}