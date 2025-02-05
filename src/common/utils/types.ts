import { ReactNode } from "react";

export interface AppContextProviderProps {
  children: ReactNode;
}

export interface InitialState {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

export interface SubmenusProps {
  handleMouseLeave:() => void
}

export interface SubItems {
  id: string;
  name: string;
}

export interface imageInfo {
  urlImage: string;
  src: string;
  nameImage: string;
}

export interface SubmenuItemsRightProps {
  title: string;
  imageInfo: imageInfo[];
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  isNew: boolean;
}

export interface ShowcaseProductProps {
  products: Product[];
}