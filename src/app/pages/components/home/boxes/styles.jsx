import styled from "@emotion/styled"

export const HomeSecondaryBoxesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    gap: 1rem;

    @media (max-width: 1000px) {
      flex-wrap: wrap;
      gap: 1.2rem;
    }
    @media (max-width: 600px) {
      display: none;

      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
    }
`

export const HomeSecondaryBoxContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 15px;

    height: 170px;
    /* width: 287px; */
    width: 310px;

    padding: 1rem;

    background-color: ${props => props.color};

    .boxDescription {
      font-family: "Graphie";
      font-size: 17px;
      line-height: 17px;
      font-weight: 500;
      color: ${props => props.descriptionColor};
      text-align: left;

      margin-bottom: 20px;
      
      @media (max-width: 600px) {
        margin-bottom: 4px;
        font-size: 12px;
      }
    }

    @media (max-width: 600px) {
      width: 180px;
      height: 180px;

      padding: .8rem;

      border-radius: 15px;
    }
    @media (max-width: 415px) {
      width: 150px;
      height: 150px;

      padding: .8rem;

      border-radius: 15px;
    }
    @media (max-width: 362px) {
      width: 135px;
      height: 135px;

      padding: .8rem;

      border-radius: 15px;
    }
`
export const HomeSecondaryBoxTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .5rem;

    h6 {
      font-family: "Graphie";
      font-size: 27px;
      font-weight: 600;
      color: ${props => props.titleColor};
      
      @media (max-width: 600px) {
        font-size: 18px;
      }
      @media (max-width: 415px) {
        font-size: 16px;
      }
    }
    
    .titleIcon {
      width: 30px;
      height: 30px;
      
      @media (max-width: 600px) {
        height: 20px;
        width: 20px;
      }
    }
`