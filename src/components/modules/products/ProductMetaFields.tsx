'use client';
import * as i from 'types';
import { useTranslations } from 'next-intl';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'common/interaction/Accordion';

const ProductMetaItem = ({ value, children }: ProductMetaItemProps) => {
  return (
    <AccordionItem
      value={value}
      className="border-b-0 mb-2 last:mb-0 rounded-md overflow-hidden"
    >
      {children}
    </AccordionItem>
  );
};

const ProductMetaItemTrigger = ({ children }: Omit<ProductMetaItemProps, 'value'>) => {
  return (
    <AccordionTrigger className="border-b-0 bg-background-secondary px-4 rounded-t-md">
      {children}
    </AccordionTrigger>
  );
};

const ProductMetaItemContent = ({ children }: Omit<ProductMetaItemProps, 'value'>) => {
  return (
    <AccordionContent className="border-b-0 bg-background-secondary px-4 rounded-b-md">
      {children}
    </AccordionContent>
  );
};

export const ProductMetaFields = ({
  productMetafieldOne,
  productMetafieldTwo,
}: ProductMetaFieldsProps) => {
  const t = useTranslations('Products');

  return (
    <Accordion
      type="multiple"
      className="mt-12"
    >
      {productMetafieldOne && (
        <ProductMetaItem value={productMetafieldOne.key}>
          <ProductMetaItemTrigger>{t('meta.one')}</ProductMetaItemTrigger>
          <ProductMetaItemContent>{productMetafieldOne?.value}</ProductMetaItemContent>
        </ProductMetaItem>
      )}
      {productMetafieldTwo && (
        <ProductMetaItem value={productMetafieldTwo.key}>
          <ProductMetaItemTrigger>{t('meta.two')}</ProductMetaItemTrigger>
          <ProductMetaItemContent>{productMetafieldTwo?.value}</ProductMetaItemContent>
        </ProductMetaItem>
      )}
    </Accordion>
  );
};

type ProductMetaFieldsProps = {
  productMetafieldOne?: i.ProductDetail['productMetafieldOne'];
  productMetafieldTwo?: i.ProductDetail['productMetafieldTwo'];
};

type ProductMetaItemProps = {
  value: string;
  children: React.ReactNode;
};
