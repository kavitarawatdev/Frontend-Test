import { CategoryBar } from "./CategoryBar";
import { GridView } from "./GridView";
import { HeroSection } from "./HeroSection";
import { Sidebar } from "./Sidebar";
import { SortSection } from "./SortSection";

export const MainContent = () => {
    return (
        <main className='main-content'>
            <HeroSection/>         
            <CategoryBar/>  
            <SortSection/> 
            {/* products section     */}
            <section className="products-section bg-gray-200">
                <GridView/>
            </section>
        </main>
    );
};