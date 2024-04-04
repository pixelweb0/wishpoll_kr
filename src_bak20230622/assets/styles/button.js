import styled from "styled-components";

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
