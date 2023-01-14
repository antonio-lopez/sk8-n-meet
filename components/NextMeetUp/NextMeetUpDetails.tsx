import Flyer from '../Cards/Flyer';

const NextMeetUpDetails = () => {
  return (
    <section className='mb-10'>
      <div className='grid grid-cols-1 place-items-center gap-y-6'>
        <div>
          <Flyer
            id={1672550541}
            image='https://res.cloudinary.com/dloisor1x/image/upload/v1672550541/santa-ana-sk8nmeet/logos/flyer1_xj0atq.webp'
            alt='flyer cover'
          />
        </div>
        <p className='text-white font-["Erica_One"] text-4xl md:text-5xl'>
          Save the date!
        </p>
      </div>
    </section>
  );
};

export default NextMeetUpDetails;
