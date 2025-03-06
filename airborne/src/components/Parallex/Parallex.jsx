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
      transform: `scale(${1 + scrollProgress * 13 })`,
      opacity: 1, //"opacity: 1 - scrollProgress,"
      zIndex: 5,
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
      zIndex: 0,
      position: 'absolute',
      backgroundImage: `url(${bottomImage})`,
    },
  };

  return (
    <div style={{ minHeight: '130vh' }}>
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
        {/* <div style={{ height: '120vh' }}>
        <h1>Nice upper effect!</h1>
        </div> */}
        <div style={{ height: '0vh' }}>
        <ul style={{
  margin: '300px 400px 30px 30px',
  height: '20vh',
  listStyle: 'none', // Add this line
  padding: 0, // Optional: Remove default padding
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
}}>
  <li style={{padding: '0', margin: '0'}}>
    <div style={{padding: '0', margin: '0', display: 'flex', alignContent: 'flex-start'}}>
    <img
      src="/src/images/main_logo.jpg"
      alt="Airborne logo"
      style={{ width: "60%", height: "auto", marginTop: "80px", marginleft:"3px auto", paddingLeft: "0px" }}
    />
    </div>
  </li>
  <li style={{
    padding: 0,
    marginTop: '20px', // Add spacing between logo and button
    display: 'flex',
    justifyContent: 'flex-start'
  }}>
    

     <div style={{ width: '400px', height: '60px', display : 'flex', alignItems: 'flex-start', marginLeft: '10px' }}>
      <Cta text="Book a Flight" />
    </div> 
  </li>
</ul>
      </div>
        </div>
        
      </div>
    
  );
}

export default Parallex;