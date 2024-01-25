import Image from "next/image";

type ReviewProps = {
  className?: string;
  name: string;
  authorImage: `/assets/image-${string}.jpg`;
  review: string;
};

const Review = ({ className, name, authorImage, review }: ReviewProps) => {
  return (
    <div
      className={`${className} flex flex-col gap-4 rounded-lg bg-veryDarkMagenta p-7 lg:p-8`}
    >
      <div className="flex gap-3 lg:gap-6">
        <div className="relative h-8 w-8 lg:h-10 lg:w-10">
          <Image
            className="rounded-full object-contain"
            src={authorImage}
            alt=""
            fill
          />
        </div>
        <div>
          <h2 className="text-sm font-bold leading-4 text-white lg:text-lg">
            {name}
          </h2>
          <h3 className="text-sm leading-4 text-softPink lg:text-lg">
            Verified Buyer
          </h3>
        </div>
      </div>
      <p className="text-[17px] text-white font-bold lg:text-base">{review}</p>
    </div>
  );
};

export default Review;
