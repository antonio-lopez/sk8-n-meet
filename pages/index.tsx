import { client } from "../utils/client";
import Hero from "../components/Home/Hero";
import HomeFlyers from "../components/Home/HomeFlyers";
import Title from "../components/View/Title";
import HomeAbout from "../components/Home/HomeAbout";
import HomeHighlights from "../components/Home/HomeHighlights";
import { IMeetup } from "../utils/interfaces";

const Home = ({ meetups }: { meetups: IMeetup[] }) => {
  return (
    <>
      <Hero />
      <Title title='Meet-ups' />
      <HomeFlyers meetups={meetups} />
      <Title title='What We’re About' />
      <HomeAbout />
      <Title title='Follow Us!' />
      <HomeHighlights />
    </>
  );
};

export const getStaticProps = async () => {
  const meetupQuery = `*[_type == "meetup"] | order(meetupDate desc){_id, title, image, slug} [0..3]`;
  const meetups = await client.fetch(meetupQuery);

  return {
    props: { meetups },
  };
};

export default Home;
