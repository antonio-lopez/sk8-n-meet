import { client } from "../utils/client";
import Hero from "../components/Home/Hero";
import HomeFlyers from "../components/Home/HomeFlyers";
import Title from "../components/View/Title";
import HomeAbout from "../components/Home/HomeAbout";
import HomeHighlights from "../components/Home/HomeHighlights";
import { IMeetup, IHighlight } from "../utils/interfaces";

const Home = ({
  meetups,
  highlights,
}: {
  meetups: IMeetup[];
  highlights: IHighlight;
}) => {
  const highlightsImages = highlights.cloudinaryList;

  return (
    <>
      <Hero />
      <Title title="Meet-ups" />
      <HomeFlyers meetups={meetups} />
      <Title title="What We’re About" />
      <HomeAbout />
      <Title title="Follow Us!" />
      <HomeHighlights cloudinaryList={highlightsImages} />
    </>
  );
};

export const getServerSideProps = async () => {
  const meetupQuery = `*[_type == "meetup"] | order(meetupDate desc)[0..3]`;
  const meetups = await client.fetch(meetupQuery);

  const highlightsQuery = `*[_type == "highlights"][0]`;
  const highlights = await client.fetch(highlightsQuery);

  return {
    props: { meetups, highlights },
  };
};

export default Home;
