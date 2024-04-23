import { useState, useEffect } from 'react';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
              
               <i className="fa-solid fa-arrow-up fixed bottom-4 right-4 p-2 pr-3 pl-3 rounded-full z-50 bg-retroRed text-white transition duration-300 cursor-pointer glow-border" onClick={scrollToTop}></i>
              
            )}
        </>
    );
}

