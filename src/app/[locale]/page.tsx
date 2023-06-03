import { Bestsellers } from 'modules/home/Bestsellers';
import { Hero } from 'modules/layouts/Hero';
import { Usps } from 'modules/home/Usps';

const Home = () => {
  return (
    <>
      <Hero />
      <Bestsellers />
      <Usps />
    </>
  );
};

export default Home;
