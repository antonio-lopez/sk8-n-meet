import Image from 'next/image';

interface Props {
  id: number;
  image: string;
  alt: string;
}

const Flyer = ({ image, alt }: Props) => {
  return (
    <div className='relative w-72 lg:w-96 h-72 lg:h-96'>
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
  );
};

export default Flyer;
