type AsteriksProps = {
  className?: string;
};

export const Asteriks = ({ className }: AsteriksProps) => {
  return (
    <span
      aria-hidden="true"
      className={`leading-[150%] text-green-600 inline ${className}`}
    >
      *
    </span>
  );
};
