import { navlinks_data } from "../Data/navlinks";

export const Navbar = () => {
    return (
        <nav className='w-full'>
            <ul className="flex items-center justify-between">
                {
                    navlinks_data.map((item) => {
                         const {label, link} = item;
                        return (                   
                            <li key={label}>
                                <a href={link}
                                className='nav-links uppercase'
                                >
                                    {label}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            
        </nav>
    );
};