"use client"

import dynamic from 'next/dynamic';
import { LandingPageContainer as Container, MainContentContainer } from './styles';

import { useState } from 'react';
import HomeInvertedSoleBanner from '../../home/banners/sole/HomeInvertedSoleBanner';
import Messages from '../../messages/Messages';
import LandingPageVideo from '../apresentacao/LandingPageVideo';
import LandingPageInvertedSolarPanelBanner from '../banners/LandingPageInvertedSolarPanelBanner';
import CompanyPartnerForm from '../form/CompanyPartnerForm';
import LandingPageCompanyMainBanner from './LandingPageCompanyMainBanner';
import EconomyTable from '../tables/EconomyTable';

const BrandsContainer = dynamic(() => import('../../home/HomeBrands'), { ssr: false });

export default function LandingPageCompany() {

    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

    return (
        <>
            <Container>
                <MainContentContainer className="mainContentContainer">
                    <LandingPageCompanyMainBanner />
                    <CompanyPartnerForm />
                </MainContentContainer>

                <LandingPageInvertedSolarPanelBanner />

                <BrandsContainer />
                <LandingPageVideo />
                <HomeInvertedSoleBanner />

                <EconomyTable />

                <Messages notifications={notifications} errors={errors} setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
            </Container>
        </>
    )
}