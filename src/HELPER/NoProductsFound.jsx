import { BsEmojiFrown } from 'react-icons/bs';
import { useFilterContext } from '../HOOKS/hooks';

export const NoProductsFound = () => {
    const { handleClearFilters } = useFilterContext()

  return (
    <div className='w-full h-100 flex-centered'>
    <div className="flex-centered flex-col text-center my-auto">
      <div className="mb-6">
        <div className="w-20 h-20 flex-centered rounded-full bg-blue-100 animate-pulse shadow-lg shadow-blue-200">
          <BsEmojiFrown className="icon-lg text-sky-500" />
        </div>
      </div>
      <h4 className="heading-4 font-bold text-gray-700 mb-3 tracking-wide">
        No Products Found
      </h4>

      <p className="text-gray-500 para-sm mb-6 max-w-md">
        Looks like nothing matched your search or filters.
        <br className="hidden md:block" />
        Try clearing filters or explore other categories.
      </p>
      <button
        onClick={handleClearFilters}
        className="common-btn"
      >
        Reset Filters
      </button>
    </div>
    </div>
  );
};