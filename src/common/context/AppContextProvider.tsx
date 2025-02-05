import { createContext, useState } from 'react'
import { AppContextProviderProps, InitialState, Product } from '../utils/types';


const initialState:InitialState = {
  cart: [],
  setCart: () => {},
}

export const AppContext = createContext(initialState);

const AppContextProvider = ({children}:AppContextProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <AppContext.Provider value={{
      cart, 
      setCart
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider