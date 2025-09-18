import { Badge } from "../HELPER/Badge";
import { formatPrice } from "../HELPER/formatPrice";
import { FormatRating } from "../HELPER/FormatRating";

export const ProductCard = ({product}) => {
    const {id, name, brand, price, discountPrice, discountPercent, ratingValue, ratingCount, isHot, colors, category, imageUrl} = product;
    return (
        <div className="product-card flex relative flex-col bg-gray-200 p-1 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">

            {isHot && <Badge/>}

            <div className='flex-centered p-3'>
                <figure className='flex-centered'>
                    <img src={imageUrl} alt={name} className='inline-block h-60 p-3' />
                </figure>
            </div>

            <div className="text-content flex-centered flex-col bg-gray-100 p-2 gap-1">
                <h5 className="product-name heading-5 text-gray-950 font-bold">{name}</h5>

                <p>
                    <FormatRating rating={ratingValue} />
                </p>

                <p className='flex-centered gap-4'>
                    <span className='text-sky-400 para-lg font-bold'>{discountPrice ? formatPrice(discountPrice) : formatPrice(price)}</span>
                    {
                        discountPrice && 
                        <div className='flex-centered gap-2'>
                            <span className="text-gray-500"><del>{formatPrice(price)}</del></span>
                            <span className="discount-percent text-red-600 font-extrabold">{discountPercent}% OFF</span>
                        </div>
                    }
                </p>
            </div>           
        </div>
    );
};