import { TbShoe } from "react-icons/tb";
import { useFilterContext } from "../HOOKS/hooks";
import { PiBeltLight, PiDressLight, PiShirtFoldedLight } from "react-icons/pi";
import { GiSchoolBag } from "react-icons/gi";
import { LiaWalletSolid } from "react-icons/lia";

export const CategoryBar = () => {
    const {all_products, filter, handleFilterUpdate,} = useFilterContext()
    const {category}=filter
    const createCtgArr =()=>{
        let catgCounts = all_products.reduce((accum, product)=>{
                const ctgName = product.category;
                accum[ctgName]=  accum[ctgName]? accum[ctgName]+=1:1;
                return accum;
            },{});

            const catgArr=Object.entries(catgCounts).map(([ctg, total])=>({
                ctg:ctg,
                icon:ctg=="Dresses"?<PiDressLight/>:ctg=="Shirts"?<PiShirtFoldedLight/>:ctg=="Shoes"?<TbShoe />:ctg=="Belts"?<PiBeltLight/>:ctg=="Bags"?<GiSchoolBag/>:<LiaWalletSolid/>,
            }))
            return catgArr
    }
    const ctgArr =createCtgArr();
    return (
        <section className='lg:hidden bg-gray-100 px-5 py-2 mt-2'>
            <div className='flex justify-end text-sky-600 heading-6 mb-1.5'>
                CATEGORY
            </div>
            <ul className='flex items-center justify-between gap-10 overflow-x-scroll custom-scrollbar pb-1.5'>
                {
                    ctgArr.map((currEle, i)=>{
                        const {ctg, icon}=currEle
                        return(
                            <li key={i} className={`flex-centered flex-col  ${ctg!=category?"text-gray-800":"text-sky-500"}`}
                            onClick={()=>handleFilterUpdate("category", ctg)}>
                                <span className='icon-lg p-1 border-1 rounded-full'>{icon}</span>
                                <span className='heading-6 font-semibold'>  {ctg} </span>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};