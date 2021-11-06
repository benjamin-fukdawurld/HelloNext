import styled, { keyframes, css } from "styled-components";
import { BaseMenuProps } from "./Interfaces";

const MenuContainer = styled.div<BaseMenuProps>`
  position: absolute;
  padding: 1.5rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const moveIcon = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(calc(50% - .5rem), calc(-100% + 2.5rem))
  }
`;

const moveIconBack = keyframes`
  100% {
    transform: translate(0, 0);
  }
  0% {
    transform: translate(calc(50% - .5rem), calc(-100% + 2.5rem))
  }
`;

const MenuButtonContainer = styled.div<BaseMenuProps>`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 0.5rem 0.5rem;

  input {
    position: absolute;
    width: 0;
    height: 0;
    top: 9000000000px;
  }

  .icon-wrapper {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    width: 100%;
    height: 100%;
    animation: ${moveIconBack} 1s ease-in-out reverse, ${moveIcon} 1s ease-in-out;
    animation-play-state: ${(props: BaseMenuProps) =>
      !props.changing ? "paused, paused" : props.extended ? "paused, running" : "running, paused"};
    animation-fill-mode: ${(props: BaseMenuProps) =>
      !props.changing ? "none, forward" : props.extended ? "none, forward" : "forward, none"};
  }

  label[for="intro-menu"] {
    position: absolute;
    align-self: ${(props: BaseMenuProps) => (props.extended ? "flex-end" : "center")};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    bottom: 0.5rem;
    padding: 0;
    cursor: pointer;
    z-index: 10;
    color: transparent;
  }

  label[for="intro-menu"]::before {
    position: absolute;
    content: "";
    display: block;
    width: 30px;
    height: 20px;
    z-index: 20;
    top: 0;
    left: 0;
    border-top: 2px solid #ececee;
    border-bottom: 2px solid #ececee;
    transition: border-width 100ms 1500ms ease, top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
      height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms ease,
      transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  input:checked + .icon-wrapper > label[for="intro-menu"]::before {
    top: 10px;
    transform: rotate(45deg);
    height: 2px;
    background-color: #ececee;
    border-width: 0;
    transition: border-width 100ms 340ms ease, top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
      height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms 500ms ease,
      transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  label[for="intro-menu"]::after {
    position: absolute;
    content: "";
    display: block;
    width: 22px;
    height: 2px;
    z-index: 20;
    top: 10px;
    right: 4px;
    background-color: #ececee;
    margin-top: -1px;
    transition: width 100ms 1750ms ease, right 100ms 1750ms ease, margin-top 100ms ease,
      transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  input:checked + .icon-wrapper > label[for="intro-menu"]::after {
    width: 30px;
    margin-top: 0;
    right: 0;
    transform: rotate(-45deg);
    transition: width 100ms ease, right 100ms ease, margin-top 100ms 500ms ease,
      transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
  }
`;

const borderTransform = keyframes`
  0%,100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; } 
  14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; } 
  28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; } 
  42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; } 
  56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; } 
  70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; } 
  84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; }
`;

const Nav = styled.nav<any & { extended?: boolean }>`
  position: absolute;
  display: block;
  width: 80px;
  height: 80px;
  padding: 0;
  margin: 0;
  z-index: 9;
  overflow: hidden;
  box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 0, 0, 0.5);
  backdrop-filter: saturate(50%) blur(5px);
  transition: top 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1),
    right 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 1100ms ease,
    width 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1),
    height 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1);
  animation: ${borderTransform} 7s linear infinite;
  animation-play-state: ${(props: { extended?: boolean }) =>
    props.extended ? "paused" : "running"};
`;

export { MenuContainer, MenuButtonContainer, Nav };
