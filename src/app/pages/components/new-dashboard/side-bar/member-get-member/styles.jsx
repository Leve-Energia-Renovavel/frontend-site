import { background } from '@/app/pages/globalStyles';
import styled from '@emotion/styled';

export const MenuOption = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    padding: 8px;
    margin-top: 4px;
    border-radius: 10px;
    ${props => props.highlighted ? `background-color:${background.orange}` : ""};
    ${props => props.selected ? `background-color:${background.grey}` : ""};

    width: 100%;
    max-width: 300px;
    
    .icon {
        width: 24px;
        height: auto;
        color: ${background.orange};
        ${props => props.highlighted ? `color:${background.yellow}` : ""};
    }
    .option {
        display: block;
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${background.green};

        white-space: nowrap;
    }

    .memberGetMember {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 500;
        color: ${background.white};
    }

    .couponValue {
        font-family: "Graphie";
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        color: ${background.yellow};
        text-decoration: underline;

        white-space: nowrap;
    }

    &:hover { 
        cursor: pointer;
        background-color: ${background.grey};
        .option {
            text-decoration: underline;
        }
        
        .icon { 
            color: ${background.orange};
        }
    }

    ${props => props.highlighted ? `background-color:${background.orange}; padding: 10px 12px; align-items: start; &:hover { background-color: ${background.yellow}; cursor: pointer; .option { text-decoration: underline; } .memberGetMember { color: ${background.green} } .icon, .couponValue { color: ${background.green}; font-weight: 900; }}` : ""};


    @media (max-width: 900px) {
        max-width: 100%;
    }
`