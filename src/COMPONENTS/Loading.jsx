import { BiLoaderAlt } from "react-icons/bi";
import { SkeletonCard } from "../HELPER/SkeletonCard";

export const Loading = ({showSpinner, showSkeleton}) => {

    if (showSkeleton) {
        return (
            <div className={`section p-3`}>
                <div className="">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length:6 }, (_, index) => (
                            <SkeletonCard key={index} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`section section-padding flex-centered`}>
            <div className="flex-centered flex-col space-y-4 max-w-md mx-auto text-center">
                {showSpinner && (
                    <div className="relative">
                        {/* Primary spinner */}
                        <BiLoaderAlt 
                            className={`h-6 w-6 md:h-12 md:w-12 lg:h-16 lg:w-16 text-green-500 animate-spin`}
                        />
                        {/* Secondary ring for enhanced effect */}
                        <div className={`absolute inset-0 h-6 w-6 md:h-12 md:w-12 lg:h-16 lg:w-16 border-2 border-green-200 
                                       border-t-transparent rounded-full animate-spin `}></div>
                    </div>
                )}
                
                {/* Loading message */}
                <div className="space-y-2">
                    <p className={`font-semibold text-gray-700 text-sm md:text-base lg:text-lg`}>
                        
                    </p>
                    <p className="text-gray-500 text-sm">
                        Please wait while we load the content for you...
                    </p>
                </div>

                {/* Loading dots animation */}
                <div className="flex space-x-1">
                    {[0, 1, 2].map((index) => (
                        <div
                            key={index}
                            className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        ></div>
                    ))}
                </div>

                {/* Progress bar effect */}
                <div className="w-full max-w-xs">
                    <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 
                                       animate-pulse rounded-full w-2/3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}