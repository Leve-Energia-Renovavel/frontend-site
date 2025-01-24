import PercentIcon from '@mui/icons-material/Percent';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import { BenefitsTitleContainer, BenefitsValueBaloon, BenefitsBannerContainer as Container, BenefitsBannerContent as Content } from './styles';
export default function BenefitsBanners({ step, children }) {
    const banners = {
        0: {
            icon: <PercentIcon />,
            title: "Desconto mensal do seu plano",
            subtitle: "+ ZERO custos adicionais",
            value: "15%",
        },
        1: {
            icon: <SavingsOutlinedIcon />,
            title: "Potencial de economia em 1 ano",
            subtitle: "+ ISENÇÃO da bandeira tarifária",
            value: "R$ 5.540",
        },
        2: {
            icon: <PercentIcon />,
            title: "Impacto equivalente a plantar",
            subtitle: "+ Cancele quando quiser sem custos",
            value: "5 árvores",
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
