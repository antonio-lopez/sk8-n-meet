import type { NextPage } from 'next';
import Hero from '../components/Home/Hero';
import HomeFlyers from '../components/Home/HomeFlyers';
import Title from '../components/View/Title';
import HomeAbout from '../components/Home/HomeAbout';
import HomeHighlights from '../components/Home/HomeHighlights';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Title title='Meet-ups' />
      <HomeFlyers />
      <Title title='What We’re About' />
      <HomeAbout />
      <Title title='Follow Us!' />
      <HomeHighlights />
    </>
  );
};

export default Home;
