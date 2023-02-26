import Image from 'next/image';
import Link from 'next/link';
import { IMeetup } from '../../utils/interfaces';

const Flyer = ({ image, title, slug }: IMeetup) => {
  return (
    <Link href={`/meetup/${slug.current}`}>
      <div className='relative w-72 lg:w-96 h-72 lg:h-96'>
        <Image
          src={image.secure_url}
          alt={title}
          fill
          style={{ objectFit: 'fill' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>
    </Link>
  );
};

export default Flyer;
