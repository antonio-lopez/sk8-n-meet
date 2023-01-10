interface Header {
  header: string;
}

const PageHeader = ({ header }: Header) => {
  return (
    <h1 className='text-nadeshikoPink text-4xl md:text-5xl py-8'>{header}</h1>
  );
};

export default PageHeader;
