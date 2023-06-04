import { SectionHeader } from 'modules/layouts/SectionHeader';
import { Container } from 'common/layout/Container';

export const metadata = {
  title: {
    default: 'FAQ',
    template: '%s | FAQ',
  },
};

const FAQ = () => {
  return (
    <Container isCentered>
      <SectionHeader
        title="WhyTallow.title"
        description="WhyTallow.description"
      />
    </Container>
  );
};

export default FAQ;
