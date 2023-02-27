import { Variants } from 'framer-motion';

export const toppingsContainerVariants: Variants = {
  initial: {
    opacity: 0,
    x: '100vw',
  },
  fixed: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5,
    }
  }
}
