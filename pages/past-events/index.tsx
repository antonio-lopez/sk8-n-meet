import { GetServerSideProps } from "next";
import FlyerPast from "../../components/Cards/FlyerPast";
import PageHeader from "../../components/View/PageHeader";
import { IMeetup } from "../../utils/interfaces";
import { client } from "../../utils/client";
import { useState } from "react";
import Router from "next/router";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface serverProps {
  meetups: IMeetup[];
  totalPageCount: number;
  pageNumber: number;
}

const PastMeetUp = ({
  meetups,
  totalPageCount,
  pageNumber,
}: {
  meetups: IMeetup[];
  totalPageCount: number;
  pageNumber: number;
}) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [page, setPage] = useState(pageNumber);

  const nextPage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setBtnDisabled(true);
    setPage((prev) => prev + 1);
    Router.push({ pathname: "/past-events", query: { page: `${page + 1}` } });
    setBtnDisabled(false);
  };

  const prevPage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setBtnDisabled(true);
    setPage((prev) => prev - 1);
    Router.push({ pathname: "/past-events", query: { page: `${page - 1}` } });
    setBtnDisabled(false);
  };

  return (
    <>
      <PageHeader header='Past Meet Ups' />
      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 items-center justify-items-center mx-auto mb-16'>
        {meetups.map((meetup, indx) => (
          <div key={meetup._id} className='flex items-center justify-center'>
            <FlyerPast
              _id={indx}
              key={meetup._id}
              image={meetup.image}
              title={meetup.title}
              meetupDate={meetup.title}
              slug={meetup.slug}
            />
          </div>
        ))}
      </div>
      <div className='flex w-full items-center justify-between space-x-9 my-10 lg:my-20 text-xl font-["Erica_One"]'>
        <button
          type='button'
          className='flex items-end justify-center px-4 text-white disabled:opacity-50 disabled:hover:text-white hover:text-yellowGreen'
          disabled={btnDisabled || page <= 1}
          onClick={prevPage}
        >
          <IoIosArrowBack className='mr-1 h-6 w-6' />
          Previous
        </button>

        <button
          type='button'
          className='flex items-end justify-center px-4 text-white disabled:opacity-50 disabled:hover:text-white hover:text-yellowGreen'
          disabled={btnDisabled || pageNumber >= totalPageCount}
          onClick={nextPage}
        >
          Next
          <IoIosArrowForward className='ml-1 h-6 w-6' />
        </button>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<serverProps> = async (
  context
) => {
  const pageNumber = context.query.page ? Number(context.query.page) : 1;
  const ITEMS_PER_PAGE = 8;

  const COLLECTION_QUERY = `*[_type == "meetup"] | order(meetupDate desc){_id, title, image, slug}`;

  if (context.resolvedUrl == "/past-events") {
    return {
      redirect: {
        permanent: false,
        destination: "/past-events?page=1",
      },
    };
  }

  const meetupData = await client.fetch(
    `
    {
      "meetups": ${COLLECTION_QUERY} [($pageIndex * ${ITEMS_PER_PAGE})...($pageIndex + 1) * ${ITEMS_PER_PAGE}],
      "pagination" : {
        "totalPageCount" : count(${COLLECTION_QUERY}._id) / ${ITEMS_PER_PAGE},
        "pageNumber": $pageIndex + 1,
      }
    }`,
    {
      pageIndex: pageNumber - 1,
    }
  );

  const MAX_PAGE_LIMIT = Math.ceil(meetupData.pagination?.totalPageCount || 1);

  if (
    Number(context.query.page) < 1 ||
    Number(context.query.page) > MAX_PAGE_LIMIT
  ) {
    return {
      redirect: {
        permanent: false,
        // redirect to error page
        destination: "/_error",
      },
    };
  }

  return {
    props: {
      meetups: meetupData.meetups,
      totalPageCount: MAX_PAGE_LIMIT,
      pageNumber: meetupData.pagination.pageNumber,
    },
  };
};

export default PastMeetUp;
