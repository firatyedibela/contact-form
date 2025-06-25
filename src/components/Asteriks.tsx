type AsteriksProps = {
  className?: string;
};

export const Asteriks = ({ className }: AsteriksProps) => {
  return (
    <span className={`leading-[150%] text-green-600 inline ${className}`}>
      *
    </span>
  );
};
