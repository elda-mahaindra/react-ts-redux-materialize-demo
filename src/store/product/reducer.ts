// ---------------------------------------------- modules import
import {
  IProductState,
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

// ---------------------------------------------- initialize the state
const initialState: IProductState = {
  products: [],
  loading: false,
  error: null
};

// ---------------------------------------------- the reducer
const productReducer = (
  state = initialState,
  action: ProductAction
): IProductState => {
  switch (action.type) {
    case POPULATE_PRODUCTS_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case POPULATE_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.payload.products,
        loading: false,
        error: null
      };
    }
    case POPULATE_PRODUCTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    case ADD_PRODUCT_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case ADD_PRODUCT_SUCCESS: {
      return {
        ...state,
        products: [...state.products, action.payload.product],
        loading: false,
        error: null
      };
    }
    case ADD_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    case UPDATE_PRODUCT_BEGIN: {
      return state;
    }
    case UPDATE_PRODUCT_SUCCESS: {
      return state;
    }
    case UPDATE_PRODUCT_ERROR: {
      return state;
    }
    case DELETE_PRODUCT_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case DELETE_PRODUCT_SUCCESS: {
      return {
        ...state,
        products: state.products.filter(
          product => product.id !== action.payload.productId
        ),
        loading: false,
        error: null
      };
    }
    case DELETE_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    default:
      return state;
  }
};

export default productReducer;
