import { motion } from 'framer-motion'

export function Button({ children, variant = 'primary', href = '#contact', onClick }) {
  const base =
    'inline-flex items-center justify-center border px-7 py-3 text-sm font-medium uppercase transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:ring-offset-2 focus:ring-offset-black'
  const variants = {
    primary: 'border-gold bg-gold text-black hover:bg-white hover:border-white',
    outline: 'border-white/35 bg-white/5 text-white hover:border-gold hover:text-gold',
    ghost: 'border-gold/70 bg-black/20 text-gold hover:bg-gold hover:text-black',
  }

  if (onClick) {
    return (
      <motion.button type="button" onClick={onClick} className={`${base} ${variants[variant]}`} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        {children}
      </motion.button>
    )
  }

  return (
    <motion.a href={href} className={`${base} ${variants[variant]}`} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.a>
  )
}
