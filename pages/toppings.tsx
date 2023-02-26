import { motion } from 'framer-motion';
import Link from 'next/link';
import usePizzaStore from '../utils/store/pizza-store';
import { buttonVariants, toppingsContainerVariants } from '../utils/variants';


const Toppings = () => {
  const [addToppings, pizza] = usePizzaStore((state) => [state.addToppings, state.pizza])

  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
      variants={toppingsContainerVariants}
      initial='initial'
      animate='fixed'
    >

      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addToppings(topping)}
              whileHover={{
                scale: 1.3,
                color: '#f8e112',
                originX: 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 300
              }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          )
        })}
      </ul>

      <Link href="/order">
        <motion.button
          variants={buttonVariants}
          whileHover={'hover'}
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;