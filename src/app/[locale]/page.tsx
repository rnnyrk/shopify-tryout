import { Bestsellers } from 'modules/home/Bestsellers';
import { Usps } from 'modules/home/Usps';

const Home = () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Bestsellers />
      <Usps />
    </>
  );
};

export default Home;
