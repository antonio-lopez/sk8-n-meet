import Image from "./Image";

const Gallery = () => {
  return (
    <div className='h-56 md:h-96 max-w-[43rem] grid grid-cols-4 gap-3 grid-rows-2 mx-auto'>
      {/* first row */}
      <Image
        smallImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705274503/assets/home-page-hero-gallery/IMG_1930_Original-300w_wxlivf.webp'
        largeImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705274503/assets/home-page-hero-gallery/IMG_1930_Original-500w_ywhgtk.webp'
        alt='skate meeting gallery one'
        height='150'
        width='200'
        loading='eager'
        className='rounded-xl object-cover h-full'
        sizes='(min-width: 400px) 100vw, 33vw'
      />

      <Image
        smallImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705274508/assets/home-page-hero-gallery/20230122_153203-300w_rmmutk.webp'
        largeImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705274507/assets/home-page-hero-gallery/20230122_153203-500w_bi33rp.webp'
        alt='skate meeting gallery two'
        height='150'
        width='200'
        loading='eager'
        className='rounded-xl object-cover h-full'
        sizes='(min-width: 400px) 100vw, 33vw'
      />
      <div className='col-span-2'>
        <Image
          smallImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705274506/assets/home-page-hero-gallery/20220617083522_IMG_8918-300w_kbgmd9.webp'
          largeImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705274505/assets/home-page-hero-gallery/20220617083522_IMG_8918-500w_ntd6tc.webp'
          alt='skate meeting gallery three'
          height='200'
          width='400'
          loading='eager'
          className='rounded-xl object-cover h-full'
          sizes='(min-width: 400px) 100vw, 33vw'
        />
      </div>

      {/* second row */}
      <div className='col-span-2'>
        <Image
          smallImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705274507/assets/home-page-hero-gallery/20211017050013_IMG_6329-300w_eh3au7.webp'
          largeImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705274506/assets/home-page-hero-gallery/20211017050013_IMG_6329-500w_esk4vn.webp'
          alt='skate meeting gallery four'
          height='200'
          width='400'
          loading='eager'
          className='rounded-xl object-cover h-full'
          sizes='(min-width: 400px) 100vw, 33vw'
        />
      </div>
      <Image
        smallImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705274504/assets/home-page-hero-gallery/20220918183049_IMG_0177-300w_bvmy30.webp'
        largeImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705274503/assets/home-page-hero-gallery/20220918183049_IMG_0177-500w_bpzp64.webp'
        alt='skate meeting gallery five'
        height='150'
        width='200'
        loading='eager'
        className='rounded-xl object-cover h-full'
        sizes='(min-width: 400px) 100vw, 33vw'
      />
      <Image
        smallImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705274502/assets/home-page-hero-gallery/IMG_1982_Original-300w_yqsxwc.webp'
        largeImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705274502/assets/home-page-hero-gallery/IMG_1982_Original-500w_dhetuz.webp'
        alt='skate meeting gallery six'
        height='150'
        width='200'
        loading='eager'
        className='rounded-xl object-cover h-full'
        sizes='(min-width: 400px) 100vw, 33vw'
      />
    </div>
  );
};

export default Gallery;
