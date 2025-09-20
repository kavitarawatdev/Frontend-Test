import { MainContent } from "../COMPONENTS/MainContent";
import { Sidebar } from "../COMPONENTS/Sidebar";

export const HomePage = () => {
    return (
        <section className='section sm:px-1 py-6 lg:py-10 mt-8'>
            <div className="container sm:px-2 xl:px-5 mx-auto lg:grid lg:grid-cols-[0.7fr_2fr] xl:grid-cols-[0.5fr_2fr] gap-3 lg:gap-5">
                {/* sidebar */}
                <Sidebar/>

                {/* main content */}
                <MainContent/>
            </div>           
        </section>
    );
};