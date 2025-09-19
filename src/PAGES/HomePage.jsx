import { MainContent } from "../COMPONENTS/MainContent";
import { Sidebar } from "../COMPONENTS/Sidebar";

export const HomePage = () => {
    return (
        <section className='section px-1 py-10'>
            <div className="container px-5 mx-auto grid grid-cols-[0.5fr_2fr] gap-5">
                {/* sidebar */}
                <Sidebar/>

                {/* main content */}
                <MainContent/>

            </div>           
        </section>
    );
};