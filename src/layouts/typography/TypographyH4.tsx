interface TypographyH3Props {
  children: React.ReactNode;
}

function TypographyH3({ children }: TypographyH3Props) {
  return <h3 className="text-2xl font-bold lg:text-3xl">{children}</h3>;
}
export default TypographyH3;
