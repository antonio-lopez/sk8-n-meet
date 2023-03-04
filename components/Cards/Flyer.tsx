import Image from 'next/image';
import Link from 'next/link';
import { IMeetup } from '../../utils/interfaces';

const Flyer = ({ image, title, slug }: IMeetup) => {
  const { format, public_id, version } = image;

  return (
    <Link href={`/meetup/${slug.current}`}>
      <div className='relative w-72 lg:w-96 h-72 lg:h-96'>
        <Image
          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/v${version}/${public_id}.${format}`}
          alt={title}
          priority
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
