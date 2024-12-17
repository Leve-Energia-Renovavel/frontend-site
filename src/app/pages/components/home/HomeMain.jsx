"use client"

import { Divider } from "@mui/material";
import dynamic from "next/dynamic";
import NewHomeMainBanner from "./banners/main/new-home/NewHomeMainBanner";
import HomeHowLeveWorks from "./HomeMainSecond";
import HomeLeveAboutUs from "./HomeMainThird";
import { HomeContainer as Container, HomeContentContainer as HomeBanner } from "./styles";

const HomeForm = dynamic(() => import("./form/new-home/HomeForm"), { ssr: false });
const Messages = dynamic(() => import("../messages/Messages"), { ssr: false });

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

            <Messages />
        </>
    )
}