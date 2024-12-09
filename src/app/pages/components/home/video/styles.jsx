import { background, containerPadding } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";

export const NewHomeVideoContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: ${background.white};

    border-top: 2px solid ${background.grey};

    width: 100%;
    max-width: 1366px;
    margin: 0 auto;

    padding: 47px 0px;

    .title {
        font-family: "Graphie";
        font-size: 34px;  
        line-height: 30px;  
        font-weight: 600;
        color: ${background.green};
    }
    .subtitle {
        font-family: "Graphie";
        font-size: 24px;  
        line-height: 30px;  
        font-weight: 500;
        color: ${background.greyHigh};

        white-space: nowrap;

        margin-top: 16px;
    }

    @media (max-width: 600px) {
        display: none;
    }
`

export const VideoContainer = styled.div`
    padding: 2rem;
    border-radius: 10px;

    margin-top: 30px;

    .videoThumbnail, .embededVideo {
        height: auto;
        width: 650px;
        border-radius: 5px;

        &:hover {
            cursor: pointer;
        }
    }
    
    .embededVideo {
        height: 365px;
        width: 650px;
    }
`
export const ButtonContainer = styled.div`
    text-align: center;

    .checkOurYouTubeChannel {
        font-family: "Graphie";
        font-size: 27px;  
        line-height: 30px;  
        font-weight: 600;
        color: ${background.orange};
        text-decoration: underline;
        
        margin-top: 18px;
        
        white-space: nowrap;
        
        margin-bottom: 90px;
        
        &:hover {
            cursor: pointer;
            color: ${background.green};
            background-color: ${background.yellow};
        }
    }
`