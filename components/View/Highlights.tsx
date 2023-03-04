import Image from 'next/image';
import { ICloudinaryList } from '../../utils/interfaces';

interface cloudinaryImages {
  cloudinaryList?: ICloudinaryList[];
}

const Highlights = ({ cloudinaryList }: cloudinaryImages) => {
  return (
    <div className='grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 gap-2 my-14'>
      {cloudinaryList?.map(({ public_id, _key, format, version }, indx) => (
        <div key={_key} className='relative h-72'>
          <Image
            id={_key}
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/v${version}/${public_id}.${format}`}
            alt={public_id}
            fill
            loading={indx < 3 ? 'eager' : 'lazy'} // loads the first 3 images and lazy loads the rest
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      ))}
    </div>
  );
};

export default Highlights;
