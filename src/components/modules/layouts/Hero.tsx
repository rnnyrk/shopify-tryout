import HeroImg from 'images/header_image.webp';
import Image from 'next/image';

export const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-[80vh] relative">
      <div className="relative z-10 w-full h-full">{children}</div>
      <figure className="absolute inset-0 z-0 w-full h-full m-0 p-0">
        <Image
          src={HeroImg}
          alt="Hero image"
          fill
          className="object-cover object-center w-full opacity-80"
        />
      </figure>
    </div>
  );
};
