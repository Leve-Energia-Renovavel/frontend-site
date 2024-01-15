import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import icon from '../../../resources/img/Frame.svg';
import { ResultEconomyComparissonContent, ResultEconomyContainer, ResultEconomyDiscount, ResultEconomyToUnderstandContent, ResultEconomyDiscountGraph } from './styles';

export default function ResultEconomy(props) {

    const { cost, type } = props.userData
    const location = type == 'cnpj' ? 'empresa' : 'residência'

    const percentageDiscount = 0.1     //for 10% of discount 

    const leveCost = () => {
        return cost - (cost * percentageDiscount)
    }

    const leveYearTotalDiscount = () => {
        return ((cost * percentageDiscount) * 12)
    }

    return (
        <ResultEconomyContainer>
            <ResultEconomyComparissonContent>
                <div>
                    <Typography variant="subtitle1">Hoje a sua {location} paga a Concessionaria</Typography>
                    <Typography variant="h1" sx={{ color: 'red' }}>R$ {cost} 😡</Typography>
                </div>
                <div>
                    <Typography variant="subtitle1">Com a Leve voce vai passar a pagar:</Typography>
                    <Typography variant="h1" sx={{ color: 'blue', backgroundColor: 'yellow', padding: '1rem' }}>R$ {leveCost()} 😀</Typography>
                </div>
            </ResultEconomyComparissonContent>

            <Divider variant="middle" style={{ background: 'yellow' }} />

            <ResultEconomyToUnderstandContent>
                <ResultEconomyDiscount>
                    <Image src={icon} alt='percentage icon' />
                    <Typography variant="h1" sx={{ color: 'blue', fontSize: '20px' }}>Tenha {percentageDiscount * 100}% de desconto todo mês!</Typography>
                    <Typography variant="subtitle1" sx={{}}>Em 1 ano com a Leve a sua  {location} economizará</Typography>
                    <Typography variant="h1" sx={{ color: 'blue', backgroundColor: 'yellow', padding: '1rem' }}>R$ {leveYearTotalDiscount()}</Typography>
                </ResultEconomyDiscount>

                <ResultEconomyDiscountGraph>
                    <Typography variant="subtitle1">Para entender: </Typography>
                    {/* TO DO: graphic component */}

                </ResultEconomyDiscountGraph>

            </ResultEconomyToUnderstandContent>


        </ResultEconomyContainer>
    );
}
