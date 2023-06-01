import Image from 'next/image';

import CowImg from 'images/cow.jpg';
import YakImg from 'images/yak.jpg';
import { Button } from 'common/interaction/Button';
import { Heading } from 'common/typography/Heading';

export const Hero = () => {
  return (
    <div className="w-full h-[50vh] mt-20 relative">
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <Heading className="text-6xl mb-2 font-bold text-center text-white">
          Welcome to the farm
        </Heading>
        <p className="text-xl text-center text-white">
          We have the best cows and yaks in the world
        </p>
        <div className="flex mt-8">
          <Button
            type="link"
            href="/products"
            className="mr-2"
          >
            See our products
          </Button>
          <Button
            type="link"
            href="/about"
            variant="secondary"
            className="ml-2"
          >
            Why tallow
          </Button>
        </div>
      </div>
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
