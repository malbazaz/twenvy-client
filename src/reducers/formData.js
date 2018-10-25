const formData = (state ={
    product_id:0,
     end_date:0,
      location:'',
       target_qty:0,
        sold_qty:0
    }, action) =>{
    switch(action.type){
        case 'UPDATED_DATA':
            return action.formData
        default:
            return state
    }
}
export default formData;