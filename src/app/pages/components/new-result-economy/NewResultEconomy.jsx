"use client"

import { useStoreUser } from '@/app/hooks/useStore'
import { Typography } from '@mui/material'
import Image from 'next/image'
import homeIcon from '../../../../resources/icons/small/local-home-icon-green-small.svg'
import leveLogo from '../../../../resources/img/small/leve-logo-button-green-small.png'
import { ContentContainer as Content, LeveEconomy, LeveEconomyContainer, LeveEconomyContent, LeveEconomySecondaryContent, LeveEconomySecondaryContentContainer, PercentageIcon, SimulateContainer, SimulateFooter, SimulateHeader, SimulationContainer, SimulationSlider, TodayEconomy, TodayEconomyContainer, TodayEconomyContent } from './styles'

export default function NewResultEconomy() {

    const storeUser = useStoreUser()
    const user = JSON.parse(window.localStorage.getItem('user')) || store.user

    const cost = user?.user?.cost
    const discount = user?.user?.discount

    const todayCost = cost.toFixed(2).toString().replace(".", ",")

    const economyDifference = parseFloat(cost / discount).toFixed(2).replace(".", ",");

    const leveEconomyValue = parseFloat(cost - (cost / discount)).toFixed(2).replace(".", ",");
    const leveYearTotalDiscount = parseFloat(((cost / discount) * 12)).toFixed(2).replace(".", ",");


    return (
        <SimulateContainer>
            <SimulateHeader>
                <Image src={homeIcon} className="homeIcon" alt={"Ícone local de casa"} loading="eager" priority={true} />
                <Typography className='goodNews'>Boas notícias!</Typography>
                <Typography variant='subtitle1'><span className='bold'>A Leve já chegou na sua região!</span> Veja abaixo o resultado da sua economia:</Typography>
            </SimulateHeader>

            <Content>
                <TodayEconomyContainer>
                    <TodayEconomyContent>
                        <Typography variant='subtitle1'>Você paga a concessionária:</Typography>
                        <TodayEconomy>
                            <Typography className='today'>Hoje:</Typography>
                            <Typography className='value'>R${todayCost}</Typography>
                        </TodayEconomy>
                    </TodayEconomyContent>
                    <SimulationContainer>
                        <Typography className='sliderTitle'>Ajuste o valor para recalcular sua economia:</Typography>
                        <SimulationSlider
                            onChange={(event) => storeUser.updateUser({ cost: event.target.value })}
                            value={cost}
                            step={10}
                            defaultValue={150}
                            min={150}
                            max={3000}
                            valueLabelDisplay="off"
                        />
                    </SimulationContainer>
                </TodayEconomyContainer>

                <LeveEconomyContainer>
                    <LeveEconomyContent>
                        <Typography variant='subtitle1'>Com a Leve você pagará:</Typography>
                        <LeveEconomy>
                            <Image src={leveLogo} alt={"Desconto com a Leve"} loading="eager" priority={true} />
                            <Typography className='value'>R${leveEconomyValue}</Typography>
                        </LeveEconomy>
                    </LeveEconomyContent>
                    <LeveEconomySecondaryContentContainer>
                        <PercentageIcon />
                        <LeveEconomySecondaryContent>
                            <Typography variant='subtitle1'>Economize aproximadamente:</Typography>
                            <Typography className='economyDifference'><span className='underlined'>R$ {economyDifference}</span> todos os meses</Typography>
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