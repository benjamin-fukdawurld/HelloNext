import type { GlassSurfaceProps } from "./interfaces";
import { defaultProps } from "./interfaces";
import { colorToString } from "../common/utils";

import styled from "styled-components";

const GlassSurface = styled.div<any & GlassSurfaceProps>`
  ${(props) => `
    position: relative;
    background-color: ${colorToString(props.glassColor)};
    backdrop-filter: saturate(150%) blur(${props.blur}px);
    border: 1px outset ${colorToString(props.borderColor)};
  `}
`;

GlassSurface.defaultProps = defaultProps;

export default GlassSurface;
