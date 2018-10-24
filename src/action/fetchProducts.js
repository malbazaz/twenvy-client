export function fetchProducts() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_PRODUCTS_REQUEST' });
      return   fetch(`http://localhost:3001/api/products`)
      .then(response => response.json())
        .then(products => dispatch({ type: 'ADD_PRODUCTS', products }));
    };
  }
