import { MARQUEE_TEXT } from "../constants"
import { motion } from "framer-motion"

const Marquee = () => {
  return (
    <div>
        <div className="w-full mt-10 lg:mt-4 bg-black text-lime-300 lg:py-6">
            <div className="flex overflow-hidden whitespace-nowrap">
                {[...Array(3)].map((_,i) => (
                    <motion.h1
                    initial={{ x: '-100%' }} 
                    animate={{ x: '0' }}
                    transition={{ repeat: Infinity, ease: 'linear', duration: 20 }} 
                    key={i} 
                    className='py-2 text-3xl font-extralight leading-none tracking-wide lg:text-7xl ml-2'
                    >
                        {MARQUEE_TEXT}
                    </motion.h1>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Marquee