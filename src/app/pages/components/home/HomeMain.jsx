"use client"

import { Divider } from "@mui/material";
import dynamic from "next/dynamic";
import NewHomeMainBanner from "./banners/main/new-home/NewHomeMainBanner";
import NewHomeBoxes from "./boxes/new-home/NewHomeBoxes";
import { HomeContainer as Container, HomeContentContainer as HomeBanner } from "./styles";

// const NewHomeMainBanner = dynamic(() => import("./benefits/NewHomeBenefits"), { ssr: true });
// const NewHomeBoxes = dynamic(() => import("./boxes/new-home/NewHomeBoxes"), { ssr: true });

const NewHomeBenefits = dynamic(() => import("./benefits/NewHomeBenefits"), { ssr: false });
const NewHomeTutorial = dynamic(() => import("./tutorial/new-home/NewHomeTutorial"), { ssr: false });
const NewHomeForm = dynamic(() => import("./form/new-home/NewHomeForm"), { ssr: false });
const BrandsContainer = dynamic(() => import("./brands/HomeBrands"), { ssr: false });
const NewHomeVideo = dynamic(() => import("./video/NewHomeVideo"), { ssr: false });
const Messages = dynamic(() => import("../messages/Messages"), { ssr: false });

export default function HomeMain() {

    return (
        <>
            <Container className="homeContainer">

                <HomeBanner className="homeBanner">
                    <Divider className='dividerBar' />
                    <NewHomeMainBanner />
                </HomeBanner>

                <NewHomeBoxes />

                <NewHomeBenefits />

                <NewHomeTutorial />

                <NewHomeForm />

                <BrandsContainer />

                <NewHomeVideo />

            </Container >

            <Messages />
        </>
    )
}