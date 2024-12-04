import { useState, useEffect } from "react";

export const useMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            // You can customize the breakpoint based on your needs (e.g., 768px is commonly used for mobile)
            setIsMobile(window.innerWidth <= 425);
        };

        // Check on mount
        checkMobile();

        // Add resize event listener to update on window resize
        window.addEventListener('resize', checkMobile);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return isMobile;
};

