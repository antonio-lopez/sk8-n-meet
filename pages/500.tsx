import Image from "../components/View/Image";
import Link from "next/link";

const Custom500 = () => {
  return (
    <div className='h-screen flex flex-col text-white items-center justify-center space-y-6'>
      <h1 className='text-nadeshikoPink text-3xl md:text-4xl'>
        Page Not Found
      </h1>

      <Image
        smallImg='https://res.cloudinary.com/dzhengjen/image/upload/v1707407156/assets/logos/broken-skateboard-error-700w_j1tazz.webp'
        largeImg='https://res.cloudinary.com/dzhengjen/image/upload/v1707407156/assets/logos/broken-skateboard-error-1000w_nyry5i.webp'
        alt='error page'
        height='700'
        width='577'
        loading={"eager"}
        sizes='(max-width: 200px) 100vw, 45vw'
      />

      <div className='text-center'>
        <p>
          Uh oh, we can&apos;t seem to find the page you&apos;re looking for.
        </p>
        <p>Try going back to the previous page or back to home.</p>
      </div>

      <Link className='hover:text-yellowGreen text-lg' href='/'>
        Back to home
      </Link>
    </div>
  );
};

export default Custom500;
