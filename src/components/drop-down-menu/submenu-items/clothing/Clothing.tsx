import { itemsRight } from "../../../../common/utils/NewItemsRightInfo"
import { SubmenusProps } from "../../../../common/utils/types"
import SubmenuItemsRight from "../submenu-items-right/SubmenuItemsRight"


const clothingItemsRight = itemsRight?.slice(1);

const Clothing = ({handleMouseLeave}:SubmenusProps) => {
  return (
    <div onMouseLeave={handleMouseLeave} className='submenu__container'>
      <div className='submenu__container__new__left'>
        <h4>ROPA</h4>
        <div className='submenu__container__new__left--links'>
          <a href='https://www.studiof.com.co/nuevo'>Ver todo</a>
          <a href='https://www.studiof.com.co/ropa/camisas-y-blusas?O=OrderByReleaseDateDESC'>Camisas y blusas</a>
          <a href='https://www.studiof.com.co/jeans?O=OrderByReleaseDateDESC'>Bodies</a>
          <a href='https://www.studiof.com.co/ropa/chaquetas?O=OrderByReleaseDateDESC'>Blazers</a>
          <a href='https://www.studiof.com.co/ropa/pantalones-y-leggings?O=OrderByReleaseDateDESC'>Chaquetas</a>
          <a href='https://www.studiof.com.co/zapatos?O=OrderByReleaseDateDESC'>Buzos</a>
          <a href='https://www.studiof.com.co/accesorios/bolsos-y-carteras?O=OrderByReleaseDateDESC'>Ponchos y sobretodos</a>
          <a href='https://www.studiof.com.co/accesorios/bolsos-y-carteras?O=OrderByReleaseDateDESC'>Chalecos</a>
          <a href='https://www.studiof.com.co/accesorios/bolsos-y-carteras?O=OrderByReleaseDateDESC'>Pantalones y leggings</a>
          <a href='https://www.studiof.com.co/accesorios/bolsos-y-carteras?O=OrderByReleaseDateDESC'>Short</a>
          <a href='https://www.studiof.com.co/accesorios/bolsos-y-carteras?O=OrderByReleaseDateDESC'>Vestidos</a>
          <a href='https://www.studiof.com.co/accesorios/bolsos-y-carteras?O=OrderByReleaseDateDESC'>Enterizos y conjuntos</a>
          <a href='https://www.studiof.com.co/accesorios/bolsos-y-carteras?O=OrderByReleaseDateDESC'>Faldas</a>
          <a href='https://www.studiof.com.co/accesorios/bolsos-y-carteras?O=OrderByReleaseDateDESC'>Básicos</a>
          <a href='https://www.studiof.com.co/accesorios/bolsos-y-carteras?O=OrderByReleaseDateDESC'>Abrigos y gabanes</a>
          <a href='https://www.studiof.com.co/accesorios/bolsos-y-carteras?O=OrderByReleaseDateDESC'>Vestidos de baño</a>
        </div>
      </div>
      <SubmenuItemsRight title='NUEVAS COLECCIONES' imageInfo={clothingItemsRight} />

      {/* <div className='submenu__container__new__right'>
        <h4>NUEVAS COLECCIONES</h4>
        <div className='submenu__container__new__right__items'>
          <div className='submenu__container__new__right__items--item'>
            <a href="https://www.studiof.com.co/nuevo">
              <img src={nuevoImage} alt='Imagen Nuevo' />
              <p>Nuevo</p>
            </a>
          </div>
          <div className='submenu__container__new__right__items--item'>
            <a href="https://www.studiof.com.co/ropa/camisas-y-blusas?O=OrderByReleaseDateDESC">
              <img src={blusasImage} alt='Imagen Blusas' />
              <p>Blusas</p>
            </a>
          </div>
          <div className='submenu__container__new__right__items--item'>
            <a href="https://www.studiof.com.co/ropa/body?O=OrderByReleaseDateDESC">
              <img src={bodiesImage} alt='Imagen Bodies' />
              <p>Bodies</p>
            </a>
          </div>
          <div className='submenu__container__new__right__items--item'>
            <a href="https://www.studiof.com.co/ropa/vestidos?O=OrderByReleaseDateDESC">
              <img src={vestidosImage} alt='Imagen Vestidos' />
              <p>Vestidos</p>
            </a>
          </div>
          <div className='submenu__container__new__right__items--item'>
            <a href="https://www.studiof.com.co/ropa/pantalones-y-leggings?O=OrderByReleaseDateDESC">
              <img src={pantalonesImage} alt='Imagen Pantalones' />
              <p>Pantalones</p>
            </a>
          </div>
        </div>
      </div> */}

    </div>
  )
}

export default Clothing