"use client"

import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import infoJson from '../../../../../public/info.json';
import companyCardImage from "../../../../resources/img/large/leve-confraternizacao-image-large-compressed.webp";
import homeCardImage from "../../../../resources/img/large/leve-familia-brincando-image-large-compressed.webp";
import { HomeSecondaryImagesContainer, HomeSecondaryImagesContent } from "./styles";

export default function HomeUsersType({ handlePreSignup }) {

    const texts = infoJson.home

    return (
        <HomeSecondaryImagesContainer >
            <HomeSecondaryImagesContent image={homeCardImage} onClick={() => handlePreSignup("Residencia")} >
                <h6 variant="subtitle1">{texts.forYourHouse}</h6>
                <ArrowCircleRightOutlinedIcon className='arrowIcon' />
            </HomeSecondaryImagesContent>
            <HomeSecondaryImagesContent invertedBox={true} image={companyCardImage} onClick={() => handlePreSignup("Empresa")}>
                <h6 variant="subtitle1">{texts.forYourCompany}</h6>
                <ArrowCircleRightOutlinedIcon className='arrowIcon' />
            </HomeSecondaryImagesContent>
        </HomeSecondaryImagesContainer>
    )
}
