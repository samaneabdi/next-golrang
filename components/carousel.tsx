import Image from "next/image";
import { useState } from "react";

const Carousel = ({ images }: { images:string[] }) =>{

  const [currentImage, setCurrentImage] = useState(0);

  const changeSlide = (index: number) =>{
    setCurrentImage(index);
  }

  return(
    <div className="relative">
      <div className="relative">
        <Image 
          className='rounded-t-lg'
          src={images[currentImage]}
          alt='houseImage'
          height={160}
          width={317}
        />
        <div className="absolute bottom-2 flex justify-center w-full">
          {images.map((_ , index) => (
            <button 
              key={index}
              onClick={() => changeSlide(index)}
              className={`w-2 h-2 mx-0.5 rounded-full ${index === currentImage ? 'bg-white' : 'bg-gray'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel;