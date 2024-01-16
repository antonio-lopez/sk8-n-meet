import { client } from "../../utils/client";
import { IMeetup } from "../../utils/interfaces";
import PageHeader from "../../components/View/PageHeader";
import NextMeetUpDetails from "../../components/NextMeetUp/NextMeetUpDetails";
import Divider from "../../components/View/Divider";
import Highlights from "../../components/View/Highlights";
import HomeHighlights from "../../components/Home/HomeHighlights";

interface Meetup {
  currentMeetup: IMeetup[];
}

const NextMeetUp = ({ currentMeetup }: Meetup) => {
  const { _id, image, title, slug } = currentMeetup[0];

  return (
    <>
      <PageHeader header='Our Next Meet Up' />
      <NextMeetUpDetails _id={_id} image={image} title={title} slug={slug} />
      <Divider />
      <HomeHighlights />
    </>
  );
};

export const getServerSideProps = async () => {
  const meetupQuery = `*[_type == "meetup"] | order(meetupDate desc)[0..3]`;
  const currentMeetup = await client.fetch(meetupQuery);

  return {
    props: { currentMeetup },
  };
};

export default NextMeetUp;
