import Flyer from '../Cards/Flyer';
import { IMeetup } from '../../utils/interfaces';

interface Flyers {
  meetups: IMeetup[];
}

const HomeFlyers = ({ meetups }: Flyers) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-y-8 lg:mx-36'>
      {meetups.map((flyer) => {
        return (
          <Flyer
            _id={Number(flyer._id)}
            key={flyer._id}
            image={flyer.image}
            title={flyer.title}
            slug={flyer.slug}
          />
        );
      })}
    </div>
  );
};

export default HomeFlyers;
