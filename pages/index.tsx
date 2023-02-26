import { motion } from 'framer-motion'
import Link from 'next/link'
import { buttonVariants, homeContainerVariant } from '../utils/variants'


const Home = () => {
  return (
    <motion.div
      variants={homeContainerVariant}
      initial='initial'
      animate='fixed'
      className="home container">
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link href="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home