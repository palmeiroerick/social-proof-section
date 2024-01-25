import Image from "next/image";

const Background = () => {
  return (
    <>
      {/* Mobile Background */}
      <Image
        className="absolute left-1/2 top-0 -translate-x-1/2 lg:hidden"
        src="/assets/bg-pattern-top-mobile.svg"
        alt=""
        width={374}
        height={232}
      />
      <Image
        className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:hidden"
        src="/assets/bg-pattern-bottom-mobile.svg"
        alt=""
        width={375}
        height={503}
      />
      {/* Desktop Background */}
      <Image
        className="absolute left-0 top-0 hidden lg:block"
        src="/assets/bg-pattern-top-desktop.svg"
        alt=""
        width={584}
        height={362}
      />
      <Image
        className="absolute bottom-0 right-0 hidden lg:block"
        src="/assets/bg-pattern-bottom-desktop.svg"
        alt=""
        width={1085}
        height={673}
      />
    </>
  );
};

export default Background;
