import PageHeader from '../../components/View/PageHeader';
import Image from 'next/image';
import Divider from '../../components/View/Divider';

const Mission = () => {
  return (
    <>
      <PageHeader header='Mission' />
      <div className='relative h-56 md:h-[34rem]'>
        <Image
          src='https://res.cloudinary.com/dloisor1x/image/upload/v1675544705/santa-ana-sk8nmeet/homepage/20220918180724_IMG_0160_m8oze3.webp'
          alt='group cover'
          fill
          style={{ objectFit: 'contain' }}
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>

      <div className='flex flex-wrap space-x-3 text-white items-center font-["Erica_One"] text-lg py-8 md:text-3xl justify-center lg:py-14'>
        <span>Community</span>
        <span>•</span>
        <span>Friendship</span>
        <span>•</span>
        <span>Empowerment</span>
        <span>•</span>
        <span>Representation</span>
      </div>

      <Divider />

      <p className='text-slimSilver py-10 lg:text-xl lg:py-16 lg:px-36'>
        The first non-traditional skateboarding group in Santa Ana who hosts
        monthly meet ups for all skill levels by creating community, friendship,
        and lasting connections through skateboarding. We aim to provide
        thriving safe spaces for skaters who identify as female, queer, trans
        and/or nonbinary.
      </p>
    </>
  );
};

export default Mission;
