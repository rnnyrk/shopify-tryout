'use client';
import { useTranslations } from 'next-intl';

import PackageIcon from 'vectors/packaging.svg';
import FatIcon from 'vectors/fat.svg';
import TruckIcon from 'vectors/truck.svg';
import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';

const items = [
  {
    id: 1,
    name: '100% natural',
    description:
      "Our talc creams are made from 100% natural ingredients, carefully selected to ensure the highest quality and purity. We understand the importance of using safe and gentle products on your skin, which is why our talc creams contain no artificial additives, fragrances, or harmful chemicals. With our 100% natural formulation, you can enjoy the benefits of talc while taking care of your skin's health.",
    // descriptionNL:
    //   'Onze talkcrèmes zijn gemaakt van 100% natuurlijke ingrediënten, zorgvuldig geselecteerd om de hoogste kwaliteit en zuiverheid te garanderen. We begrijpen het belang van het gebruik van veilige en zachte producten op uw huid, daarom bevatten onze talkcrèmes geen kunstmatige toevoegingen, geurstoffen of schadelijke chemicaliën. Met onze 100% natuurlijke samenstelling kunt u genieten van de voordelen van talk terwijl u zorgt voor de gezondheid van uw huid.',
    icon: PackageIcon,
  },
  {
    id: 2,
    name: 'Free Shipping and Returns',
    description:
      "We believe in providing exceptional customer service, which is why we offer free shipping and hassle-free returns on all our talc creams. We want to make your shopping experience as convenient as possible, ensuring that your order reaches you without any additional cost. If you're not completely satisfied with your purchase, we also offer easy returns, making it risk-free for you to try our talc creams and discover their amazing benefits.",
    // descriptionNL:
    //   'We geloven in het bieden van uitstekende klantenservice, daarom bieden we gratis verzending en moeiteloos retourneren op al onze talkcrèmes. We willen uw winkelervaring zo gemakkelijk mogelijk maken en ervoor zorgen dat uw bestelling u bereikt zonder extra kosten. Als u niet helemaal tevreden bent met uw aankoop, bieden we ook eenvoudige retournering, waardoor u zonder risico onze talkcrèmes kunt uitproberen en de geweldige voordelen kunt ontdekken.',
    icon: TruckIcon,
  },
  {
    id: 3,
    name: 'Superior Quality',
    description:
      'Our talc creams are crafted with utmost care and attention to detail, using only the finest ingredients. We prioritize quality in every step of the manufacturing process to ensure that you receive a product that meets the highest standards. Our talc creams have a luxurious texture, absorb quickly into the skin, and provide long-lasting freshness and comfort.',
    // descriptionNL:
    //   'Onze talkcrèmes worden met de grootste zorg en aandacht voor detail vervaardigd, met alleen de beste ingrediënten. We stellen kwaliteit voorop in elke stap van het productieproces, zodat u een product ontvangt dat voldoet aan de hoogste normen. Onze talkcrèmes hebben een luxueuze textuur, worden snel door de huid opgenomen en bieden langdurige frisheid en comfort. Ervaar het verschil van onze talkcrèmes van superieure kwaliteit en geniet de hele dag door van een gladde, gevoede huid.',
    icon: FatIcon,
  },
];

export const Usps = () => {
  // @TODO use keys for translation
  const t = useTranslations();

  return (
    <Container className="bg-white">
      <div className="flex justify-center mt-12 max-w-6xl mx-auto lg:grid lg:gap-16 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              className="flex flex-col items-center"
              key={item.id}
            >
              <Icon className="w-24 h-24 mb-4" />
              <Heading
                as="h2"
                size="2xl"
                className="my-4"
              >
                {item.name}
              </Heading>
              <p className="text-center">{item.description}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
