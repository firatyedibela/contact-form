import { motion } from 'motion/react';

type InputErrorProps = {
  message: string;
};

export const InputError = ({ message }: InputErrorProps) => {
  return (
    <motion.p {...inputError_animation} className="text-red-500">
      {message}
    </motion.p>
  );
};

const inputError_animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};
