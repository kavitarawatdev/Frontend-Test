
import { useState } from "react";
import { Pagination } from "../HELPER/Pagination";
import { useFilterContext} from "../HOOKS/hooks";
import { Loading } from "./Loading";
import { ProductCard } from "./ProductCard";
import { SkeletonCard } from "../HELPER/SkeletonCard";
import { NoProductsFound } from "../HELPER/NoProductsFound";

export const GridView = () => {
    const {filter_products, isLoading, isError, total_products
    } = useFilterContext()
    
    const [startIdx, setStartIdx] = useState(0)
    const [limit, setLimit] = useState(6)
    const skeletonLength=()=>{
        let length = 0
        console.log("inside skeleton length")
        console.log("total products", total_products)
        if( total_products%6!==0){
            if(total_products<6){
               length= 6-total_products;
            }else if(total_products > 6){
                console.log(startIdx, total_products-1, limit )
                if(startIdx < total_products-1 && limit > total_products-1){
                   length= 6-(total_products % 6)
                }else{
                    length=0
                }
            }
        }else{
            length= 0;
        }
        console.log("skeleton length",length)
        return length;
    }
    // console.log("inside GridView", isLoading, isError);
    if(isLoading) return <Loading />
    if (isError) return <Error/>

    return (
        <div className='w-full bg-gray-100 flex flex-col gap-1.5'>
            {
                total_products===0? <NoProductsFound/>:""
            }

            <div className='grid-view-container bg-gray-100 p-3 xl:p-3 gap-4 xl:gap-6 2xl:gap-8 grid 2xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3'>
            {
                filter_products?.slice(startIdx, limit).map((product)=>{
                    return (<ProductCard key={product.id} product={product} />)
                })
            }
            {  
                Array.from({ length: skeletonLength()}, (_, index) => (
                    <SkeletonCard key={index} />
                ))
            }
            </div>

            <div className='w-full flex-centered gap-1.5 sm:gap-3 bg-gray-200 h-fit'>
                <Pagination startIdx={startIdx} setStartIdx={setStartIdx}
                limit={limit} setLimit={setLimit}/>
            </div>
        </div>
    );
};
