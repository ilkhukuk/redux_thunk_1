// varsayılan değerler
const initialState = {
    products: [],
    isLoading: true,
    isError: false,
  };
  
  export const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return {
          products: action.payload,
          isLoading: false,
          isError: false,
        };
  
      case 'SET_ERROR':
        return { ...state, isLoading: false, isError: true };
  
      default:
        return state;
    }
  };
  