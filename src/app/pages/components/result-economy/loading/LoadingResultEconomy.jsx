import { Skeleton } from "@mui/material";
import { LoadingContainer, LoadingContent } from "./styles";

export default function LoadingResultEconomy() {
    return (
        <LoadingContainer>
            <Skeleton variant="text" className="loadingTitle" />
            <LoadingContent>
                <Skeleton variant="rectangular" className="loadingDiv" />
                <Skeleton variant="rectangular" className="secondDiv" />
                <Skeleton variant="text" className="loadingTitle" />
                <Skeleton variant="rectangular" className="loadingCard" />
            </LoadingContent>
        </LoadingContainer>
    )
}