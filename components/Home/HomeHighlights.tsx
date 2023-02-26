import Image from 'next/image';
import { ICloudinaryList } from '../../utils/interfaces';

interface cloudinaryImages {
  cloudinaryList?: ICloudinaryList[];
}

const HomeHighlights = ({ cloudinaryList }: cloudinaryImages) => {
  return (
    <section>
      <div className='grid grid-cols-2 lg:grid-cols-5 h-96 gap-4 mb-14'>
        {cloudinaryList?.map((images) => (
          <div key={images._key} className='relative'>
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
    </section>
  );
};

export default HomeHighlights;
