import { useContext } from "react";
import { Product, ShowcaseProductProps } from "../../../common/utils/types";
import { AppContext } from "../../../common/context/AppContextProvider";


const ShowcaseProduct = ({ products }:ShowcaseProductProps):JSX.Element => {
  const {cart, setCart} = useContext(AppContext);

  const handleToggleCart = (product: Product) => {
    const isInMiniCart = cart.some((item:Product) => item?.id === product?.id);

    if (isInMiniCart) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    } else {
      setCart([...cart, product]);
    }
  };

  const isProductInCart = (productId: number) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <div className="product-showcase">
      {products.map((product:Product) => (
        <div key={product.id} className="product-showcase__item">
          <div className="product-showcase__image-container">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-showcase__image"
            />
            {product.isNew && <span className="product-showcase__badge">NUEVO</span>}
          </div>
          <div className="product-showcase__info">
            <h3 className="product-showcase__name">{product.name}</h3>
            <p className="product-showcase__price">${product.price.toLocaleString('es-CO')}</p>
            <button
              className={`product-showcase__add-to-cart ${
                isProductInCart(product?.id) ? 'product-showcase__add-to-cart--added' : ''
              }`}
              onClick={() => handleToggleCart(product)}
            >
              {isProductInCart(product.id) ? 'Agregado' : 'Agregar al carrito'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowcaseProduct;