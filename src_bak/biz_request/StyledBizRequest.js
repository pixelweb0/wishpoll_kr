import styled from "styled-components"; // styled-components :패키지명
import { palette } from "./palette";

import visualImg from "../image/visual.png";
import secItem01 from "../image/secItem01.png";
import secItem02 from "../image/secItem02.png";
import secImg from "../image/secImg.png";

export const Visual = styled.div`
  position: relative;
  height: 67vh;
  margin-bottom: 200px;
  background: #e9e9eb;

  :before {
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 78vh;
    background: url(${visualImg}) right top / auto 100% no-repeat;
    content: "";
  }

  .desc {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 1400px;
    width: 100%;
    padding: 0 10vh;
  }

  strong {
    display: block;
    font-weight: 900;
    font-size: 3.5rem;
    line-height: 1.2;
    margin: 60px auto 10px;
  }

  p {
    font-size: 1.313rem;
    letter-spacing: 3px;
  }

  @media screen and (max-width: 960px) {
    height: 52vh;
    margin-bottom: 120px;

    :before {
      right: -32vh;
      height: 60vh;
    }

    .desc {
      padding: 0 4vh;
    }

    strong {
      font-size: 2.875rem;
      margin: 30px auto 10px;
    }

    p {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 600px) {
    height: 45vh;
    margin-bottom: 60px;

    :before {
      display: none;
    }
    .desc {
      span {
        width: 120px;
        height: 31px;
        display: inline-block;
        svg {
          width: 100%;
        }
      }
      strong {
        font-size: 2.5rem;
        margin: 10px auto 0;
      }
      p {
        letter-spacing: 1px;
      }
    }
  }
`;

export const Section = styled.section`
  position: relative;
  max-width: ${(props) => (props.bg ? "100%" : "1560px;")};
  margin: 0 auto;
  background:${(props) => (props.bg ? "#f0f0f0" : "")};

  em {
    position: absolute;
    right: 10vh;
    top: -22vh;
    opacity: 0.4;
  }

  h2 {
    font-weight: 900;
    font-size: 2.625rem;
    text-align: center;
    margin: 100px auto;

    span {
      color: ${palette.purple};
    }
  }

  .desc {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width:1160px;
    overflow: hidden;
    margin: 130px auto;
  }

  .thumb {
    position: relative;
    flex: 0 0 40%;
    max-width: 40%;
    height: 380px;
    align-items: center;
    flex-wrap: wrap;

    img {height:100%;}
  }

  .text {
    position: relative;
    flex: 0 0 55%;
    max-width: 55%;
    overflow: hidden;

    strong {
      display: block;
      font-size: 1.688rem;
      font-weight: 900;
      margin-bottom: 50px;
    }

    p {
      font-size: 1rem;
    }
  }

  .order {
    order: 1;
  }

  .ml {
    margin-left: 5%;
  }

  @media screen and (max-width: 960px) {
    padding:0 4vw;

    em {
      right:-10vh;
      top:-30vh;
      width:40vw;
      svg {width:100%;}
    }

    h2 {font-size:2.125rem; margin:100px auto 40px;}

    .desc {margin:60px auto;}

    .thumb {
      display:flex;
      img {width:100%; height:auto;}
    }
    .text {
      strong {font-size:1.5rem; margin-bottom:20px;}
    }
  }

  @media screen and (max-width: 600px) {
    h2 {font-size:1.625rem;}

    .thumb {
      flex:0 0 100%; max-width:100%; height:auto; display:block; text-align:center;
      img {max-width:30vw;}
    }
    .text {
      flex:0 0 100%; max-width:100%; margin-top:20px;
      strong {font-size:1.375rem; margin-bottom:10px;}
    }
    .ml {margin-left:0;}
    .order {order:0;}
  }
}
`;

export const Inner = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 120px 0;

  strong {
    position: relative;
    font-weight: 900;
    font-size: 2.625rem;
    display: inline-block;
    margin-bottom: 40px;

    :before {
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 100%;
      height: 2px;
      background: #000;
      content: "";
    }
  }

  p {
    font-size: 1rem;
  }

  .imgUl {
    position: relative;
    margin-top: 40px;

    li {
      position: relative;
      display: inline-block;
      width: 47%;
      text-align: center;
      padding: 80px 0;
      border-radius: 150px;
      transition: all 0.5s;
      overflow: hidden;

      span {
        position: relative;
        font-weight: 900;
        font-size: 1.375rem;
        color: #fff;
        z-index: 99;
        transition: all 0.5s;
        opacity: 0;
      }

      :hover {
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
        transition: all 0.5s;

        :before {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          content: "";
        }

        span {
          opacity: 1;
        }
      }
    }
    .item01 {
      background: url(${secItem01}) center no-repeat;
      background-size: cover;
    }
    .item02 {
      margin-left: 6%;
      background: url(${secItem02}) center no-repeat;
      background-size: cover;
    }
  }
  @media screen and (max-width: 960px) {
    padding:60px 0;

    strong {font-size:2rem; margin-bottom:30px;}

    .imgUl {
      li {
        padding:50px 0;

        :before {position:absolute; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,.3); content:'';}
        span {opacity:1;}
      }
    }
  }
  @media screen and (max-width: 600px) {
    strong {font-size:1.75rem;}

    .imgUl {
      li {width:100%; padding: 40px 0; margin:0 auto 10px !important;}
    }
  }
}
`;

export const ArtWrap = styled.ul`
  position: relative;
  max-width: 1200px;
  margin: 0 auto 60px;
  overflow: hidden;

  li {
    position: relative;
    float: left;
    width: calc(100% / 2 - 40px);
    margin-left: 80px;
    margin-bottom: 50px;
    padding: 45px 60px 45px 170px;
    border-radius: 50px;
    background: #e6f8f8;

    :nth-child(odd) {
      margin-left: 0;
    }

    :nth-child(2),
    :nth-child(3) {
      background: #f8f3ff;
    }

    i {
      position: absolute;
      left: 50px;
      top: 50%;
      transform: translateY(-50%);
    }

    strong {
      font-weight: 700;
      font-size: 1.375rem;
    }

    p {
      font-size: 1rem;
      margin-top: 15px;
    }
  }

  @media screen and (max-width: 960px) {
    li {
      width: calc(100% / 2 - 10px);
      margin-left: 20px;
      padding: 40px 30px;
      margin-bottom: 20px;
      border-radius: 20px;

      i {
        left: 77%;
        top: 20px;
        transform: none;
        height: 46px;

        svg {
          height: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    li {
      width: 100%;
      margin: 0 auto 10px !important;
      padding: 20px 30px;

      i {
        top: 16px;
        height: 38px;
      }

      strong {
        font-size: 1.25rem;
      }
    }
  }
`;

export const SlideWrap = styled.div`
  position: relative;
  max-width: 1560px;
  margin: 0 auto;

  .desc {
    position: relative;
  }

  @media screen and (max-width: 600px) {
    .desc {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin: 40px auto;
    }
    .thumb {
      position: relative;
      flex: 0 0 100%;
      max-width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      img {
        max-width: 100%;
      }
    }
    .text {
      position: realtive;
      flex: 0 0 100%;
      max-width: 100%;
      order: 1;
    }
  }
`;

export const ButtonWrap = styled.div`
  position: absolute;
  left: -150px;
  bottom: 0;

  button {
    position: relative;
    display: inline-block;
    width: 46px;
    height: 46px;
    text-indent: -999em;
    margin-left: 20px;
    border-radius: 50%;
    border: 1px solid #b3b3b3;
    background: none;
    cursor: pointer;
    transition: all 0.5s;

    :before {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 10px;
      height: 10px;
      border-top: 2px solid #b3b3b3;
      border-left: 2px solid #b3b3b3;
      transition: all 0.5s;
      content: "";
    }

    :hover {
      border-color: #000;

      :before {
        border-color: #000;
      }
    }
  }

  .prev:before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  .next:before {
    transform: translate(-50%, -50%) rotate(135deg);
  }

  @media screen and (max-width: 600px) {
    left: 50%;
    top: 50%;
    bottom: auto;
    transform: translate(-50%, -50%);
    width: 100%;

    button {
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.3);
    }

    .prev {
      position: absolute;
      left: 10px;
    }

    .next {
      position: absolute;
      right: 10px;
    }
  }
`;

export const BgSection = styled.div`
  position: relative;
  text-align: center;
  padding: 240px 0;
  background: url(${secImg}) center / cover no-repeat;

  h2 {
    font-weight: 900;
    font-size: 2.625rem;
    color: #fff;
    margin-bottom: 60px;
  }

  a {
    display: inline-block;
    font-size: 1.188rem;
    font-weight: 700;
    color: #fff;
    line-height: 60px;
    padding: 0 40px;
    border-radius: 10px;
    background: ${palette.purple};
  }

  @media screen and (max-width: 960px) {
    padding: 100px 0;

    h2 {
      font-size: 1.875rem;
      margin-bottom: 30px;
    }
    a {
      font-size: 1.125rem;
    }
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 1.5rem;
    }

    a {
      font-size: 1rem;
      line-height: 50px;
      padding: 0 30px;
    }
  }
`;
