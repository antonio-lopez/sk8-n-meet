import { client } from '../../utils/client';
import { IMeetup } from '../../utils/interfaces';
import PageHeader from '../../components/View/PageHeader';
import MeetUpDetails from '../../components/MeetUp/MeetUpDetails';
import Divider from '../../components/View/Divider';
import Highlights from '../../components/View/Highlights';

interface Meetup {
  meetup: IMeetup;
}

interface slugPaths {
  slug: { current: string };
}

interface IContext {
  params: { slug: string };
}

const Meetup = ({ meetup }: Meetup) => {
  const { _id, image, title, slug, cloudinaryList, body } = meetup;
  return (
    <>
      <PageHeader header={title} />
      <MeetUpDetails
        _id={_id}
        image={image}
        title={title}
        slug={slug}
        body={body}
      />
      <Divider />
      <Highlights cloudinaryList={cloudinaryList} />
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "meetup"]{
    slug {
      current
    }
  }`;

  const meetupSlugs = await client.fetch(query);

  const paths = meetupSlugs.map((meetupSlug: slugPaths) => ({
    params: {
      slug: meetupSlug.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }: IContext) => {
  const query = `*[_type == "meetup" && slug.current == '${slug}'][0]`;
  const meetup = await client.fetch(query);

  return { props: { meetup } };
};

export default Meetup;
