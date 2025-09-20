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
        case "SET_PRODUCTS":{
            let maxPrice= Math.max(... action.payload.map((product) => product.discountPrice?product.discountPrice:product.price));
            let minPrice = Math.min(...action.payload.map((product) => product.discountPrice?product.discountPrice:product.price));
            
            return{
                ...state,
                limit: 6,
                startIdx: 0,
                all_products: action.payload,
                filter_products: action.payload,
                total_products: action.payload.length,
                filter: {
                    ...state.filter,
                    min_price: minPrice,
                    max_price: maxPrice+20,
                    price_set:maxPrice
                },
            }
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
                    tempSortedData = tempFilterProducts.sort((a, b) => (a.discountPrice?a.discountPrice:a.price) - (b.discountPrice?b.discountPrice:b.price));
                    break;
                case "price-highest":
                    tempSortedData = tempFilterProducts.sort((a, b) => (b.discountPrice?b.discountPrice:b.price) - (a.discountPrice?a.discountPrice:a.price));
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
        case "FILTER_UPDATE":{
            const{name, val}=action.payload
            console.log(name, val);
            return{
                ...state,
                filter:{
                    ...state.filter,
                    [name]:val
                }
            }
        }
        case "UPDATE_FILTER_PRODUCTS":{
            const {category, deals, color, brand, max_price, price_set} = state.filter;
            let tempData=[...state.all_products];
            // console.log(tempData);
            
            if(color!=""){
                tempData = tempData.filter((curr)=>curr.colors.includes(color));
            }
            if(brand!=""){
                tempData = tempData.filter((curr)=>curr.brand==brand);
            }
            if(deals!=""){
                tempData=tempData.filter((currVal)=>currVal.isHot && currVal.brand==deals);
            }
            if(category!=""){
                tempData=tempData.filter((currVal)=>currVal.category===category);
            }
            if(price_set<max_price){
                tempData=tempData.filter((currVal)=>currVal.price<=price_set);
            }
            // console.log(tempData);
            return{
                ...state,
                filter_products:tempData, 
                total_products:tempData.length        
            }
        }
        
        default:
            return state;
    }
}