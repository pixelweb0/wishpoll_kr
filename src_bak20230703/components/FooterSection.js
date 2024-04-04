import React from "react";
import styled from "styled-components"; // styled-components :패키지명

import Logo from "assets/svg_code/footlogo.svg";

function FooterSection() {
  return (
    <>
      <Footer>
        <div className="inner">
          <h1>
            <img src={Logo} alt="" />
          </h1>
          <div>
            {/* 
             <ul>
              <li>
                <a href="javascript:;">이용약관</a>
              </li>
              <li>
                <a href="javascript:;">위치기반서비스 이용약관</a>
              </li>
              <li className="privacy">
                <a href="javascript:;">개인정보처리방침</a>
              </li>
              <li>
                <a href="javascript:;">개인정보보호센터</a>
              </li>
            </ul> */}
            <p>
              <span>경기도 수원시 영통구 월드컵로 199 캠퍼스플라자 801호</span>
              <span>TEL. 031-216-5930</span>
              <span>
                E-mail.
                <a href="mailto:weneedythinking@gmail.com">
                  weneedythinking@gmail.com
                </a>
              </span>
              <span className="copyright">
                Copyright 2023 Wishpoll. All right Reserved.
              </span>
            </p>
          </div>
        </div>
      </Footer>
    </>
  );
}

export default FooterSection;

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
    height: 26px;
    img {
      vertical-align: top;
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

  @media screen and (max-width: 820px) {
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
