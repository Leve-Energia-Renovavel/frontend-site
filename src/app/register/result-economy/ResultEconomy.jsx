import React from 'react';
import { Typography } from '@mui/material';
import { ResultEconomyContainer } from './styles';
import VerifiedIcon from '@mui/icons-material/Verified';

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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="subtitle1">Hoje a sua {location} paga a Concessionaria</Typography>
                <Typography variant="h1" sx={{ color: 'red' }}>R$ {cost}</Typography>
                <Typography variant="subtitle1">Com a Leve voce vai passar a pagar:</Typography>
                <Typography variant="h1" sx={{ color: 'blue' }}>R$ {leveCost()}</Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div sx={{
                    display: 'flex', flexDirection: 'row'
                }}>
                    <VerifiedIcon sx={{
                        display: 'inline-block',
                        fontSize: 65,
                        color: 'blue',
                        "&:hover": {
                            cursor: 'pointer',
                        }
                    }} />
                    <Typography variant="h2" sx={{
                        display: 'inline-block',
                        color: 'blue', fontSize: '20px'
                    }}>Tenha {percentageDiscount * 100}% de desconto todo mês!</Typography>
                </div>
                <Typography variant="subtitle1">Em 1 ano com a Leve a sua  {location} economizará</Typography>
                <Typography variant="h1" sx={{ color: 'blue' }}>R$ {leveYearTotalDiscount()}</Typography>
            </div>


        </ResultEconomyContainer>
    );
}
