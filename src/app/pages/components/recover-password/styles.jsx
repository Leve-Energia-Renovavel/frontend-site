import styled from "@emotion/styled";
import { background } from "../../styles";

export const RecoverPasswordContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${background.blueLeve};

    padding: 2rem;

`
export const RecoverPasswordTitleContainer = styled.div`

h1 {
    font-family: "Metropolis";
    font-style: bold;
    font-weight: 700;
    line-height: 2.625rem;
    font-size: 2rem;
    color: ${background.yellowLeve}
}

`
export const RecoverPasswordFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    margin: 0 auto;
    width: 80vw;
    padding: 2rem;

    margin: 2rem;

    
    border-radius: 8px;
    background-color: ${background.light};

`