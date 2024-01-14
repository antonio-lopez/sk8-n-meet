import Image from "../View/Image";
import { FaTiktok, FaInstagram, FaSpotify } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-smokyBlack text-white'>
      <div className='layout grid grid-cols-1 gap-y-5 grid-flow-row lg:grid-cols-3 h-full items-center pb-8 lg:pb-0'>
        <a
          className='text-center text-xl hover:text-yellowGreen'
          href='mailto:sk8nmeetsantana@gmail.com'
        >
          sk8nmeetsantana@gmail.com
        </a>
        <div className='flex items-center justify-center space-x-6'>
          <a
            href='https://www.instagram.com/sk8_n_meet_santana/?igshid=YmMyMTA2M2Y%3D'
            aria-label='instagram profile link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram className='h-8 w-8 hover:text-yellowGreen' />
          </a>
          <a
            href='https://www.tiktok.com/@sk8_n_meet_santana'
            aria-label='tiktok profile link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTiktok className='h-8 w-8 hover:text-yellowGreen' />
          </a>
          <a
            href='https://open.spotify.com/user/31ryffk7oynp2rjj5zf6zj7taj7u?si=3044d10a38b24ef8'
            aria-label='spotify profile link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaSpotify className='h-8 w-8 hover:text-yellowGreen' />
          </a>
        </div>
        <div className='flex justify-self-center row-start-1 lg:col-start-3 lg:justify-self-end py-6'>
          <Image
            smallImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705266116/assets/logos/Sk8_n_meet-_Santa_Ana_log_text_only_white_sm-300w_yxuxy7.webp'
            largeImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705266116/assets/logos/Sk8_n_meet-_Santa_Ana_log_text_only_white_sm-300w_yxuxy7.webp'
            alt='sk8nmeet santana logo'
            height='64'
            width='140'
            loading='eager'
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
