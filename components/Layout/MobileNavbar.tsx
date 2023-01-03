import Link from 'next/link';
import { FaTiktok, FaInstagram, FaSpotify } from 'react-icons/fa';
import { NavbarLink } from '../../utils/interfaces';

const mobileLinks: Array<NavbarLink> = [
  {
    id: 0,
    route: '/',
    routeName: 'Home',
  },
  {
    id: 1,
    route: '/about',
    routeName: 'About Us',
  },
  {
    id: 2,
    route: '/mission',
    routeName: 'Mission',
  },
  {
    id: 3,
    route: '/current-events',
    routeName: 'Current Events',
  },
  {
    id: 4,
    route: '/past-events',
    routeName: 'Past Events',
  },
  {
    id: 5,
    route: '/donations',
    routeName: 'Donations',
  },
  {
    id: 6,
    route: '/volunteer',
    routeName: 'Volunteer',
  },
  {
    id: 7,
    route: '/contact',
    routeName: 'Contact',
  },
];

const MobileNavbar = () => {
  return (
    <div className='text-yellowGreen mt-8 text-3xl text-center'>
      {/* mobile links */}
      <ul className='flex flex-col space-y-4'>
        {mobileLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link href={link.route}>{link.routeName}</Link>
            </li>
          );
        })}
      </ul>

      {/* social links */}
      <div className='flex items-center justify-center space-x-5 text-white pt-10'>
        <a
          href='https://www.instagram.com/sk8_n_meet_santana/?igshid=YmMyMTA2M2Y%3D'
          aria-label='instagram profile link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaInstagram className='h-8 w-8' />
        </a>
        <a
          href='https://www.tiktok.com/@sk8_n_meet_santana'
          aria-label='tiktok profile link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTiktok className='h-8 w-8' />
        </a>
        <a
          href='https://open.spotify.com/user/31ryffk7oynp2rjj5zf6zj7taj7u?si=3044d10a38b24ef8'
          aria-label='spotify profile link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaSpotify className='h-8 w-8' />
        </a>
      </div>
    </div>
  );
};

export default MobileNavbar;
