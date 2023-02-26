import FlyerPast from '../../components/Cards/FlyerPast';
import PageHeader from '../../components/View/PageHeader';
import { IMeetup } from '../../utils/interfaces';
import { client } from '../../utils/client';

// interface Props {
//   id: number;
//   image: string;
//   alt: string;
//   eventDate: string;
// }

// const flyersPast: Props[] = [
//   {
//     id: 0,
//     image:
//       'https://res.cloudinary.com/dloisor1x/image/upload/v1672550541/santa-ana-sk8nmeet/logos/flyer1_xj0atq.webp',
//     alt: 'flyer image',
//     eventDate: 'September 18 2022',
//   },
//   {
//     id: 1,
//     image:
//       'https://res.cloudinary.com/dloisor1x/image/upload/v1672550541/santa-ana-sk8nmeet/logos/flyer1_xj0atq.webp',
//     alt: 'flyer image',
//     eventDate: 'September 18 2022',
//   },
//   {
//     id: 2,
//     image:
//       'https://res.cloudinary.com/dloisor1x/image/upload/v1672550541/santa-ana-sk8nmeet/logos/flyer1_xj0atq.webp',
//     alt: 'flyer image',
//     eventDate: 'September 18 2022',
//   },
//   {
//     id: 3,
//     image:
//       'https://res.cloudinary.com/dloisor1x/image/upload/v1672550541/santa-ana-sk8nmeet/logos/flyer1_xj0atq.webp',
//     alt: 'flyer image',
//     eventDate: 'September 18 2022',
//   },
//   {
//     id: 4,
//     image:
//       'https://res.cloudinary.com/dloisor1x/image/upload/v1672550541/santa-ana-sk8nmeet/logos/flyer1_xj0atq.webp',
//     alt: 'flyer image',
//     eventDate: 'September 18 2022',
//   },
//   {
//     id: 5,
//     image:
//       'https://res.cloudinary.com/dloisor1x/image/upload/v1672550541/santa-ana-sk8nmeet/logos/flyer1_xj0atq.webp',
//     alt: 'flyer image',
//     eventDate: 'September 18 2022',
//   },
//   {
//     id: 6,
//     image:
//       'https://res.cloudinary.com/dloisor1x/image/upload/v1672550541/santa-ana-sk8nmeet/logos/flyer1_xj0atq.webp',
//     alt: 'flyer image',
//     eventDate: 'September 18 2022',
//   },
//   {
//     id: 7,
//     image:
//       'https://res.cloudinary.com/dloisor1x/image/upload/v1672550541/santa-ana-sk8nmeet/logos/flyer1_xj0atq.webp',
//     alt: 'flyer image',
//     eventDate: 'September 18 2022',
//   },
// ];

interface Meetups {
  meetups: IMeetup[];
}

const PastMeetUp = ({ meetups }: Meetups) => {
  return (
    <>
      <PageHeader header='Past Meet Ups' />
      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 items-center justify-items-center mx-auto mb-16'>
        {meetups.map((meetup) => (
          <FlyerPast
            _id={Number(meetup._id)}
            key={meetup._id}
            image={meetup.image}
            title={meetup.title}
            meetupDate={meetup.title}
            slug={meetup.slug}
          />
        ))}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const meetupQuery = `*[_type == "meetup"] | order(meetupDate desc)`;
  const meetups = await client.fetch(meetupQuery);

  return {
    props: { meetups },
  };
};

export default PastMeetUp;
