type RouteProps = {
  params?: Record<string, string>;
  searchParams?: Record<string, string>;
  children?: React.ReactNode;
};

export type NextPageProps<P extends RouteProps> = P;
