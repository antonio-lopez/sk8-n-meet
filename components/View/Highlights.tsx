import Image from "./Image";
import { Dialog, DialogContent, DialogTrigger } from "./Dialog";

import { ICloudinaryList } from "../../utils/interfaces";

interface cloudinaryImages {
  cloudinaryList?: ICloudinaryList[];
}

const Highlights = ({ cloudinaryList }: cloudinaryImages) => {
  return (
    <>
      <div className='grid grid-cols-2 justify-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 my-14'>
        {cloudinaryList?.map(
          ({ public_id, _key, version, height, width }, indx) => (
            <Dialog key={_key}>
              <DialogTrigger>
                <Image
                  key={_key}
                  smallImg={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_500/v${version}/${public_id}.webp`}
                  largeImg={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_500/v${version}/${public_id}.webp`}
                  alt={public_id}
                  height={height}
                  width={width}
                  loading={indx < 3 ? "eager" : "lazy"} // loads the first 3 images and lazy loads the rest
                  className='object-cover lg:h-60 h-36 object-top'
                  sizes='(max-width: 200px) 100vw, 45vw'
                />
              </DialogTrigger>
              <DialogContent>
                <Image
                  key={_key}
                  smallImg={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v${version}/${public_id}.webp`}
                  largeImg={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v${version}/${public_id}.webp`}
                  alt={public_id}
                  height={height}
                  width={width}
                  loading={indx < 3 ? "eager" : "lazy"} // loads the first 3 images and lazy loads the rest
                  className='lg:h-screen object-contain'
                  sizes='(max-width: 200px) 100vw, 45vw'
                />
              </DialogContent>
            </Dialog>
          )
        )}
      </div>
    </>
  );
};

export default Highlights;
