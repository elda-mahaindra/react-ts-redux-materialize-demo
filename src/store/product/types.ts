export interface IProduct {
  id: number;
  name: string;
  price: number;
  unitCost: number;
}

// ---------------------------------------------- state interface
export interface IProductState {
  products: IProduct[];
  loading: boolean;
  error: string | null;
}

// ---------------------------------------------- action type constants*
export const POPULATE_PRODUCTS_BEGIN = "POPULATE_PRODUCTS_BEGIN";
export const POPULATE_PRODUCTS_SUCCESS = "POPULATE_PRODUCTS_SUCCESS";
export const POPULATE_PRODUCTS_ERROR = "POPULATE_PRODUCTS_ERROR";
export const ADD_PRODUCT_BEGIN = "ADD_PRODUCT_BEGIN";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_ERROR = "ADD_PRODUCT_ERROR";
export const UPDATE_PRODUCT_BEGIN = "UPDATE_PRODUCT_BEGIN";
export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_ERROR = "UPDATE_PRODUCT_ERROR";
export const DELETE_PRODUCT_BEGIN = "DELETE_PRODUCT_BEGIN";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_ERROR = "DELETE_PRODUCT_ERROR";

// ---------------------------------------------- action interfaces
interface IPopulateProductsBegin {
  type: typeof POPULATE_PRODUCTS_BEGIN;
}

interface IPopulateProductsSuccess {
  type: typeof POPULATE_PRODUCTS_SUCCESS;
  payload: {
    products: IProduct[];
  };
}

interface IPopulateProductsError {
  type: typeof POPULATE_PRODUCTS_ERROR;
  payload: {
    error: string;
  };
}

interface IAddProductBegin {
  type: typeof ADD_PRODUCT_BEGIN;
}

interface IAddProductSuccess {
  type: typeof ADD_PRODUCT_SUCCESS;
  payload: {
    product: IProduct;
  };
}

interface IAddProductError {
  type: typeof ADD_PRODUCT_ERROR;
  payload: {
    error: string;
  };
}

interface IUpdateProductBegin {
  type: typeof UPDATE_PRODUCT_BEGIN;
}

interface IUpdateProductSuccess {
  type: typeof UPDATE_PRODUCT_SUCCESS;
  payload: {
    product: IProduct;
  };
}

interface IUpdateProductError {
  type: typeof UPDATE_PRODUCT_ERROR;
  payload: {
    error: string;
  };
}

interface IDeleteProductBegin {
  type: typeof DELETE_PRODUCT_BEGIN;
}

interface IDeleteProductSuccess {
  type: typeof DELETE_PRODUCT_SUCCESS;
  payload: {
    productId: number;
  };
}

interface IDeleteProductErr {
  type: typeof DELETE_PRODUCT_ERROR;
  payload: {
    error: string;
  };
}

// ---------------------------------------------- exported action type**
export type ProductAction =
  | IPopulateProductsBegin
  | IPopulateProductsSuccess
  | IPopulateProductsError
  | IAddProductBegin
  | IAddProductSuccess
  | IAddProductError
  | IUpdateProductBegin
  | IUpdateProductSuccess
  | IUpdateProductError
  | IDeleteProductBegin
  | IDeleteProductSuccess
  | IDeleteProductErr;

// ---- * action type constants were created so they won't be mispelled later.
// --- ** notice, the type which is exported out was actually the union of the interfaces
