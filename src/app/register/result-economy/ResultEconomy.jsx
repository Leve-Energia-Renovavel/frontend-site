import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import icon from '../../../resources/img/Frame.svg';
import graphic from '../../../resources/img/graphic-leve.png';
import { ResultEconomyComparissonContent as Header, ResultEconomyContainer as Container, ResultEconomyDiscount as Banner, ResultEconomyDiscountGraph, ResultEconomyToUnderstandContent as Content, TodayPriceInfo, LeveEconomyInfo, LeveMonthlyDiscount } from './styles';

export default function ResultEconomy(props) {

    const { cost, type } = props.userData
    const location = type == 'cnpj' ? 'empresa' : 'residência'
    const percentageDiscount = 0.1     //for 10% of discount 

    const leveCost = () => {
        return parseFloat(cost - (cost * percentageDiscount)).toFixed(2).replace(".", ",");
    }

    const leveYearTotalDiscount = () => {
        return parseFloat(((cost * percentageDiscount) * 12)).toFixed(2).replace(".", ",");
    }

    return (
        <Container>
            <Header>
                <TodayPriceInfo>
                    <Typography variant="subtitle1">Hoje você paga a Concessionária</Typography>
                    <Typography variant="h1">R$ {cost} 😡</Typography>
                </TodayPriceInfo>
                <LeveEconomyInfo>
                    <Typography variant="subtitle1" >Com a Leve você pagará:</Typography>
                    <Typography variant="h1" >R$ {leveCost()} 😀</Typography>
                </LeveEconomyInfo>
            </Header>

            <Divider variant="middle" className="divider" />

            <Content>
                <Banner>
                    <LeveMonthlyDiscount>
                        <Image src={icon} alt='ícone de porcentagem de desconto da Leve' />
                        <Typography variant="h1">Tenha {percentageDiscount * 100}% de desconto todo mês!</Typography>
                    </LeveMonthlyDiscount>
                    <Typography variant="subtitle1" className='yearDiscountLeveSubtitle' >Em 1 ano com a Leve a sua  {location} economizará</Typography>
                    <Typography variant="h1" className='yearDiscountLeve'>R$ {leveYearTotalDiscount()}</Typography>
                </Banner>

                <ResultEconomyDiscountGraph>
                    <Typography variant="subtitle1">Para entender: </Typography>
                    <Image src={graphic} alt='percentage icon' className='discountGraph' loading="eager" priority={true} />
                </ResultEconomyDiscountGraph>
            </Content>
        </Container>
    );
}
