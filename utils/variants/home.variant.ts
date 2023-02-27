import { Variants } from 'framer-motion';

export const homeContainerVariant: Variants = {
  initial: {
    opacity: 0
  },
  fixed: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5
    }
  }
}
