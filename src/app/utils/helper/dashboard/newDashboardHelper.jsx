import Image from 'next/image'
import leveEcology from '../../../../resources/icons/large/leve-ecology-icon-green-large.png'
import leveSunEnergy from '../../../../resources/icons/large/leve-energy-from-sun-icon-orange-large.png'
import leveHappyPeople from '../../../../resources/icons/large/leve-happy-people-icon-orange-large.png'
import leveUserEnergy from '../../../../resources/icons/large/leve-user-economy-icon-orange-large.png'

export const factoryInfos = [
    {
        icon: <Image src={leveSunEnergy} alt='Geração em créditos de energia renovável' className='iconWidth' />,
        title: "Gerou em créditos de energia renovável:",
        value: "4.500.520 kWh",
    },
    {
        icon: <Image src={leveEcology} alt='Geração em créditos de carbono para empresas' className='iconHeight' />,
        title: "Gerou em créditos de carbono para empresas:",
        value: "23.350.000 CO2e",
    },
    {
        icon: <Image src={leveUserEnergy} alt='Geração em economia para as pessoas' className='iconWidth' />,
        title: "Gerou em economia para as pessoas:",
        value: "R$ 1.150.000,00",
    },
    {
        icon: <Image src={leveHappyPeople} alt='Impactou a vida e os negócios mais Leves' className='iconHeight' />,
        title: "Impactou a vida e os negócios mais Leves de:",
        value: "8.450.000 pessoas",
    },
]