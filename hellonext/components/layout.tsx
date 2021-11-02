import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import Image from "next/image";

import Header from "./Header";
import Footer from "./Footer/Footer";
import Circle from "./Circle";

export default function Layout({ children }: { children: ReactNode }) {
  const [circles, setCircles] = useState<ReactNode[]>([]);
  const [windowSize, setWindowSize] = useState<any>(null);

  useEffect(() => {
    if (windowSize) {
      return;
    }

    setWindowSize(window.innerWidth);
    setCircles(
      [...new Array(5)].map((val, index) => (
        <Circle
          key={index}
          size={`${4 + Math.random() * 12}rem`}
          color={`rgba(128, 128, ${196 + Math.floor(Math.random() * 60)}, 0.15)`}
          pos={{
            x: Math.floor(Math.random() * (window.innerWidth + 100) - 100),
            y: Math.floor(Math.random() * window.innerHeight),
            z: 0,
          }}
        />
      ))
    );
  });

  return (
    <div className="relative">
      <Image src="/images/bg-image.webp" layout="fill" objectFit="cover" alt="background image" />
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0)",
          overflow: "clip",
          position: "absolute",
          width: "100%",
          height: "100vh",
        }}
      >
        {circles}
      </div>
      <Header />
      <main className="main" style={{ zIndex: 15 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
