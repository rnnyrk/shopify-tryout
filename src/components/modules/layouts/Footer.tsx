import { Container } from 'common/layout/Container';

export const Footer = () => {
  return (
    <div className="w-full bg-background-secondary py-2">
      <Container
        isCentered
        noPadding
        className="py-4"
      >
        <strong className="uppercase tracking-widest">Mellow Tallow</strong>
      </Container>
    </div>
  );
};
