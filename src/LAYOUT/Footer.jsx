import { payment_cards } from "../Data/payment_cards";
import { social_icons } from "../Data/social-icons.";

export const Footer = () => {

    const footer_list = [
        {label:"About Us", link:""},
        {label:"Information", link:""},
        {label:"Privacy Policy", link:""},
        {label:"Terms & Conditions", link:""},
    ]

    return (
        <section className='section section-padding footer-section bg-blue-300'>
            <div className="container container-padding items-center grid grid-cols-3 gap-10 mx-auto">
                {/* about */}
                <div className='flex flex-col gap-5'>

                    <picture>
                        <img src="https://res.cloudinary.com/dwwurx8fo/image/upload/v1758217412/9ae34ba4-5ddd-48bc-98dd-9e8bc87e428b.png" 
                        alt="logo" 
                        loading="lazy"/>
                    </picture>

                    <p className='para-sm text-gray-800 max-w-75'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
                    </p>
                </div>

                {/* follow  */}
                <div className='flex flex-col gap-5'>
                    <h6 className="heading-6 font-semibold text-gray-900">Follow us</h6>

                    <p className="para-sm text-gray-800 max-w-75">
                        Since the 1500s, when an unknown printer took a galley of type and scrambled.
                    </p>

                    <div className='flex items-center gap-5'>
                        {social_icons.map(social=>{
                        const {label, icon, className, link} = social
                        return(
                            <a key={label} href={link}
                            className={`${className} icon-sm hover:scale-115 transition-transform duration-100 ease-in-out`}>
                                {icon}
                            </a>
                        )
                        })}
                    </div>
                </div>

                {/* contact */}
                <div className='flex flex-col gap-5'>
                    <h6 className="heading-6 font-semibold text-gray-900">Contact Us</h6>

                    <address className='para-md text-gray-800 max-w-75 whitespace-pre-line leading-relaxed not-italic'>
                         E-Comm , 4578  
                         <br />
                         Marmora Road, 
                         <br />
                         Glasgow D04 89GR 
                    </address>
                </div>
            </div>


            <div className="container container-padding grid grid-cols-4 gap-10 mx-auto">
                
                <ul className='flex flex-col gap-0.5'>
                    <h6 className="heading-6 font-semibold text-gray-900 mb-4">Information</h6>
                    {footer_list.map(list=>{
                        const {link, label}=list
                        return(
                            <li className='para-md'>
                                <a href={link} className='text-gray-800'>
                                    {label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                
                <ul className='flex flex-col gap-0.5'>
                    <h6 className="heading-6 font-semibold text-gray-900 mb-4">Service</h6>
                    {footer_list.map(list=>{
                        const {link, label}=list
                        return(
                            <li className='para-md'>
                                <a href={link} className='text-gray-800'>
                                    {label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                
                <ul className='flex flex-col gap-0.5'>
                    <h6 className="heading-6 font-semibold text-gray-900 mb-4">My Account</h6>
                    {footer_list.map(list=>{
                        const {link, label}=list
                        return(
                            <li className='para-md'>
                                <a href={link} className='text-gray-800'>
                                    {label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                
                <ul className='flex flex-col gap-0.5'>
                    <h6 className="heading-6 font-semibold text-gray-900 mb-4">Our Offers</h6>
                    {footer_list.map(list=>{
                        const {link, label}=list
                        return(
                            <li className='para-md'>
                                <a href={link} className='text-gray-800'>
                                    {label}
                                </a>
                            </li>
                        )
                    })}
                </ul>

            </div>

            <div className="container container-padding">
                <hr className='text-gray-50'/>
                <div className='flex items-center justify-end gap-5 py-8'>
                    {
                        payment_cards.map(card=>{
                            const {url, label}=card
                            return (
                            <figure>
                                <img src={url} alt={label} />
                            </figure>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};