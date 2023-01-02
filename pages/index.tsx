import type { NextPage } from 'next';
import Hero from '../components/Home/Hero';
import HomeFlyers from '../components/Home/HomeFlyers';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <HomeFlyers />
    </>
  );
};

export default Home;
