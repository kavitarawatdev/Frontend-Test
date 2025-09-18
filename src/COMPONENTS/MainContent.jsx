import { GridView } from "./GridView";
import { HeroSection } from "./HeroSection";
import { SortSection } from "./SortSection";

export const MainContent = () => {
    return (
        <main className='main-content bg-blue-600'>
            <HeroSection/>
            <SortSection/>     
            {/* products section     */}
            <section className="products-section bg-gray-200 min-h-[50vh] flex items-center justify-center">
                <GridView/>
            </section>
        </main>
    );
};