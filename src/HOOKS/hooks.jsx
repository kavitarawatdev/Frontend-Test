import { useContext } from "react"
import FilterContext from "../CONTEXT/FilterContext"

export const useFilterContext=()=>{
    return useContext(FilterContext)
}