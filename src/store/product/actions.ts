// ---------------------------------------------- modules import
import {
  IProduct,
  ProductAction,
  POPULATE_PRODUCTS_BEGIN,
  POPULATE_PRODUCTS_SUCCESS,
  POPULATE_PRODUCTS_ERROR,
  ADD_PRODUCT_BEGIN,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  UPDATE_PRODUCT_BEGIN,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
  DELETE_PRODUCT_BEGIN,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR
} from "./types";

// ---------------------------------------------- the actions
export const populateProductsBegin = (): ProductAction => ({
  type: POPULATE_PRODUCTS_BEGIN
});

export const populateProductsSuccess = (
  products: IProduct[]
): ProductAction => ({
  type: POPULATE_PRODUCTS_SUCCESS,
  payload: {
    products
  }
});

export const populateProductsError = (error: string): ProductAction => ({
  type: POPULATE_PRODUCTS_ERROR,
  payload: {
    error
  }
});

export const addProductBegin = (): ProductAction => ({
  type: ADD_PRODUCT_BEGIN
});

export const addProductSuccess = (product: IProduct): ProductAction => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: {
    product
  }
});

export const addProductError = (error: string): ProductAction => ({
  type: ADD_PRODUCT_ERROR,
  payload: {
    error
  }
});

export const updateProductBegin = (): ProductAction => ({
  type: UPDATE_PRODUCT_BEGIN
});

export const updateProductSuccess = (product: IProduct): ProductAction => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload: {
    product
  }
});

export const updateProductError = (error: string): ProductAction => ({
  type: UPDATE_PRODUCT_ERROR,
  payload: {
    error
  }
});

export const deleteProductBegin = (): ProductAction => ({
  type: DELETE_PRODUCT_BEGIN
});

export const deleteProductSuccess = (productId: number): ProductAction => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: {
    productId
  }
});

export const deleteProductError = (error: string): ProductAction => ({
  type: DELETE_PRODUCT_ERROR,
  payload: {
    error
  }
});
