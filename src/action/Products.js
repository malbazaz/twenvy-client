export const fetchProducts = () =>{
  return (dispatch) => {
     return fetch('http://localhost:3001/api/products')
     .then(response => response.json())
     .then(products =>dispatch(setProducts(products)) )
     .catch(error => console.log(error))
   }
 }

export const setProducts = products =>{
   return {
     type: 'GET_PRODUCTS_SUCCESS', products
   }
 }