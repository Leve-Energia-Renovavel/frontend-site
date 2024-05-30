import Image from 'next/image'
import economyIcon from '../../../../../resources/icons/small/leve-economia-icone-green-small.svg'
import { CardDividerOne, CardDividerTwo, EconomyTableContainer as Container, EconomyTableContent, EconomyTableTitleContainer, TableCardContainer, TableCardOne, TableCardThree, TableCardTitle, TableCardTwo, TableContent, TableContentContainer, TableHeaderOne, TableHeaderTwo } from './styles'

export default function EconomyTable() {
    return (
        <Container>
            <EconomyTableContent>
                <EconomyTableTitleContainer>
                    <h6 className='economyTableTitle'>Como você economiza com a Leve Energia:</h6>
                </EconomyTableTitleContainer>

                <TableContentContainer>

                    <TableContent>
                        <TableHeaderOne>
                            <p>Sem a Leve: <span className='highlighted'>R$2.524,85</span></p>
                        </TableHeaderOne>
                        <TableCardContainer>
                            <TableCardOne>
                                <div className='cardOneContent'>
                                    <p>Consumo de energia</p>
                                    <CardDividerOne />
                                    <p>Outros <span className='taxes'>(Juros, multa, impostos)</span></p>
                                    <CardDividerOne />
                                    <p>Impostos não compensáveis</p>
                                    <CardDividerOne />
                                    <p>Iluminação Pública</p>
                                    <CardDividerOne />
                                    <p>Valor Total</p>
                                </div>
                            </TableCardOne>
                            <TableCardTwo>
                                <TableCardTitle>
                                    <p className='cardTitle'>Boleto da Distribuidora</p>
                                </TableCardTitle>
                                <p className='tinyValue'>2.613kWh x R$0,8875 =</p>
                                <p>R$2.319,04</p>
                                <CardDividerTwo />
                                <p>R$25,39</p>
                                <CardDividerTwo />
                                <p className='thinValue'>R$0,00</p>
                                <CardDividerTwo />
                                <p>R$180,42</p>
                                <CardDividerTwo />
                                <p className='boldValue'>R$488,96</p>
                            </TableCardTwo>
                        </TableCardContainer>
                    </TableContent>

                    <TableContent>
                        <TableHeaderTwo>
                            <Image src={economyIcon} alt='economia com a Leve' priority={false} loading='lazy' className='economyIcon' />
                            <p>Com a Leve: <span className='highlighted'>R$2.322,74</span></p>
                        </TableHeaderTwo>
                        <TableCardContainer>
                            <TableCardThree>
                                <TableCardTitle>
                                    <p className='boletoLeve'>Boleto</p>
                                </TableCardTitle>
                            </TableCardThree>
                            <TableCardThree>
                                <TableCardTitle>
                                    <p>NOVO Boleto da Distribuidora</p>
                                </TableCardTitle>
                            </TableCardThree>

                        </TableCardContainer>
                    </TableContent>

                </TableContentContainer>

            </EconomyTableContent>

        </Container>
    )
}