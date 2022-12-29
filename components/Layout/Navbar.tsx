import Image from 'next/image';
import Link from 'next/link';
import { FaTiktok, FaInstagram, FaSpotify } from 'react-icons/fa';

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
        {/* home and social media links */}
        <div className='flex items-center space-x-10'>
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
            <FaInstagram className='h-6 w-6 hover:text-yellowGreen' />
            <FaTiktok className='h-6 w-6 hover:text-yellowGreen' />
            <FaSpotify className='h-6 w-6 hover:text-yellowGreen' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
