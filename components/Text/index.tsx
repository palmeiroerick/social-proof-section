type TextProps = {
  children: string;
};

const Text = ({ children }: TextProps) => {
  return (
    <p className="text-center text-[17.5px] leading-5 font-medium text-darkGrayishMagenta lg:text-start">
      {children}
    </p>
  );
};

export default Text;
