import { client } from '../utils/client';
import Hero from '../components/Home/Hero';
import HomeFlyers from '../components/Home/HomeFlyers';
import Title from '../components/View/Title';
import HomeAbout from '../components/Home/HomeAbout';
import HomeHighlights from '../components/Home/HomeHighlights';
import { IMeetup } from '../utils/interfaces';

interface Meetups {
  meetups: IMeetup[];
}

const Home = ({ meetups }: Meetups) => {
  const { cloudinaryList } = meetups[1];
  const cloudinaryImages = cloudinaryList?.slice(0, 5);

  return (
    <>
      <Hero />
      <Title title='Meet-ups' />
      <HomeFlyers meetups={meetups} />
      <Title title='What We’re About' />
      <HomeAbout />
      <Title title='Follow Us!' />
      <HomeHighlights cloudinaryList={cloudinaryImages} />
    </>
  );
};

export const getServerSideProps = async () => {
  const meetupQuery = `*[_type == "meetup"] | order(meetupDate desc)[0..4]`;
  const meetups = await client.fetch(meetupQuery);

  return {
    props: { meetups },
  };
};

export default Home;
