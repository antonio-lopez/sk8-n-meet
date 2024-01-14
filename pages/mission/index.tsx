import PageHeader from "../../components/View/PageHeader";
import Divider from "../../components/View/Divider";
import Image from "../../components/View/Image";

const Mission = () => {
  return (
    <>
      <PageHeader header='Mission' />

      <div className='flex justify-center'>
        <Image
          smallImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705190380/assets/mission/20220918180724_IMG_0160-600w_qzmfod.webp'
          largeImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705190380/assets/mission/20220918180724_IMG_0160-1000w_av49mc.webp'
          alt='sk8nmeet santana mission group cover'
          loading='eager'
          width='800'
          height='550'
          sizes='(max-width: 768px) 100vw, 45vw'
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
