"use client"

import { Divider } from "@mui/material";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import NewHomeMainBanner from "./banners/main/new-home/NewHomeMainBanner";
import HomeMainForm from './form/HomeMainForm';
import NewHomeForm from "./form/new-home/NewHomeForm";
import { HomeContainer as Container, HomeContentContainer as HomeBanner } from "./styles";
import NewHomeTutorial from "./tutorial/new-home/NewHomeTutorial";
import NewHomeVideo from "./video/NewHomeVideo";

const NewHomeBoxes = dynamic(() => import("./boxes/new-home/NewHomeBoxes"), { ssr: false });
const BrandsContainer = dynamic(() => import('./brands/HomeBrands'), { ssr: false });
const Messages = dynamic(() => import('../messages/Messages'), { ssr: false });

export default function HomeMain() {

    const [selectedUserType, setSelectedUserType] = useState('Residencia');

    const [isMobile, setIsMobile] = useState(false);
    const [errors, setErrorMessage] = useState([]);
    const [notifications, setNotifications] = useState([])

    const mobileWidth = 900

    useEffect(() => {
        const handleResize = () => {
            const windowSize = window.innerWidth <= mobileWidth;
            if (windowSize !== isMobile) setIsMobile(windowSize);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
            console.log(isMobile)
        };
    }, [isMobile]);

    return (
        <>
            <Container className="homeContainer">

                <HomeBanner className="homeBanner">
                    <Divider className='dividerBar' />
                    <NewHomeMainBanner isMobile={isMobile} />
                </HomeBanner>

                <NewHomeBoxes isMobile={isMobile} />

                <NewHomeTutorial isMobile={isMobile} />

                <NewHomeForm />

                <HomeMainForm
                    setErrorMessage={setErrorMessage}
                    setNotifications={setNotifications}
                    selectedUserType={selectedUserType}
                    setSelectedUserType={setSelectedUserType}
                    isMobile={true} />


                <BrandsContainer />

                <NewHomeVideo />

            </Container >

            <Messages notifications={notifications} errors={errors} setErrorMessage={setErrorMessage} setNotifications={setNotifications} />
        </>

    )
}