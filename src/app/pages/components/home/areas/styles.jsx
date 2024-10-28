import { background } from "@/app/pages/styles"
import styled from "@emotion/styled"

export const HomeAreasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${background.white};
  gap: 2rem;

  .map {
      width: 100%;
      max-width: 572px;
      height: auto;
    }

  .areasTitle {
    font-family: "Graphie";
    font-size: 34px;
    line-height: 30px;
    font-weight: 600;
    color: ${background.green};
  }

  @media (max-width: 600px) {
    .areasTitle {
      font-size: 26px;
      line-height: 26px;
    }

    .map {
      width: 80%;
      height: auto;
    }
  }
`
