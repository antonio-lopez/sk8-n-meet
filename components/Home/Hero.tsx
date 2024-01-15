import Gallery from "../View/Gallery";
import Image from "../View/Image";

const Hero = () => {
  return (
    <section className='py-10'>
      <span className='text-nadeshikoPink block font-["Erica_One"] py-4 text-2xl md:text-4xl text-left lg:text-left'>
        Find your sk8 community here...
      </span>
      <div className='grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 lg:gap-4 gap-8'>
        <div className='w-full'>
          <Gallery />
        </div>
        <div className='flex justify-center lg:p-14'>
          <Image
            smallImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705266117/assets/logos/Sk8_n_meet-_Santa_Ana_logo-600w_boanp2.webp'
            largeImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705266117/assets/logos/Sk8_n_meet-_Santa_Ana_logo-1000w_izfthq.webp'
            alt='sk8nmeet santana main logo'
            height='300'
            width='600'
            loading='eager'
            sizes='(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
