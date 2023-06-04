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
    <AccordionTrigger className="border-b-0 bg-background-hover px-4 rounded-t-md">
      {children}
    </AccordionTrigger>
  );
};

const ProductMetaItemContent = ({ children }: Omit<ProductMetaItemProps, 'value'>) => {
  return (
    <AccordionContent className="border-b-0 bg-background-hover px-4 rounded-b-md">
      {children}
    </AccordionContent>
  );
};

export const ProductMetaFields = ({ productIngredients, productUsage }: ProductMetaFieldsProps) => {
  const t = useTranslations('Products');

  return (
    <Accordion
      type="multiple"
      className="mt-12"
    >
      {productIngredients && (
        <ProductMetaItem value={productIngredients.key}>
          <ProductMetaItemTrigger>{t('ingredients')}</ProductMetaItemTrigger>
          <ProductMetaItemContent>{productIngredients?.value}</ProductMetaItemContent>
        </ProductMetaItem>
      )}
      {productUsage && (
        <ProductMetaItem value={productUsage.key}>
          <ProductMetaItemTrigger>{t('usage')}</ProductMetaItemTrigger>
          <ProductMetaItemContent>{productUsage?.value}</ProductMetaItemContent>
        </ProductMetaItem>
      )}
      <ProductMetaItem value="disclaimer">
        <ProductMetaItemTrigger>{t('disclaimer')}</ProductMetaItemTrigger>
        <ProductMetaItemContent>{t('disclaimer_text')}</ProductMetaItemContent>
      </ProductMetaItem>
    </Accordion>
  );
};

type ProductMetaFieldsProps = {
  productIngredients?: i.ProductDetail['productIngredients'];
  productUsage?: i.ProductDetail['productUsage'];
};

type ProductMetaItemProps = {
  value: string;
  children: React.ReactNode;
};
