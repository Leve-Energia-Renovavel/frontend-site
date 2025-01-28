import { useStoreUser } from '@/app/hooks/stores/useStore';
import { ENVIRONMENTAL_IMPACT } from '@/app/pages/enums/globalEnums';
import { formatBrazillianCurrency } from '@/app/utils/formatters/costFormatter';
import { checkForZero, checkForZeroCurrency, checkForZeroDiscount } from '@/app/utils/helper/result-economy/resultEconomyHelper';
import PercentIcon from '@mui/icons-material/Percent';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import { BenefitsTitleContainer, BenefitsValueBaloon, BenefitsBannerContainer as Container, BenefitsBannerContent as Content } from './styles';
export default function BenefitsBanners({ step, children }) {

    const { uuid, cost, couponValue, discount, tusd, te, availabilityTax } = useStoreUser()?.user || {}

    const regularConsumption = cost / (tusd + te)
    const compensableConsumption = regularConsumption - availabilityTax

    const leveDiscount = checkForZeroDiscount(compensableConsumption * (discount / 100))
    const leveYearTotalDiscount = checkForZeroCurrency(parseFloat(((compensableConsumption * (discount / 100)) * 12)));
    const formattedLeveYearDiscount = formatBrazillianCurrency(leveYearTotalDiscount)

    const reducedCarbon = compensableConsumption * 12 * ENVIRONMENTAL_IMPACT.REDUCED_CARBON
    const formattedReducedCarbon = checkForZero(parseInt(reducedCarbon).toLocaleString('pt-BR'))

    const treeEquivalency = reducedCarbon / ENVIRONMENTAL_IMPACT.TREE_EQUIVALENCY
    const formattedTreeEquivalency = checkForZero(Math.ceil(treeEquivalency))

    const banners = {
        0: {
            icon: <PercentIcon />,
            title: "Desconto mensal do seu plano",
            subtitle: "+ ZERO custos adicionais",
            value: `${discount}%`,
        },
        1: {
            icon: <SavingsOutlinedIcon />,
            title: "Potencial de economia em 1 ano",
            subtitle: "+ ISENÇÃO da bandeira tarifária",
            value: `R$ ${formattedLeveYearDiscount}`,
        },
        2: {
            icon: <PercentIcon />,
            title: "Impacto equivalente a plantar",
            subtitle: "+ Cancele quando quiser sem custos",
            value: `${formattedTreeEquivalency} árvores`,
        },
    };

    const { icon, title, subtitle, value } = banners[step] || {};

    return (
        <Container className='benefitsBannerContainer'>
            <Content className='benefitsBannerContent'>
                <span className='icon'>{icon}</span>
                <BenefitsTitleContainer className='benefitsTitleContainer'>
                    <p className='title'>{title}</p>
                    <p className='subtitle'>{subtitle}</p>
                </BenefitsTitleContainer>
                <BenefitsValueBaloon className='benefitsValueBaloon'>
                    <p className='value'>{value}</p>
                </BenefitsValueBaloon>
            </Content>
            {children}
        </Container>
    );
}
