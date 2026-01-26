import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const toggleVisibility = () => {
      // Show button after scrolling 20% of page height
      const scrolled = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrolled / pageHeight) * 100;
      
      if (scrollPercentage > 20) {
        setIsVisible(true);
        setIsScrolling(true);

        // Hide button after user stops scrolling for 2 seconds
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 2000);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      clearTimeout(scrollTimeout);
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
        <button
          onClick={scrollToTop}
          className={`fixed bottom-[18vh] right-4 md:bottom-[18vh] md:right-6 z-50 bg-white text-black p-4 md:p-5 rounded-full shadow-2xl hover:shadow-primary/50 hover:scale-110 transition-all duration-300 group ${
            isScrolling ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 md:w-7 md:h-7 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
      )}
    </>
  );
}
