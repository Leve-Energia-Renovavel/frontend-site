import { Skeleton } from "@mui/material";
import { LoadingContainer, LoadingFooter, LoadingSection } from "./styles";

export default function LoadingSignupUserForm() {
    return (
        <LoadingContainer>
            <Skeleton variant="rectangular" className="loadingFullField" />
            <Skeleton variant="rectangular" className="loadingFullField" />
            <Skeleton variant="rectangular" className="loadingFullField" />
            <Skeleton variant="rectangular" className="loadingMobileFullField" />
            <Skeleton variant="rectangular" className="loadingMobileFullField" />
            <Skeleton variant="rectangular" className="loadingMobileFullField" />
            <Skeleton variant="rectangular" className="loadingMobileFullField" />
            <Skeleton variant="rectangular" className="loadingMobileFullField" />
            <LoadingFooter>
                <Skeleton variant="rectangular" className="largerCircularButton" />
            </LoadingFooter>
        </LoadingContainer>
    )
}