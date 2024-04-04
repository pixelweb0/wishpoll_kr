import React, { useRef, useState } from "react";
import styled from "styled-components"; // styled-components :패키지명
import { palette } from "assets/styles/palette";

import ArrayItem02 from "assets/image/array_item02.png";
import ArrayItem04 from "assets/image/array_item04.png";

import ArrayItem02t from "assets/image/array_item02_t.png";
import ArrayItem02m from "assets/image/array_item02_m.png";
import ArrayItem04t from "assets/image/array_item04_t.png";
import ArrayItem04m from "assets/image/array_item04_t.png";

import bgSection from "assets/image/bg_section.png";
import bgRequest from "assets/image/bg_request.png";

import Process01 from "assets/svg_code/process01.svg";
import Process02 from "assets/svg_code/process02.svg";
import Process03 from "assets/svg_code/process03.svg";
import Process04 from "assets/svg_code/process04.svg";
import Process05 from "assets/svg_code/process05.svg";

import boxList01 from "assets/svg_code/boxList01.svg";
import boxList02 from "assets/svg_code/boxList02.svg";
import boxList03 from "assets/svg_code/boxList03.svg";
import boxList04 from "assets/svg_code/boxList04.svg";
import boxList05 from "assets/svg_code/boxList05.svg";
import boxList06 from "assets/svg_code/boxList06.svg";
import boxList07 from "assets/svg_code/boxList07.svg";
import boxList08 from "assets/svg_code/boxList08.svg";

import PurpleSvg01 from "assets/svg_code/PurpleSvg01.svg";
import PurpleSvg02 from "assets/svg_code/PurpleSvg02.svg";
import PurpleSvg03 from "assets/svg_code/PurpleSvg03.svg";
import PurpleSvg04 from "assets/svg_code/PurpleSvg04.svg";

// import { Waypoint } from "react-waypoint";

function MainSection() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideoPress = () => {
    if (!videoRef) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handleVideoEnter = () => {
    if (!videoRef) return;
    if (!playing) {
      return;
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handleVideoLeave = () => {
    if (!videoRef) return;
    videoRef.current.pause();
    setPlaying(false);
  };

  return (
    <>
      <Section>
        <div className="desc">
          <strong>
            성공적인 UX연구를 위해&nbsp;
            <br />
            <em>리서처와 참여자를 연결</em>합니다
          </strong>
          <span>
            We Connect: Researchers and Participants for Successful UX Research
          </span>
          <div className="item">
            <p>
              우리는 리서처와 참여자를 연결하여 리서치를 성공으로 이끄는 일을
              즐겁게 생각합니다.
              <br />
              리서치를 계획하고 있다면, 참여자를 찾는 일에 더 이상 많은 고민을
              하지 마세요.
            </p>
          </div>
          {/* <div className="controls">
            <button className="prev">이전</button>
            <span>01</span>/<span>03</span>
            <button className="next">다음</button>
          </div> */}
        </div>
        <div className="thumb">
          <h6>UX 리서치 프로세스</h6>
          <ProcessWrap>
            <div className="item item01">
              <i>
                <img src={Process01} alt="" />
              </i>
              <p>
                우리는 <strong>무엇</strong>을 해야할까요?
              </p>
            </div>
            <div className="item item02">
              <i>
                <img src={Process02} alt="" />
              </i>
              <p>
                우리의 <strong>가정</strong>은 무엇인가요?
              </p>
            </div>
            <div className="item item03">
              <i>
                <img src={Process03} alt="" />
              </i>
              <p>
                어떤 <strong>방법</strong>을 사용해야 할까요?
              </p>
            </div>
            <div className="item item04">
              <i>
                <img src={Process04} alt="" />
              </i>
              <p>
                <strong>UX 조사</strong> 시작하기
              </p>
            </div>
            <div className="item item05">
              <i>
                <img src={Process05} alt="" />
              </i>
              <p>
                결과를 <strong>조직화</strong>하고 <strong>분석</strong>하기
              </p>
            </div>
          </ProcessWrap>
        </div>
      </Section>

      <BgSection onClick={handleVideoPress}>
        <div className="inner">
          <div className="video">
            {/* <Waypoint onEnter={handleVideoEnter} onLeave={handleVideoLeave}>
              <video
                controls
                autoPlay
                ref={videoRef}
                title="Advertisement"
                webkit-playsinline="true"
                playsInline={true}
              >
                <source src="/videos/wishpoll_biz_video.mp4" type="video/mp4" />
              </video>
            </Waypoint> */}
          </div>
          <div className="box">
            <p>
              우리는 이곳에서 서로 다른 분야의 리서처와 참여자들을 연결하고,
              혁신을 만드는 중간 역할을 즐기고 싶습니다.
            </p>
            <p>더 나은 사용자 경험을 만들어가는 여정에 여러분을 초대합니다.</p>
            <a href="https://answer.moaform.com/answers/EXwjzK">
              비즈니스 신청 바로가기
            </a>
          </div>
        </div>
      </BgSection>

      <ArrangeWrap>
        <h3>
          <strong>당신의 의견과 고객의 니즈를 연결</strong>하여,&nbsp;
          <br />
          서로의 간극을 메우는 일은&nbsp;
          <strong>
            <span>우리의 미션</span>입니다.
          </strong>
          <p>Bridging the Gap: Your Opinions, Their Needs, Our Mission</p>
        </h3>

        <div className="item">
          <div className="thumb">
            {/* <img src={ArrayItem01} alt="" /> */}
            <h6>
              소셜미디어 관련하여 중요하게 생각하는 요소
              <p>리서처 VS 소비자 인식 차이</p>
            </h6>
            <VScompare>
              <p>
                <span>
                  <strong>리서처</strong>기준 중요도
                </span>

                <span>
                  <strong>소비자</strong>기준 중요도
                </span>
              </p>
              <ul>
                <li>혁신적인 소셜 콘텐츠로 알려지는 것</li>
                <li>문화적으로 관련있다고 여겨지는 것</li>
                <li>고객을 최우선시하는 것으로 유명한 것</li>
                <li>고품질의 제품/서비스로 알려지는 것</li>
                <li>소셜 미디어에서 즉각적으로 인지할 수 있는 것</li>
                <li>대화를 이끄는 주제로 여겨지는 것</li>
                <li>충성스러운 팔로워 또는 팬층을 가지는 것</li>
              </ul>
            </VScompare>
          </div>
          <div className="desc ml">
            창업자나 제품 개발자, 리서처로서&nbsp;
            <br />
            범할 수 있는 가장 큰 실수 중 하나는&nbsp;
            <br />
            자신의 아이디어와 의견에만 지나치게 의존하는 것입니다.
          </div>
        </div>

        <div className="item">
          <div className="thumb order ml">
            {/* <img src={ArrayItem02} alt="" /> */}
            <p class="pc">
              <img src={ArrayItem02} alt="" />
            </p>
            <p class="labtop">
              <img src={ArrayItem02t} alt="" />
            </p>

            <p class="mobile">
              <img src={ArrayItem02m} alt="" />
            </p>
          </div>
          <div className="desc">
            <p>
              우리는 이 간극을 극복하기 위해 고객을 진심으로 이해해야 합니다.
            </p>
            자신의 아이디어에만 의존하는 것이 아니라, 소비자의 진정한 욕구와
            니즈를 파악하고 이를 기반으로 전략을 수립해야 합니다.
          </div>
        </div>

        <div className="item">
          <div className="thumb">
            {/* <img src={ArrayItem03} alt="" /> */}
            <h6>제품과 UX 리서치 협업을 위한 8가지</h6>
            <BoxList>
              <li>
                <i>
                  <img src={boxList01} alt="" />
                </i>
                <p>UX의 보다 넓은 역할 인식하기</p>
              </li>
              <li>
                <i>
                  <img src={boxList02} alt="" />
                </i>
                <p>UX를 여러 기능에 걸쳐 확장시키기</p>
              </li>
              <li>
                <i>
                  <img src={boxList03} alt="" />
                </i>
                <p>전략적 설계를 위한 공간 마련하기</p>
              </li>
              <li>
                <i>
                  <img src={boxList04} alt="" />
                </i>
                <p>고객 중심의 비전 설정하기</p>
              </li>
              <li>
                <i>
                  <img src={boxList05} alt="" />
                </i>

                <p>UX 달성도 측정하기</p>
              </li>
              <li>
                <i>
                  <img src={boxList06} alt="" />
                </i>
                <p>UX와 함께 로드맵 업데이트 하기</p>
              </li>
              <li>
                <i>
                  <img src={boxList07} alt="" />
                </i>
                <p>
                  사용자 조사를
                  <br />
                  중앙 집중화하기
                </p>
              </li>
              <li>
                <i>
                  <img src={boxList08} alt="" />
                </i>
                <p>고객 만족도를 우선시 하기</p>
              </li>
            </BoxList>
          </div>
          <div className="desc ml">
            연구와 데이터를 통해 고객의 니즈를 조사하고 분석하여&nbsp;
            <br />
            정확한 방향성을 설정할 때, 소비자가 실제로 원하는 것을&nbsp;
            <br />
            제공하는 더 나은 비즈니스를 만들어 나갈 수 있습니다.
          </div>
        </div>
        <div className="item">
          <div className="thumb order ml">
            {/* <img src={ArrayItem04} alt="" /> */}
            <p class="pc">
              <img src={ArrayItem04} alt="" />
            </p>
            <p class="labtop">
              <img src={ArrayItem04t} alt="" />
            </p>
            <p class="mobile">
              <img src={ArrayItem04m} alt="" />
            </p>
          </div>
          <div className="desc">
            다양한 리서처와 제품 개발자가 더 나은 비즈니스 성과를 이루어 내는
            과정에서 소비자의 의견을 고려하고, 진정한 니즈에 기반한 전략을
            세우는 여정을 위시폴과 함께 시작해보세요.
          </div>
        </div>
      </ArrangeWrap>

      <PurpleSection>
        <h3>
          우리는 UX 리서치를 진행하고자 하는&nbsp;
          <br />
          <strong className="strong-connection">
            리서처와 참여자들을 연결
          </strong>
          하는&nbsp;
          <br />
          <strong>플랫폼을 제공</strong>합니다.
          <p>Essentials for UX: Linking Minds, Discovering Insights</p>
          {/* <a href="javascript:;">위시폴 서비스 둘러보기</a> */}
        </h3>
        <ul>
          <li>
            <i>
              <img src={PurpleSvg01} alt="" />
            </i>
            <strong>참여자들을 위한 기회</strong>
            <p>
              우리는 사용자 피드백, 설문조사 등의 다양한 참여 방식을 제공하여
              개인의 의견이 중요한 리서치에 기여할 수 있도록 돕습니다.
            </p>
          </li>
          <li>
            <i>
              <img src={PurpleSvg02} alt="" />
            </i>
            <strong>리서처들을 위한 플랫폼</strong>
            <p>
              우리는 리서처들이 원하는 적합한 참여자를 찾을 수 있도록 돕습니다.
              신뢰성과 보안을 중요시하며, 안전한 데이터 관리 시스템을 갖추고
              있습니다.
            </p>
          </li>
          <li>
            <i>
              <img src={PurpleSvg03} alt="" />
            </i>
            <strong>소통과 협업</strong>
            <p>
              우리는 온라인 커뮤니티, 워크숍 등의 플랫폼을 제공하여 리서처와
              참여자들 간의 소통과 지식 공유를 장려합니다.
            </p>
          </li>
          <li>
            <i>
              <img src={PurpleSvg04} alt="" />
            </i>
            <strong>성공적인 리서치 결과</strong>
            <p>
              우리는 참여자들의 의견과 피드백을 중요하게 여기며, 이를 통해
              인사이트를 발굴하여 제품과 서비스의 개선을 지원합니다.
            </p>
          </li>
        </ul>
        <div className="box_wrap">
          <p>
            우리와 함께하여 의견을 공유하고 현실적인 결과를&nbsp;
            <br />
            이끌어내는 UX 리서치의 여정에 동참해보세요.
          </p>
          <a href="https://answer.moaform.com/answers/EXwjzK">
            비즈니스 신청 바로가기
          </a>
        </div>
      </PurpleSection>
    </>
  );
}

export default MainSection;

export const Section = styled.section`
  position: relative;
  max-width: ${(props) => (props.bg ? "100%" : "1200px;")};
  margin: 100px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: ${(props) => (props.bg ? "#f0f0f0" : "")};

  .desc {
    float: left;
    width: 55%;
    letter-spacing: 0.5px;
    line-height: 1.3;

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
      letter-spacing: 0.5px;
      line-height: 1.3;
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
    h6 {
      font-size: 1rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 20px;
    }
    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 915px) {
    margin: 100px 5vw;
  }

  @media screen and (max-width: 810px) {
    margin: 60px 5vw;
    justify-content: space-between;

    .desc {
      width: 50%;
      strong {
        font-size: 2rem;
      }
      .item {
        margin-top: 30px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .desc {
      width: 100%;
      > span {
        margin-top: 10px;
      }

      strong {
        font-size: 1.75rem;
        br {
          display: none;
        }
      }
    }
    .thumb {
      float: none;
      width: 100%;
      margin-top: 40px;
    }
  }

  @media screen and (max-width: 480px) {
    display: block;
    margin: 40px 5vw;

    .desc,
    .thumb {
      float: none;
      width: 100%;
    }
    .desc {
      text-align: center;
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

  @media screen and (max-width: 1200px) {
    margin: 100px 5vw !important;
  }
`;

export const ProcessWrap = styled.div`
  position: relative;
  min-height: 380px;
  background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='1364.8px' height='772.1px' viewBox='0 0 1364.8 772.1' style='enable-background:new 0 0 1364.8 772.1;' xml:space='preserve'%3E%3Cpath fill='%23dfe3e4' d='M225.5,772.1c-5.9,0-26.7-0.5-53.6-6.9c-29-6.9-70.8-22.1-105.5-55.9C22.3,666.6,0,604.9,0,526.1 c0-71.4,21-127.5,62.3-166.8c35.8-33.9,80.3-48.5,111.4-54.7c32.7-6.6,57.1-5.6,59.4-5.5H1217c0.3,0,35.2-0.5,69.4-18.6 c45.4-24,68.4-66.2,68.4-125.4c0-59.4-23.3-101.8-69.3-126.1c-34.5-18.3-69.3-19-69.6-19L330,10V0h886c1.6,0,37.7,0.8,74.3,20.1 c21.6,11.5,38.9,27.1,51.3,46.4c15.4,24.1,23.3,53.9,23.3,88.6c0,34.7-7.8,64.5-23.1,88.4c-12.3,19.2-29.5,34.7-51,46 c-36.4,19.1-72.2,19.6-73.7,19.6H232.9l-0.1,0c-0.2,0-24.9-1.2-57.3,5.4c-29.7,6-72.3,19.9-106.2,52.2C29.9,403.9,10,457.6,10,526.1 c0,75.9,21.3,135.2,63.2,176c32.9,32.1,72.9,46.7,100.6,53.3c30.2,7.2,52.9,6.7,53.1,6.7l0.1,0h534v10H227.1 C226.8,772.1,226.3,772.1,225.5,772.1z'/%3E%3C/svg%3E%0A");
  background-size: auto 64%;
  background-repeat: no-repeat;
  background-position: center;

  .item {
    max-width: 40%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 40px;

    :before {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 30px;
      font-weight: 700;
      color: #fff;
      text-align: center;
      padding-top: 6px;
      display: inline-block;
      border-radius: 50%;
      background: #aaacae;
    }

    &.item01 {
      position: absolute;
      top: 0;
      left: 50px;
      :before {
        content: "1";
      }
    }

    &.item02 {
      position: absolute;
      top: 0;
      left: 50%;
      :before {
        content: "2";
      }
    }

    &.item03 {
      position: absolute;
      top: 39%;
      left: 60%;
      max-width: 39%;
      padding-top: 40px;
      padding-bottom: 0;
      :before {
        bottom: 0;
        top: 0;
        content: "3";
      }
    }

    &.item04 {
      position: absolute;
      top: 39%;
      left: 20%;
      max-width: 33%;
      padding-top: 40px;
      padding-bottom: 0;
      :before {
        bottom: 0;
        top: 0;
        content: "4";
      }
    }

    &.item05 {
      position: absolute;
      top: 78%;
      left: 38%;
      max-width: 38%;
      padding-top: 40px;
      padding-bottom: 0;
      :before {
        bottom: 0;
        top: 0;
        content: "5";
      }
    }

    i {
      float: left;
      width: 25%;
      text-align: center;
      img {
        width: 36px;
      }
    }
    p {
      float: right;
      width: 70%;
      strong {
        font-weight: 700;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    background-size: 100% auto;
    .item.item01,
    .item.item02 {
      top: 10px;
    }
  }

  @media screen and (max-width: 915px) {
    background-size: 100% auto;
    .item.item01 {
      left: 30px;
      top: 20px;
    }
    .item.item02 {
      top: 20px;
    }
    .item.item05 {
      top: 73%;
    }
  }

  @media screen and (max-width: 820px) {
    .item.item01,
    .item.item02 {
      top: 30px;
    }
    .item.item03,
    .item.item04 {
      top: 41%;
    }
    .item.item05 {
      top: 70%;
    }
  }

  @media screen and (max-width: 810px) {
    min-height: 290px;
    background-size: auto 56%;
    .item {
      &.item01 {
        left: 10px;
      }
      &.item03 {
        max-width: 40%;
      }
      &.item05 {
        left: 35%;
        top: 72%;
        max-width: 45%;
      }
      p {
        font-size: 0.875rem;
      }
    }
  }

  @media screen and (max-width: 770px) {
    .item.item01,
    .item.item02 {
      top: 0;
    }
  }

  @media screen and (max-width: 600px) {
    min-height: 430px;
    background-size: 100%;
    .item.item01,
    .item.item02 {
      top: 15px;
    }
    .item.item01 {
      left: 30px;
    }
    .item.item05 {
      top: 66%;
      left: 36%;
      padding: 0 0 40px;
      :before {
        top: auto;
        bottom: 0;
      }
    }
  }

  @media screen and (max-width: 480px) {
    min-height: 370px;
    .item.item05 {
      top: 65%;
    }
  }

  @media screen and (max-width: 415px) {
    .item.item01,
    .item.item02 {
      top: 15px;
    }
    .item.item03,
    .item.item04 {
      top: 40%;
    }
    .item.item05 {
      top: 73%;
      padding: 40px 0px 0;
      :before {
        top: 0;
        bottom: auto;
      }
    }
  }

  @media screen and (max-width: 395px) {
    .item.item01,
    .item.item02 {
      top: 20px;
    }
  }

  @media screen and (max-width: 375px) {
    .item.item01,
    .item.item02 {
      top: 25px;
    }

    .item.item03,
    .item.item04 {
      top: 41%;
    }

    .item.item05 {
      top: 72%;

      padding: 40px 0px 0;

      :before {
        top: 0;

        bottom: auto;
      }
    }
  }

  @media screen and (max-width: 280px) {
    .item.item01,
    .item.item02 {
      top: 38px;
    }
    .item.item01 {
      left: 20px;
    }
    .item.item05 {
      top: 68%;
    }
  }
`;

export const VScompare = styled.div`
  p {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 10px;

    > span {
      text-align: left;

      :nth-child(2) {
        text-align: right;
      }
    }
  }

  span strong {
    font-weight: 700;
    color: ${palette.purple};
    display: block;
  }
`;

export const BgSection = styled.div`
  position: relative;
  padding: 95px 0;
  background: url(${bgSection}) center no-repeat;
  background-size: cover;

  .inner {
    max-width: 1400px;
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

  .video {
    display: inline-block;
    width: 50%;
    video {
      width: 100%;
    }
  }

  .box {
    float: right;
    width: 35%;
    letter-spacing: 0.5px;
    line-height: 1.3;
    padding: 40px;
    border-radius: 20px;
    background: #fff;
    p {
      font-weight: 600;
      :nth-child(2n) {
        margin-top: 20px;
      }
    }
    a {
      display: inline-block;
      font-size: 0.875rem;
      font-weight: 600;
      color: #fff;
      line-height: 36px;
      margin-top: 20px;
      padding: 0 20px;
      border-radius: 8px;
      background: ${palette.purple};
    }
  }

  @media screen and (max-width: 1400px) {
    .inner {
      padding: 0 5vw;
    }
  }
  @media screen and (max-width: 1200px) {
    .inner {
      padding: 0 5vw;
    }
    .box {
      width: 45%;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 60px 5vw;
    .inner {
      padding: 0;
    }
    .box {
      width: 45%;
      padding: 30px;
      p:nth-child(2n) {
        margin-top: 10px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .video {
      width: 100%;
      margin-bottom: 20px;
    }
    strong,
    .box {
      width: 100%;
      padding: 20px;
    }
    strong {
      font-size: 2.125rem;
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 480px) {
    .box {
      text-align: center;
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
    letter-spacing: 0.5px;
    line-height: 1.3;
    margin: 0 auto;
    strong {
      color: #212121;
      width: auto;
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
        img {
          width: 100%;
        }
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
        letter-spacing: 0.5px;
        line-height: 1.3;
      }
    }
  }
  .box_wrap {
    position: relative;
    max-width: 1000px;
    text-align: center;
    line-height: 1.3;
    margin: 0 auto;
    padding: 65px 0;
    border-radius: 30px;
    background: url(${bgRequest}) center no-repeat;
    background-size: cover;

    p {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 35px;
      line-height: 1.3;
    }
    a {
      display: inline-block;
      font-size: 0.875rem;
      font-weight: 600;
      color: ${palette.purple};
      line-height: 36px;
      padding: 0 20px;
      border-radius: 8px;
      background: #fff;
    }
  }

  @media screen and (max-width: 1280px) {
    h3,
    ul,
    .box_wrap {
      max-width: 90%;
    }
    ul {
      max-width: 90%;
    }
  }

  @media screen and (max-width: 915px) {
    padding: 100px 2vw;
  }

  @media screen and (max-width: 820px) {
    padding: 60px 5vw;
    h3 {
      font-size: 2rem !important;
      p {
        margin-top: 10px;
      }
      strong {
        font-size: 2rem;
        display: inline;
      }
      br {
        display: none;
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
      font-size: 1.7rem !important;
      margin: 0 5vw;
      strong {
        font-size: 1.7rem !important;
        margin: 0 auto !important;
        padding: 0;
      }

      .strong-connection {
        display: inline;
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
        position: relative;
        width: 100%;
        text-align: left;
        padding: 30px 20px 30px 28%;
        i {
          position: absolute;
          left: 25px;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: auto;
          margin: 0 auto;
          svg {
            width: 100%;
          }
        }
        strong {
          padding: 0;
          margin-bottom: 10px;
        }
      }
    }
    .box_wrap {
      max-width: 100%;
      padding: 40px 5vw;
      border-radius: 0;
      p {
        font-size: 1.25rem;
        br {
          display: none;
        }
      }
    }
  }

  strong {
    font-weight: normal !important;
  }

  @media screen and (max-width: 376px) {
    :before {
      height: 90%;
    }
  }

  @media screen and (max-width: 280px) {
    ul li {
      padding: 38% 20px 20px;
      i {
        top: 25px;
        left: 20px;
        transform: none;
        width: 60px;
        img {
          height: 100%;
        }
      }
    }
  }
`;

export const ArrangeWrap = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 100px auto;
  line-height: 1.4rem;

  h6 {
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;

    p {
      font-size: 1.25rem;
      font-weight: 900;
      display: block;
    }
  }

  h3 {
    font-family: "SBAggro";
    font-size: 2.5rem;
    font-weight: 300;
    text-align: center;
    margin-bottom: 50px;
    letter-spacing: 0.5px;
    line-height: 1.3;
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
    flex: 0 0 55%;
    max-width: 55%;
    overflow: hidden;
    img {
      width: auto;
    }

    > div {
      position: relative;
      padding: 30px 20px;
      border-radius: 20px;
      background: #f0f0f0;
      li {
        position: relative;
        text-align: center;
        padding: 10px 0;
        border-radius: 50px;
        background: #fff;
        :nth-child(n + 2) {
          margin-top: 10px;
        }
        :before {
          position: absolute;
          left: 5px;
          top: 50%;
          transform: translateY(-50%);
          width: 32px;
          height: 32px;
          font-weight: 700;
          line-height: 32px;
          color: #04bcc3;
          border-radius: 50%;
          text-align: center;
          background: #baf5f7;
          content: "";
        }
        :nth-child(1):before {
          content: "1";
        }
        :nth-child(2):before {
          content: "2";
        }
        :nth-child(3):before,
        :nth-child(4):before {
          content: "3";
        }
        :nth-child(4):before {
          height: 223%;
          top: -53px;
          left: 0;
          transform: none;
          width: 42px;
          line-height: 5;
          border-radius: 30px;
          border: 5px solid #fff;
        }
        :nth-child(5):before {
          content: "5";
        }
        :nth-child(6):before {
          content: "6";
        }
        :nth-child(7):before {
          content: "7";
        }

        :after {
          position: absolute;
          right: 5px;
          top: 50%;
          transform: translateY(-50%);
          width: 32px;
          height: 32px;
          font-weight: 700;
          line-height: 32px;
          color: #ce7af8;
          border-radius: 50%;
          text-align: center;
          background: #f3dcff;
          content: "";
        }
        :nth-child(1):after {
          content: "4";
        }
        :nth-child(2):after {
          content: "5";
        }
        :nth-child(3):after {
          content: "1";
        }
        :nth-child(4):after {
          content: "2";
        }
        :nth-child(5):after {
          content: "3";
        }
        :nth-child(6):after {
          content: "7";
        }
        :nth-child(7):after {
          content: "6";
        }
      }
    }

    position: relative;
    flex: 0 0 60%;
    overflow: hidden;
    img {
      width: 100%;
    }
    .mobile,
    .labtop {
      display: none;
    }
  }
  .desc {
    position: relative;
    flex: 0 0 35%;
    max-width: 35%;
    font-size: 1.063rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    line-height: 1.3;
  }

  .order {
    order: 1;
  }

  .ml {
    margin-left: 5%;
  }

  @media screen and (max-width: 1920px) {
    br {
      display: none;
    }
  }

  @media screen and (max-width: 1700px) {
    .item {
      margin: 100px 2vw;
    }
  }

  @media screen and (max-width: 915px) {
    h3 {
      margin: 0 2vw;
    }
  }

  @media screen and (max-width: 810px) {
    h3 {
      font-size: 2rem;
      margin: 0 5vw;
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
      .thumb {
        .pc,
        .mobile {
          display: none;
        }
        .labtop {
          display: block;
          img {
            width: auto;
          }
        }
      }
    }
    .ml {
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 600px) {
    .thumb img {
      width: 100% !important;
    }
  }

  @media screen and (max-width: 480px) {
    margin: 40px auto;
    h3 {
      font-size: 1.7rem;
      text-align: center;
      margin: 0 5vw;
      p {
        font-size: 0.75rem;
        margin-top: 10px;
      }
    }
    .item {
      margin: 60px auto;
      .thumb {
        .pc,
        .labtop {
          display: none;
        }
        .mobile {
          display: block;
          img {
            max-width: 96%;
          }
        }
      }
    }
    .desc {
      font-size: 1rem;
      text-align: left !important;
      margin: 0 5vw;
      br {
        display: none;
      }
    }
  }

  @media screen and (max-width: 395px) {
    .thumb > div {
      padding: 30px 10px;
      border-radius: 0;
    }
  }

  @media screen and (max-width: 375px) {
    .thumb > div li {
      letter-spacing: -1px;
    }
  }

  @media screen and (max-width: 280px) {
    .thumb > div li {
      padding: 10px 70px;
      &:before,
      &:after {
        width: 52px;
        height: 52px;
        line-height: 52px;
      }
      :nth-child(4):before {
        height: 218%;
        top: -75px;
        width: 62px;
        line-height: 8;
      }
    }
  }
`;

export const BoxList = styled.ul`
  li {
    position: relative;
    float: left;
    width: calc(100% / 4 - 10px);
    min-height: 120px;
    text-align: center;
    margin: 0 5px 10px;
    padding: 70px 15px 10px;
    background: #dafeff;
    &:nth-child(odd) {
      background: #fbf2ff;
    }
    i {
      position: absolute;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
    br {
      display: inline-block;
    }
  }

  @media screen and (max-width: 1920px) {
    li {
      min-height: 150px;
    }
  }

  @media screen and (max-width: 965px) {
    li {
      min-height: 170px;
    }
  }

  @media screen and (max-width: 915px) {
    li {
      width: calc(100% / 3 - 10px);
    }
  }

  @media screen and (max-width: 820px) {
    li {
      min-height: 130px;
      padding: 70px 10px 10px;
    }
  }

  @media screen and (max-width: 600px) {
    li {
      width: calc(100% / 3 - 10px);
    }
  }

  @media screen and (max-width: 480px) {
    margin: 0 2vw;
    li {
      width: calc(100% / 2 - 10px);
    }
  }

  @media screen and (max-width: 375px) {
    li {
      min-height: 120px;
    }
  }
`;
