import { motion } from 'framer-motion';
import usePizzaStore from '../utils/store/pizza-store';
import { orderChildVariants, orderContainerVariants } from '../utils/variants';

const Order = () => {
  const pizza = usePizzaStore((state) => state.pizza)
  return (
    <motion.div className="container order"
      variants={orderContainerVariants}
      initial='initial'
      animate='fixed'
    >
      <h2>Thank you for your order :)</h2>
      <motion.p
        variants={orderChildVariants}
      >You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div
        variants={orderChildVariants}
      >
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>

    </motion.div>
  )
}

export default Order;