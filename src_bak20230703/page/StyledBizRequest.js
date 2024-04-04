import styled from "styled-components"; // styled-components :패키지명
import { palette } from "assets/styles/palette";

import bgSection from "assets/image/bg_section.png";
import bgRequest from "assets/image/bg_request.png";
// import secItem02 from "../image/secItem02.png";
// import secImg from "../image/secImg.png";

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  z-index: 1;

  h1 {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  @media screen and (max-width: 768px) {
    padding: 0 2vw;
    h1 {
      left: 2vw;
    }
  }
`;

export const Nav = styled.div`
  text-align: right;

  ul {
    display: inline-block;
  }

  li {
    display: inline-block;
    a {
      position: relative;
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 500;
      padding: 22px 15px;
    }
    a:before {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 10px;
      background: #212121;
      content: "";
    }
  }
  li:first-child a:before {
    display: none;
  }

  .top_util {
    margin-left: 15px;
    a {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 500;
      color: #fff;
      line-height: 30px;
      padding: 0 10px;
      border-radius: 5px;
      background: ${palette.purple};
    }
  }
`;

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

  @media screen and (max-width: 1200px) {
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
      top: 11vh;
      max-width: 240px;
    }
    .item .item04 {
      right: 35vw;
      bottom: 4vh;
      max-width: 280px;
    }
  }

  @media screen and (max-width: 480px) {
    height: 35vh;
    .desc {
      top: 60%;
      max-width: 100%;
    }
    .item {
      display: none;
    }
  }
`;

export const Section = styled.section`
  position: relative;
  max-width: ${props => (props.bg ? "100%" : "1000px;")};
  margin: 100px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: ${props => (props.bg ? "#f0f0f0" : "")};

  .desc {
    float: left;
    width: 55%;

    strong {
      font-family: "SBAggro";
      font-size: 2.375rem;
      font-weight: 300;
      display: block;
    }
    > span {
      font-size: 0.875rem;
      color: #888;
      display: block;
      margin-top: 20px;
    }
    .item {
      margin-top: 70px;
    }
    .controls {
      margin-top: 35px;
      font-size: 0.75rem;
      font-weight: 700;

      > span {
        margin: 0 8px;
      }

      button {
        position: relative;
        display: inline-block;
        width: 15px;
        height: 15px;
        text-indent: -999em;
        padding: 0;
        background: none;
        :before {
          position: absolute;
          left: 3px;
          top: 3px;
          width: 8px;
          height: 8px;
          transform: rotate(45deg);
          content: "";
        }
      }
      .prev:before {
        border-left: 2px solid #333;
        border-bottom: 2px solid #333;
      }
      .next:before {
        border-right: 2px solid #333;
        border-top: 2px solid #333;
      }
    }
  }
  .thumb {
    float: right;
    width: 45%;
    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 60px 5vw;

    .desc {
      strong {
        font-size: 2rem;
      }
      .item {
        margin-top: 30px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    display: block;
    .desc,
    .thumb {
      float: none;
      width: 100%;
    }
    .desc {
      margin-bottom: 40px;
      strong {
        font-size: 1.75rem;
      }
      span {
        font-size: 0.75rem;
        margin-top: 10px;
      }
    }
  }
`;

export const BgSection = styled.div`
  position: relative;
  padding: 95px 0;
  background: url(${bgSection}) center no-repeat;
  background-size: cover;

  .inner {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    width: 30%;
    font-family: "SBAggro";
    font-size: 2.5rem;
    color: #317fc2;
    span {
      color: #fff;
    }
  }

  .box {
    float: right;
    width: 52%;
    padding: 40px;
    border-radius: 20px;
    background: #fff;
    p {
      font-weight: 600;
      :nth-child(2n) {
        margin-top: 20px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 60px 5vw;
    .box {
      width: 60%;
      padding: 30px;
      p:nth-child(2n) {
        margin-top: 10px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    strong,
    .box {
      width: 100%;
    }
    strong {
      font-size: 2.125rem;
      margin-bottom: 20px;
    }
  }
`;

export const PurpleSection = styled(BgSection)`
  padding: 120px 0;
  background: none;

  :before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background: #f5f6ff;
    z-index: -1;
    content: "";
  }

  h3 {
    position: relative;
    max-width: 1000px;
    font-family: "SBAggro";
    font-size: 2.5rem;
    font-weight: 300;
    margin: 0 auto;
    strong {
      color: #212121;
    }
    p {
      font-family: "Pretendard";
      font-size: 0.875rem;
      font-weight: 400;
      color: #888;
      margin-top: 20px;
    }
    a {
      position: absolute;
      right: 0;
      bottom: 0;
      font-family: "Pretendard";
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 40px;
      color: ${palette.purple};
      padding: 0 20px;
      border-radius: 8px;
      background: #fff;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
      transition: all 0.5s;
      :hover {
        color: #fff;
        background: ${palette.purple};
      }
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1000px;
    margin: 70px auto;

    li {
      width: calc(100% / 4 - 20px);
      text-align: center;
      padding: 30px 15px;
      border-radius: 20px;
      background: #fff;
      box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
      i {
        display: inline-block;
        height: 65px;
        margin-bottom: 20px;
      }
      strong {
        width: 100%;
        font-size: 1.188rem;
        font-weight: 500;
        color: #212121;
        display: block;
        margin-bottom: 20px;
      }
      p {
        font-weight: 500;
        line-height: 1.3;
      }
    }
  }
  .box_wrap {
    position: relative;
    max-width: 1000px;
    text-align: center;
    margin: 0 auto;
    padding: 65px 0;
    border-radius: 30px;
    background: url(${bgRequest}) center no-repeat;
    background-size: cover;

    p {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 35px;
    }
    a {
      font-size: 0.75rem;
      font-weight: 700;
      color: ${palette.purple};
      line-height: 46px;
      padding: 0 20px;
      border-radius: 8px;
      display: inline-block;
      background: #fff;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 60px 5vw;
    h3 {
      font-size: 2rem !important;
      p {
        margin-top: 10px;
      }
    }
    ul {
      margin: 50px auto;
      li {
        width: calc(100% / 2 - 10px);
        margin-bottom: 20px;
      }
    }
    .box_wrap {
      padding: 40px 0;
      p {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 480px) {
    padding: 60px 0;
    h3 {
      font-size: 1.75rem !important;
      margin: 0 5vw;
      strong {
        font-size: 1.75rem !important;
      }
      p {
        font-size: 0.75rem;
        margin-top: 10px;
      }
      a {
        position: relative;
        display: inline-block;
        margin-top: 20px;
      }
    }
    ul {
      margin: 50px 5vw;
      li {
        width: 100%;
      }
    }
    .box_wrap {
      width: 100%;
      border-radius: 0;
      p {
        font-size: 1.25rem;
        br {
          display: none;
        }
      }
    }
  }
`;

export const ArrangeWrap = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 100px auto;

  h3 {
    font-family: "SBAggro";
    font-size: 2.5rem;
    font-weight: 300;
    text-align: center;
    margin-bottom: 50px;
    strong span {
      color: ${palette.purple};
    }
    p {
      font-family: "Pretendard";
      font-size: 0.875rem;
      font-weight: 400;
      color: #888;
      margin-top: 20px;
    }
  }

  .item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 100px auto;
  }
  .thumb {
    position: relative;
    flex: 0 0 50%;
    max-width: 50%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .desc {
    position: relative;
    flex: 0 0 45%;
    max-width: 45%;
    font-size: 1.063rem;
    font-weight: 600;
    line-height: 1.5;
  }

  .order {
    order: 1;
  }
  .ml {
    margin-left: 5%;
  }

  @media screen and (max-width: 768px) {
    h3 {
      font-size: 2rem;
      p {
        margin-top: 10px;
      }
    }
    .item {
      margin: 60px 5vw;
      display: block;
      .thumb,
      .desc {
        max-width: 100%;
        text-align: center;
      }
      .desc {
        margin-top: 20px;
      }
    }
    .ml {
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 480px) {
    h3 {
      font-size: 1.75rem;
      margin: 0 5vw;
      p {
        font-size: 0.75rem;
        margin-top: 10px;
      }
    }
  }
`;

export const Footer = styled.div`
  margin: 0 auto 80px;
  .inner {
    position: relative;
    max-width: 830px;
    margin: 0 auto;
    padding-left: 12%;
  }
  h1 {
    position: absolute;
    left: 0;
    top: 0;
    svg path {
      fill: #27323d;
    }
  }
  li {
    display: inline-block;
    margin-right: 20px;
    a {
      font-size: 0.75rem;
      font-weight: 600;
      color: #969ca3;
    }
  }
  .privacy a {
    color: #212121;
  }
  p {
    font-size: 0.75rem;
    font-weight: 600;
    margin-top: 15px;
    span {
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 25px;
      a {
        text-decoration: underline;
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin: 0 5vw 80px;
    .inner {
      padding-left: 25%;
    }
  }

  @media screen and (max-width: 480px) {
    .inner {
      padding: 40px 0 0;
    }
  }
`;
