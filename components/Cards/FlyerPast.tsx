import Image from 'next/image';
import { IMeetup } from '../../utils/interfaces';
import Link from 'next/link';

const FlyerPast = ({ image, title, meetupDate, slug }: IMeetup) => {
  const { format, public_id, version } = image;
  return (
    <Link href={`/meetup/${slug.current}`}>
      <div className='relative w-72 h-72'>
        <Image
          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/v${version}/${public_id}.${format}`}
          alt={title}
          fill
          style={{ objectFit: 'fill' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>
      <p className='text-white text-center text-2xl pt-4 font-["Erica_One"]'>
        {meetupDate}
      </p>
    </Link>
  );
};

export default FlyerPast;
