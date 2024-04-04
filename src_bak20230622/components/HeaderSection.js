import styled from "styled-components"; // styled-components :패키지명

import { palette } from "assets/styles/palette";
import { useEffect, useState } from "react";

function HeaderSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);

    // return () => {
    //   window.removeEventListener("scroll", updateScroll);
    // };
  });

  return (
    <>
      <Header className={scrollPosition < 50 ? "" : "on"}>
        <div className="inner">
          <h1>
            <a href="/">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="138px"
                height="36px"
                viewBox="0 0 524.6 121.1"
              >
                <g>
                  <path
                    fill="#0CC1C7"
                    d="M167.1,0c-1.7-0.1-2.6,1.1-2.6,2.6c-0.1,1.6,0.7,2.8,2.4,2.9c1.7,0.1,2.4-1.1,2.7-2.7 C169.4,1.4,168.8,0.1,167.1,0z"
                  />
                  <path
                    fill="#0CC1C7"
                    d="M157.7,9.2c-1.5,1.5-3.1,3-4.6,4.5c-2.3,2.1-4.6,4.2-7.3,6.7c0-1.7,0-2.9,0-4c0-1.6,0-3.3-2-3.2 c-1.9,0.1-2,1.7-2,3.3c0,1.4,0.2,2.9-0.3,4.5c-1.6-1.6-3.1-3-4.5-4.3c-1-0.9-2.2-1.9-3.4-0.6c-1.2,1.3-0.2,2.4,0.7,3.4 c1.4,1.4,3.1,2.6,4.5,4.6c-2.1,0-3.8,0-5.5,0c-1.4,0-2.4,0.6-2.3,2.1c0,1.3,1,1.9,2.2,1.9c1.3,0,2.6,0,3.9,0 c0.1,0.2,0.2,0.4,0.3,0.6c-1,0.9-2,1.9-3,2.8c-1,1-2,2-0.8,3.4c1.3,1.4,2.4,0.4,3.4-0.5c1.4-1.3,2.9-2.7,4.7-4.4c0,2.6,0,4.8,0,6.9 c0,1.4,0.6,2.6,2.2,2.5c1.5-0.1,1.8-1.2,1.8-2.5c0-1.9-0.2-3.8,0.3-6c1.8,1.7,3.4,3.2,5,4.7c1,0.9,2,1.4,3.1,0.3 c1-1.1,0.6-2.1-0.4-3.1c-1.3-1.3-2.5-2.6-4.1-4.3c1.8,0,3.2,0,4.5,0c1.3-0.1,2.4-0.6,2.5-2c0.1-1.5-1.1-2-2.3-2.2 c-0.9-0.1-1.8-0.1-2.7-0.1c-1.1,0-2.1,0-3.6,0c0.7-0.7,0.9-1,1.1-1.3c3.8-3.6,7.6-7.3,11.3-10.9c1-0.9,2.1-2,0.8-3.4 C160,7.2,158.8,8.1,157.7,9.2z"
                  />
                </g>
                <g>
                  <path
                    fill="#27323D"
                    d="M109,18.3c-5,0-7.9,2.9-7.9,7.2v62.6c0,11.1-6.4,19-17.5,19c-11.1,0-17.5-7.9-17.5-19V25.5 c0-4.3-2.6-7.2-7.6-7.2s-7.6,2.9-7.6,7.2v62.6c0,11.1-6.4,19-17.5,19c-11.1,0-17.5-7.9-17.5-19V25.5c0-4.3-2.9-7.2-7.9-7.2 S0,21.2,0,25.5v64c0,18.2,13.2,31.5,32.2,31.5c11.3,0,21.4-5.3,26.3-13.1c4.9,7.8,15,13.1,26.3,13.1c19,0,32.2-13.3,32.2-31.5v-64 C117,21.2,114,18.3,109,18.3z"
                  />
                  <path
                    fill="#27323D"
                    d="M143.3,46.8c-5,0-7.6,3.3-7.6,7.6v57.6c0,4.3,2.6,7.6,7.6,7.6c5,0,7.6-3.3,7.6-7.6V54.4 C151,50.1,148.3,46.8,143.3,46.8z"
                  />
                  <path
                    fill="#27323D"
                    d="M197.4,77.3c-11.7-3.3-14.9-5.7-14.9-10.3c0-4.9,3.9-7.2,9.4-7.2c4.6,0,8.2,1.4,11.7,3.6c7.6,5,14-5,6.9-10.6 c-4.3-3.2-11.7-6.1-19.4-6.1c-15.1,0-23.9,9.6-23.9,20.7c0,10.4,6,17.2,22.2,21.5c9.4,2.6,12.4,6,12.4,10.8c0,4.4-3.6,8.2-11.3,8.2 c-3.3,0-9.4-1-13.8-5.4c-3.2-3.2-7.2-2.9-9.9,0c-2.9,3.2-2.6,6.5,0.6,10.1c4.3,5.1,13.9,8.3,22.5,8.3c16.7,0,27.1-8.2,27.1-21.9 C217.1,89.8,212.4,81.8,197.4,77.3z"
                  />
                  <path
                    fill="#27323D"
                    d="M263.1,46.8c-9.4,0-16.7,4.7-19.6,9.6V23.2c0-4.3-2.6-7.6-7.6-7.6s-7.6,3.3-7.6,7.6v88.9 c0,4.3,2.6,7.6,7.6,7.6s7.6-3.3,7.6-7.6V80c0-11.1,5-20.1,16.8-20.1c11.8,0,16.8,9,16.8,20.1v32.1c0,4.3,2.6,7.6,7.6,7.6 s7.6-3.3,7.6-7.6V78.2C292.4,60,280.9,46.8,263.1,46.8z"
                  />
                </g>
                <g>
                  <path
                    fill="#CF7AFE"
                    d="M345.4,19.7h-21.3c-10,0-14.4,4.9-14.4,14.3v78.1c0,4.3,3.1,7.6,8.1,7.6s8.1-3.3,8.1-7.6V82.3h19.6 c18.3,0,31-12.4,31-31.3S363.8,19.7,345.4,19.7z M343.8,68.4h-17.9V33.6h17.9c10,0,16.5,7.5,16.5,17.5S353.9,68.4,343.8,68.4z"
                  />
                  <path
                    fill="#CF7AFE"
                    d="M417.5,46.8c-22.9,0-37.6,17.4-37.6,37.2c0,20,14.7,37.1,37.6,37.1c22.9,0,37.6-17.1,37.6-37.1 C455.2,64.1,440.5,46.8,417.5,46.8z M417.5,108c-13.9,0-22.4-10.3-22.4-24s8.5-24.2,22.4-24.2s22.4,10.4,22.4,24.2 S431.4,108,417.5,108z"
                  />
                  <path
                    fill="#CF7AFE"
                    d="M489.8,106.9c-3.3-2.2-5.1-4.7-5.1-12.4V23.3c0-4.3-2.9-7.8-7.9-7.8s-7.6,3.5-7.6,7.8v73.6 c0,10.7,3.2,16.9,9.7,20.7c2.1,1.1,4.2,2.1,6.5,2.1c3.9,0,7.4-3.1,7.4-7.4C492.7,110,491.7,108.2,489.8,106.9z"
                  />
                  <path
                    fill="#CF7AFE"
                    d="M521.7,106.9c-3.3-2.2-5.1-4.7-5.1-12.4V23.3c0-4.3-2.9-7.8-7.9-7.8S501,19,501,23.3v73.6 c0,10.7,3.2,16.9,9.7,20.7c2.1,1.1,4.2,2.1,6.5,2.1c3.9,0,7.4-3.1,7.4-7.4C524.6,110,523.7,108.2,521.7,106.9z"
                  />
                </g>
              </svg>
            </a>
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
  }

  @media screen and (max-width: 1000px) {
    padding: 0 2vw;
  }
  @media screen and (max-width: 810px) {
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
