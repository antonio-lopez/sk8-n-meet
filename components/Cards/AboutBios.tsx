// import Image from 'next/image';
import Image from "../View/Image";

const AboutBios = () => {
  return (
    <section>
      {/* bio 1 */}
      <div className='grid grid-cols-1 lg:grid-cols-[288px,_1fr] my-14 gap-5 justify-items-center'>
        <Image
          smallImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705168093/assets/bio-covers/IMG_0073-600w_xbhdpo.webp'
          largeImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705168093/assets/bio-covers/IMG_0073-1000w_qy57hu.webp'
          height='384'
          width='300'
          loading='eager'
          sizes='(max-width: 768px) 100vw, 45vw'
          alt='angela biography cover'
        />
        <div className='w-full'>
          <h2 className='text-nadeshikoPink text-center lg:text-left text-3xl md:text-4xl mb-5'>
            Angela
          </h2>
          <p className='text-slimSilver'>
            Angela is a recent graduate with a Bachelor’s degree in chemical
            engineering. She is currently studying to get her Master’s in Food
            Science. Angela enjoys dog sitting and spending quality time with
            her friends. In her alone time she likes to get cozy and watch
            movies or devote time to one of her hobbies. She became involved
            with Sk8 N Meet Santana by attending the 1st meet up back in March
            of 2019 when she was eager to find more friends to skate with in
            Santa Ana. Fate led her to serendipitously find the flier for the
            inaugural Sk8 N Meet Santana skate sesh in the restroom of a local
            Santa Ana bar called Mission Bar. After attending several meet ups,
            the organizer of the events, Dorian Romero, entrusted her to help
            cohost the and eventually take on the role of social media outreach
            and photo/video editing. Angela has shown great dedication to
            maintaining a welcoming environment for the local and surrounding
            communities of nontraditional skaters while representing female
            skaters of Orange County. She takes great pride in being involved
            and seeing the crew achieve new milestones in the skateboarding
            community.
          </p>
        </div>
      </div>

      {/* bio 2 */}
      <div className='grid grid-cols-1 lg:grid-cols-[1fr,400px] my-14 gap-5'>
        <Image
          smallImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705168094/assets/bio-covers/IMG_0111-600w_jrti3s.webp'
          largeImg='https://res.cloudinary.com/dzhengjen/image/upload/v1705168094/assets/bio-covers/IMG_0111-1000w_sspxab.webp'
          height='316'
          width='400'
          loading='lazy'
          sizes='(max-width: 768px) 100vw, 33vw'
          alt='ashley biography cover'
        />
        <div className='lg:row-start-1'>
          <h2 className='text-nadeshikoPink text-center lg:text-left text-3xl md:text-4xl mb-5'>
            Ashley
          </h2>
          <p className='text-slimSilver'>
            Ashley is an eclectic artist within multiple realms of the creative
            scope. After graduating from FIDM (Fashion Institute of Design and
            Merchandising) with a degree in Fashion Design, Ashley realized that
            her passion for expressing her creativity gravitated more to graphic
            design. She became involved with Sk8 N Meet Santana in June 2020,
            after actively attending meet-ups and events hosted by the
            organization. Her leadership role at Sk8 N Meet Santana consists of
            designing flyers to the logo, branding and marketing, and taking
            amature professional photos when needed. Other than designing and
            skateboarding, Ashley is passionate about helping others in her
            community and DJ’ing from her personal vinyl set at local bars when
            her busy schedule allows it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBios;
