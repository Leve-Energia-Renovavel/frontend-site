"use client"

import { useStoreUser } from "@/app/hooks/stores/useStore";
import { Typography } from "@mui/material";
import { BannerContainer, ContentContainer } from "./styles";

export default function RegisterBannerSuccess(props) {

    const store = useStoreUser()
    const user = JSON.parse(localStorage.getItem('user')) || store.user

    // const name = user?.user?.name ?? (user?.name || {})
    // const fullName = name?.split(" ") || "";

    // var firstName = null
    // if (fullName !== "") {
    //     firstName = fullName[0]
    // }

    const location = user.isCompany ? 'empresa' : 'residência'

    return (
        <BannerContainer>
            <ContentContainer>
                {/* <Typography variant="body1" component="h1">{`Boas notícias${firstName && `, ${firstName}`}! 🎉`}</Typography> */}
                <Typography variant="body1" component="h1">{`Boas notícias! 🎉`}</Typography>
                <Typography variant="subtitle1" className="boldSubtitle">A Leve já chegou na sua região!</Typography>
                <Typography variant="subtitle1" className="subtitle">Veja abaixo o resultado da economia de sua {location}</Typography>
            </ContentContainer>
        </BannerContainer>
    )
}