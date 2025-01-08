"use client"

import { Divider } from "@mui/material";
import dynamic from "next/dynamic";
import NewHomeMainBanner from "./banners/main/new-home/NewHomeMainBanner";
import HomeHowLeveWorks from "./HomeHowLeveWorks";
import { HomeContainer as Container, HomeContentContainer as HomeBanner } from "./styles";

const HomeForm = dynamic(() => import("./form/new-home/HomeForm"), { ssr: false });
const HomeLeveAboutUs = dynamic(() => import("./HomeLeveAboutUs"), { ssr: false });

export default function HomeMain() {

    return (
        <>
            <Container className="homeContainer">

                <HomeBanner className="homeBanner">
                    <Divider className='dividerBar' />
                    <NewHomeMainBanner />
                </HomeBanner>

                <HomeHowLeveWorks />

                <HomeForm />

                <HomeLeveAboutUs />

            </Container >
        </>
    )
}