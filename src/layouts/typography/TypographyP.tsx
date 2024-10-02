interface TypographyPProps {
  children: React.ReactNode;
}

function TypographyP({ children }: TypographyPProps) {
  return <p className="text-base lg:text-lg text-gray-400">{children}</p>;
}
export default TypographyP;
