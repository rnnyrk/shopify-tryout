import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';

export const metadata = {
  title: {
    default: 'Contact',
    template: '%s | Contact',
  },
};

const Contact = () => {
  return (
    <Container>
      <Heading>Contact</Heading>
    </Container>
  );
};

export default Contact;
