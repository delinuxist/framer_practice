import '@/styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <Header />
      <AnimatePresence mode='wait'>
        <motion.div
          key={router.route}
          exit={{
            x: '-100vw',
            transition: {
              ease: 'easeInOut'
            }
          }}
        >
          <Component {...pageProps} />
        </motion.div>

      </AnimatePresence>
    </>
  )
}
