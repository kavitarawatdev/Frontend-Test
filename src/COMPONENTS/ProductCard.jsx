import { Badge } from "../HELPER/Badge";
import { formatPrice } from "../HELPER/formatPrice";
import { FormatRating } from "../HELPER/FormatRating";
import { useFilterContext } from "../HOOKS/hooks";

export const ProductCard = ({product}) => {
    const {id, name, brand, price, discountPrice, discountPercent, ratingValue, ratingCount, isHot, colors, category, imageUrl} = product;
    const {filter}=useFilterContext()
    const {color}=filter
    return (
        <div className="product-card flex relative flex-col bg-gray-200 p-1 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">

            {isHot && <Badge/>}

            <div className='flex-centered p-1' style={{backgroundColor:color?`${color}66`:"bg-gray-200"}}>
                <figure className='flex-centered'>
                    <img src={imageUrl} alt={name} className='inline-block h-35 xs:h-30 sm:h-40 lg:h-60 p-1' />
                </figure>
            </div>

            <div className="text-content flex-centered flex-col bg-gray-100 p-2 gap-1">
                <h5 className="product-name heading-5 text-gray-950 font-bold truncate w-full text-center">{name}</h5>

                <div>
                    <FormatRating rating={ratingValue} />
                </div>

                <div className='flex-centered gap-1.5 xs:gap-4 para-lg '>
                    <span className='text-sky-400 font-medium xs:font-bold'>{discountPercent ? formatPrice(discountPrice) : formatPrice(price)}</span>
                    {
                        discountPercent && 
                        <div className='flex-centered gap-1 xs:gap-2'>
                            <span className="text-gray-500"><del>{formatPrice(price)}</del></span>
                            <span className="discount-percent text-red-600 font-bold xs:font-extrabold">{discountPercent}% OFF</span>
                        </div>
                    }
                </div>
            </div>           
        </div>
    );
};