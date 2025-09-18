
import { Navbar } from "../COMPONENTS/Navbar";
import { CgShoppingCart } from "react-icons/cg";

export const Header = () => {
    return (
        <header className='section fixed top-0 p-1'>
            <div className="container px-5 mx-auto grid grid-cols-[0.5fr_2fr] h-10 gap-5">
                {/* Logo */}
                <div className='bg-green-700'>
                    <figure>
                        <img src="" alt="" />
                        <figcaption className="text-2xl font-bold">ShopMate</figcaption>
                    </figure>
                </div>

                <div className='bg-blue-500 grid grid-cols-[0.9fr_auto] gap-5 justify-between items-center'>

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