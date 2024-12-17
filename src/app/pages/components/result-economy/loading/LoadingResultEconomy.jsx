import { Skeleton } from "@mui/material";
import { LoadingContainer, LoadingContent } from "./styles";

export default function LoadingResultEconomy() {
    return (
        <LoadingContainer>
            <Skeleton variant="text" className="loadingTitle" />

            <LoadingContent>
                <Skeleton variant="rectangular" className="loadingDiv" />
                <Skeleton variant="rectangular" className="loadingDiv" />
            </LoadingContent>
                <Skeleton variant="rectangular" className="loadingCard" />
                <Skeleton variant="rectangular" className="loadingCard" />
        </LoadingContainer>
    )
}