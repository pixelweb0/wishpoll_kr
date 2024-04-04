import React from "react";
import styled from "styled-components"; // styled-components :패키지명
import { palette } from "../page/palette";

import visualItem01 from "../image/visual_item01.png";
import visualItem02 from "../image/visual_item02.png";
import visualItem03 from "../image/visual_item03.png";
import visualItem04 from "../image/visual_item04.png";

function VisualSection() {
  return (
    <>
      <Visual>
        <div className="desc">
          <p>User Experience Research Service</p>
          <strong>
            모바일 사용자
            <br />
            경험 조사 서비스<span>위시폴</span>
          </strong>
        </div>
        <i className="item">
          <img src={visualItem01} className="item01" alt="" />
          <img src={visualItem02} className="item02" alt="" />
          <img src={visualItem03} className="item03" alt="" />
          <img src={visualItem04} className="item04" alt="" />
        </i>
      </Visual>
    </>
  );
}

export default VisualSection;

export const Visual = styled.div`
  position: relative;
  height: 47vh;
  overflow: hidden;
  background: ${palette.lightPurple};

  .item {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    .item01 {
      position: absolute;
      right: 32vw;
      bottom: 0;
      max-width: 315px;
      border-radius: 45px 45px 0 0;
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
    }
    .item02 {
      position: absolute;
      right: 20vw;
      top: 31vh;
      max-width: 290px;
      opacity: 0;
      animation: updown 1s ease-in Alternate;
      animation-delay: 0.5s;
      animation-fill-mode: both;
    }
    .item03 {
      position: absolute;
      right: 30vw;
      top: 9vh;
      max-width: 270px;
      animation: updown 1s ease-in Alternate;
      animation-delay: 1s;
      animation-fill-mode: both;
    }
    .item04 {
      position: absolute;
      right: 50vw;
      bottom: 8vh;
      max-width: 320px;
      animation: updown 1s ease-in Alternate;
      animation-delay: 0.1s;
      animation-fill-mode: both;
    }
  }
  @keyframes updown {
    0% {
      scale: 0.8;
      opacity: 0;
    }
    100% {
      scale: 1;
      opacity: 1;
    }
  }

  .desc {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 1000px;
    width: 100%;
  }

  p {
    font-size: 0.875rem;
    color: #888;
  }

  strong {
    display: block;
    font-weight: 900;
    font-size: 2.5rem;
    line-height: 1;
    margin: 10px auto 0;
    span {
      font-family: "SBAggro";
      font-size: 3.5rem;
      color: ${palette.purple};
      display: inline-block;
      margin-left: 15px;
    }
  }

  @media screen and (max-width: 1920px) {
    height: 56vh;
  }

  @media screen and (max-width: 1700px) {
    height: 50vh;

    .item .item01 {
      right: 15vw;
    }
    .item .item02 {
      right: 1vw;
    }
    .item .item03 {
      right: 10vw;
      top: 11vh;
    }
    .item .item04 {
      right: 40vw;
    }
  }

  @media screen and (max-width: 768px) {
    height: 45vh;

    .desc {
      left: 5vw;
      transform: translate(0, -50%);
      max-width: 50%;
      strong span {
        margin-left: 0;
        margin-top: 10px;
      }
    }
    .item .item01 {
      right: 8vw;
      max-width: 250px;
    }
    .item .item02 {
      top: 23vh;
      max-width: 260px;
    }
    .item .item03 {
      right: 2vw;
      top: 9vh;
      max-width: 240px;
    }
    .item .item04 {
      right: 35vw;
      bottom: 4vh;
      max-width: 280px;
    }
  }

  @media screen and (max-width: 480px) {
    height: 45vh;
    .desc {
      top: 60%;
      max-width: 100%;
      strong {
        font-size: 2rem;
        span {
          display: block;
          font-size: 2.5rem;
        }
      }
    }
    .item .item02,
    .item .item03,
    .item .item04 {
      display: none;
    }
    .item .item01 {
      right: -22vw;
      max-width: 200px;
      border-radius: 0;
    }
  }
`;
