interface Title {
  title: string;
}

const Title = ({ title }: Title) => {
  return (
    <h1 className='text-nadeshikoPink text-3xl md:text-4xl py-8'>{title}</h1>
  );
};

export default Title;
