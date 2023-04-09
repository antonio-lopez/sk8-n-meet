import '../styles/globals.css';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NextSeo
        title='Sk8NMeet Santana'
        description='The first non-traditional skateboarding group in Santa Ana who hosts monthly meet ups for all skill levels by creating community, friendship, and lasting connections through skateboarding. We aim to provide thriving safe spaces for skaters who identify as female, queer, trans and/or nonbinary.'
        canonical='https://sk8nmeetsantana.com/'
        openGraph={{
          type: 'website',
          url: 'https://sk8nmeetsantana.com/',
          title: 'Sk8NMeet Santana',
          description:
            'The first non-traditional skateboarding group in Santa Ana who hosts monthly meet ups for all skill levels by creating community, friendship, and lasting connections through skateboarding. We aim to provide thriving safe spaces for skaters who identify as female, queer, trans and/or nonbinary.',
          images: [
            {
              url: 'https://res.cloudinary.com/dloisor1x/image/upload/c_scale,w_1200/v1672271664/santa-ana-sk8nmeet/logos/Sk8_n_meet-_Santa_Ana_logo_ot8d2y.png',
              width: 1200,
              height: 675,
              alt: 'Sk8NMeet logo',
              type: 'image/png',
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
