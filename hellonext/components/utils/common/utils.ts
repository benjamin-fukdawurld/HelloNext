import type { Color } from "./interfaces";

export function colorToString(color: Color): string {
  if (typeof color === "string") {
    return color;
  }

  return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a ?? 1})`;
}
