import Image from 'next/image';
import Gallery from '../View/Gallery';

const Hero = () => {
  return (
    <section className='py-10'>
      <div className='grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-4'>
        <div className='w-full'>
          <Gallery />
        </div>
        <div className='relative row-start-1 lg:col-start-2'>
          <Image
            src='https://res.cloudinary.com/dloisor1x/image/upload/v1672271664/santa-ana-sk8nmeet/logos/Sk8_n_meet-_Santa_Ana_logo_ot8d2y.png'
            alt='company logo'
            fill
            style={{ objectFit: 'contain' }}
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            priority
          />
        </div>
      </div>
      <span className='text-nadeshikoPink block font-[PassionOne] py-4 font-black text-2xl md:text-5xl text-center lg:text-left'>
        Find your sk8 community here
      </span>
    </section>
  );
};

export default Hero;
