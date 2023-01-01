import Image from 'next/image';

const Gallery = () => {
  return (
    <div className='h-56 md:h-96 max-w-[43rem] grid grid-cols-4 gap-3 grid-rows-2 mx-auto'>
      {/* first row */}
      <div className='relative'>
        <Image
          src='https://images.unsplash.com/photo-1612949044356-9bd612f5fbe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
          alt='placeholder'
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>
      <div className='relative'>
        <Image
          src='https://images.unsplash.com/photo-1622893862979-176ff88a68f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80'
          alt='placeholder'
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>
      <div className='relative col-span-2'>
        <Image
          src='https://images.unsplash.com/photo-1613084551663-e596c62cdbdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
          alt='placeholder'
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>

      {/* second row */}
      <div className='relative col-span-2'>
        <Image
          src='https://images.unsplash.com/photo-1571987936987-ffaa42bb1742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
          alt='placeholder'
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>
      <div className='relative'>
        <Image
          src='https://images.unsplash.com/photo-1618225747659-433d5a5c6af7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
          alt='placeholder'
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>
      <div className='relative'>
        <Image
          src='https://images.unsplash.com/photo-1517512765776-3c1686689919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
          alt='placeholder'
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-xl'
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>
    </div>
  );
};

export default Gallery;
