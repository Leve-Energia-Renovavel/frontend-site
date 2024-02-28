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
  `
export const CodeButton = styled(Button)`
  background-color: ${background.grey};
  color: ${background.white};
  border-radius: 8px;

  padding: 1rem 2rem;

  &:hover{ 
    background-color: ${background.darkGrey};
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