import { NextResponse } from 'next/server';

import { addToCart } from 'services/shopify';

type ProductRequest = {
  id: string;
  quantity: number;
};

export async function POST(request: Request) {
  const data: ProductRequest = await request.json();
  const card = await addToCart(data.id, data.quantity);

  console.log({ card });
  return NextResponse.json({ card });
}
