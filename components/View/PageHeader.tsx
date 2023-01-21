interface Header {
  header: string;
}

const PageHeader = ({ header }: Header) => {
  return (
    <h1 className='text-nadeshikoPink text-3xl md:text-4xl py-8'>{header}</h1>
  );
};

export default PageHeader;
