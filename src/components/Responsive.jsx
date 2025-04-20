
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Responsive() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  // Ocultar automáticamente al cambiar de URL
  useEffect(() => {
    setIsVisible(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1060) {
        setIsVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const aside = document.querySelector('.layout__aside');
    if (aside) {
      if (isVisible) {
        aside.classList.add('layout__aside--visible');
      } else {
        aside.classList.remove('layout__aside--visible');
      }
    }
  }, [isVisible]);

  return (
    <>
      <div className="layout__menu-toggle" onClick={toggleMenu}>
        <i
          className="menu-toggle__icon fa-solid fa-bars"
          style={{ opacity: isVisible ? 0 : 1 }}
        ></i>
        <i
          className="menu-toggle__icon fa-solid fa-xmark"
          style={{ opacity: isVisible ? 1 : 0 }}
        ></i>
      </div>
    </>
  );
}

export default Responsive;