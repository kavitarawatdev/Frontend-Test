import { useFilterContext } from "../HOOKS/hooks";

export const Pagination = ({startIdx, setLimit, setStartIdx}) => {
    const {total_products} = useFilterContext()
    const totalPages=total_products % 6 == 0 ? total_products/6 : (total_products/6)+1; 
    const active = (startIdx/6) + 1 
    const newArray = Array.from({ length: totalPages }, (_, index) => index + 1);

    const handleNavigation=(ele)=>{
        const start= 6*(ele-1);
        const end = start+6 < total_products? start+6: total_products;
        setStartIdx(start);
        setLimit(end)
    }
    return (
        <>
            {newArray?.map(ele=>{
                return (
                    <span key={ele}
                    className={`navigation ${ele == active? "bg-sky-400 text-gray-100" : "bg-gray-100"}`}
                    onClick={()=>{handleNavigation(ele)}}>
                        {ele}
                    </span>
                )
            })}
        </>
    );
};