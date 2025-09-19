
import { Navbar } from "../COMPONENTS/Navbar";
import { CgShoppingCart } from "react-icons/cg";

export const Header = () => {
    return (
        <header className='section fixed top-0 p-1 bg-gray-50 z-10'>
            <div className="container px-5 mx-auto grid grid-cols-[0.5fr_2fr] h-12 gap-5 items-center">
                {/* Logo */}
                <div className=''>
                    <figure>
                        <img src="https://res.cloudinary.com/dwwurx8fo/image/upload/v1758217412/9ae34ba4-5ddd-48bc-98dd-9e8bc87e428b.png" alt="Logo" />
                    </figure>
                </div>

                <div className='grid grid-cols-[0.9fr_auto] gap-5 justify-between items-center'>

                    <div className='w-full'>
                        {/* Navigation Links */}
                        <Navbar />
                    </div>

                    {/* header-btns */}
                    <div className="cart-details flex gap-5">
                        <button>
                            <CgShoppingCart className='icon-sm'/>
                        </button>

                        <p className='nav-links flex-centered gap-5'>
                            Items
                            <span>$0.00</span>
                        </p>
                    </div>

                </div>

            </div>
        </header>
    );
};