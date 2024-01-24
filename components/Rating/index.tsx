import Image from "next/image";

type RatingProps = {
  children: string;
};

const Rating = ({ children }: RatingProps) => {
  return (
    <div className="flex h-14 flex-col items-center justify-center gap-1 rounded-md bg-lightGrayishMagenta">
      <div className="flex gap-2">
        <Image src="/assets/icon-star.svg" alt="" width={12} height={12} />
        <Image src="/assets/icon-star.svg" alt="" width={12} height={12} />
        <Image src="/assets/icon-star.svg" alt="" width={12} height={12} />
        <Image src="/assets/icon-star.svg" alt="" width={12} height={12} />
        <Image src="/assets/icon-star.svg" alt="" width={12} height={12} />
      </div>
      <h2 className="text-sm font-medium text-veryDarkMagenta">{children}</h2>
    </div>
  );
};

export default Rating;
