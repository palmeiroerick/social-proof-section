import Image from "next/image";

type ReviewProps = {
  name: string;
  authorImage: `/assets/image-${string}.jpg`;
  review: string;
};

const Review = ({ name, authorImage, review }: ReviewProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-veryDarkMagenta p-7">
      <div className="flex gap-3">
        <Image
          className="rounded-full"
          src={authorImage}
          alt=""
          width={32}
          height={32}
        />
        <div>
          <h2 className="text-sm font-medium leading-4 text-white">{name}</h2>
          <h3 className="text-sm leading-4 text-softPink">Verified Buyer</h3>
        </div>
      </div>
      <p className="text-white text-[17px]">{review}</p>
    </div>
  );
};

export default Review;
