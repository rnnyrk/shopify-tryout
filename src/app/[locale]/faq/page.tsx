import { Container } from 'common/layout/Container';
import { SectionHeader } from 'modules/layouts/PageHeader';

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
        title="FAQ.title"
        description="FAQ.description"
      />
    </Container>
  );
};

export default FAQ;
