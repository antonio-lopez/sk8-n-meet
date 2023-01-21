import Image from 'next/image';

interface Props {
  id: number;
  image: string;
  alt: string;
  eventDate: string;
}

const FlyerPast = ({ image, alt, eventDate }: Props) => {
  return (
    <div>
      <div className='relative w-72 h-72'>
        <Image
          src={image}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>
      <p className='text-white text-center text-2xl pt-4 font-["Erica_One"]'>
        {eventDate}
      </p>
    </div>
  );
};

export default FlyerPast;
