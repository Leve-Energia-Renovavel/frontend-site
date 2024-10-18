import { background } from "@/app/pages/styles";
import styled from "@emotion/styled";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';

export const CardParentContainer = styled.div`
    background-color: ${props => props.status === "ativo" ? background.green : background.orange};
    border-radius: 15px;
    text-align: center;

    width: 100%;
    max-width: 287px;
    
    height: auto;
    max-height: 150px;

    .cardStatus {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${background.white};

        margin: 5px 0px;
    }
`
export const CardContainer = styled.div`
    background-color: ${background.white};
    border-radius: 15px;
    padding: 1rem;

    width: 100%;
    max-width: 287px;

    height: auto;
    max-height: 107px;
`

export const HomeIcon = styled(InventoryIcon)`
    color: ${background.orange};
`
export const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const CardTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 6px;

    .cardTitle {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${background.green};
    }

    .cardTitleIcon {
        width: 18px;
        height: auto;
    }
`

export const CardContent = styled.div`

    margin-top: 10px;

    p {
        font-family: "Graphie";
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: ${background.orange};
    }
`

export const EditIcon = styled(BorderColorOutlinedIcon)`
    display: block;
    color: ${background.orange};
    width: 18px;
    height: auto;

    &:hover {
        cursor: pointer;
    }
`