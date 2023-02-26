import { motion } from 'framer-motion';
import Link from 'next/link';
import usePizzaStore from '../utils/store/pizza-store';
import { baseContainerVariants, buttonVariants, NextVariant } from '../utils/variants';


const Base = () => {
  const [addBase, pizza] = usePizzaStore((state) => [state.addBase, state.pizza])
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
      variants={baseContainerVariants}
      initial='initial'
      animate='fixed'
      className="base container">

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
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
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          variants={NextVariant}
        >
          <Link href="/toppings">
            <motion.button
              variants={buttonVariants}
              whileHover={'hover'}
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;