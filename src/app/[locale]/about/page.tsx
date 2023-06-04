import { Container } from 'common/layout/Container';
import { SectionHeader } from 'modules/layouts/SectionHeader';

export const metadata = {
  title: {
    default: 'About',
    template: '%s | About',
  },
};

const About = () => {
  return (
    <Container isCentered>
      <SectionHeader
        title="About.title"
        description="About.description"
      />
    </Container>
  );
};

export default About;
