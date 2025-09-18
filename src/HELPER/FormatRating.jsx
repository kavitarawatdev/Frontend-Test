import { LiaStarSolid } from "react-icons/lia";
import { LiaStarHalfAltSolid } from "react-icons/lia";
import { LiaStar } from "react-icons/lia";

export const FormatRating = ({ rating }) => {
    const ratings = Array.from({ length: 5 }, (ele, i) => {
        let num = i + 0.5;
        return (
            <span className='text-sm lg:text-lg xl:text-xltransition-colors duration-200' key={i}>
                {
                    rating >= i + 1 ? (<LiaStarSolid className=' text-yellow-500 hover:text-yellow-400 '/>) :
                    rating >= num ? (<LiaStarHalfAltSolid  className='text-yellow-500 hover:text-yellow-400' />) :
                     (<LiaStarSolid className='text-gray-300' />)
                }
            </span>
        );
    })

    return (
        <div className='rating-container flex-centered'>
            {/* Stars Section */}
            <div className="stars-display flex-centered gap-0.5 sm:gap-1 xl:gap-4" aria-label={`Rating: ${rating} out of 5 stars`}>
                {ratings}
            </div>

        </div>
    );
};