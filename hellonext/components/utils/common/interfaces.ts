interface BaseColor {
  r: number;
  g: number;
  b: number;
  a?: number;
}

export type Color = BaseColor | string;
