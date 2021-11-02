import styled, { keyframes } from "styled-components";

import GlassSurface from "../../components/utils/GlassSurface";

const puffInCenter = keyframes`
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
`;

const Container = styled(GlassSurface)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 280px;
  width: 40%;
  border-radius: 1rem;
  margin: 1rem auto;
  z-index: 99;
  color: white;

  animation: ${puffInCenter} 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both;
`;

const PictureContainer = styled.div`
  position: relative;
  height: 10rem;
  width: 10rem;
  overflow: hidden;
  cursor: pointer;
  background-image: linear-gradient(to bottom right, #ff3cac, #562b7c, #2b86c5);
  -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);

  & div {
      margin: auto!important;
      width: 90%;
      height: 90%;
      margin: 0.2rem;
      -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
      clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  }


  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom 0;
    right: 0;
    -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    transition: transform 0.25s ease-in-out;
  }

  &:hover::after {
    transform: scale(1);
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  padding-bottom: 3rem;
`;

export { Container, PictureContainer, Title };
