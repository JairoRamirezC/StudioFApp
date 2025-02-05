// import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from "@mui/icons-material/Close";
import { useContext, useState } from 'react';
import logo from '../../assets/Images/logo.png';
import { IconButton, Drawer, List, ListItem, ListItemText, Badge, TextField, Box, Toolbar, AppBar, Typography } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TopBannerSlider from "../top-banner-slider/TopBannerSlider";
import DropDownMenu from "../drop-down-menu/DropDownMenu";
import { AppContext } from "../../common/context/AppContextProvider";
import useIsMobile from "../../hooks/useIsMobile";
import NavBarMobile from "./navbar-mobile/NavBarMobile";



const NavBar = ():JSX.Element => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // const [cart] = useState<Product[]>([
  //   { id: 1, name: 'Producto 1', price: 279900 },
  //   { id: 2, name: 'Producto 2', price: 199900 }
  // ]);
  const {cart} = useContext(AppContext);

  const toggleMenu = ():void => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      {
        !isMobile ?
          <AppBar className="navbar">
            <TopBannerSlider />
            <Toolbar className="navbar__container">
              <div className="navbar__container__left">
                <button onClick={toggleMenu} className="navbar__menu-button">
                  {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>

                <Box className="navbar__links">
                  <Typography variant="h6" className="navbar__logo">
                    <img src={logo} alt="Studio F Colombia - Tienda Online de Ropa para Mujer" width='190px' />
                  </Typography>
                  <p className="navbar__links--categories">
                    <a href="#">MUJER</a> | <a href="#">HOMBRE</a>
                  </p>
                </Box>
              </div>

              <div className="navbar-cart-section">
                <div className="navbar-cart-section__search">
                  <TextField
                    variant="standard"
                    placeholder="BUSCAR"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    InputProps={{ disableUnderline: true }}
                    className="navbar-cart-section__search-input"
                  />
                  <IconButton className="navbar-cart-section__icon">
                    <SearchIcon sx={{width:'18px', height:'18px'}} />
                  </IconButton>
                </div>

                <IconButton className="navbar-cart-section__icon">
                  <AccountCircleIcon sx={{width:'28px', height:'28px'}} />
                </IconButton>

                <IconButton className="navbar-cart-section__icon">
                  <LocalShippingIcon sx={{width:'28px', height:'28px'}} />
                </IconButton>

                <IconButton className="navbar-cart-section__icon" onClick={toggleCart}>
                  <Badge badgeContent={cart.length} color="error">
                    <ShoppingCartIcon sx={{width:'28px', height:'28px'}} />
                  </Badge>
                  <span className="navbar-cart-section__cart-label">Carrito</span>
                </IconButton>

                <Drawer 
                  anchor="right" 
                  open={isCartOpen} 
                  onClose={toggleCart}
                  sx={{border: '2px solid red'}}
                >
                  <div className="navbar-cart-section__drawer">
                    <h1>Carrito de Compras</h1>
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

            </Toolbar>
            {isOpen && <DropDownMenu />}
          </AppBar>
        : 
          <NavBarMobile cart={cart} />
      }
    </>
  )
}

export default NavBar