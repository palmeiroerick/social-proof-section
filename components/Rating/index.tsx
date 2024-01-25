import Image from "next/image";

type RatingProps = {
  children: string;
  className?: string;
};

const Star = () => {
  return (
    <div className="relative h-3 w-3 lg:h-4 lg:w-4">
      <Image
        className="object-contain"
        src="/assets/icon-star.svg"
        alt=""
        fill
      />
    </div>
  );
};

const Rating = ({ children, className }: RatingProps) => {
  return (
    <div
      className={`${className} flex h-14 flex-col items-center justify-center gap-1 rounded-lg bg-lightGrayishMagenta lg:w-[28rem] lg:flex-row lg:justify-start lg:gap-8 lg:pl-8`}
    >
      <div className="flex gap-2">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <h2 className="text-sm font-bold text-veryDarkMagenta lg:text-lg">
        {children}
      </h2>
    </div>
  );
};

export default Rating;
