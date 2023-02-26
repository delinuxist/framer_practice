export const NextVariant = {
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