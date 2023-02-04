import Image from 'next/image';

const Gallery = () => {
  return (
    <div className='h-56 md:h-96 max-w-[43rem] grid grid-cols-4 gap-3 grid-rows-2 mx-auto'>
      {/* first row */}
      <div className='relative'>
        <Image
          src='https://res.cloudinary.com/dloisor1x/image/upload/v1675544705/santa-ana-sk8nmeet/homepage/IMG_1930_Original_wrsykc.webp'
          alt='skate meeting gallery one'
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>
      <div className='relative'>
        <Image
          src='https://res.cloudinary.com/dloisor1x/image/upload/v1675544705/santa-ana-sk8nmeet/homepage/20230122_153203_wxas28.webp'
          alt='skate meeting gallery two'
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>
      <div className='relative col-span-2'>
        <Image
          src='https://res.cloudinary.com/dloisor1x/image/upload/v1675544705/santa-ana-sk8nmeet/homepage/20220617083522_IMG_8918_fwxf5y.webp'
          alt='skate meeting gallery three'
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>

      {/* second row */}
      <div className='relative col-span-2'>
        <Image
          src='https://res.cloudinary.com/dloisor1x/image/upload/v1675544706/santa-ana-sk8nmeet/homepage/20211017050013_IMG_6329_h1suxk.webp'
          alt='skate meeting gallery four'
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>
      <div className='relative'>
        <Image
          src='https://res.cloudinary.com/dloisor1x/image/upload/v1675544705/santa-ana-sk8nmeet/homepage/20220918183049_IMG_0177_eatyyi.webp'
          alt='skate meeting gallery five'
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>
      <div className='relative'>
        <Image
          src='https://res.cloudinary.com/dloisor1x/image/upload/v1675544705/santa-ana-sk8nmeet/homepage/IMG_1982_Original_rpnecg.webp'
          alt='skate meeting gallery six'
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>
    </div>
  );
};

export default Gallery;
