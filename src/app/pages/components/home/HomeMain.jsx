"use client"

import { Divider } from "@mui/material";
import Messages from "../messages/Messages";
import NewHomeMainBanner from "./banners/main/new-home/NewHomeMainBanner";
import NewHomeBenefits from "./benefits/NewHomeBenefits";
import NewHomeBoxes from "./boxes/new-home/NewHomeBoxes";
import BrandsContainer from "./brands/HomeBrands";
import NewHomeForm from "./form/new-home/NewHomeForm";
import NewHomeTutorial from "./tutorial/new-home/NewHomeTutorial";
import NewHomeVideo from "./video/NewHomeVideo";
import { HomeContainer as Container, HomeContentContainer as HomeBanner } from "./styles";

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