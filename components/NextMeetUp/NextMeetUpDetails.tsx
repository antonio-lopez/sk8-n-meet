import Flyer from '../Cards/Flyer';
import { IMeetup } from '../../utils/interfaces';

const NextMeetUpDetails = ({ _id, image, title, slug }: IMeetup) => {
  return (
    <section className='mb-10'>
      <div className='grid grid-cols-1 lg:grid-cols-[28rem,_1fr] place-items-center gap-y-6'>
        <div>
          <Flyer _id={_id} image={image} title={title} slug={slug} />
        </div>
        <div className='w-80 md:w-full h-full'>
          {/* embed google calendar */}
          <iframe
            title='google calendar for meetup events'
            src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%237CB342&ctz=America%2FLos_Angeles&title=Sk8%20N%20Meet%20Santana&src=c2s4bm1lZXRzYW50YW5hQGdtYWlsLmNvbQ&color=%23039BE5'
            width='100%'
            height='500'
          ></iframe>
        </div>
        <p className='text-white font-["Erica_One"] text-3xl lg:col-start-2 md:text-4xl'>
          Save the date!
        </p>
      </div>
    </section>
  );
};

export default NextMeetUpDetails;
