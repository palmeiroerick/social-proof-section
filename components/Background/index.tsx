import Image from "next/image";

const Background = () => {
  return (
    <>
      <Image
        className="absolute left-1/2 top-0 -translate-x-1/2"
        src="/assets/bg-pattern-top-mobile.svg"
        alt=""
        width={374}
        height={232}
      />
      <Image
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        src="/assets/bg-pattern-bottom-mobile.svg"
        alt=""
        width={375}
        height={503}
      />
    </>
  );
};

export default Background;
