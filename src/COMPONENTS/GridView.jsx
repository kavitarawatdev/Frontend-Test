
import { useProductContext } from "../HOOKS/hooks";
import { Loading } from "./Loading";
import { ProductCard } from "./ProductCard";

export const GridView = () => {
    const {state} = useProductContext();
    console.log("inside GridView", state);
    if(state.isLoading) return <Loading showSkeleton={state.isLoading}  showSpinner={state.isLoading}/>

    if (state.isError) return <Error/>
    return (
        <div className='grid-view-container bg-gray-100 p-3 gap-8 grid lg:grid-cols-3 2xl:grid-cols-3'>
            {
                state.products.map((product)=>{
                    return (<ProductCard key={product.id} product={product} />)
                })
            }
        </div>
    );
};