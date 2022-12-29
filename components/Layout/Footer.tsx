import Image from 'next/image';
import { FaTiktok, FaInstagram, FaSpotify } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-smokyBlack text-white h-28'>
      <div className='layout flex items-center justify-between h-full'>
        <a
          className='font-bold text-3xl hover:text-yellowGreen'
          href='mailto:sk8nmeetsantana@gmail.com'
        >
          sk8nmeetsantana@gmail.com
        </a>
        <div className='flex items-center justify-center space-x-6'>
          <FaInstagram className='h-8 w-8 hover:text-yellowGreen' />
          <FaTiktok className='h-8 w-8 hover:text-yellowGreen' />
          <FaSpotify className='h-8 w-8 hover:text-yellowGreen' />
        </div>
        <div className='h-28 w-32 relative'>
          <Image
            src='https://res.cloudinary.com/dloisor1x/image/upload/v1672273075/santa-ana-sk8nmeet/logos/Sk8_n_meet-_Santa_Ana_log_text_only_white_sm.png'
            alt='santa ana sk8nmeet logo'
            fill
            style={{ objectFit: 'contain' }}
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
