import { createContext, useEffect, useReducer } from "react";
import { filterReducer } from "../REDUCERS/filterReducer";
import { mockData } from "../API/mockData";

const FilterContext = createContext();

const initialState={
    isLoading:false,
    isError:false,
    all_products: [],
    filter_products: [],
    total_products: null,
    grid_view: true,
    sorting_val: "",
    filter:{
        category:"All",
        color:"All",
        minPrice: 0,
        maxPrice: 0,
        price: 0,
    }

}

export const FilterProvider=({children})=>{

    const [state, dispatch] = useReducer(filterReducer, initialState);
    
    const setLoading=(value)=>{
        console.log("inside setLoading", value);
        dispatch({type:"SET_LOADING", payload:value})     
    }
    
    const setError=()=>{
        console.log("inside setError");
        dispatch({type:"SET_ERROR"})     
    }
    
    const setProducts=()=>{
        console.log("inside setProducts", mockData);
        const products=mockData;
        dispatch({type:"SET_PRODUCTS", payload:products})     
    }

    useEffect(()=>{
        console.log("inside useEffect first ");
        setLoading(true);
        setTimeout(() => {
            console.log("Fetching products...")
            setProducts();
            setLoading(false);
        }, 2000);
    }, [state.all_products]);

    // sorting function
    const handleSorting = (e) => {
        console.log(e.target.value);
        dispatch({ type: "SORTING_DATA", payload: e.target.value })
    }

    return(
        <FilterContext.Provider value={{...state,
         handleSorting, setError, setLoading, setProducts}}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContext;