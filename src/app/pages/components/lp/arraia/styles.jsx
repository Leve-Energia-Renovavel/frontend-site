import { background } from "@/app/pages/globalStyles";
import styled from "@emotion/styled";

export const ArraiaMain = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    background-color: ${background.orange};

    position: relative;

    width: 100%;
    max-width: 1200px;

    height: 600px;
    
    img {
        z-index: 10;
        position: absolute;
    }

    .flags {
        max-width: 291px;
        height: auto;
    }
    .sole {
        max-width: 209px;
        height: auto;

        left: 200px;
        top: 50px;
        
    }
    
    .logo {
        max-width: 292px;
        height: auto;
        left: 485px;
        top: 50px;
    }
    
    .sun {
        max-width: 299px;
        height: auto;

        left: 180px;
        top: 40px;

        z-index: 1;
    }

    .single-left, .single-right {
      white-space: nowrap;
      position: absolute;
      font-family: "Graphie";
      font-size: 18px;
      line-height: 22px;
      font-weight: 500;
      color: ${background.yellow};
      border: 1px solid ${background.yellow};
      border-radius: 20px;
      padding: 0px 8px;
      width: fit-content;
      z-index: 9;

    }

    .single-left {
      left: 558px;
      top: 35px;
      transform: rotate(342deg);

    }
    .single-right {
      left: 758px;
      top: 136px;
      transform: rotate(14deg);

    }

    @media (max-width: 1300px) {
    height: 580px;

        .flags {
        max-width: 291px;
        height: auto;
    }
    .sole {
        max-width: 170px;
        height: auto;

        left: 150px;
        top: 80px;
        
    }
    
    .logo {
        max-width: 232px;
        height: auto;
        left: 355px;
        top: 50px;
    }
    
    .sun {
        max-width: 299px;
        height: auto;

        left: 90px;
        top: 60px;

        z-index: 1;
    }
    }

    @media (max-width: 900px) {
      height: 550px;

      width: 100vw;
      max-width: 100vw;

      .flags {
        max-width: 200px;
        height: auto;
        }

      .sole {
        max-width: 130px;
        height: auto;

        left: 40px;
        top: 180px;
        }

        .sun {
        max-width: 170px;
        height: auto;

        left: 10px;
        top: 160px;

        z-index: 1;
        }

        .logo {
        max-width: 230px;
        height: auto;
        left: 90px;
        top: 40px;
        }

        .single-left {
          left: 258px;
          top: 35px;
          transform: rotate(342deg);
        }

        .single-right {
          left: 290px;
          top: 136px;
          transform: rotate(14deg);

        }
    }

    @media (max-width: 440px) and (min-height: 900px) and (max-height: 940px) {

      .flags {
        max-width: 200px;
        height: auto;
        }

      .sole {
        max-width: 130px;
        height: auto;

        left: 40px;
        top: 170px;
        }

        .sun {
        max-width: 170px;
        height: auto;

        left: 10px;
        top: 150px;

        z-index: 1;
        }

        .logo {
        max-width: 280px;
        height: auto;
        left: 110px;
        top: 40px;
        }
    }

    `

export const ArraiaSection = styled.div`
    margin-top: auto;
    border-radius: 15px;
    background-color: ${background.green};

    z-index: 8;

    min-height: 405px;
    padding: 3rem 1.5rem 2rem 3rem;

    .title {
      text-align: left;

      margin-top: 100px;

      font-family: "Graphie";
      font-size: 55px;
      line-height: 55px;
      font-weight: 600;
      color: ${background.white};
    }
    
    .titleHighlighted {
      font-family: "Graphie";
      font-weight: 500;
      color: ${background.yellow};
      border-radius: 10px;
      text-decoration: underline;
    }

    .subtitle {
        font-family: "Graphie";
      font-size: 55px;
      line-height: 55px;
      font-weight: 600;
      color: ${background.white};
    }

    @media (max-width: 1300px) {
      .title, .subtitle {
        font-family: "Graphie";
        font-size: 45px;
        line-height: 45px;
      }
    }

    @media (max-width: 900px) {
      padding: 1rem;
      min-height: auto;

      .title {
        margin-top: 80px;

      }

      .title, .subtitle {
        max-width: 300px;
        font-family: "Graphie";
        font-size: 27px;
        line-height: 27px;
      }
    }
`

export const ArrowScrollerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  align-items: center;
  
  margin-top: 40px;

  gap: 10px;

  
  .scrollerDescription {
      margin-left: auto;

    font-family: "Graphie";
      font-size: 21px;
      line-height: 36px;
      font-weight: 500;
      color: ${background.yellow};
  }

  .whiteArrow {
    position: relative;
    width: 32px;
    height: auto;
  }

  &:hover {
    cursor: pointer;

    .scrollerDescription {
      text-decoration: underline;
    }
  }

  @media (max-width: 900px) {
    .scrollerDescription {
      white-space: nowrap;
      font-size: 17px;
      line-height: 21px;
    }
  }

`
