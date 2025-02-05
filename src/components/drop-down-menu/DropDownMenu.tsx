import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import New from './submenu-items/new/New';
import Jeans from './submenu-items/jeans/Jeans';
import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import { SubItems } from '../../common/utils/types';
import Clothing from './submenu-items/clothing/Clothing';
import Shoes from './submenu-items/shoes/Shoes';
import Accessories from './submenu-items/accessories/Accessories';
import Man from './submenu-items/man/Man';


const subItems:SubItems[] = [
  {id: 'new', name: 'NUEVO'},
  {id: 'jeans', name: 'JEANS'},
  {id: 'clothing', name: 'ROPA'},
  {id: 'shoes', name: 'ZAPATOS'},
  {id: 'accessories', name: 'ACCESORIOS'},
  {id: 'basics', name: 'BÁSICOS'},
  {id: 'collections', name: 'COLECCIONES'},
  {id: 'fitfinder', name: 'FIT FINDER'},
  {id: 'tencard', name: 'TEN CARD'},
  {id: 'man', name: 'MAN'},
];

const DropDownMenu = ():JSX.Element => {
  const [idElement, setIdElement] = useState<string>('');

  const hanldeHoverItem:MouseEventHandler<HTMLLIElement> = (event) => {
    const target = event?.target as HTMLElement;
    setIdElement(target?.id);
  }

  const showSubmenu = ():JSX.Element|null => {
    switch (idElement) {
      case 'new':
        return <New handleMouseLeave={handleMouseLeave}/>;
      case 'jeans':
        return <Jeans handleMouseLeave={handleMouseLeave}/>;
      case 'clothing':
        return <Clothing handleMouseLeave={handleMouseLeave} />;
      case 'shoes':
        return <Shoes handleMouseLeave={handleMouseLeave} />;
      case 'accessories':
        return <Accessories handleMouseLeave={handleMouseLeave} />;
      case 'man':
        return <Man handleMouseLeave={handleMouseLeave} />;
      default:
        return null;
    }
  }

  const handleMouseLeave = () => {
    setIdElement('');
  };

  return (
    <>
      <div className='dropDownMenu__container'>
        <ul className='dropDownMenu__container__list'>
          {subItems.map(({id, name}:SubItems, index:number) => (
            <li 
              key={index}
              className={`${index === 0 && 'container__list--new'} dropDownMenu__container__list--item`}
              onMouseEnter={(e) => hanldeHoverItem(e)}>
                <a id={id} href="#">{name} {!['BÁSICOS','COLECCIONES','FIT FINDER','TEN CARD'].includes(name) && <ArrowDropDownIcon id={id}/>}</a>
            </li>
          ))}
        </ul>
      </div>
      {idElement && showSubmenu()}
    </>
  )
}

export default DropDownMenu