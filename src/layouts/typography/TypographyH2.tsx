interface TypographyH2Props {
  children: React.ReactNode;
}

function TypographyH2({ children }: TypographyH2Props) {
  return <h2 className="text-4xl font-bold lg:text-5xl">{children}</h2>;
}
export default TypographyH2;
