import Image from 'next/image';

const AboutBlurb = () => {
  return (
    <section className='text-white pb-10'>
      <div className='grid grid-cols-1 md:gap-y-14'>
        <div className='relative h-72 md:h-[28rem]'>
          <Image
            src='https://res.cloudinary.com/dzhengjen/image/upload/v1676939649/sk8nmeet-santana/bio-covers/IMG_0171_uarmts_pz3nxm.webp'
            alt='members biography cover'
            fill
            style={{ objectFit: 'contain' }}
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            priority
          />
        </div>
        <p className='text-slimSilver lg:text-lg lg:px-14 mx-auto'>
          As non-traditional skaters, we usually couldn’t see ourselves
          reflected in skaters you would normally see at skateparks throughout
          Orange County- specifically in Santa Ana. The original founder, Dorian
          Romero took it upon herself to create a safe space for non-traditional
          skaters by hosting monthly skate meet ups at local skate parks for
          those who also have a love for skateboarding. The first meet up was
          held in March of 2019 at a large parking lot behind a probation
          office. Angela Banda attended the first meet up by discovering a flyer
          in the restroom of her favorite local bar- Mission Bar. During the
          first meet up, Angela connected with Dorian through their love of
          skateboarding and has since become an involved member of the group.
          Ashley Singleton heard about Sk8 N Meet Santana by word of mouth while
          DJ’ing at El Indio Downtown Santa Ana. Ashley had finally found a
          relatable group of folks to skate with and attended her very first
          meet up in June of 2020 for the Black Lives Matter Go Skate Day
          Protest in Downtown LA. In late 2020, Dorian eventually handed off the
          organization to Angela and Ashley, and had them take over as leaders
          of the group due to their dedication and involvement. Since then, Sk8
          N Meet Santana has grown by diversifying their meet up locations to
          various skate parks in the LA and OC area. The group has become a
          familiar face within the non-traditional skate scene by way of
          collaborating with other non-traditional skate groups throughout the
          SoCal area. Other involvement in the community includes features in LA
          skate magazines (TRASH Mag and Bigfoot Magazine), developing the very
          first Build-Your-Own-Skateboard Workshop for the youth of Santa Ana,
          and attending Skate Like A Girl’s, W.O.F. (Wheels of Fortune) in
          Seattle, WA.
        </p>
      </div>
    </section>
  );
};

export default AboutBlurb;
