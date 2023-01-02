import Flyer from '../Cards/Flyer';

interface Props {
  id: number;
  image: string;
  alt: string;
}

const flyersCurrent: Props[] = [
  {
    id: 0,
    image:
      'https://res.cloudinary.com/dloisor1x/image/upload/v1672550541/santa-ana-sk8nmeet/logos/flyer1_xj0atq.webp',
    alt: 'flyer image',
  },
  {
    id: 1,
    image:
      'https://res.cloudinary.com/dloisor1x/image/upload/v1672550541/santa-ana-sk8nmeet/logos/flyer1_xj0atq.webp',
    alt: 'flyer image',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/dloisor1x/image/upload/v1672550541/santa-ana-sk8nmeet/logos/flyer1_xj0atq.webp',
    alt: 'flyer image',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/dloisor1x/image/upload/v1672550541/santa-ana-sk8nmeet/logos/flyer1_xj0atq.webp',
    alt: 'flyer image',
  },
];

const HomeFlyers = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-y-8 lg:mx-36'>
      {flyersCurrent.map((flyer) => (
        <Flyer
          id={flyer.id}
          key={flyer.id}
          image={flyer.image}
          alt={flyer.alt}
        />
      ))}
    </div>
  );
};

export default HomeFlyers;
