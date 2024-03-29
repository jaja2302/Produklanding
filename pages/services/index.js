import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb"
import Circles from '../../components/Circles'
import { HiArrowRight } from "react-icons/hi2";

const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center mt-8'>
      <Circles/>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8 items-center'> {/* Added items-center */}
          {/* text  */}
          <div className='text-center flex flex-col lg:text-left  xl:w-[30vw]'> {/* Rearranged classes */}
            <h2 className='h2 xl:mt-8'> 
              Lihat Produk Kami <span className='text-accent'>di Sini</span>
            </h2>
            <p className='max-w-[200px] mx-auto lg:mx-0'>
              Temukan beragam produk berkualitas tinggi dari koleksi kami.
            </p>
          </div>
          {/* slider  */}
          <ServiceSlider />
        </div>
      </div>
      
      <Bulb />
    </div>
  );
};

export default Services;
