"use client"

import dynamic from "next/dynamic";
import { useState } from "react";
import { HomeContainer as Container, HomeContentContainer as HomeBanner, HomeMainContainer, HomeSecondarySectionContainer as SecondarySection } from "./styles";

import HomeMainBanner from './banners/HomeMainBanner';
import HomeBoxesMobile from "./boxes/mobile/HomeBoxesMobile";
import HomeMainForm from './form/HomeMainForm';

const BoxesContainer = dynamic(() => import('./boxes/HomeBoxes'), { ssr: false });
const HomeUsersType = dynamic(() => import('./HomeUsersType'), { ssr: false });
const BrandsContainer = dynamic(() => import('./HomeBrands'), { ssr: false });
const HomeEconomyBanner = dynamic(() => import('./banners/HomeEconomyBanner'), { ssr: false });
const HomeSoleBanner = dynamic(() => import('./banners/sole/HomeSoleBanner'), { ssr: false });
const TutorialContainer = dynamic(() => import('./tutorial/HomeTutorial'), { ssr: false });
const Messages = dynamic(() => import('../messages/Messages'), { ssr: false });

export default function HomeMain() {

    const [selectedUserType, setSelectedUserType] = useState('Residencia');

    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

    const handlePreSignup = (userType) => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setSelectedUserType(userType);
    }

    return (
        <HomeMainContainer className="homeMainContainer">
            <Container className="homeContainer">
                <HomeBanner className="homeBanner">
                    <HomeMainBanner />
                    <HomeMainForm
                        setErrorMessage={setErrorMessage}
                        setNotifications={setNotifications}
                        selectedUserType={selectedUserType}
                        setSelectedUserType={setSelectedUserType}
                        isMobile={false} />
                </HomeBanner>

                <SecondarySection className="homeSecondarySectionContainer">
                    <BoxesContainer />
                    <HomeUsersType handlePreSignup={handlePreSignup} />
                </SecondarySection>

                <HomeBoxesMobile className='homeMainBoxesContainerMobile' />

                <HomeSoleBanner />

                <TutorialContainer />

                <HomeMainForm
                    setErrorMessage={setErrorMessage}
                    setNotifications={setNotifications}
                    selectedUserType={selectedUserType}
                    setSelectedUserType={setSelectedUserType}
                    isMobile={true} />

                <HomeEconomyBanner />

                <BrandsContainer />

            </Container >

            <Messages notifications={notifications} errors={errors} setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
        </HomeMainContainer>
    )
}