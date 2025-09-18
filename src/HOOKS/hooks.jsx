import { useContext } from "react"
import ProductContext from "../CONTEXT/ProductContext"

export const useProductContext=()=>{
    return useContext(ProductContext)
}