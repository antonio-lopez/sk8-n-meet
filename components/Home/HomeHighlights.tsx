import Image from "../View/Image";

const HomeHighlights = () => {
  return (
    <section>
      <div className='grid grid-rows-2 lg:grid-rows-1 grid-cols-2 lg:grid-cols-5 h-96 gap-4 mb-14'>
        <Image
          smallImg='https://res.cloudinary.com/dzhengjen/image/upload/c_scale,w_720/v1705299026/assets/september-18-2022/20220918165513_IMG_0146-1000w_vf01ax.webp'
          largeImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705299026/assets/september-18-2022/20220918165513_IMG_0146-1000w_vf01ax.webp'
          alt='skate highlight'
          height='360'
          width='400'
          loading='lazy'
          className='object-cover h-full'
          sizes='(max-width: 200px) 100vw, 45vw'
        />
        <Image
          smallImg='https://res.cloudinary.com/dzhengjen/image/upload/c_scale,w_720/v1705299013/assets/september-18-2022/20220918173757_IMG_0152-1000w_i7f4i9.webp'
          largeImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705299013/assets/september-18-2022/20220918173757_IMG_0152-1000w_i7f4i9.webp'
          alt='skate highlight'
          height='360'
          width='500'
          loading='lazy'
          className='object-cover h-full'
          sizes='(max-width: 200px) 100vw, 45vw'
        />
        <Image
          smallImg='https://res.cloudinary.com/dzhengjen/image/upload/c_scale,w_720/v1705298929/assets/september-18-2022/20220918195705_IMG_0185-1000w_bfrl3b.webp'
          largeImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705298929/assets/september-18-2022/20220918195705_IMG_0185-1000w_bfrl3b.webp'
          alt='skate highlight'
          height='360'
          width='500'
          loading='lazy'
          className='object-cover h-full'
          sizes='(max-width: 200px) 100vw, 45vw'
        />
        <Image
          smallImg='https://res.cloudinary.com/dzhengjen/image/upload/c_scale,w_720/v1705298934/assets/september-18-2022/20220918184334_IMG_0180-1000w_nnnwqx.webp'
          largeImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705298934/assets/september-18-2022/20220918184334_IMG_0180-1000w_nnnwqx.webp'
          alt='skate highlight'
          height='360'
          width='500'
          loading='lazy'
          className='object-cover h-full'
          sizes='(max-width: 200px) 100vw, 45vw'
        />
        <Image
          smallImg='https://res.cloudinary.com/dzhengjen/image/upload/c_scale,w_720/v1705298994/assets/september-18-2022/20220918180723_IMG_0159-1000w_queclc.webp'
          largeImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705298994/assets/september-18-2022/20220918180723_IMG_0159-1000w_queclc.webp'
          alt='skate highlight'
          height='360'
          width='500'
          loading='lazy'
          className='object-cover h-full hidden lg:flex'
          sizes='(max-width: 200px) 100vw, 45vw'
        />
      </div>
    </section>
  );
};

export default HomeHighlights;
