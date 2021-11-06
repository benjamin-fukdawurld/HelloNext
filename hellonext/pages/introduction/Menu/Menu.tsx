import { useEffect, useRef, useState } from "react";
import { BaseMenuProps } from "./Interfaces";

import { MenuContainer, MenuButtonContainer, Nav } from "./style";

function MenuButton(props: any) {
  return (
    <MenuButtonContainer
      data-extended={props.extended}
      extended={props.extended}
      changing={props.changing}
    >
      <input type="checkbox" name="intro-menu" id="intro-menu" value={props.extended} />
      <div className="icon-wrapper">
        <label htmlFor="intro-menu" onClick={props.onClick}>
          {props.children}
        </label>
      </div>
    </MenuButtonContainer>
  );
}

export default function Menu() {
  const [extended, setExtended] = useState<Boolean>(false);
  const [changing, setChanging] = useState<Boolean>(false);

  return (
    <MenuContainer extended={extended} changing={changing}>
      <MenuButton
        extended={extended}
        changing={changing}
        onClick={() => {
          setExtended(!extended);
          setChanging(true);
          setTimeout(() => setChanging(false), 1500);
        }}
      >
        <Nav className="nav" extended={extended} changing={changing}>
          <ul className="pt-5">
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Studio</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </Nav>
      </MenuButton>
    </MenuContainer>
  );
}
