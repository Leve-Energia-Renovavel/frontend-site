"use client"

import dynamic from 'next/dynamic';
import { LandingPageContainer as Container } from './styles';

import HomeSoleBanner from '../../home/banners/HomeSoleBanner';
import LandingPageSolarPanelBanner from '../apresentacao/LandingPageSolarPanelBanner';
import LandingPageVideo from '../apresentacao/LandingPageVideo';

const BrandsContainer = dynamic(() => import('../../home/HomeBrands'), { ssr: false });

export default function LandingPageCompany() {
    return (
        <>
            <Container>
                <LandingPageSolarPanelBanner />
                <BrandsContainer />
                <LandingPageVideo />
                <HomeSoleBanner />
            </Container>
        </>
    )
}