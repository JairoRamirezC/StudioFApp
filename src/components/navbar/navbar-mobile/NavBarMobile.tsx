import { useState } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText, Badge, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Product } from '../../../common/utils/types';


interface NavBarMobileProps {
  cart: Product[];
}

const NavBarMobile = ({ cart }:NavBarMobileProps):JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleMenu = ():void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = ():void => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="mobile-navbar">
      <div className="mobile-navbar__search">
        <TextField
          variant="standard"
          placeholder="BUSCAR"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{ disableUnderline: true }}
          className="mobile-navbar__search-input"
        />
        <IconButton className="mobile-navbar__icon">
          <SearchIcon />
        </IconButton>
      </div>

      <div className="mobile-navbar__main">
        <IconButton className="mobile-navbar__icon" onClick={toggleMenu}>
          <MenuIcon />
          <span className="mobile-navbar__menu-label">Menu</span>
        </IconButton>

        <div className="mobile-navbar__logo">STUDIO F</div>

        <IconButton className="mobile-navbar__icon">
          <AccountCircleIcon />
        </IconButton>

        <IconButton className="mobile-navbar__icon">
          <LocalShippingIcon />
        </IconButton>

        <IconButton className="mobile-navbar__icon" onClick={toggleCart}>
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </div>

      <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu} PaperProps={{ style: { width: 425 } }}>
        <div className="mobile-navbar__drawer">
          <IconButton className="mobile-navbar__close-button" onClick={toggleMenu}>
            <CloseIcon />
          </IconButton>
          <List>
            {['MUJER', 'HOMBRE', 'NUEVO', 'JEANS', 'ROPA', 'ZAPATOS', 'ACCESORIOS', 'BÁSICOS', 'COLECCIONES', 'FIT FINDER', 'TEN CARD'].map((text, index) => (
              <ListItem key={index}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>

      <Drawer anchor="right" open={isCartOpen} onClose={toggleCart}>
        <div className="mobile-navbar__drawer">
          <IconButton className="mobile-navbar__close-button" onClick={toggleCart}>
            <CloseIcon />
          </IconButton>
          <h2>Carrito de Compras</h2>
          <List>
            {cart.length === 0 ? (
              <ListItem>
                <ListItemText primary="No hay productos en el carrito." />
              </ListItem>
            ) : (
              cart.map((product) => (
                <ListItem key={product.id}>
                  <ListItemText primary={product.name} secondary={`$${product.price.toLocaleString('es-CO')}`} />
                </ListItem>
              ))
            )}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default NavBarMobile;