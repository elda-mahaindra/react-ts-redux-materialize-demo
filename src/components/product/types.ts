// ---------------------------------------------- modules import
import { IProduct } from "../../store/product/types";

export interface IAddProduct {
  history: string[];
  token: string | null;
  loading: boolean;
  error: string | null;
  addProduct: (product: IProduct, token: string, history: string[]) => void;
}

export interface IProductList {
  products: IProduct[];
}

export interface IProductSummary {
  product: IProduct;
  token: string | null;
  deleteProduct: (id: number, token: string) => void;
}

export interface IUpdateProduct {
  products: IProduct[];
  history: string[];
  match: {
    params: {
      productId: string;
    };
  };
  token: string | null;
  loading: boolean;
  error: string | null;
  updateProduct: (product:IProduct, token:string, history: string[])=>void
}
