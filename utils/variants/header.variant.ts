import { Variants } from 'framer-motion';

export const svgVariant: Variants = {
  initial: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1
    }
  }
}

export const pathVariant: Variants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    }
  }
}