import { formatPrice } from "../HELPER/formatPrice";
import { useFilterContext } from "../HOOKS/hooks";

export const Sidebar = () => {
    const {filter, handleFilterUpdate, all_products} = useFilterContext();
    const { category,deals, brand,color,min_price,max_price, price_set} = filter;

    
    const getUniqueData=(feature)=>{
        // colrs
        if(feature==="colors"){
            let arr = all_products.flatMap(product=>product.colors);
            return [...new Set (arr)]
        }
        // category
        if(feature==="category"){
            let catgCounts = all_products.reduce((accum, product)=>{
                const ctgName = product.category;
                accum[ctgName]=  accum[ctgName]? accum[ctgName]+=1:1;
                return accum;
            },{});

            const catgArr=Object.entries(catgCounts).map(([ctg, total])=>({
                ctg:ctg,
                total:total
            }))
            return catgArr
        }
        //brand
        if(feature==="brand"){
            // console.log("inside brand");
            const brandCounts = all_products.reduce((accum, product) => {
                const brandName = product.brand;
                accum[brandName] = accum[brandName] ? accum[brandName]+=1:1;
                // console.log(accum);
                return accum;
            }, {});

            const brandCountArray = Object.entries(brandCounts).map(([brand, total]) => ({
                b: brand,
                total: total,
            }));
            // console.log(brandCountArray);
            return brandCountArray;

        }
        //deals
        if(feature === "deals"){
            const dealsCount = all_products.reduce((accum,product)=> {
                if(product.isHot){
                    let brand_name=product.brand;
                    accum[brand_name]? accum[brand_name]+=1:accum[brand_name]=1;
                }          
                // console.log(accum);
                return accum;                
            },{})

            const dealCountArr=Object.entries(dealsCount).map(([brand, total])=>(
                {
                    dealsOn:brand,
                    total:total,
                }
            ))
            // console.log(dealCountArr);
            return dealCountArr
        }
        
    }

    const uniqColors = getUniqueData("colors");
    const uniqBrands = getUniqueData("brand");
    const uniqDeals = getUniqueData("deals");
    const uniqCategory = getUniqueData("category");

    return (
        <section className='sidebar-section bg-gray-100 hidden lg:flex flex-col'>
            <div className='px-2 gap-4 2xl:gap-5 flex flex-col justify-between h-full'>
                {/* hot deals */}
                <div className='bg-gray-200 rounded-sm flex flex-col gap-8 px-6 py-8'>
                    <h6 className="heading-6 text-gray-800 uppercase">
                        deals
                    </h6>
                    <ul className='flex flex-col gap-4 2xl:gap-5'>
                    {
                        uniqDeals.map((currVal, i)=>{
                            const {dealsOn, total}=currVal
                            return(
                                <li key={i} 
                                className={`sidebar-list para-lg group hover:text-sky-500 ${dealsOn==deals?"text-sky-600":"text-gray-800"}`}
                                onClick={()=>handleFilterUpdate("deals", dealsOn)}>
                                    {dealsOn}
                                    <span 
                                    className={`${dealsOn==deals?"text-sky-600":"text-gray-500"} group-hover:text-sky-500`}>
                                        {total}
                                    </span>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>

                {/* Prices */} 
                <div className='bg-gray-200 rounded-sm flex flex-col gap-8 px-6 py-8'>
                    <h6 className="heading-6 text-gray-800 uppercase">
                        Prices
                    </h6>

                    <div className='w-full flex flex-col gap-4 2xl:gap-5'>
                        <p className='para-sm text-gray-700 flex justify-between items-center w-full'>
                            Range:
                            <span>{formatPrice(min_price) } - {formatPrice(price_set)}</span> 
                        </p>
                        <input type="range"  className='w-full'
                            onChange={(e)=>handleFilterUpdate(e.target.name, e.target.value)}
                            min={min_price}
                            max={max_price}                           
                            name="price_set"
                            value={price_set}
                        />
                    </div>
                </div>

                {/* category */}
                <div className=' flex xl:hidden bg-gray-200 rounded-sm flex-col gap-8 px-6 py-8'>
                    <h6 className="heading-6 text-gray-800 uppercase">
                        Category
                    </h6>

                    <div className='w-full flex flex-col gap-4 2xl:gap-5'>
                    {
                        uniqCategory.map((currVal, i)=>{
                            const {ctg, total}=currVal
                            return(
                                <li key={i} 
                                className={`sidebar-list para-lg group hover:text-sky-500 ${ctg!=category?"text-gray-800":"text-sky-500"}`}
                                 onClick={()=>handleFilterUpdate("category", ctg)}>
                                    {ctg} 
                                    <span 
                                    className={`text-gray-500 group-hover:text-sky-500  ${ctg!=category?"text-gray-300":"text-sky-600"}`}>
                                        {total}
                                    </span>
                                </li>
                            )
                        })
                    }
                    </div>
                </div>

                {/* colors */}
                <div className='bg-gray-200 rounded-sm flex flex-col gap-8 px-6 py-8'>
                    <h6 className="heading-6 text-gray-800">
                        COLOR
                    </h6>
                    <div className='flex items-center justify-between flex-wrap'>
                    {
                        uniqColors.map((clr, i)=>{
                            return(
                                <div key={i} className={`p-1 rounded-full flex-centered ${color==clr?"border-1":""}`}
                                style={{borderColor:color==clr?clr:""}}
                                onClick={()=>handleFilterUpdate("color", clr)}>
                                    <span className={`color-btns`}
                                     style={{backgroundColor: clr}}>                      
                                     </span>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>

                {/* Brand */}
                <div className='bg-gray-200 rounded-sm flex flex-col gap-8 px-6 py-8'>
                    <h6 className="heading-6 text-gray-800 uppercase">
                        Brand
                    </h6>
                    <ul className='flex flex-col gap-4 2xl:gap-5'>
                    {
                        uniqBrands.map((currVal, i)=>{
                            const {b, total}=currVal
                            return(
                                <li key={i} 
                                className={`sidebar-list para-lg group hover:text-sky-500 ${b!=brand?"text-gray-800":"text-sky-500"}`}
                                 onClick={()=>handleFilterUpdate("brand", b)}>
                                    {b} 
                                    <span 
                                    className={`text-gray-500 group-hover:text-sky-500  ${b!=brand?"text-gray-300":"text-sky-600"}`}>
                                        {total}
                                    </span>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>

                {/* more btn */}
                <div className='w-full flex-centered gap-4 2xl:gap-5 bg-gray-200 h-fit'>
                    <button className='navigation'>
                    MORE
                    </button>
                </div>  

            </div>     
        </section>
    );
};