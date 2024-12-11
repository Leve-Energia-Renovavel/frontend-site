"use client"

import dynamic from 'next/dynamic';
import { LandingPageContainer as Container, Controll, MainContentContainer } from './styles';

import { useState } from 'react';
import HomeInvertedSoleBanner from '../../home/banners/sole/HomeInvertedSoleBanner';
import Messages from '../../messages/Messages';
import LandingPageVideo from '../apresentacao/LandingPageVideo';
import LandingPageInvertedSolarPanelBanner from '../banners/LandingPageInvertedSolarPanelBanner';
import CompanyPartnerForm from '../form/CompanyPartnerForm';
import EconomyTable from '../tables/EconomyTable';
import LandingPageCompanyMainBanner from './LandingPageCompanyMainBanner';

const BrandsContainer = dynamic(() => import('../../home/brands/HomeBrands'), { ssr: false });

export default function LandingPageCompany() {

    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

    return (
        <>
            <Container className='landingPageCompanyContainer'>
                <MainContentContainer className="landingPageCompanyContent">
                    <LandingPageCompanyMainBanner />
                    <CompanyPartnerForm setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
                </MainContentContainer>

                <Controll className='landingPageControlComponent'>
                    <LandingPageInvertedSolarPanelBanner />
                </Controll>

                <BrandsContainer />

                <LandingPageVideo />

                <Controll className='landingPageControlComponent'>
                    <HomeInvertedSoleBanner />
                </Controll>

                <EconomyTable />

                <Messages notifications={notifications} errors={errors} setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
            </Container>
        </>
    )
}