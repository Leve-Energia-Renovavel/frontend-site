import { Skeleton } from "@mui/material";
import { LoadingContainer, LoadingFooter, LoadingSection, LoadingSectionFirst } from "./styles";

export default function LoadingSignupAddressForm() {
    return (
        <LoadingContainer className="loadingSignupAddressFormContainer">
            <Skeleton variant="rectangular" className="loadingMobileFullField" />
            <Skeleton variant="rectangular" className="loadingMobileFullField" />
            <Skeleton variant="rectangular" className="loadingMobileFullField" />
            <Skeleton variant="rectangular" className="loadingMobileFullField" />
            <Skeleton variant="rectangular" className="loadingMobileFullField" />
            <LoadingSectionFirst className="loadingSignupAddressFormSection">
                <Skeleton variant="rectangular" className="loadingThirdField" />
                <Skeleton variant="rectangular" className="loadingThirdField" />
            </LoadingSectionFirst>
            <LoadingSection className="loadingSignupAddressFormSection">
                <Skeleton variant="rectangular" className="loadingThirdField" />
                <Skeleton variant="rectangular" className="loadingThirdField" />
                <Skeleton variant="rectangular" className="loadingThirdField" />
            </LoadingSection>
            <LoadingSection className="loadingSignupAddressFormSection">
                <Skeleton variant="rectangular" className="loadingThirdField" />
                <Skeleton variant="rectangular" className="loadingThirdField" />
                <Skeleton variant="rectangular" className="loadingThirdField" />
            </LoadingSection>
            <LoadingFooter className="loadingSignupAddressFormFooter">
                <Skeleton variant="rectangular" className="largerCircularButton" />
            </LoadingFooter>
        </LoadingContainer>
    )
}