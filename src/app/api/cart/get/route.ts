import { NextResponse } from 'next/server';

import { getCart } from 'services/shopify';

// gid://shopify/Cart/c1-45a34dc56368d602fb1bb665cff1b66c

// Z2lkOi8vc2hvcGlmeS9DYXJ0L2MxLWNlYTYyODg5MGY2YWNiMjZmZjk0NmYwMzhkYzUxNzJl

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cartId = searchParams.get('id');

  console.log({ routeGetCartId: cartId });

  const cart = await getCart(cartId!);

  console.log({ cart });

  return NextResponse.json({ cart });
}
