import Link from "next/link";
import { IMeetup } from "../../utils/interfaces";
import Image from "../View/Image";

const Flyer = ({ image, title, slug }: IMeetup) => {
  const { public_id, version, height, width } = image;

  return (
    <Link href={`/meetup/${slug.current}`}>
      <Image
        smallImg={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/v${version}/${public_id}.webp`}
        largeImg={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v${version}/${public_id}.webp`}
        alt={title}
        height={height}
        width={width}
        loading='eager'
        className='object-cover rounded-xl h-full w-full'
        sizes='(max-width: 200px) 100vw, 45vw'
      />
    </Link>
  );
};

export default Flyer;
