import { newBackground, partners } from "@/app/pages/styles";
import styled from "@emotion/styled";

export const TribancoMain = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 15px;

    width: 100%;
    max-width: 1200px;

    padding: 3rem 1.5rem 2rem 3rem;

    background-image: url(${props => props.image.src});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: 80% 20%;

    .title {
      max-width: 598px;
      margin-top: 130px;
      text-align: left;

      font-family: "Graphie";
      font-size: 55px;
      line-height: 60px;
      font-weight: 600;
      color: ${newBackground.white};
    }
    .titleHighlighted {
      font-family: "Graphie";
      font-weight: 600;
      color: ${newBackground.white};
      border-radius: 10px;
      background-color: ${partners.tribanco.lightBlue};
    }
`

export const ArrowScrollerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto 0px 0px auto;

  gap: 10px;

  .scrollerDescription {
    font-family: "Graphie";
      font-size: 21px;
      line-height: 36px;
      font-weight: 500;
      color: ${newBackground.white};
  }

  .whiteArrow {
    width: 32px;
    height: auto;
  }

  &:hover {
    cursor: pointer;

    .scrollerDescription {
      text-decoration: underline;
    }
  }

`