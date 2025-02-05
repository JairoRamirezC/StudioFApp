import { SubmenusProps } from "../../../../common/utils/types"

const Man = ({handleMouseLeave}:SubmenusProps):JSX.Element => {
  return (
    <div onMouseLeave={handleMouseLeave} className='submenu__container'>
      <div className='submenu__container__new__left'>
        <h4>MAN</h4>
        <div className='submenu__container__new__left--links'>
          <a href='https://www.studiof.com.co/nuevo'>Ver todo</a>
          <a href='https://www.studiof.com.co/ropa/camisas-y-blusas?O=OrderByReleaseDateDESC'>Camisas y blusas</a>
          <a href='https://www.studiof.com.co/jeans?O=OrderByReleaseDateDESC'>Jeans</a>
          <a href='https://www.studiof.com.co/ropa/chaquetas?O=OrderByReleaseDateDESC'>Chaquetas</a>
          <a href='https://www.studiof.com.co/ropa/pantalones-y-leggings?O=OrderByReleaseDateDESC'>Pantalones e inferiores</a>
          <a href='https://www.studiof.com.co/zapatos?O=OrderByReleaseDateDESC'>Zapatos</a>
          <a href='https://www.studiof.com.co/accesorios/bolsos-y-carteras?O=OrderByReleaseDateDESC'>Bolsos</a>
        </div>
      </div>
    </div>
  )
}

export default Man