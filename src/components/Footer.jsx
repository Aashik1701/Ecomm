import { useEffect, useState } from 'react';


export const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 900) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, []);

    return (
        <div className='fondo fixed bottom-0 w-full'>
            <div className='flex justify-center items-center mt-2 cursor-pointer text-sm'>
                {isVisible && (
                    <div
                        onClick={() => scrollToTop()}
                    >
                        <p>Go to start</p>
                    </div>
                )}
            </div>
            <footer className='flex justify-between items-center botton-0 py-3 px-8 text-sm font-light'>
                <p>ecom</p>
                <p>By <a href='https://github.com/Aashik1701' target='_blank' rel='noreferrer' className='font-semibold'>ash</a>❤️</p>
            </footer>
        </div>
    )
};