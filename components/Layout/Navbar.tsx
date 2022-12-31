import Image from 'next/image';
import Link from 'next/link';
import { FaTiktok, FaInstagram, FaSpotify } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';

interface Link {
  id: number;
  route: string;
  routeName: string;
}

const linkArray: Array<Link> = [
  {
    id: 0,
    route: '/',
    routeName: 'Home',
  },
  {
    id: 1,
    route: '/',
    routeName: 'About',
  },
  {
    id: 2,
    route: '/',
    routeName: 'Events',
  },
  {
    id: 3,
    route: '/',
    routeName: 'Get Involved',
  },
  {
    id: 4,
    route: '/',
    routeName: 'Contact',
  },
];

const Navbar = () => {
  return (
    <nav className='bg-smokyBlack text-white h-20'>
      <div className='layout flex justify-between items-center h-full'>
        <Link href='/'>
          <div className='h-16 w-40 relative'>
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
        </Link>

        {/* mobile navbar  */}
        <button
          type='button'
          aria-label='open mobile menu'
          className='md:hidden'
        >
          <BiMenuAltRight aria-hidden='true' className='h-12 w-12' />
        </button>

        {/* desktop navbar */}
        <div className='hidden md:flex items-center space-x-10'>
          <div>
            <ul className='flex space-x-4'>
              {linkArray.map((link) => {
                return (
                  <li key={link.id} className='hover:text-yellowGreen'>
                    <Link href={link.route}>{link.routeName}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='flex items-center justify-center space-x-4'>
            <a
              href='https://www.instagram.com/sk8_n_meet_santana/?igshid=YmMyMTA2M2Y%3D'
              aria-label='instagram profile link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram className='h-6 w-6 hover:text-yellowGreen' />
            </a>
            <a
              href='https://www.tiktok.com/@sk8_n_meet_santana'
              aria-label='tiktok profile link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTiktok className='h-6 w-6 hover:text-yellowGreen' />
            </a>
            <a
              href='https://open.spotify.com/user/31ryffk7oynp2rjj5zf6zj7taj7u?si=3044d10a38b24ef8'
              aria-label='spotify profile link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaSpotify className='h-6 w-6 hover:text-yellowGreen' />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
