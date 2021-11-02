import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../../components/layout";

import Image from "next/image";

import { Container, PictureContainer, Title } from "./style";

function Picture() {
  return (
    <PictureContainer>
      <Image src="/images/ben.webp" layout="fill" objectFit="cover" alt="Ben's face" />
    </PictureContainer>
  );
}

export default function Introduction(props: any) {
  return (
    <div className="app">
      <Head>
        <title>Hello Next</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Container glassColor={"rgba(255, 255, 255, 0.1)"}>
          <div className="flex justify-center items-center w-full py-2">
            <Picture />
          </div>
          <Title>Benjamin Zamour</Title>
          <p className="font-medium text-lg pb-2">
            Hello, je m'appelle Ben et je suis ingénieur en développement d'applications.
          </p>
          <p className="font-medium text-lg pb-2">
            Au quotidien je fais du développement web fullstack, principalement en Typescript.
            <br />
            J'ai tout un tas de diplômes mais je suis avant tout un autodidacte passionné. Je suis
            un peu comme <em>Jarod</em> dans la série des année 90's <em>Le Caméléon</em>.
            J'apprends très vite et j'aime ça, je m'adapte à tout et j'adore le challenge.
            <br />
            J'aime le travail en équipe mais je suis également très autonome c'est pourquoi j'aime
            autant que possible automatiser les tâches.
          </p>
          <p className="font-medium text-lg pb-2">
            J'ai un parcours assez atypique que je vous laisse découvrir sur ce site.
          </p>
        </Container>
      </Layout>
    </div>
  );
}
