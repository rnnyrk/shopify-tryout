import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';

export const metadata = {
  title: {
    default: 'WhyTallow',
    template: '%s | WhyTallow',
  },
};

const WhyTallow = () => {
  return (
    <Container isCentered>
      <Heading>WhyTallow</Heading>
    </Container>
  );
};

export default WhyTallow;
