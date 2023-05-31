'use client';
import { useTranslations } from 'next-intl';

import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';

const Home = () => {
  const t = useTranslations('Home');

  return (
    <Container>
      <article>
        <Heading>{t('title')}</Heading>
        <p className="my-4">{t('description')}</p>
      </article>
    </Container>
  );
};

export default Home;
