import styled from "@emotion/styled";
import { background } from "../../styles";

export const DashboardContainer = styled.div`
    background-color: ${background.white};
    display: flex;
    flex-direction: column;

    max-width: 100vw;
`

export const DashboardInfoContainer = styled.div`
    background-color: ${background.white};
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.16);

    display: flex;
    flex-direction: row;

    width: 50vw;
    max-width: 50vw;
    margin: 2rem auto;
`
export const InstalationInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;

`
export const BillingInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;

`