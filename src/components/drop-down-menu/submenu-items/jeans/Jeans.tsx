import { useState } from "react"
import { SubmenusProps } from "../../../../common/utils/types"

interface JeansProps {
  srcImage: string;
  href: string;
  nameItem: string;
  titleItem: string;
}

const Jeans = ({handleMouseLeave}:SubmenusProps) => {

  const [isHoverElement1, setIsHoverElement1] = useState<boolean>(false);
  const [isHoverElement2, setIsHoverElement2] = useState<boolean>(false);
  const [isHoverElement3, setIsHoverElement3] = useState<boolean>(false);
  const [isHoverElement4, setIsHoverElement4] = useState<boolean>(false);

  return (
    <div onMouseLeave={handleMouseLeave} className='submenu__container'>
      <div className='submenu__container__new__left'>
        <h4>JEANS</h4>
        <div className='submenu__container__new__left--links'>
          <a href='https://www.studiof.com.co/jeans?O=OrderByReleaseDateDESC'>Ver todo</a>
          <a href='https://www.studiof.com.co/jeans/bota-campana?O=OrderByReleaseDateDESC'>Bota campana</a>
          <a href='https://www.studiof.com.co/jeans/bota-recta?O=OrderByReleaseDateDESC'>Bota recta</a>
          <a href='https://www.studiof.com.co/jeans/skinny?O=OrderByReleaseDateDESC'>Skinny</a>
          <a href='https://www.studiof.com.co/jeans/palazzo?O=OrderByReleaseDateDESC'>Palazzo</a>
          <a href='https://www.studiof.com.co/jeans/ultra-slim-fit?O=OrderByReleaseDateDESC'>Ultra slim fit</a>
          <a href='https://www.studiof.com.co/jeans/jeggings?O=OrderByReleaseDateDESC'>Jeggings</a>
          <a href='https://www.studiof.com.co/jeans/cropped?O=OrderByReleaseDateDESC'>Cropped</a>
          <a href='https://www.studiof.com.co/jeans/boyfriend?O=OrderByReleaseDateDESC'>Boyfriend</a>
        </div>
      </div>
      {/* <SubmenuItemsRight title='NUEVAS COLECCIONES' imageInfo={itemsRight} /> */}

      <div className='submenu__container__new__right'>
        <h4>BASIC JEANS</h4>
        <div className='submenu__container__new__right__items'>

          <div className='submenu__container__new__right__section-item'>
            <img 
              src='https://studiofco.vteximg.com.br/arquivos/MMCat-Jeans-Taylor-060720.jpg?v=637296638365470000' 
              alt=""
              onMouseEnter={() => setIsHoverElement1(true)}
            />
            {
              isHoverElement1 &&
              <a 
              href='https://www.studiof.com.co/basic-jeans/2024/taylor/producto' className='right__section-item__hover-container--active'
              onMouseLeave={() => setIsHoverElement1(false)}>
                <div className='right__section-item__hover-container--active--content'>
                  <p>BASICJEANS</p>
                  <p>TAYLOR</p>
                  <p className='right__section-item__hover-container--active--content--btn-buy'>COMPRAR</p>
                </div>
              </a>
            }
          </div>

          <div className='submenu__container__new__right__section-item'>
            <img 
              src='https://studiofco.vteximg.com.br/arquivos/MMCat-Jeans-Bardot-060720.jpg?v=637296638356970000' 
              alt=""
              onMouseEnter={() => setIsHoverElement2(true)}
            />
            {
              isHoverElement2 &&
              <a 
              href='https://www.studiof.com.co/basic-jeans/2024/taylor/producto' className='right__section-item__hover-container--active'
              onMouseLeave={() => setIsHoverElement2(false)}>
                <div className='right__section-item__hover-container--active--content'>
                  <p>BASICJEANS</p>
                  <p>BARDOT</p>
                  <p className='right__section-item__hover-container--active--content--btn-buy'>COMPRAR</p>
                </div>
              </a>
            }
          </div>

          <div className='submenu__container__new__right__section-item'>
            <img 
              src='https://studiofco.vteximg.com.br/arquivos/MMCat-Jeans-Crawford-060720.jpg?v=637296638345600000' 
              alt=""
              onMouseEnter={() => setIsHoverElement3(true)}
            />
            {
              isHoverElement3 &&
              <a 
              href='https://www.studiof.com.co/basic-jeans/2024/taylor/producto' className='right__section-item__hover-container--active'
              onMouseLeave={() => setIsHoverElement3(false)}>
                <div className='right__section-item__hover-container--active--content'>
                  <p>BASICJEANS</p>
                  <p>CRAWFORD</p>
                  <p className='right__section-item__hover-container--active--content--btn-buy'>COMPRAR</p>
                </div>
              </a>
            }
          </div>

          <div className='submenu__container__new__right__section-item'>
            <img 
              src='https://studiofco.vteximg.com.br/arquivos/MMCat-Jeans-Loren-060720.jpg?v=637296638336370000' 
              alt=""
              onMouseEnter={() => setIsHoverElement4(true)}
            />
            {
              isHoverElement4 &&
              <a 
              href='https://www.studiof.com.co/basic-jeans/2024/taylor/producto' className='right__section-item__hover-container--active'
              onMouseLeave={() => setIsHoverElement4(false)}>
                <div className='right__section-item__hover-container--active--content'>
                  <p>BASICJEANS</p>
                  <p>VER TODO</p>
                  <p className='right__section-item__hover-container--active--content--btn-buy'>COMPRAR</p>
                </div>
              </a>
            }
          </div>

        </div>
      </div>

    </div>
  )
}

export default Jeans