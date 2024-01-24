type TextProps = {
  children: string;
};

const Text = ({ children }: TextProps) => {
  return (
    <p className="text-center text-[17.5px] leading-5 text-darkGrayishMagenta">
      {children}
    </p>
  );
};

export default Text;
