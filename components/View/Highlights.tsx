import { useState, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "./Image";

import { ICloudinaryList } from "../../utils/interfaces";

interface cloudinaryImages {
  cloudinaryList?: ICloudinaryList[];
}

const Highlights = ({ cloudinaryList }: cloudinaryImages) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  let refDiv = useRef(null);

  const openImageModal = (img: string) => {
    setIsOpen(true);
    setModalImage(img);
  };

  return (
    <>
      <div className='grid grid-cols-2 justify-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 my-14'>
        {cloudinaryList?.map(
          ({ public_id, _key, version, height, width }, indx) => (
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
          )
        )}

        {/* dialog image pop-up */}
        {/* <Transition show={isOpen} as={Fragment}>
          <Dialog
            as='div'
            initialFocus={refDiv}
            className='fixed z-10 inset-0 overflow-y-hidden'
            onClose={() => setIsOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black bg-opacity-80' />
            </Transition.Child>

            <div
              ref={refDiv}
              className='fixed inset-0 flex items-center justify-center'
            >
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='mx-auto h-[37rem] layout lg:w-[57rem] relative'>
                  <Image
                    src={modalImage}
                    alt='cover'
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    onClick={() => setIsOpen(false)}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition> */}
      </div>
    </>
  );
};

export default Highlights;
