// ---------------------------------------------- modules import
import { IProduct } from "../../store/product/types";

export interface IAddProduct {
  history: string[];
  token: string | null;
  loading: boolean;
  error: string | null;
  addProduct: (product: IProduct, token: string, history: string[]) => void;
}
