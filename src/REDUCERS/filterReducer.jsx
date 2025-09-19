export const filterReducer=(state, action)=>{
    switch (action.type) {
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
                limit: 6,
                startIdx: 0,
                all_products: action.payload,
                filter_products: action.payload,
                total_products: action.payload.length
            }
        case `SORTING_DATA`:{
            let tempFilterProducts = [...state.filter_products];
            let tempSortedData;
            switch (action.payload) {
                case "A-Z":
                    tempSortedData = tempFilterProducts.sort((a, b) =>
                        a.name.localeCompare(b.name)
                    );
                    break;
                case "Z-A":
                    tempSortedData = tempFilterProducts
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .reverse();
                    break;
                case "price-lowest":
                    tempSortedData = tempFilterProducts.sort((a, b) => a.price - b.price);
                    break;
                case "price-highest":
                    tempSortedData = tempFilterProducts.sort((a, b) => b.price - a.price);
                    break;
                case "popularity":
                    tempSortedData = tempFilterProducts.sort((a, b) => b.ratingCount - a.ratingCount);
                    break;
                default:
                    tempSortedData = tempFilterProducts;
                    break;
            }
            return {
                ...state,
                sorting_val: action.payload,
                filter_products: tempSortedData,
            };
        
        }
        case "SET_NAVIGATION":{
            console.log(state.startIdx, state.limit, state.total_products);
            let start = Math.floor((state.startIdx+1)/6) < action.payload ? 
                        state.limit+1: Math.floor((state.startIdx+1)/6) > action.payload ?
                        state.startIdx-6:state.startIdx;
            let end = state.total_products < start+5 ? state.total_products : start+5;

            console.log(start, end);
            return{
                ...state,
                startIdx:start,
                limit:end,
            }
        }
        
        case "SET_FILTER_PRODUCTS":{
            let maxPrice= Math.max(...action.payload.map((product) => product.price));
            let minPrice = Math.min(...action.payload.map((product) => product.price));
             return {
                ...state,
                all_products: [...action.payload],
                filter_products: [...action.payload],
                filter: {
                    minPrice: minPrice,
                    maxPrice: maxPrice+40,
                    price: maxPrice,
                },
            };
        }
    
        default:
            break;
    }
}