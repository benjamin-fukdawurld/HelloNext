import React from "react";
import Link from "next/link";
import Image from "next/image";

import { HeaderContainer, LeftPanel, RightPanel, HomeLink, ProfileImage } from "./style";

export default function Header(props: any) {
  return (
    <HeaderContainer as="header" borderColor="rgba(255, 255, 255, 0.05)">
      <LeftPanel glassColor="rgba(192, 255, 255, 0.2)" borderColor="rgba(192, 255, 255, 0.1)">
        <HomeLink>
          <Link href="/">
            <a>
              <span className="hidden md:block">Hello Next!</span>
              <span className="block md:hidden">HN!</span>
            </a>
          </Link>
        </HomeLink>
      </LeftPanel>
      <RightPanel>
        <ProfileImage>
          <Image src="/images/profile.jpg" layout="fill" objectFit="cover" alt="profile image" />
        </ProfileImage>
      </RightPanel>
    </HeaderContainer>
  );
}
