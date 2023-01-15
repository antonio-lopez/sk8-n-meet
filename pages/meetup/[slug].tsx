import PageHeader from '../../components/View/PageHeader';
import MeetUpDetails from '../../components/MeetUp/MeetUpDetails';
import Divider from '../../components/View/Divider';
import Highlights from '../../components/View/Highlights';

const Meetup = () => {
  return (
    <>
      <PageHeader header='September 18 2022' />
      <MeetUpDetails />
      <Divider />
      <Highlights />
    </>
  );
};

export default Meetup;

// todo - get single meet up details from CMS using getstatic/getserver props
