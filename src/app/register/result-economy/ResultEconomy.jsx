"use client"

import { useStoreUser } from '@/app/hooks/useStore';
import { Sliders } from '@/app/pages/components/simulate-economy/styles';
import { FormControl, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import icon from '../../../resources/img/Frame.svg';
import graphic from '../../../resources/img/graphic-leve.png';
import { ResultEconomyDiscount as Banner, ResultEconomyContainer as Container, ResultEconomyToUnderstandContent as Content, ResultEconomyComparissonContent as Header, LeveEconomyInfo, LeveMonthlyDiscount, ResultEconomyDiscountGraph, TodayPriceInfo } from './styles';

export default function ResultEconomy() {

    const params = useParams()
    const store = useStoreUser()

    const isCompany = store.user.isCompany
    const cost = store.user.cost;
    const todayCost = cost.toFixed(2).replace(".", ",");

    const location = isCompany ? 'empresa' : 'residência'
    const discount = store.user.discount !== 0 ? store.user.discount : 10
    const distributor = store.user.distributor ? store.user.distributor.toUpperCase() : "distribuidora"

    const [simulationCost, setSimulationCost] = useState(cost)

    const leveCost = parseFloat(cost - (cost / discount)).toFixed(2).replace(".", ",");
    const leveYearTotalDiscount = parseFloat(((simulationCost / discount) * 12)).toFixed(2).replace(".", ",");

    useEffect(() => {
        setSimulationCost(cost)
    }, [cost])

    return (
        <Container>
            <Header>
                <TodayPriceInfo>
                    <Typography variant="subtitle1">Hoje você paga a <span className='distributorName'>{distributor}</span></Typography>
                    <Typography variant="h1">R$ {todayCost} 😢</Typography>
                </TodayPriceInfo>
                <LeveEconomyInfo>
                    <Typography variant="subtitle1" >Com a Leve você pagará:</Typography>
                    <Typography variant="h1" >{`R$ ${leveCost} 😀`}</Typography>
                </LeveEconomyInfo>
            </Header>

            <Divider variant="middle" className="divider" />

            <Content>
                <Banner>
                    <LeveMonthlyDiscount>
                        <Image src={icon} alt='ícone de porcentagem de desconto da Leve' loading="lazy"  />
                        <Typography variant="h1">Tenha {discount}% de desconto todo mês!</Typography>
                    </LeveMonthlyDiscount>
                    <Typography variant="subtitle1">Em 1 ano com a Leve a sua {location} economizará</Typography>
                    <Typography variant="h1" className='yearDiscountLeve'>R$ {leveYearTotalDiscount}</Typography>
                    <FormControl className="slider">
                        <Sliders
                            onChange={(event) => setSimulationCost(event.target.value)}
                            value={simulationCost}
                            min={150}
                            max={3000}
                            valueLabelDisplay="off" />
                        {simulationCost !== cost && <Typography className="simulationCost">(se seu custo mensal médio fosse de:<span className="simulationCostValue">{`R$ ${simulationCost}`}</span>)</Typography>}
                    </FormControl>
                </Banner>

                <ResultEconomyDiscountGraph>
                    <Typography variant="subtitle1">Para entender: </Typography>
                    <Image src={graphic} alt='desconto da Leve em um grafico explicativo' className='discountGraph' loading="lazy"  />
                </ResultEconomyDiscountGraph>
            </Content>
        </Container>
    );
}
