export const productReducer=(state, action)=>{
    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading:action.payload,
            }
        case "SET_ERROR":
            return{
                ...state,
                isError:true,
            }
        case "SET_PRODUCTS":
            return{
                ...state,
                products:action.payload,
            }
        default:
            return state;
    }
}