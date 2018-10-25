const initialState = {
    product_id:0,
     end_date:0,
      location:'',
       target_qty:0,
        sold_qty:0
    }

const formData = (state =initialState, action) =>{
    switch(action.type){
        case 'UPDATED_DATA':
            return action.formData
        case 'RESET_CAMPAIGN_FORM':
            return initialState
        default:
            return state
    }
}
export default formData;