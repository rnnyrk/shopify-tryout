import { Container } from 'common/layout/Container';

import { MyStore } from './MyStore';

export const Footer = () => {
  return (
    <div className="w-full bg-background-secondary py-2">
      <Container
        isCentered
        noPadding
        className="py-4"
      >
        <MyStore size="small" />
      </Container>
    </div>
  );
};
