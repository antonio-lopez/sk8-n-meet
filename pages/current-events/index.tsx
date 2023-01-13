import PageHeader from '../../components/View/PageHeader';
import MeetUpDetails from '../../components/CurrentMeetUp/MeetUpDetails';
import Divider from '../../components/View/Divider';
import Highlights from '../../components/View/Highlights';

const NextMeetUp = () => {
  return (
    <>
      <PageHeader header='Our Next Meet Up' />
      <MeetUpDetails />
      <Divider />
      <Highlights />
    </>
  );
};

export default NextMeetUp;
