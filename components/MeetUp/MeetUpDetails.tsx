import Flyer from '../Cards/Flyer';

const MeetUpDetails = () => {
  return (
    <section className='mb-10'>
      <div className='grid grid-cols-1 gap-7 justify-items-center lg:grid-cols-[26rem,_1fr]'>
        <div>
          <Flyer
            id={1672550541}
            image='https://res.cloudinary.com/dloisor1x/image/upload/v1672550541/santa-ana-sk8nmeet/logos/flyer1_xj0atq.webp'
            alt='flyer cover'
          />
        </div>
        <p className='text-slimSilver'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
          faucibus a pellentesque sit amet porttitor eget dolor. At risus
          viverra adipiscing at in tellus integer feugiat. Id ornare arcu odio
          ut sem nulla pharetra diam sit. Nec feugiat in fermentum posuere urna
          nec tincidunt praesent. Viverra nibh cras pulvinar mattis nunc sed.
          Curabitur vitae nunc sed velit dignissim. Aliquet porttitor lacus
          luctus accumsan tortor posuere. Enim nunc faucibus a pellentesque sit
          amet porttitor eget dolor.
        </p>
      </div>
    </section>
  );
};

export default MeetUpDetails;
