
import { useState } from "react";
import { Pagination } from "../HELPER/Pagination";
import { useFilterContext} from "../HOOKS/hooks";
import { Loading } from "./Loading";
import { ProductCard } from "./ProductCard";

export const GridView = () => {
    const {filter_products, isLoading, isError,
    } = useFilterContext()
    
    const [startIdx, setStartIdx] = useState(0)
    const [limit, setLimit] = useState(6)
    
    // console.log("inside GridView", isLoading, isError);

    if(isLoading) return <Loading showSkeleton={isLoading}  showSpinner={isLoading}/>
    if (isError) return <Error/>

    return (
        <div className='w-full bg-gray-100 flex flex-col gap-1.5'>
            <div className='grid-view-container bg-gray-100 p-3 xl:p-3 gap-4 xl:gap-6 2xl:gap-8 grid 2xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3'>
            {
                filter_products?.slice(startIdx, limit).map((product)=>{
                    return (<ProductCard key={product.id} product={product} />)
                })
            }
            </div>

            <div className='w-full flex-centered gap-3 bg-gray-200 h-fit'>
                <Pagination startIdx={startIdx} setStartIdx={setStartIdx}
                limit={limit} setLimit={setLimit}/>
            </div>
        </div>
    );
};