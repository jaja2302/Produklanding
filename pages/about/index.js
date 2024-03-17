

import React, {useState} from 'react';


//  data
const dataProduk = [
  {
    title: 'Fitur',
    info: [
      {
        title: 'Material Berkualitas Tinggi',
        description: 'Dibuat dari bahan langka yang terbuat dari kayu, memberikan keunikan dan keindahan yang langka.',
      },
    ],
  },
  {
    title: 'Manfaat',
    info: [
      {
        title: 'Efek Penyembuhan',
        description: 'Dipercaya memiliki efek penyembuhan saat digunakan untuk minum, memberikan pengalaman yang istimewa.',
      },
    ],
  },
  {
    title: 'Bahan',
    info: [
      {
        title: 'Handcraft',
        description: 'Setiap produk dibuat dengan tangan oleh pengrajin terampil, memastikan kualitas yang luar biasa.',
      },
    ],
  },
  {
    title: 'Desain',
    info: [
      {
        title: 'Kesempurnaan Setiap Detail',
        description: 'Dirancang dengan teliti untuk memastikan setiap detail mencerminkan keindahan dan kualitas produk.',
      },
    ],
  },
];

import Avatar from '../../components/Avatar2'
import Circles from '../../components/Circles'
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from "react-countup";

const About = () => {
  const [index,setIndex] = useState(0);

  return (
  <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles/>
    {/* Avatar img  */}
    <motion.div 
    variants={fadeIn('right',0.2)}
    initial='hidden'
    animate='show'
    exit='hidden'
    className='hidden xl:flex absolute bottom-0 -left-[400px] -top-3'>
      <Avatar />
    </motion.div>
    <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
      <div className='flex-1 flex flex-col justify-center'>
      <h2 className='h2'>Pilihan Terbaik dari Kalimantan</h2>
      <p className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>Dibuat dengan keahlian tangan terbaik untuk pengalaman yang istimewa.</p>

        {/* counter hitungan  */}
        <div>
            <div className='flex flex-1 xl:gap-x-4'>
              {/* experience  */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0' >
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2' >
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                Tahun Berkarya
                </div>    
              </div>

              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0' >
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2' >
                  <CountUp start={0} end={15} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Unit Terjual
                </div>    
              </div>

              
            </div>
        </div>
      </div>
      {/* info  */}
      <div className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:max-8 mb-4 mt-8'>
            {dataProduk.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className='bg-pink-400/10 py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {dataProduk[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className='flex-1 flex flex-col max-w-[400px] gap-y-2 text-white/60'>
                <div className='font-bold mb-1'>{item.title}</div>
                <div className='font-light'>{item.description}</div>
              </div>
            ))}
          </div>
        </div>
    </div>
  </div>
  )
};

export default About;
