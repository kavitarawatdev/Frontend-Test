import { Children, createContext, useEffect, useReducer } from "react";
import { productReducer } from "../REDUCERS/productReducer";
import { mockData } from "../API/mockData";

const ProductContext =createContext();

const initialState = {
    products: [],
    isLoading:false,
    isError:false,
};

export const ProductProvider=({children})=>{
    const [state, dispatch] = useReducer(productReducer, initialState);

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
        console.log("inside useEffect of ProductContext");
        setLoading(true);
        setTimeout(() => {
            console.log("Fetching products...");
            setLoading(false);
            setProducts();
        }, 2000);
    }, [state.products]);

    return(
        <ProductContext.Provider value={{state, setError, setLoading, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;