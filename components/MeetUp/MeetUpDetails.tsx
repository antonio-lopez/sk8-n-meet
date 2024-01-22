import Flyer from "../Cards/Flyer";
import { IMeetup } from "../../utils/interfaces";

const MeetUpDetails = ({ _id, image, title, slug, body }: IMeetup) => {
  return (
    <section className='mb-10'>
      {body ? (
        <div className='grid grid-cols-1 gap-7 justify-items-center lg:grid-cols-[26rem,_1fr]'>
          <div className='md:w-[31rem] md:h-[31rem] w-full h-full'>
            <Flyer _id={Number(_id)} image={image} title={title} slug={slug} />
          </div>
          <p className='text-slimSilver indent-8'>{body}</p>
        </div>
      ) : (
        <div className='grid grid-cols-1 gap-7 justify-items-center'>
          <div className='md:w-[31rem] md:h-[31rem] w-full h-full'>
            <Flyer _id={Number(_id)} image={image} title={title} slug={slug} />
          </div>
        </div>
      )}
    </section>
  );
};

export default MeetUpDetails;
