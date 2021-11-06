import { keyframes } from "styled-components";

const slideInBckCenter = keyframes`
  0% {
    transform: translateZ(600px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
`;

export { slideInBckCenter };
