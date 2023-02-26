import { Variants } from 'framer-motion';

export const NextVariant: Variants = {
  initial: {
    x: '-100vw',
  },
  fixed: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
    }
  }
}

export const buttonVariants: Variants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      duration: .4,
      repeat: Infinity,
      repeatType: "reverse"
    }
  },
}