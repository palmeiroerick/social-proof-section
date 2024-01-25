type TitleProps = {
  children: string;
};

const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="px-16 text-center text-3xl font-bold text-veryDarkMagenta leading-6 lg:text-[3.25rem] lg:leading-none lg:text-start lg:pl-0">
      {children}
    </h1>
  );
};

export default Title;
