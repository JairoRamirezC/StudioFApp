import { useEffect, useState } from 'react';
import banner1 from '../../assets/Images/BANNER-TOP-31012025-LG.png';
import banner2 from '../../assets/Images/BANNER-TOP-ENVIO-GRATIS-250K-202-LG.png';
import banner3 from '../../assets/Images/banner-top-news-enero-2025-lg.png';


interface Slide {
  src: string;
  alt: string;
}

const slidesData: Slide[] = [
  { src: banner1, alt: 'Imagen 1' },
  { src: banner2, alt: 'Imagen 2' },
  { src: banner3, alt: 'Imagen 3' },
];

const TopBannerSlider = ():JSX.Element => {

  const [currentImage, setCurrentImage] = useState<number>(0);

  // const nextSlide = () => {
  //   return (
  //     <img src={banner1} alt={`Imagen ${currentImage}`} />
  //   )
  // }

  useEffect(() => {
    const interval = setInterval(() => {
      // setCurrentImage(currentImage === 2 ? 0 : currentImage + 1);
      setCurrentImage((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 5000);
  
    return () => {
      interval && clearInterval(interval);
    }
  }, []);
  


  return (
    <div className="topBannerSlider__container">
      {/* <div className="slide active">
        {nextSlide()}
      </div> */}

      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentImage ? 'active' : ''}`}
        >
          <img src={slide.src} alt={slide.alt} />
        </div>
      ))}
      {/* <div className="slide">
        <img src={banner2} alt="Imagen 2" />
      </div>
      <div className="slide">
        <img src={banner3} alt="Imagen 3" />
      </div> */}
    </div>
  )
}

export default TopBannerSlider