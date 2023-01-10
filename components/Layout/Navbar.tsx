import Image from 'next/image';
import Link from 'next/link';
import { useState, lazy, Suspense } from 'react';
import { NavbarLink, NavbarLinksWithSubLinks } from '../../utils/interfaces';
import { FaTiktok, FaInstagram, FaSpotify } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
const LazyLoadMobileNavbar = lazy(() => import('./MobileNavbar'));

const linksWithNoSublinks: Array<NavbarLink> = [
  {
    id: 0,
    route: '/',
    routeName: 'Home',
  },
  {
    id: 1,
    route: '/contact',
    routeName: 'Contact',
  },
];

const linksWithSublinks: NavbarLinksWithSubLinks = [
  {
    id: 0,
    route: '/about',
    routeName: 'About',
    subLinks: [
      {
        id: 0,
        route: '/about',
        routeName: 'About Us',
      },
      {
        id: 1,
        route: '/mission',
        routeName: 'Mission',
      },
    ],
  },
  {
    id: 1,
    route: '/current-events',
    routeName: 'Events',
    subLinks: [
      {
        id: 0,
        route: '/current-events',
        routeName: 'Current',
      },
      {
        id: 1,
        route: '/past-events',
        routeName: 'Past',
      },
    ],
  },
  {
    id: 2,
    routeName: 'Get Involved',
    route: '/volunteer',
    subLinks: [
      {
        id: 0,
        route: '/donations',
        routeName: 'Donations',
      },
      {
        id: 1,
        route: '/volunteer',
        routeName: 'Volunteer',
      },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

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

        {/* mobile menu open  */}
        <button
          type='button'
          aria-label='open mobile menu'
          onClick={() => setIsOpen((open) => !open)}
          className='lg:hidden'
        >
          <BiMenuAltRight aria-hidden='true' className='h-12 w-12' />
        </button>

        {/* MOBILE NAVBAR */}
        <div
          className={`${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          } absolute lg:hidden top-0 left-0 right-0 z-20 min-h-screen w-full bg-raisinBlack transition-all duration-700`}
        >
          {/* mobile header */}
          <div className='layout'>
            <div className='flex items-center justify-between py-1'>
              <div className='h-20 w-40 relative'>
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
              <button
                type='button'
                aria-label='close mobile menu'
                onClick={() => setIsOpen((open) => !open)}
                className='lg:hidden'
              >
                <AiOutlineClose aria-hidden='true' className='h-12 w-12' />
              </button>
            </div>
            <Suspense fallback={null}>
              <LazyLoadMobileNavbar
                onClick={() => setIsOpen((open) => !open)}
              />
            </Suspense>
          </div>
        </div>

        {/* DESKTOP NAVBAR */}
        {/* internal links */}
        <div className='hidden lg:flex items-center space-x-10'>
          <div>
            <ul className='flex space-x-4'>
              <li key={linksWithNoSublinks[0].id}>
                <Link
                  className='hover:text-yellowGreen'
                  href={linksWithNoSublinks[0].route}
                >
                  {linksWithNoSublinks[0].routeName}
                </Link>
              </li>

              {linksWithSublinks.map((link) => {
                return (
                  <li key={link.id} className='group'>
                    <Link className='hover:text-yellowGreen' href={link.route}>
                      {link.routeName}
                    </Link>
                    <ul className='absolute top-12 z-50 hidden h-20 space-y-2 rounded-md bg-[#212121] pt-2 px-3 group-hover:block'>
                      {link.subLinks?.map((sublink) => (
                        <li key={sublink.id} className='hover:text-yellowGreen'>
                          <Link href={sublink.route}>{sublink.routeName}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}

              <li key={linksWithNoSublinks[1].id}>
                <Link
                  className='hover:text-yellowGreen'
                  href={linksWithNoSublinks[1].route}
                >
                  {linksWithNoSublinks[1].routeName}
                </Link>
              </li>
            </ul>
          </div>

          {/* social links */}
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
