type TitleProps = {
  children: string;
};

const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="px-16 text-center text-3xl font-bold text-veryDarkMagenta leading-6">
      {children}
    </h1>
  );
};

export default Title;
