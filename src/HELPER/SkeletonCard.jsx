export const SkeletonCard = () => {
    return(
        <div className="animate-pulse bg-white rounded-xl p-2 lg:p-4 shadow-md">
            <div className="bg-gray-200 rounded-lg h-35 lg:h-50 xl:h-50 mb-4"></div>
            <div className="flex flex-col gap-2 lg:gap-5">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                <div className="flex justify-between items-center">
                    <div className="h-6 bg-gray-200 rounded w-16"></div>
                    <div className="h-8 bg-gray-200 rounded w-20"></div>
                </div>
            </div>
        </div>
    )
}
     