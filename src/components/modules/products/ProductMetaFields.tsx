'use client';
import * as i from 'types';
import { useTranslations } from 'next-intl';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'common/interaction/Accordion';

export const ProductMetaFields = ({ productIngredients, productUsage }: ProductMetaFieldsProps) => {
  const t = useTranslations('Products');

  return (
    <Accordion
      type="multiple"
      className="mt-12"
    >
      {productIngredients && (
        <AccordionItem value={productIngredients.key}>
          <AccordionTrigger>{t('ingredients')}</AccordionTrigger>
          <AccordionContent>{productIngredients?.value}</AccordionContent>
        </AccordionItem>
      )}
      {productUsage && (
        <AccordionItem value={productUsage.key}>
          <AccordionTrigger>{t('usage')}</AccordionTrigger>
          <AccordionContent>{productUsage?.value}</AccordionContent>
        </AccordionItem>
      )}
      <AccordionItem value="disclaimer">
        <AccordionTrigger>{t('disclaimer')}</AccordionTrigger>
        <AccordionContent>{t('disclaimer_text')}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

type ProductMetaFieldsProps = {
  productIngredients?: i.ProductDetail['productIngredients'];
  productUsage?: i.ProductDetail['productUsage'];
};
