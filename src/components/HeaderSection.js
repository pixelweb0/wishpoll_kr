import styled from "styled-components"; // styled-components :패키지명

import { palette } from "assets/styles/palette";
import { useEffect, useState } from "react";

import Logo from "assets/svg_code/logo.svg";

function HeaderSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  });

  return (
    <>
      <Header className={scrollPosition < 50 ? "" : "on"}>
        <div className="inner">
          <h1>
            <a href="/">위시폴</a>
          </h1>
          <Nav style={{ marginTop: "1rem" }}>
            {/* <ul>
            <li>
              <a href="javscript:;">공지사항</a>
            </li>
            <li>
              <a href="javscript:;">고객센터</a>
            </li>
            <li>
              <a href="javscript:;">English</a>
            </li>
          </ul> */}
            <span className="top_util">
              <a href="https://answer.moaform.com/answers/EXwjzK">
                비즈니스 신청 바로가기
              </a>
            </span>
          </Nav>
        </div>
      </Header>
    </>
  );
}

export default HeaderSection;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  margin: 0 auto;
  padding-bottom: 1rem;
  z-index: 1;

  &.on {
    border-bottom: 1px solid ${palette.gray};
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .inner {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
  }

  h1 {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 43px;
    height: 40px;
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      text-indent: -999em;
      background: url(${Logo}) no-repeat;
      background-size: cover;
    }
  }

  @media screen and (max-width: 1280px) {
    .inner {
      max-width: 100%;
      margin: 0 5vw;
    }
  }

  @media screen and (max-width: 1000px) {
    padding: 0 2vw;
  }

  @media screen and (max-width: 810px) {
    padding: 0 2vw;
    h1 {
      left: 2vw;
      bottom: -5px;
    }
    &.on {
      padding-bottom: 20px;
    }
  }

  @media screen and (max-width: 480px) {
    position: relative;
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
    display: inline-block;

    a {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 500;
      color: #fff;
      line-height: 36px;
      padding: 0 10px;
      border-radius: 5px;
      background: ${palette.purple};
    }
  }

  @media screen and (max-width: 768px) {
    margin: 10px auto !important;
  }
`;
