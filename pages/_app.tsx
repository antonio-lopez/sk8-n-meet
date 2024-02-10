import "../styles/globals.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NextSeo
        title='Sk8 N Meet Santana'
        description='The first non-traditional skateboarding group in Santa Ana who hosts monthly meet ups and aim to provide a thriving safe space for skaters who identify as female, queer, trans and/or nonbinary.'
        canonical='https://sk8nmeetsantana.com/'
        openGraph={{
          type: "website",
          url: "https://sk8nmeetsantana.com/",
          title: "Sk8 N Meet Santana",
          description:
            "The first non-traditional skateboarding group in Santa Ana who hosts monthly meet ups and aim to provide a thriving safe space for skaters who identify as female, queer, trans and/or nonbinary.",
          images: [
            {
              url: "https://res.cloudinary.com/dzhengjen/image/upload/v1707594527/assets/logos/og-sk8nmeet_px9f4p.png",
              width: 1200,
              height: 630,
              alt: "Sk8 N Meet logo",
              type: "image/png",
            },
          ],
        }}
      />
      <Head>
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Sk8 N Meet Santana' />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/dzhengjen/image/upload/v1707594527/assets/logos/og-sk8nmeet_px9f4p.png'
        />
        <meta
          name='twitter:description'
          content='The first non-traditional skateboarding group in Santa Ana who hosts monthly meet ups and aim to provide a thriving safe space for skaters who identify as female, queer, trans and/or nonbinary.'
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
