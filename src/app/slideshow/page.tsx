import { useState, useEffect } from 'react';

type Slide = {
    imageUrl: string;
    caption?: string;
};

const slides: Slide[] = [
    { imageUrl: '/assert/images/002.jpg' },
    { imageUrl: '/assert/images/001.jpg', caption: 'Slide 2' },
    { imageUrl: '/assert/images/bg1.png', caption: 'Slide 3' },
    // Add more slides as needed
    //E:\Project\WEDOALLTECH\Syllabus\WDAT_Syllabus_App/public/assert/images/002.jpg
];

const Slideshow: React.FC = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="-z-10 relative w-full max-w-screen-xxl mx-auto overflow-hidden">
            <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="flex-none w-full h-96" style={{ backgroundImage: `url(${slide.imageUrl})`, backgroundSize: 'cover' }}>
                        {slide.caption && <div className="text-white text-lg p-2 bg-black/50">{slide.caption}</div>}
                    </div>
                ))}
            </div>
            {/* <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white stroke stroke-black text-5xl cursor-pointer">
                <span onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}>&laquo;</span>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white stroke stroke-black text-5xl cursor-pointer">
                <span onClick={() => setCurrent((current + 1) % slides.length)}>&raquo;</span>
            </div> */}
        </div>
    );
};

export default Slideshow;
