import { motion } from 'motion/react';

type InputErrorProps = {
  message: string;
  id: string;
};

export const InputError = ({ message, id }: InputErrorProps) => {
  return (
    <motion.p id={id} {...inputError_animation} className="text-red-500">
      {message}
    </motion.p>
  );
};

const inputError_animation = {
  initial: { opacity: 0, y: -10, height: 0 },
  animate: { opacity: 1, y: 0, height: 'auto' },
  exit: { opacity: 0, y: -10, height: 0 },
  transition: { duration: 0.15 },
};
