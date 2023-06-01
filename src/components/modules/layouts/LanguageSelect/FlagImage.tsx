import Image from 'next/image';

export const FlagImage = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      width="20"
      height="9"
      className="mr-2"
      alt="Flag of the Netherlands"
      unoptimized
    />
  );
};
