import type { Color } from "../common/interfaces";

interface BaseGlassSurfaceProps {
  glassColor?: Color;
  blur?: number;
}

const defaultProps = {
  glassColor: "rgba(255, 255, 255, 0.2)",
  borderColor: "rgba(255, 255, 255, 1)",
  blur: 10,
};

export type GlassSurfaceProps = BaseGlassSurfaceProps & typeof defaultProps;

export { defaultProps };
