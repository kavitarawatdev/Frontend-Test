export const HeroSection = () => {
    return (
        <section className='hero-section bg-sky-500 h-90'>
            <div className="hero-container flex items-center justify-around h-full px-20">

                <div className="text-content flex flex-col gap-4">
                    <h3 className="heading-3">
                        Adidas Men Running Sneakers
                    </h3>
                    <p className='para-lg'>Performance and design. Taken right to the edge.</p>

                    <button className='btn'>
                        Shop Now
                    </button>
                </div>

                <div className="image-content">
                    <figure>
                        <img src="https://res.cloudinary.com/dwwurx8fo/image/upload/v1758131191/61de7653-f26f-4a4b-b3c2-36967ff12cd8.png" 
                        alt="hero-img" 
                        className=''/>
                    </figure>
                </div>

            </div>      
        </section>
    );
};