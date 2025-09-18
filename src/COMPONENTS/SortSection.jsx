import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { PiList } from "react-icons/pi";

export const SortSection = () => {
    return (
        <section className='sorting-section bg-gray-300 px-5 py-2'>
            <div className="sorting-container flex items-center justify-between">
                {/* total items showing */}
                <div>
                    <p className='para-md text-gray-800'>Total {0} items</p>
                </div>

                {/* sorting options */}
                <div className='flex items-center justify-center gap-2'>
                    <label htmlFor="sorting" className="text-gray-800">
                        Sort By :
                    </label>
                    <select
                        name="sorting"
                        id="sorting"
                        className="btn outline-0 px-2 text-center"
                        defaultValue={"default"}
                    >
                        <option value="default" disabled className='option'>
                            Select
                        </option>
                        <option value="name-A-Z" className='option'>
                            Name: A to Z
                        </option>
                        <option value="name-Z-A" className='option'>
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
                <div className='flex items-center justify-center gap-2'>
                    <label htmlFor="showing" className="text-gray-800">
                        Show :
                    </label>
                    <select
                        name="showing"
                        id="showing"
                        className="btn outline-0 px-2 text-center"
                        defaultValue={"default"}
                    >
                        <option value="default" disabled className='option'>
                            Select
                        </option>
                    </select>
                </div>

                {/* viewing options */}
                <div className='flex items-center gap-8'>
                    <button className="btn" title="Grid View">
                        <BsFillGrid3X3GapFill className='icon-md text-gray-500'/>
                    </button>
                    <button className="btn" title="List View">
                        <PiList className='icon-md text-gray-500'/>
                    </button>
                </div>
            </div>
        </section>
    );
};