// import Image from 'next/image';
import { IMeetup } from "../../utils/interfaces";
import Link from "next/link";
import Image from "../View/Image";

const FlyerPast = ({ image, title, meetupDate, slug, _id }: IMeetup) => {
  const { public_id, version, height, width } = image;
  return (
    <Link href={`/meetup/${slug.current}`}>
      <div className='md:w-[18rem] md:h-[18rem] '>
        <Image
          smallImg={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/v${version}/${public_id}.webp`}
          largeImg={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v${version}/${public_id}.webp`}
          alt={title}
          height={height}
          width={width}
          loading={_id < 3 ? "eager" : "lazy"} // loads the first 3 images and lazy loads the rest
          className='object-cover rounded-xl h-full'
          sizes='(max-width: 200px) 100vw, 45vw'
        />
      </div>
      {/* <div className='relative w-72 h-72'>
        <Image
          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_500,h_500/v${version}/${public_id}.webp`}
          alt={title}
          fill
          loading={_id < 3 ? 'eager' : 'lazy'} // loads the first 3 images and lazy loads the rest
          style={{ objectFit: 'fill' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div> */}
      <p className='text-white text-center text-2xl pt-4 font-["Erica_One"]'>
        {meetupDate}
      </p>
    </Link>
  );
};

export default FlyerPast;
