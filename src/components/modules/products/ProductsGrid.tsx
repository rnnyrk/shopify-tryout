export const ProductsGrid = ({ children }: ProductsGridProps) => {
  return <div className="flex flex-col mt-16 lg:grid lg:gap-16 lg:grid-cols-3">{children}</div>;
};

type ProductsGridProps = {
  children: React.ReactNode;
};
