import Image from 'next/image';

const Gallery = () => {
  return (
    <div className='h-56 md:h-96 max-w-[43rem] grid grid-cols-4 gap-3 grid-rows-2 mx-auto'>
      {/* first row */}
      <div className='relative'>
        <Image
          src='https://res.cloudinary.com/dzhengjen/image/upload/c_scale,w_500/v1676939581/sk8nmeet-santana/homepage/IMG_1930_Original_wrsykc_vbh709.webp'
          alt='skate meeting gallery one'
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          priority
        />
      </div>
      <div className='relative'>
        <Image
          src='https://res.cloudinary.com/dzhengjen/image/upload/c_scale,w_500/v1676939589/sk8nmeet-santana/homepage/20230122_153203_wxas28_nhotuz.webp'
          alt='skate meeting gallery two'
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          priority
        />
      </div>
      <div className='relative col-span-2'>
        <Image
          src='https://res.cloudinary.com/dzhengjen/image/upload/c_scale,w_500/v1676939586/sk8nmeet-santana/homepage/20220617083522_IMG_8918_fwxf5y_h8d2gp.webp'
          alt='skate meeting gallery three'
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          priority
        />
      </div>

      {/* second row */}
      <div className='relative col-span-2'>
        <Image
          src='https://res.cloudinary.com/dzhengjen/image/upload/c_scale,w_500/v1676939584/sk8nmeet-santana/homepage/20211017050013_IMG_6329_h1suxk_n3lsds.webp'
          alt='skate meeting gallery four'
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          priority
        />
      </div>
      <div className='relative'>
        <Image
          src='https://res.cloudinary.com/dzhengjen/image/upload/c_scale,w_500/v1676939583/sk8nmeet-santana/homepage/20220918183049_IMG_0177_eatyyi_dlyn3u.webp'
          alt='skate meeting gallery five'
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          priority
        />
      </div>
      <div className='relative'>
        <Image
          src='https://res.cloudinary.com/dzhengjen/image/upload/c_scale,w_500/v1676939582/sk8nmeet-santana/homepage/IMG_1982_Original_rpnecg_bkklgv.webp'
          alt='skate meeting gallery six'
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          priority
        />
      </div>
    </div>
  );
};

export default Gallery;
