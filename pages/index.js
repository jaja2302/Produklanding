import Image from 'next/image'
import ParticelContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

import { motion } from 'framer-motion'
import { fadeIn, fadein} from '../variants'

const Home = () => {
  return <div className='bg-primary/60 h-full'>
    {/* text  */}
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
        {/* titile  */}
                <motion.h1
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='h1'
        >
          Gelas dengan Kerajinan yang
          {' '}
          <span className='text-accent'>Eksklusif</span>
        </motion.h1>
        {/* subtitle */}
        <motion.p
          variants={fadeIn('down', 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
        >
          Dibuat secara eksklusif di Kalimantan, setiap bagian gelas dibuat dengan teliti untuk menciptakan produk yang menarik dan berkualitas tinggi.
        </motion.p>

        {/* button  */}
        <div className='flex justify-center xl:hidden relative'>
          <ProjectsBtn />
        </div> 
        <motion.div
         variants={fadeIn('down',0.4)}
         initial="hidden" 
         animate="show"
          exit="hidden"
          className='hidden xl:flex'
          >
          <ProjectsBtn />
        </motion.div> 
      </div>
    </div>
    {/* image  */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        <div  className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right
         xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
        </div>
        {/* partikel  */}
       {/* <ParticelContainer /> */}
      {/* avatar img  */}
      <motion.div 
       variants={fadeIn('up',0.2)}
       initial="hidden" 
       animate="show"
        exit="hidden"
      className='w-full h-full max-w-[500px] max-h-[750px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'>
        <Avatar/>
      </motion.div>
      </div>
  </div>;
};

export default Home;
