import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';

export const metadata = {
  title: {
    default: 'About',
    template: '%s | About',
  },
};

const About = () => {
  return (
    <Container isCentered>
      <Heading>About</Heading>
    </Container>
  );
};

export default About;
