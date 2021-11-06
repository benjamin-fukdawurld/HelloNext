import type { ReactNode } from "react";
import React from "react";

import Image from "next/image";
import styled from "styled-components";

interface BaseBackgroundProps {
  children: ReactNode;
  imageSrc: string;
}

const defaultProps = {
  imageSrc: "/images/bg-image.webp",
};

type BackgroundProps = BaseBackgroundProps & typeof defaultProps;

const Overlay = styled.div`
  background-color: transparent;
  overflow: clip;
  position: absolute;
  width: 100vw;
  height: 100%;
`;

const Container = styled.div`
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;

export default function Background(props: BackgroundProps) {
  return (
    <Container>
      <Image src={props.imageSrc} layout="fill" objectFit="cover" alt="background image" />
      <Overlay>{props.children}</Overlay>
    </Container>
  );
}

Background.defaultProps = defaultProps;
