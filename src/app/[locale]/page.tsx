import { Bestsellers } from 'modules/home/Bestsellers';
import { Container } from 'common/layout/Container';

const Home = () => {
  return (
    <Container>
      {/* @ts-expect-error Server Component */}
      <Bestsellers />
    </Container>
  );
};

export default Home;
