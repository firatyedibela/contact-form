import successIcon from '../assets/images/icon-success-check.svg';
import { motion } from 'motion/react';

export const Toast = () => {
  return (
    <motion.div
      {...toast_animation}
      className="w-[327px] md:w-[450px] p-6 flex flex-col gap-2 bg-grey-900 rounded-xl text-white fixed top-6 left-1/2 -translate-x-1/2 "
    >
      <div className="flex gap-2 items-center">
        <img
          src={successIcon}
          alt="Success icon"
          className="w-[19.5px] h-[19.5px]"
        />
        <h3 className="text-lg font-bold leading-[150%]">Message Sent!</h3>
      </div>
      <p className="leading-[150%]">
        Thanks for completing the form. We'll be in touch soon!
      </p>
    </motion.div>
  );
};

const toast_animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, y: -100, scale: 0.95 },
  transition: { duration: 0.5 },
};
