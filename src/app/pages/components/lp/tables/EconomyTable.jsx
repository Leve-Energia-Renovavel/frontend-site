import { handleScroll } from '@/app/utils/browser/BrowserUtils'
import Image from 'next/image'
import economyIcon from '../../../../../resources/icons/small/leve-economia-icone-green-small.svg'
import leveLogo from '../../../../../resources/icons/small/leve-new-logo-very-small.svg'
import { CardDividerOne, CardDividerTwo, EconomyTableContainer as Container, EconomyTableContent, EconomyTableTitleContainer, TableCardContainer, TableCardOne, TableCardThree, TableCardTitle, TableCardTwo, TableContent, TableContentContainer, TableFooterButton, TableFooterButtonContainer, TableFooterContainer, TableFooterDescription, TableFooterDiscount, TableFooterDiscountValue, TableHeaderOne, TableHeaderTwo } from './styles'

export default function EconomyTable() {
    return (
        <Container className='economyTableContainer'>
            <EconomyTableContent className='economyTableContent'>
                <EconomyTableTitleContainer className='economyTableTitleContainer'>
                    <h6 className='economyTableTitle'>Como você economiza com a Leve Energia:</h6>
                </EconomyTableTitleContainer>

                <TableContentContainer className='economyTableContentContainer'>
                    <TableContent className='tableContent'>
                        <TableHeaderOne className='tableHeaderOne'>
                            <p>Sem a Leve: <span className='highlighted'>R$2.524,85</span></p>
                        </TableHeaderOne>
                        <TableCardContainer className='tableCardContainer'>
                            <TableCardOne className='tableCard'>
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

                            <TableHeaderOne className='hiddenTableHeaderOne'>
                                <p>Sem a Leve: <span className='highlighted'>R$2.524,85</span></p>
                            </TableHeaderOne>

                            <TableCardTwo className='tableCard'>
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
                        <TableHeaderTwo className='tableHeaderTwo'>
                            <Image src={economyIcon} alt='economia com a Leve' priority={false} loading='lazy' className='economyIcon' />
                            <p>Com a Leve: <span className='highlighted'>R$2.322,74</span></p>
                        </TableHeaderTwo>
                        <TableCardContainer className='tableCardContainer'>
                            <TableCardThree className='tableCard'>
                                <TableCardTitle>
                                    <p className='boletoLeve'>Boleto</p>
                                    <Image src={leveLogo} alt='logo Leve' priority={false} loading='lazy' className='logoLeve' />
                                </TableCardTitle>
                                <p className='tinyValue'>2.513kWh x <span className='highlighted'>R$0,7211</span> =</p>
                                <p>R$322,38</p>
                                <CardDividerTwo />
                                <p className='thinValue'>R$0,00</p>
                                <CardDividerTwo />
                                <p className='thinValue'>R$0,00</p>
                                <CardDividerTwo />
                                <p className='thinValue'>R$0,00</p>
                                <CardDividerTwo />
                                <p className='boldValue'>R$1.812,12</p>
                            </TableCardThree>
                            <p className='tableAddIcon'>+</p>
                            <TableCardThree className='tableCard'>
                                <TableCardTitle>
                                    <p className='cardTitle'>NOVO Boleto da Distribuidora</p>
                                </TableCardTitle>
                                <p className='tinyValue'>100kWh x R$0,8875 =</p>
                                <p>R$26,50</p>
                                <CardDividerTwo />
                                <p>R$25,39</p>
                                <CardDividerTwo />
                                <p>R$241,45</p>
                                <CardDividerTwo />
                                <p>R$180,42</p>
                                <CardDividerTwo />
                                <p className='boldValue'>R$510,62</p>
                            </TableCardThree>
                        </TableCardContainer>
                    </TableContent>
                </TableContentContainer>

                <TableFooterContainer className='tableFooterContainer'>
                    <TableFooterDescription className='tableFooterDescription'>
                        <p>Com a contratação da Leve, a CPFL passa a cobrar somente o mínimo de 100 dos 2.613 kWh que você consumiu, para que sua residência continue conectada à rede da CPFL e recebendo energia da Leve.</p>
                    </TableFooterDescription>

                    <TableFooterDiscount className='tableFooterDiscount'>
                        <TableFooterDiscountValue>
                            <p className='value'>8%</p>
                            <p className='description'>de desconto</p>
                        </TableFooterDiscountValue>
                        <TableFooterDiscountValue>
                            <p className='value'>R$202,11</p>
                            <p className='description'>economia por mês</p>
                        </TableFooterDiscountValue>
                        <TableFooterDiscountValue>
                            <p className='value'>R$2.425,22</p>
                            <p className='description'>economia por ano</p>
                        </TableFooterDiscountValue>
                    </TableFooterDiscount>
                </TableFooterContainer>
                <TableFooterContainer>
                    <TableFooterDescription>
                        <p>R$ 2.322,74 = R$ 1.812,12 (pagos a Leve) + R$510,62 (pagos a distribuidora)</p>
                    </TableFooterDescription>
                    <TableFooterButtonContainer>
                        <TableFooterButton onClick={() => handleScroll()}>
                            <span>Começe a economizar</span>
                        </TableFooterButton>

                    </TableFooterButtonContainer>
                </TableFooterContainer>

            </EconomyTableContent>

        </Container>
    )
}