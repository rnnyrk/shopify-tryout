import Link from 'next/link';

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className="min-h-full min-w-full">
      <ul className="w-full flex justify-center py-8 mb-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="mx-4">
          <Link href="/products">Products</Link>
        </li>
      </ul>
      <main className="max-w-4xl mx-auto">{children}</main>
    </body>
  );
};
