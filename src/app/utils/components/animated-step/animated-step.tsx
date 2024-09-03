import React from 'react';
import { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { useWizard } from 'react-use-wizard';


type Props = {
  previousStep: any; // MutableRefObject<number>
  children?: any
};

export default function AnimatedStep({ children, previousStep: previousStepIndex }: Props) {
  const { activeStep } = useWizard();

  useEffect(() => {
    return () => {
      previousStepIndex.current = activeStep;
    };
  }, [activeStep, previousStepIndex]);

    return (
      <motion.div
        custom={activeStep - previousStepIndex.current}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30
        }}
      >
        {children}
      </motion.div>
    );
}

const variants: Variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 800 : -800,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
            x: direction < 0 ? 800 : -800,
            opacity: 0,
        };
    },
};
