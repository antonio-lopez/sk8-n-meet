import Navbar from './Navbar';
import Footer from './Footer';

type MainLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='min-h-screen layout'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
