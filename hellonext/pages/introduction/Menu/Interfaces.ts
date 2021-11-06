import type { ReactNode } from "react";

export interface BaseMenuProps {
  extended?: Boolean;
  changing: Boolean;
  children?: ReactNode | ReactNode[];
}
