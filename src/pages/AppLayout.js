import Header from '../components/header';
import Footer from '../components/footer';

const AppLayout = (props) => {
  return (
    <div className='container mx-auto px-8 md:px-12 lg:px-16'>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default AppLayout;
