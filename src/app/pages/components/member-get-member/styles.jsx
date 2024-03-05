import styled from "@emotion/styled"
import { Button } from "@mui/material"
import { background, statusColors } from "../../styles"

export const MemberGetMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  border: 1px solid ${background.blueLeve};
  border-radius: 4px;
  
  margin: 1rem auto;
  
  padding: 2rem;
  width: 100%;
  max-width: 75vw;
  
  @media (max-width: 600px) {
    margin: 1rem auto;
    max-width: 100vw;
  }
  
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const MemberGetMemberMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  padding: 1rem;
  
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 1rem 0;
  }
`
export const CodeButton = styled(Button)`
  background-color: ${background.grey};
  color: ${background.white};
  border-radius: 8px;

  padding: 1rem 2rem;
  
  &:hover{ 
    background-color: ${background.darkGrey};
  }

  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }

`
export const SendInviteButton = styled(Button)`
  background-color: ${statusColors.warning};
  color: ${background.white};
  border-radius: 8px;
  
  padding: 1rem 2rem;
  
  margin-right: 1rem;
  
  &:hover{ 
    background-color: ${statusColors.warningFocus};
  }
  
  @media (max-width: 600px) {
    margin-right: 0;
  }

`
export const ShareButton = styled(Button)`
  background-color: ${statusColors.paid};
  color: ${background.white};
  border-radius: 8px;

  padding: 1rem 2rem;

  &:hover{ 
    background-color: ${statusColors.paidFocus};
  }
`

export const SendInviteAndShareContainer = styled.div`

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1rem;
  }
`