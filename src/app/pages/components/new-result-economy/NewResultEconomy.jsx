"use client"

import { useStoreUser } from '@/app/hooks/useStore'
import { benefits } from '@/app/utils/helper/signup/signupHelper'
import { ENVIRONMENTAL_IMPACT, PATH_TO, USER_COST } from '@/enums/globalEnums'
import logoLeveGreen from '@/resources/img/small/leve-logo-button-green-small.png'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { ArrowDownContainer, ArrowDownIcon, ContinueSignupButton, CouponAppliedContainer, EconomyResultContainer, EconomyResultFooter, EconomyResultTitleContainer, LeveBenefit, LeveBenefitsContainer, LeveBenefitsContent, LeveEconomy, LeveEconomyContainer, LeveEconomyContent, LeveEconomyDisclaimer, LoadingCircle, OneYearEconomyContainer, OneYearEconomyContent, OneYearEconomyData, OneYearEconomyHeader, PercentageIcon, SimpleArrowForward, SimpleCheckIcon, SimulationSlider, TodayCost, TodayEconomyContainer, TodayEconomyContent } from './styles'

export default function NewResultEconomy() {

    const router = useRouter()
    const search = useSearchParams()
    const storeUser = useStoreUser()

    const uuid = search.get("uuid")
    const user = JSON.parse(localStorage.getItem('user'))

    const [isLoading, setIsLoading] = useState(false)

    const { cost, couponValue, discount, tusd, te, availabilityTax } = user?.user ?? (storeUser?.user || {})

    const userHasCoupon = couponValue !== 0

    const todayCost = cost?.toFixed(2).toString().replace(".", ",")
    const formattedCost = cost.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    const regularConsumption = cost / (tusd + te)
    const compensableConsumption = regularConsumption - availabilityTax

    const leveDiscount = compensableConsumption * (discount / 100)
    const leveYearTotalDiscount = parseFloat(((compensableConsumption * (discount / 100)) * 12));
    const formattedLeveYearDiscount = leveYearTotalDiscount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const reducedCarbon = compensableConsumption * 12 * ENVIRONMENTAL_IMPACT.REDUCED_CARBON
    const formattedReducedCarbon = parseInt(reducedCarbon).toLocaleString('pt-BR')

    const treeEquivalency = reducedCarbon / ENVIRONMENTAL_IMPACT.TREE_EQUIVALENCY
    const formattedTreeEquivalency = Math.ceil(treeEquivalency)

    var leveDiscountValue = parseFloat(leveDiscount)?.toFixed(2)?.replace(".", ",");

    if (userHasCoupon) {
        leveDiscountValue = parseFloat((leveDiscount) - couponValue)?.toFixed(2)?.replace(".", ",");
    }

    const handleSubmit = () => {
        setIsLoading(true)
        router.push(`${PATH_TO.SIGNUP_FORM}?uuid=${uuid}`)
        setIsLoading(false)
    }

    return (
        <EconomyResultContainer className='economyResultContainer'>
            <EconomyResultTitleContainer className='economyResultTitleContainer'>
                <h1 className='economyResultTitle'>Seu potencial de economia e impacto</h1>
            </EconomyResultTitleContainer>

            <TodayEconomyContent className='economyResultContent'>
                <TodayEconomyContainer className='todayEconomyContainer'>
                    <p className='todayEconomyTitle'>Valor médio da sua conta de luz atual</p>
                    <TodayCost>
                        <p className='monetary'>R$</p>
                        <p className='todayCost'>{formattedCost}{cost === USER_COST.MAX && "+"}</p>
                    </TodayCost>
                    <p className='sliderTitle'>Ajuste o valor para recalcular sua economia:</p>
                    <SimulationSlider
                        onChange={(event) => storeUser.updateUser({ cost: event.target.value })}
                        value={cost}
                        step={10}
                        defaultValue={200}
                        min={USER_COST.MIN}
                        max={USER_COST.MAX}
                        valueLabelDisplay="off"
                    />
                    <ArrowDownContainer>
                        <ArrowDownIcon className='icon' />
                    </ArrowDownContainer>

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
                        <p className='leveEconomyValue'>{leveDiscountValue}</p>
                    </LeveEconomy>

                    <LeveEconomyContent className='leveEconomyContent'>
                        <PercentageIcon />
                        <p className='discountPercentage'>Percentual de desconto <span className='highlighted'>fixo e garantido</span></p>
                        <p className='discountPercentageValue'>{discount}%</p>
                    </LeveEconomyContent>
                </LeveEconomyContainer>

                <LeveEconomyDisclaimer className='leveEconomyDisclaimer'>
                    <p>* O desconto é aplicado sobre a parcela da conta de luz compensada com os créditos de energia da Leve</p>
                </LeveEconomyDisclaimer>
            </TodayEconomyContent>

            <OneYearEconomyContainer className='oneYearEconomyContainer'>
                <OneYearEconomyHeader className='oneYearEconomyHeader'>
                    <p className='oneYear'>Em um ano sendo</p>
                    <Image src={logoLeveGreen} alt='Leve Logo Verde' loading='lazy' priority={false} />
                </OneYearEconomyHeader>

                <OneYearEconomyContent className='oneYearEconomyContent'>
                    <OneYearEconomyData className='yearTotalDiscount'>
                        <p className='title'>Você economiza o total de</p>
                        <p className='value'>{formattedLeveYearDiscount}</p>
                    </OneYearEconomyData>
                    <OneYearEconomyData className='yearTotalCarbonEmission'>
                        <p className='title'>Reduz a emissão de CO₂ em</p>
                        <p className='value'>{formattedReducedCarbon} Kg</p>
                    </OneYearEconomyData>
                    <OneYearEconomyData className='treesPlanted'>
                        <p className='title'>Que equivale a plantação de</p>
                        <p className='value'>{formattedTreeEquivalency} Árvores</p>
                    </OneYearEconomyData>
                </OneYearEconomyContent>

            </OneYearEconomyContainer>

            <LeveBenefitsContainer className='leveBenefitsContainer'>
                <LeveBenefitsContent>
                    <p className='leveBenefitsTitle'>Além disso, você conta com</p>
                    {benefits.map((benefit, index) => {
                        return (
                            <LeveBenefit key={benefit + index} className={`leveBenefit-${index + 1}`}>
                                <SimpleCheckIcon />
                                <p className='benefit'>{benefit}</p>
                            </LeveBenefit>
                        )
                    })}
                </LeveBenefitsContent>
            </LeveBenefitsContainer>

            <EconomyResultFooter className='economyResultFooter'>
                <h2 className='economyResultSubtitle'>Gostou? Complete seu cadastro e se torne Leve</h2>
                <ContinueSignupButton
                    onClick={() => handleSubmit()}
                    endIcon={isLoading ? <LoadingCircle className='loading' size={21} /> : <SimpleArrowForward className='icon' />}>
                    <span>Completar cadastro</span>
                </ContinueSignupButton>
            </EconomyResultFooter>

        </EconomyResultContainer>
    )
}