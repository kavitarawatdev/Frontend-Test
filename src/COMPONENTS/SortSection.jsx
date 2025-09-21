import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { PiList } from "react-icons/pi";
import { useFilterContext } from "../HOOKS/hooks";

export const SortSection = () => {

    const {handleSorting, grid_view, total_products} = useFilterContext()

    return (
        <section className='sorting-section bg-gray-200/80 px-1 2xs:px-3 sm:px-5 py-2 mt-2'>
            <div className="sorting-container flex items-center justify-between">
                {/* total items showing */}
                <div className='para-lg'>
                    <p className='text-gray-800'>{total_products} Items</p>
                </div>

                {/* sorting options */}
                <div className='flex items-center justify-center gap-2 para-lg text-gray-700'>
                    <label htmlFor="sorting" className="text-gray-800">
                        Sort By :
                    </label>
                    <select
                        name="sorting"
                        id="sorting"
                        className="select-optns"
                        defaultValue={"default"}
                        onChange={(e)=>{handleSorting(e)}}
                    >
                        <option value="default" disabled className='option'>
                            Select
                        </option>
                        <option value="A-Z" className='option'>
                            Name: A to Z
                        </option>
                        <option value="Z-A" className='option'>
                            Name: Z to A
                        </option>
                        <option value="price-lowest" className='option'>
                            Price: Low to High
                        </option>
                        <option value="price-highest" className='option'>
                            Price: High to Low
                        </option>
                        <option value="popularity" className='option'>
                            Popularity
                        </option>
                    </select>
                </div>

                {/* showing total items */}
                <div className='hidden sm:flex items-center justify-center gap-2 para-lg text-gray-700'>
                    <label htmlFor="showing" className="text-gray-800">
                        Show :
                    </label>
                    <select
                        name="showing"
                        id="showing"
                        className="select-optns"
                        defaultValue={"default"}
                    >
                        <option value="default" disabled className='option'>
                           6
                        </option>
                    </select>
                </div>

                {/* viewing options */}
                <div className='flex items-center gap-1 sm:gap-8 para-lg text-gray-700'>
                    <button className={`btn p-1 2xs:p-2 ${grid_view? "bg-gray-300":"bg-gray-200"}`} title="Grid View">
                        <BsFillGrid3X3GapFill className={`icon-md ${grid_view?"text-sky-300":"text-gray-500"}`}/>
                    </button>
                    <button className="btn p-1 2xs:p-2" title="List View">
                        <PiList className='icon-md text-gray-500'/>
                    </button>
                </div>
            </div>
        </section>
    );
};