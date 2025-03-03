import { useState, useEffect } from 'react';
import Cta from '../Cta/Cta';

function Parallex({ topImage, bottomImage, middleimage }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const progress = Math.min(scrollY / viewportHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageStyles = {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      perspective: '1000px',
    },
    baseImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
    },
    topImage: {
      transform: `scale(${1 + scrollProgress * 9})`,
      opacity: 1, //"opacity: 1 - scrollProgress,"
      zIndex: 3,
      backgroundImage: `url(${topImage})`,
    },
    middleimage: {
        transform: `scale(${1 + scrollProgress * 9})`,
      opacity: 1 - scrollProgress,
      zIndex: 2,
      
      backgroundImage: `url(${middleimage})`,
        
    }
    ,
    bottomImage: {
      //transform: `scale(${1 + scrollProgress * 0.2})`,
      //filter: `blur(${5 - (scrollProgress * 5)}px)`,
      zIndex: 1,
      position: 'relative',
      backgroundImage: `url(${bottomImage})`,
    },
  };

  return (
    <div style={{ minHeight: '200vh' }}>
      <div style={imageStyles.container}>
        <div style={{ ...imageStyles.baseImage, ...imageStyles.middleimage }} />
        <div style={{ ...imageStyles.baseImage, ...imageStyles.bottomImage }} />
        <div style={{ ...imageStyles.baseImage, ...imageStyles.topImage }} />
      </div>
      
      {/* Content layer */}
      <div style={{ 
        position: 'relative', 
        zIndex: 3, 
        color: 'white', 
        padding: '2rem',
        textAlign: 'center'
      }}>
        {/*<h1>Scroll down to see the parallax effect</h1>*/}
        <div style={{ height: '120vh' }}>
        <h1>Nice upper effect!</h1>
        </div>
        <div style={{ height: '100vh' }}>
        <ul>
          
          <li><img
            src="/src/images/main_logo.jpg" // Updated to include the correct Vite-compatible path.
            alt="Airborne logo"
            style={{ width: "60%", height: "auto", marginTop: "80px" }}
          /></li>
          
          <li><div><Cta text = "Book a Flight" /></div></li>
        </ul>
      </div>
        </div>
        <h1>Niceasasa effect!</h1>
      </div>
    
  );
}

export default Parallex;