import { BiLoaderAlt } from "react-icons/bi";
import { SkeletonCard } from "../HELPER/SkeletonCard";

export const Loading = () => {
        return (
            <div className={`section p-3`}>
                <div className="">
                    <div className="grid grid-cols-1 2xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6 2xl:gap-8">
                        {Array.from({ length:6 }, (_, index) => (
                            <SkeletonCard key={index} />
                        ))}
                    </div>
                </div>
            </div>
        );

}