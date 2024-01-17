import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import icon from '../../../resources/img/Frame.svg';
import graphic from '../../../resources/img/graphic-leve.png';
import { ResultEconomyComparissonContent, ResultEconomyContainer, ResultEconomyDiscount, ResultEconomyDiscountGraph, ResultEconomyToUnderstandContent } from './styles';


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
        <ResultEconomyContainer>
            <ResultEconomyComparissonContent>
                <div style={{ flex: 1, maxWidth: '50%' }}>
                    <Typography variant="subtitle1" sx={{ paddingBottom: '1rem' }}>Hoje você paga a Concessionária</Typography>
                    <Typography variant="h1" sx={{ display: 'inline', color: '#EB641B', margin: '2rem 0' }}>R$ {cost} 😡</Typography>
                </div>
                <div style={{ flex: 1, maxWidth: '50%', marginRight: 'auto' }}>
                    <Typography variant="subtitle1" sx={{ paddingBottom: '1rem' }} >Com a Leve voce vai passar a pagar:</Typography>
                    <Typography variant="h1" sx={{ display: 'inline', color: '#0075FF', backgroundColor: '#FFD300', margin: '2rem 0' }}>R$ {leveCost()} 😀</Typography>
                </div>
            </ResultEconomyComparissonContent>

            <Divider variant="middle" style={{ background: '#FFD300' }} />

            <ResultEconomyToUnderstandContent>
                <ResultEconomyDiscount>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Image src={icon} alt='percentage icon' style={{ margin: '0 1rem', maxWidth: '30%' }} />
                        <Typography variant="h1" sx={{ color: '#0075FF', fontSize: '20px', maxWidth: '70%' }}>Tenha {percentageDiscount * 100}% de desconto todo mês!</Typography>
                    </div>
                    <Typography variant="subtitle1" >Em 1 ano com a Leve a sua  {location} economizará</Typography>
                    <Typography variant="h1" sx={{ color: '#0075FF', backgroundColor: '#FFD300', padding: '1rem', marginRight: 'auto' }}>R$ {leveYearTotalDiscount()}</Typography>
                </ResultEconomyDiscount>

                <ResultEconomyDiscountGraph>
                    <Typography variant="subtitle1">Para entender: </Typography>
                    <Image src={graphic} alt='percentage icon' width={420} height={'auto'} loading="eager" priority={true} />
                </ResultEconomyDiscountGraph>

            </ResultEconomyToUnderstandContent>


        </ResultEconomyContainer>
    );
}
