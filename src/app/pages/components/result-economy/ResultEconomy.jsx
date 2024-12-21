"use client"

import { useStoreUser } from '@/app/hooks/stores/useStore'
import { useStoreMessages } from '@/app/hooks/stores/useStoreMessages'
import { formatBrazillianCurrency } from '@/app/utils/formatters/costFormatter'
import { benefits, checkForZero, checkForZeroCurrency, checkForZeroDiscount, newCostValidation, updateSliderConfig } from '@/app/utils/helper/result-economy/resultEconomyHelper'
import { ENVIRONMENTAL_IMPACT, PATH_TO, USER_COST } from '@/enums/globalEnums'
import logoLeveGreen from '@/resources/img/small/leve-logo-button-green-small.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { ArrowDownContainer, ArrowDownIcon, EconomyResultContainer, EconomyResultFooter, EconomyResultTitleContainer, EditTodayCostIcon, LeveBenefit, LeveBenefitsContainer, LeveBenefitsContent, LeveEconomy, LeveEconomyContainer, LeveEconomyContent, LeveEconomyDisclaimer, LoadingCircle, OneYearEconomyContainer, OneYearEconomyContent, OneYearEconomyData, OneYearEconomyHeader, PercentageIcon, RoundCheckIcon, SimpleArrowForward, SimpleCheckIcon, SimpleCloseIcon, SimulationSlider, StartRegisterButton, TodayCostContainer, TodayCostValue, TodayEconomyContainer, TodayEconomyContent } from './styles'

export default function ResultEconomy() {

    const router = useRouter()
    const storeUser = useStoreUser()
    const storeMessage = useStoreMessages()

    const todayCostValueRef = useRef(null);

    const { cost, couponValue, discount, tusd, te, availabilityTax } = storeUser?.user || {}

    const [isLoading, setIsLoading] = useState(false)
    const [isEdition, setIsEdition] = useState(false)

    const [sliderConfig, setSliderConfig] = useState({
        defaultValue: USER_COST.DEFAULT_VALUE,
        min: USER_COST.MIN,
        max: USER_COST.MAX,
        step: USER_COST.STEP,
    });

    const regularConsumption = cost / (tusd + te)
    const compensableConsumption = regularConsumption - availabilityTax

    const leveDiscount = checkForZeroDiscount(compensableConsumption * (discount / 100))
    const leveYearTotalDiscount = checkForZeroCurrency(parseFloat(((compensableConsumption * (discount / 100)) * 12)));
    const formattedLeveYearDiscount = formatBrazillianCurrency(leveYearTotalDiscount)

    const reducedCarbon = compensableConsumption * 12 * ENVIRONMENTAL_IMPACT.REDUCED_CARBON
    const formattedReducedCarbon = checkForZero(parseInt(reducedCarbon).toLocaleString('pt-BR'))

    const treeEquivalency = reducedCarbon / ENVIRONMENTAL_IMPACT.TREE_EQUIVALENCY
    const formattedTreeEquivalency = checkForZero(Math.ceil(treeEquivalency))

    var formattedLeveDiscount = formatBrazillianCurrency(leveDiscount)

    const handleSubmit = () => {
        setIsLoading(true)
        if (cost <= 0 || cost < 200) {
            storeMessage.setErrors(["O valor da sua conta de luz deve ser superior a R$ 200"])
        } else {
            storeUser.updateUser({ cost: cost });
            router.push(`${PATH_TO.REGISTER_USER}`)
        }
        setIsLoading(false)
    }

    const handleUpdateCostByTyping = (event) => {
        let newCost = event.target.value.replace(/\D/g, '') / 100;
        storeUser.updateUser({ cost: newCostValidation(newCost) });
        updateSliderConfig(newCost, setSliderConfig);
    };

    const handleUpdateCostBySlider = (event) => {
        setIsEdition(false)
        const newCost = event.target.value;
        storeUser.updateUser({ cost: newCost });
        updateSliderConfig(newCost, setSliderConfig);
    };

    const handleEditCost = () => {
        todayCostValueRef?.current?.focus();
        setIsEdition(true)
    }
    const handleConfimEdition = () => {
        setIsEdition(false)
    }
    const handleCostTooLow = () => {
        if (cost < 200) {
            storeUser.updateUser({ cost: 200 });
        }
    }

    return (
        <EconomyResultContainer className='economyResultContainer' >
            <EconomyResultTitleContainer className='economyResultTitleContainer'>
                <h1 className='economyResultTitle'>Seu potencial de economia e impacto</h1>
            </EconomyResultTitleContainer>

            <TodayEconomyContent className='economyResultContent'>
                <TodayEconomyContainer className='todayEconomyContainer'>
                    <p className='todayEconomyTitle'>Valor médio da sua conta de luz atual</p>
                    <TodayCostContainer
                        className='todayCostContainer'
                        isEdition={isEdition}>
                        <p className='monetary'>R$</p>
                        <TodayCostValue
                            inputRef={todayCostValueRef}
                            className='todayCost'
                            type='text'
                            inputProps={{ inputMode: 'numeric' }}
                            InputLabelProps={{ shrink: true, style: { color: '#FF7133' } }}
                            value={cost === "" ? "" : formatBrazillianCurrency(cost)}
                            onChange={(event) => handleUpdateCostByTyping(event)}
                            onClick={() => handleEditCost()}
                            required>
                        </TodayCostValue>
                        {isEdition ? (
                            cost < 200 ? (
                                <SimpleCloseIcon
                                    className="editErrorTodayCostIcon"
                                    onClick={handleCostTooLow}
                                />) : (
                                <SimpleCheckIcon
                                    className="editOkTodayCostIcon"
                                    onClick={handleConfimEdition}
                                />)) : (
                            <EditTodayCostIcon
                                className="editTodayCostIcon"
                                onClick={handleEditCost}
                            />
                        )}
                    </TodayCostContainer>
                    {cost < USER_COST.MIN && <p className='lowCostDisclaimer'>O valor mínimo é de R$200</p>}
                    <p className='sliderTitle'>Ajuste o valor para recalcular sua economia:</p>
                    <SimulationSlider
                        onChange={(event) => handleUpdateCostBySlider(event)}
                        value={cost}
                        step={sliderConfig.step}
                        defaultValue={sliderConfig.defaultValue}
                        min={sliderConfig.min}
                        max={sliderConfig.max}
                        valueLabelDisplay="off"
                    />
                    <ArrowDownContainer>
                        <ArrowDownIcon className='icon' />
                    </ArrowDownContainer>

                </TodayEconomyContainer>

                <LeveEconomyContainer className='leveEconomyContainer'>
                    <p className='leveEconomyTitle'>Valor potencial médio do seu desconto mensal*</p>
                    <LeveEconomy>
                        <p className='monetary'>R$</p>
                        <p className='leveEconomyValue'>{formattedLeveDiscount}</p>
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
                <LeveBenefitsContent className='leveBenefitsContent'>
                    <p className='leveBenefitsTitle'>Além disso, você conta com</p>
                    {benefits.map((benefit, index) => {
                        return (
                            <LeveBenefit key={benefit + index} className={`leveBenefit-${index + 1}`}>
                                <RoundCheckIcon />
                                <p className='benefit'>{benefit}</p>
                            </LeveBenefit>
                        )
                    })}
                </LeveBenefitsContent>
            </LeveBenefitsContainer>

            <EconomyResultFooter className='economyResultFooter'>
                <h2 className='economyResultSubtitle'>Gostou? Complete seu cadastro e se torne Leve</h2>
                {isLoading ? (
                    <LoadingCircle className="loading" />
                ) : (
                    <StartRegisterButton
                        onClick={() => handleSubmit()}
                        endIcon={<SimpleArrowForward className="icon" />}>
                        <span>Completar cadastro</span>
                    </StartRegisterButton>
                )}
            </EconomyResultFooter>


        </EconomyResultContainer >
    )
}