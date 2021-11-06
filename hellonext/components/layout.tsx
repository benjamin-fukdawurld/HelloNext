import type { ReactNode } from "react";
import React from "react";

import Header from "./Header";
import Footer from "./Footer/Footer";

import { Container, LayoutContainer } from "./layout.style";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <LayoutContainer>
      <Header />
      <Container>
        <main className="main flex-grow" style={{ zIndex: 15 }}>
          {children}
          <Footer />
        </main>
      </Container>
    </LayoutContainer>
  );
}
