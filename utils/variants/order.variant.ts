export const orderContainerVariants = {
  initial: {
    opacity: 0,
    x: '100vw',
  },
  fixed: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    }
  }
}

export const orderChildVariants = {
  initial: {
    opacity: 0,
  },
  fixed: {
    opacity: 1,
    transition: {
      duration: 0.2
    }
  }
}

