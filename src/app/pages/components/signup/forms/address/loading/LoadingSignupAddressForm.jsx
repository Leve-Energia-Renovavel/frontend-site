import { Skeleton } from "@mui/material";
import { LoadingContainer, LoadingFooter, LoadingSection } from "./styles";

export default function LoadingSignupAddressForm() {
    return (
        <LoadingContainer>
            <Skeleton variant="rectangular" className="loadingMobileFullField" />
            <Skeleton variant="rectangular" className="loadingMobileFullField" />
            <Skeleton variant="rectangular" className="loadingMobileFullField" />
            <Skeleton variant="rectangular" className="loadingMobileFullField" />
            <Skeleton variant="rectangular" className="loadingMobileFullField" />
            <LoadingSection>
                <Skeleton variant="rectangular" className="loadingThirdField" />
                <Skeleton variant="rectangular" className="loadingThirdField" />
                <Skeleton variant="rectangular" className="loadingThirdField" />
            </LoadingSection>
            <LoadingSection>
                <Skeleton variant="rectangular" className="loadingThirdField" />
                <Skeleton variant="rectangular" className="loadingThirdField" />
                <Skeleton variant="rectangular" className="loadingThirdField" />
            </LoadingSection>
            <LoadingSection>
                <Skeleton variant="rectangular" className="loadingThirdField" />
                <Skeleton variant="rectangular" className="loadingThirdField" />
                <Skeleton variant="rectangular" className="loadingThirdField" />
            </LoadingSection>
            <LoadingFooter>
                <Skeleton variant="rectangular" className="largerCircularButton" />
            </LoadingFooter>
        </LoadingContainer>
    )
}