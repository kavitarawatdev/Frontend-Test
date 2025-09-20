export const HeroSection = () => {
    return (
        <section className='hero-section bg-sky-500 h-60 sm:h-70 lg:h-80 2xl:h-90'>
            <div className="hero-container flex-col xs:flex-row flex items-center justify-evenly xs:justify-between lg:justify-start h-full px-4 sm:px-8 lg:px-10 2xl:px-20">

                <div className="text-content text-gray-50 justify-start">
                    <h3 className="heading-3">
                        Adidas Men Running Sneakers
                    </h3>
                    <div className='flex flex-col gap-4'>
                        <p className='para-lg'>Performance and design. Taken right to the edge.</p>

                        <button className='btn heading-6 font-bold underline-offset-7 underline decoration-gray-50 decoration-3 w-full text-left'>
                            Shop Now
                        </button>
                    </div>
                    
                </div>

                <div className="image-content">
                    <figure>
                        <img src="https://res.cloudinary.com/dwwurx8fo/image/upload/v1758131191/61de7653-f26f-4a4b-b3c2-36967ff12cd8.png" 
                        alt="hero-img" 
                        className='h-25 xs:h-30 sm:h-40 md:h-full'/>
                    </figure>
                </div>

            </div>      
        </section>
    );
};