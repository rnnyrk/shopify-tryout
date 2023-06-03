import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';

export const metadata = {
  title: {
    default: 'FAQ',
    template: '%s | FAQ',
  },
};

const FAQ = () => {
  return (
    <Container isCentered>
      <Heading>FAQ</Heading>
    </Container>
  );
};

export default FAQ;
