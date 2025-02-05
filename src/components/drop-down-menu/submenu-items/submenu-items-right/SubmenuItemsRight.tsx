import { imageInfo, SubmenuItemsRightProps } from "../../../../common/utils/types"

const SubmenuItemsRight = ({title, imageInfo}:SubmenuItemsRightProps):JSX.Element => {

  return (
    <div className='submenu__container__new__right'>
      <h4>{title}</h4>
      <div className='submenu__container__new__right__items'>
        {
          imageInfo.map(({urlImage, src, nameImage}:imageInfo, index:number) => (
            <div key={index} className='submenu__container__new__right__items--item'>
              <a href={urlImage}>
                <img src={src} alt={nameImage} />
                <p>{nameImage}</p>
              </a>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SubmenuItemsRight