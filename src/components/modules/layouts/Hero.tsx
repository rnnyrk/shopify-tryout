import CowImg from 'images/cow.jpg';
import YakImg from 'images/yak.jpg';
import Image from 'next/image';

export const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-[50vh] relative">
      <div className="relative z-10 w-full h-full">{children}</div>
      <figure className="absolute inset-0 z-0 w-full h-full m-0 p-0">
        <Image
          src={CowImg}
          alt="Hero image"
          fill
          priority
          className="object-cover object-center w-full opacity-80"
        />
      </figure>
    </div>
  );
};
