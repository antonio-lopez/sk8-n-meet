import Image from 'next/image';
import Gallery from '../View/Gallery';

const Hero = () => {
  return (
    <section className='py-10'>
      <span className='text-nadeshikoPink block font-["Erica_One"] py-4 text-2xl md:text-4xl text-left lg:text-left'>
        Find your sk8 community here...
      </span>
      <div className='grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-4'>
        <div className='w-full'>
          <Gallery />
        </div>
        <div className='relative'>
          <Image
            src='https://res.cloudinary.com/dzhengjen/image/upload/c_scale,w_720/v1676939488/sk8nmeet-santana/logos/Sk8_n_meet-_Santa_Ana_logo_ot8d2y_pwummq.webp'
            alt='company logo'
            fill
            style={{ objectFit: 'contain' }}
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            priority
            className='lg:p-14 self-center'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
