import imageHero from '../../assets/images/hues-of-paradise-treasure-banner-desk.jpg';
import imageHeroMobile from '../../assets/images/hues-of-paradise-treasure-banner-mob.jpg';
import textMainInfo from '../../assets/images/hues-of-paradise-treasure-kv.png';
import useIsMobile from '../../hooks/useIsMobile';

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <div className="hero__container">
      <img src={!isMobile ? imageHero : imageHeroMobile} alt="" className='hero__container--mainimage' />
      <div className='hero__container__info'>
        <img src={textMainInfo} alt="titulo treasure" />
        <p>
          Entre el blanco de los velos y el azul del cielo, comienza el juego que celebra <b>el amor</b> más grande que tenemos.
        </p>
        <p>
          Acompaña a <b>mamá</b> a descubrir todos los tesoros que STUDIO F ha escondido para ella, en esta excitante <b>Búsqueda del Tesoro.</b>
        </p>
        <p className='hero__container__info--btnexplore'>
          EXPLORAR
        </p>
      </div>
    </div>
  )
}

export default HeroSection