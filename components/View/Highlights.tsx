import Image from 'next/image';
import { ICloudinaryList } from '../../utils/interfaces';

interface cloudinaryImages {
  cloudinaryList?: ICloudinaryList[];
}

const Highlights = ({ cloudinaryList }: cloudinaryImages) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 my-14'>
      {cloudinaryList &&
        cloudinaryList.map((images) => (
          <div key={images._key} className='relative h-72 lg:h-96'>
            <Image
              id={images._key}
              src={images.secure_url}
              alt={images.public_id}
              fill
              style={{ objectFit: 'cover' }}
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            />
          </div>
        ))}
    </div>
  );
};

export default Highlights;
