import AboutBlurb from '../../components/About/AboutBlurb';
import PageHeader from '../../components/View/PageHeader';
import AboutBios from '../../components/Cards/AboutBios';

const About = () => {
  return (
    <>
      <PageHeader header='About' />
      <AboutBlurb />
      <AboutBios />
    </>
  );
};

export default About;
