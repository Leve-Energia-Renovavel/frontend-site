import styled from "@emotion/styled";



export const LegendDetailLegend = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: fit-content;

  gap: 6px;
  margin-left: auto;
  
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    margin: auto;
  }

  `
export const Legend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  
  padding: 2px 6px;
  border-radius: 9px;
  background-color: ${props => props.backgroundColor};

  span {
    font-family: "Graphie";
    font-size: 11px;
    line-height: 13px;
    font-weight: 600;
    color: ${props => props.fontColor};
    
    white-space: nowrap;
  }
`