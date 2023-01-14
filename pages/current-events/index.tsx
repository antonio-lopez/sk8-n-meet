import PageHeader from '../../components/View/PageHeader';
import NextMeetUpDetails from '../../components/NextMeetUp/NextMeetUpDetails';
import Divider from '../../components/View/Divider';
import Highlights from '../../components/View/Highlights';

const NextMeetUp = () => {
  return (
    <>
      <PageHeader header='Our Next Meet Up' />
      <NextMeetUpDetails />
      <Divider />
      <Highlights />
    </>
  );
};

export default NextMeetUp;
