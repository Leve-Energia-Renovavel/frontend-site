"use client"

import { useStoreUser } from '@/app/hooks/useStore'
import { Typography } from '@mui/material'
import Image from 'next/image'
import homeIcon from '../../../../resources/icons/small/local-home-icon-green-small.svg'
import { ContentContainer as Content, CouponAppliedContainer, LeveEconomy, LeveEconomyContainer, LeveEconomyContent, LeveEconomySecondaryContent, LeveEconomySecondaryContentContainer, PercentageIcon, SimulateContainer, SimulateFooter, SimulateHeader, SimulateHeaderGoodNews, SimulationSlider, TodayCost, TodayEconomyContainer } from './styles'

export default function NewResultEconomy() {

    const storeUser = useStoreUser()
    const user = JSON.parse(localStorage.getItem('user'))

    const { cost, couponValue, discount } = user?.user ?? (storeUser?.user || {})

    const userHasCoupon = couponValue !== 0

    const todayCost = cost?.toFixed(2).toString().replace(".", ",")

    const percentageValue = parseFloat((cost * discount) / 100)?.toFixed(2)?.replace(".", ",");
    const leveYearTotalDiscount = parseFloat(((cost * (discount / 100)) * 12))?.toFixed(2)?.replace(".", ",");

    var leveEconomyValue = parseFloat(cost - ((discount / 100) * cost))?.toFixed(2)?.replace(".", ",");

    if (userHasCoupon) {
        leveEconomyValue = parseFloat(cost - ((discount / 100) * cost) - couponValue)?.toFixed(2)?.replace(".", ",");
    }

    return (
        <SimulateContainer className='simulateContainer'>
            <SimulateHeader className='simulateHeader'>
                <SimulateHeaderGoodNews>
                    <Image src={homeIcon} className="homeIcon" alt={"Ícone local de casa"} loading="lazy" />
                    <Typography className='goodNews'>Boas notícias!</Typography>
                </SimulateHeaderGoodNews>
                <Typography variant='subtitle1'><span className='bold'>A Leve já chegou na sua região!</span> Veja abaixo o resultado da sua economia:</Typography>
            </SimulateHeader>

            <Content className='simulateContent'>
                <TodayEconomyContainer className='todayEconomyContainer'>
                    <p className='todayEconomyTitle'>Valor médio da sua conta de luz atual</p>
                    <TodayCost>
                        <p className='monetary'>R$</p>
                        <p className='todayCost'>{todayCost}</p>
                    </TodayCost>
                    <p className='sliderTitle'>Ajuste o valor para recalcular sua economia:</p>
                    <SimulationSlider
                        onChange={(event) => storeUser.updateUser({ cost: event.target.value })}
                        value={cost}
                        step={10}
                        defaultValue={150}
                        min={150}
                        max={3000}
                        valueLabelDisplay="off"
                    />
                </TodayEconomyContainer>

                {userHasCoupon &&
                    <CouponAppliedContainer className='couponContainer'>
                        <p>Parabéns! Cupom de <span className='couponValue'>R${couponValue}</span></p>
                        <p>foi aplicado na sua <span className='firstMonthOnly'>primeira fatura Leve!</span></p>
                    </CouponAppliedContainer>}

                <LeveEconomyContainer className='leveEconomyContainer'>
                    <p className='leveEconomyTitle'>Valor potencial médio do seu desconto mensal*</p>
                    <LeveEconomy>
                        <p className='monetary'>R$</p>
                        <p className='leveEconomyValue'>{leveEconomyValue}</p>
                    </LeveEconomy>

                    <LeveEconomySecondaryContentContainer className='leveEconomySecondaryContent'>
                        <PercentageIcon />
                        <LeveEconomySecondaryContent>
                            <Typography variant='subtitle1'>Economize aproximadamente:</Typography>
                            <Typography className='economyDifference'><span className='underlined'>R$ {percentageValue}</span> todos os meses</Typography>
                        </LeveEconomySecondaryContent>
                    </LeveEconomySecondaryContentContainer>
                </LeveEconomyContainer>
            </Content>

            <SimulateFooter>
                <Typography variant='subtitle1'>Em <span className='underlined'>1 ano</span>, você terá: <span className='yearEconomyValue'>R$ {leveYearTotalDiscount}</span> <span className='underlined'>a mais</span> na sua conta para investir naquilo que torna <span className='underlined'>sua vida mais Leve</span>.</Typography>
            </SimulateFooter>
        </SimulateContainer>
    )
}