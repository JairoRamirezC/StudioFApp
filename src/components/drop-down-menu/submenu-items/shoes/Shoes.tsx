import { itemsRightShoes } from "../../../../common/utils/NewItemsRightInfo"
import { SubmenusProps } from "../../../../common/utils/types"
import SubmenuItemsRight from "../submenu-items-right/SubmenuItemsRight"

const Shoes = ({handleMouseLeave}:SubmenusProps) => {
  return (
    <div onMouseLeave={handleMouseLeave} className='submenu__container'>
      <div className='submenu__container__new__left'>
        <h4>ZAPATOS</h4>
        <div className='submenu__container__new__left--links'>
          <a href='https://www.studiof.com.co/zapatos?O=OrderByReleaseDateDESC'>Ver todo</a>
          <a href='https://www.studiof.com.co/zapatos/botas?O=OrderByReleaseDateDESC'>Botas</a>
          <a href='https://www.studiof.com.co/zapatos/sandalias?O=OrderByReleaseDateDESC'>Sandalias</a>
          <a href='https://www.studiof.com.co/zapatos/tenis?O=OrderByReleaseDateDESC'>Tenis</a>
          <a href='https://www.studiof.com.co/zapatos/zapatos-cerrados?O=OrderByReleaseDateDESC'>Zapatos cerrados</a>
        </div>
      </div>
      <SubmenuItemsRight title='CATEGORIAS DESTACADAS' imageInfo={itemsRightShoes} />
    </div>
  )
}

export default Shoes