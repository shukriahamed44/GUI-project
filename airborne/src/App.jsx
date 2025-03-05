import React, { useState, useEffect } from 'react';
import './App.css';
import { FiCalendar, FiMapPin, FiUsers, FiArrowRight } from "react-icons/fi";
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import NewPage from './components/NewPage';
import LoginPage from './components/LoginPage';

import Xp from './components/Xp/Xp';
import Cta from './components/Cta/Cta';
import Parallex from './components/Parallex/Parallex';
import Destinations from './components/Destinations/Destinations';
import Carousel from './components/Carousel/Carousel';
import r_image from "/src/images/reg_image.png";
import ImageCr from './components/ImageCr/ImageCr';
import Mmb from './components/Mmb';

import Futar from './components/Futar/Futar';

import { fetchAirports } from './api';


function App() {
  return (
    <Router>
      <Routes>
        {/* Main content route */}
        <Route path="/" element={
          <div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Parallex
                topImage="/src/images/land_window_1.png"
                bottomImage="/src/images/int.jpg"
                middleimage="/src/images/land_window_2.png"
              />

 {/* <div style={{
  width: '80%',
  margin: '0 auto',
  padding: '20px 0',
  display: 'flex',
  justifyContent: 'space-between',
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '12px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
}}>
  <ul style={{
    display: 'flex',
    listStyle: 'none',
    width: '100%',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0
  }}>
    {[
      { path: "/", text: "Home" },
      { path: "/about", text: "About Us" },
      { path: "/services", text: "Services" },
      { path: "/contact", text: "Contact", targetId: "footer" }
    ].map((item, index) => (
      <li key={index}>
        <Link
          to={item.path}
          style={{
            color: 'white',
            padding: '12px 20px',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            fontSize: '16px'
          }}
          onMouseOver={(e) => e.target.style.color = '#5d87b8'}
          onMouseOut={(e) => e.target.style.color = 'white'}
          onClick={(e) => {
            if (item.targetId) {
              e.preventDefault();
              document.getElementById(item.targetId)?.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }}
        >
          {item.text}
        </Link>
      </li>
    ))}
  </ul>
</div>  */}





<div style={{
  zIndex: '4',
  marginRight: '69px',
  marginLeft: 'auto',
  width: '300px',
  height: '70vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '12px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  padding: '20px 0'
}}>
  <ul style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    width: '100%'
  }}>
    {/* Logo Item */}
    <li style={{ 
      marginBottom: '20px', 
      borderBottom: 'none',
      paddingTop: '0'
    }}>
      <img
        src="/src/images/main_logo.jpg"
        alt="Airborne logo"
        style={{ 
          width: "60%", 
          height: "auto", 
          display: 'block',
          margin: '0 auto',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
        }}
      />
    </li>
    
    {/* Existing Navigation Items */}
    {[
      { path: "/", text: "Home" },
      { path: "/about", text: "About Us" },
      { path: "/services", text: "Services" },
      { path: "/contact", text: "Contact", targetId: "footer" }
    ].map((item, index) => (
      <li key={index} style={{
        borderBottom: index !== 3 ? '1px solid rgba(255,255,255,0.2)' : 'none',
        padding: '8px 0'
      }}>
        <Link
          to={item.path}
          style={{
            color: 'white',
            padding: '5px 20px',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            fontSize: '36px',
            display: 'block',
            width: '100%',
            textAlign: 'center'
          }}
          onMouseOver={(e) => e.target.style.color = '#5d87b8'}
          onMouseOut={(e) => e.target.style.color = 'white'}
          onClick={(e) => {
            if (item.targetId) {
              e.preventDefault();
              document.getElementById(item.targetId)?.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }}
        >
          {item.text}
        </Link>
      </li>
    ))}
  </ul>
</div>
<h1 style ={{height: '40vh'}}></h1>

              
              <div style={{width: "100%", height: "50vh", backgroundColor: "#1A1A1A", zIndex: "1", alignItems: "center", justifyItems: "center" }}>
                <BookingSection/>
              </div>
              <Xp/>
              <Destinations style={{zIndex: "2", backgroundColor: "white"}}/>
              <Mmb text="Login to become a member" to="/login"  style={{zIndex: '2'}}/>
              <main>
                <h1 style={{fontWeight: "Light"}}>Welcome to Our Private Aviation Company</h1>
                <p>Fly with us and experience luxury!</p>
                <section>
                  <h2>Our Premium Fleet</h2>
                </section>
              </main>
            </div>
            <div>
              <hr 
                style={{
                  border: 0,
                  height: "5px",
                  backgroundColor: "#5d87b8",
                  margin: "40px 50px 40px 20px",
                  position: "relative",
                  overflow: "hidden", 
                  zIndex: 1,
                }}
              /> 
              <Footer id = '/contact'/>
              <Futar />

            </div>
          </div>
        } />

        {/* New Page route */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/new-page" element={<NewPage />} />
      </Routes>
    </Router>
  );
}




import { Link } from 'react-router-dom';

function Header() {
  const imgone = [{src: "/src/images/main_logo.jpg"}];
  return (
    <header>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="header-c">
        <ul>
          
          <li><img
            src="/src/images/main_logo.jpg" // Updated to include the correct Vite-compatible path.
            alt="Airborne logo"
            style={{ width: "60%", height: "auto", marginTop: "80px" }}
          /></li>
          
          <li><div><Cta text = "Book a Flight" /></div></li>
        </ul>
      </div>

      <div style={{display: "flex", flexDirection: "Row",marginTop: "180px", marginBottom: "20px", justifyContent: "center" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "LightMedium", margin: "0", padding: "0"}}>Get personalized aviation with</h1>
        <img
          src = {r_image}
          style = {{height: "50px", width: "auto", paddingLeft: "15px"}}
        />
      </div>


    </header>
  );
}




function Footer() {
  return (
    <footer>
      <p>© 2024 Private Aviation Line. All Rights Reserved.</p>
    </footer>
    
  );

  
}

/*function CTA() {
  return (
    <button className="cTA-button" style={{ marginTop: "50px", padding: "0px 20px 0px 20px", fontSize: "1.5rem" }}>
      <p style={{ padding: "0px 20px", fontFamily: "CreatoDisplay" }}>Book a Flight</p>
    </button>
  )

}*/










{/*/////////////////////////////////////// */}




// function BookingSection() {
//   const [airports, setAirports] = useState([]);
//   const [departure, setDeparture] = useState('');
//   const [arrival, setArrival] = useState('');
//   const [passengers, setPassengers] = useState(1);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [useSampleData, setUseSampleData] = useState(false);

//    // Sample data
//    const sampleAirports = [
//     { id: 1, airport_Name: 'Sample Airport 1' },
//     { id: 2, airport_Name: 'Sample Airport 2' },
//     { id: 3, airport_Name: 'Sample Airport 3' },
//   ];

//   // Fetch airports from backend
//   useEffect(() => {
//     const fetchAirports = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/airports');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setAirports(data);
//       } catch (error) {
//         console.error('Error fetching airports:', error);
//         setUseSampleData(true);
//       }
//     };
//     fetchAirports();
//   }, []);

//   // Style objects
//   const containerStyle = {
//     display: 'flex',
//     width: '80%',
//     height: '120px',
//     margin: '20px auto',
//     backgroundColor: '#1a1a1a',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
//   };

//   const sectionStyle = {
//     flex: 1,
//     borderRight: '1px solid #333',
//     padding: '20px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'relative'
//   };

//   const dropdownStyle = {
//     width: '100%',
//     backgroundColor: '#1a1a1a',
//     border: 'none',
//     color: '#fff',
//     fontSize: '16px',
//     padding: '8px',
//     outline: 'none',
//     textAlign: 'center'
//   };

//   const arrowButtonStyle = {
//     backgroundColor: '#5d87b8',
//     border: 'none',
//     borderRadius: '50%',
//     width: '50px',
//     height: '50px',
//     cursor: 'pointer',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   };

//   // Custom date picker input
//   const CustomDateInput = ({ value, onClick }) => (
//     <button
//       onClick={onClick}
//       style={{
//         ...dropdownStyle,
//         cursor: 'pointer',
//         color: value ? '#fff' : '#666'
//       }}
//     >
//       {value || 'Select Date'}
//     </button>
//   );

//   const navigate = useNavigate();


//   return (
//     <div style={containerStyle}>
//       {/* Date Picker Section */}
//       <div style={{ ...sectionStyle, flex: 0.8 }}>
//         <h3 style={{ color: '#666', marginBottom: '8px' }}>Date</h3>
//         <DatePicker
//           selected={selectedDate}
//           onChange={(date) => setSelectedDate(date)}
//           minDate={new Date()}
//           customInput={<CustomDateInput />}
//           popperClassName="react-datepicker-dark"
//         />
//       </div>

//       {/* Departure Section */}
//       <div style={sectionStyle}>
//         <h3 style={{ color: '#666', marginBottom: '8px' }}>Departure</h3>
//         <select
//           value={departure}
//           onChange={(e) => setDeparture(e.target.value)}
//           style={dropdownStyle}
//         >
//           <option value="" hidden>Select Airport</option>
//           {(useSampleData ? sampleAirports : airports).map((airport) => (
//             <option key={airport.id} value={airport.id}>
//               {airport.airport_Name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Arrival Section */}
//       <div style={sectionStyle}>
//   <h3 style={{ color: '#666', marginBottom: '8px' }}>Arrival</h3>
//   <select
//     value={arrival}
//     onChange={(e) => setArrival(e.target.value)}
//     style={dropdownStyle}
//   >
//     <option value="" hidden>Select Airport</option>
//     {/* Use sample data condition here too */}
//     {(useSampleData ? sampleAirports : airports).map((airport) => (
//       <option key={airport.id} value={airport.id}>
//         {airport.airport_Name}
//       </option>
//     ))}
//   </select>
// </div>

//       {/* Passengers Section */}
//       <div style={sectionStyle}>
//         <h3 style={{ color: '#666', marginBottom: '8px' }}>Passengers</h3>
//         <select
//           value={passengers}
//           onChange={(e) => setPassengers(e.target.value)}
//           style={dropdownStyle}
//         >
//           {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
//             <option key={num} value={num}>
//               {num}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Arrow Section */}
//       <div style={{ ...sectionStyle, borderRight: 'none', flex: 0.5 }}>
//       // In BookingSection component
// <button
//   style={arrowButtonStyle}
//   onClick={() => {
//     const airportsList = useSampleData ? sampleAirports : airports;
//     const departureAirport = airportsList.find(a => a.id === departure);
//     const arrivalAirport = airportsList.find(a => a.id === arrival);
    
//     navigate('/new-page', {
//       state: {
//         date: selectedDate.toLocaleDateString(),
//         departure: departureAirport?.airport_Name || 'Unknown',
//         arrival: arrivalAirport?.airport_Name || 'Unknown',
//         passengers: passengers
//       }
//     });
//   }}
// >
//   {/* SVG Icon */}
// </button>
//       </div>
//     </div>
//   );
// }



// ... (keep all existing state and useEffect logic)

function BookingSection() {
  const [airports, setAirports] = useState([]);
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [useSampleData, setUseSampleData] = useState(false);

   // Sample data
   const sampleAirports = [
    { id: 1, airport_Name: 'Sample Airport 1' },
    { id: 2, airport_Name: 'Sample Airport 2' },
    { id: 3, airport_Name: 'Sample Airport 3' },
  ];

  // Fetch airports from backend
  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const response = await fetch('http://localhost:3000/airports');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAirports(data);
      } catch (error) {
        console.error('Error fetching airports:', error);
        setUseSampleData(true);
      }
    };
    fetchAirports();
  }, []);

  // Style objects
  const containerStyle = {
    display: 'flex',
    width: '80%',
    height: '120px',
    margin: '20px auto',
    backgroundColor: '#1a1a1a',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  };

  const sectionStyle = {
    flex: 1,
    borderRight: '1px solid #333',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  };

  const dropdownStyle = {
    width: '100%',
    backgroundColor: '#1a1a1a',
    border: 'none',
    color: '#fff',
    fontSize: '16px',
    padding: '8px',
    outline: 'none',
    textAlign: 'center'
  };

  const arrowButtonStyle = {
    backgroundColor: '#5d87b8',
    border: 'none',
    borderRadius: '18%',
    width: '80px',
    height: '50px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  // Custom date picker input
  const CustomDateInput = ({ value, onClick }) => (
    <button
      onClick={onClick}
      style={{
        ...dropdownStyle,
        cursor: 'pointer',
        color: value ? '#fff' : '#666'
      }}
    >
      {value || 'Select Date'}
    </button>
  );

  const navigate = useNavigate();
return (
  <div style={containerStyle}>
    {/* Date Picker Section */}
    <div style={{ ...sectionStyle, flex: 0.8, alignItems: 'flex-start' }}>
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        marginBottom: '8px',
        color: '#666',
        gap: '8px'
      }}>
        <FiCalendar size={32} />
        <h3 style={{ margin: 0, fontSize: '40px' }}>Date</h3>
      </div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        minDate={new Date()}
        customInput={
          <button
            style={{
              ...dropdownStyle,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingRight: '12px',
              paddingLeft: '12px',
              transition: 'all 0.3s ease',
              gap: '8px'
            }}
          >
            {selectedDate ? (
              <>
                <FiCalendar size={16} color="#fff" />
                {selectedDate.toLocaleDateString()}
              </>
            ) : (
              <>
                <FiCalendar size={16} color="#666" />
                Select Date
              </>
            )}
          </button>
        }
        popperClassName="react-datepicker-dark"
      />
    </div>

    {/* Departure Section */}
    <div style={sectionStyle}>
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        marginBottom: '8px',
        color: '#666',
        gap: '8px'
      }}>
        <FiMapPin size={32} />
        <h3 style={{ margin: 0, fontSize: '40px' }}>Departure</h3>
      </div>
      <select
        value={departure}
        onChange={(e) => setDeparture(e.target.value)}
        style={{
          ...dropdownStyle,
          paddingRight: '30px',
          paddingLeft: '30px',
          transition: 'all 0.3s ease',
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'><path d='M6 9l6 6 6-6'/></svg>")`,
          backgroundPosition: 'right 10px center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <option value="" hidden>Select Airport</option>
        {(useSampleData ? sampleAirports : airports).map((airport) => (
          <option key={airport.id} value={airport.id}>
            {airport.airport_Name}
          </option>
        ))}
      </select>
    </div>

    {/* Arrival Section */}
    <div style={sectionStyle}>
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        marginBottom: '8px',
        color: '#666',
        gap: '8px'
      }}>
        <FiMapPin size={32} />
        <h3 style={{ margin: 0, fontSize: '40px' }}>Arrival</h3>
      </div>
      <select
        value={arrival}
        onChange={(e) => setArrival(e.target.value)}
        style={{
          ...dropdownStyle,
          paddingRight: '30px',
          paddingLeft: '30px',
          transition: 'all 0.3s ease',
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'><path d='M6 9l6 6 6-6'/></svg>")`,
          backgroundPosition: 'right 10px center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <option value="" hidden>Select Airport</option>
        {(useSampleData ? sampleAirports : airports).map((airport) => (
          <option key={airport.id} value={airport.id}>
            {airport.airport_Name}
          </option>
        ))}
      </select>
    </div>

    {/* Passengers Section */}
    <div style={sectionStyle}>
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        marginBottom: '8px',
        color: '#666',
        gap: '8px'
      }}>
        <FiUsers size={30} />
        <h3 style={{ margin: 0, fontSize: '40px' }}>Passengers</h3>
      </div>
      <select
        value={passengers}
        onChange={(e) => setPassengers(e.target.value)}
        style={{
          ...dropdownStyle,
          paddingRight: '30px',
          paddingLeft: '30px',
          transition: 'all 0.3s ease',
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'><path d='M6 9l6 6 6-6'/></svg>")`,
          backgroundPosition: 'right 10px center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>

    {/* Arrow Section */}
    <div style={{ 
      ...sectionStyle,
      borderRight: 'none',
      flex: 0.5,
      justifyContent: 'center',
      backgroundColor: ' #1a1a1a'
    }}>
      <button
        style={{
          ...arrowButtonStyle,
          width: '90px',
          height: '70px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          transition: 'transform 0.2s ease'
        }}
        onClick={() => {
          const airportsList = useSampleData ? sampleAirports : airports;
          const departureAirport = airportsList.find(a => a.id === departure);
          const arrivalAirport = airportsList.find(a => a.id === arrival);
          
          navigate('/new-page', {
            state: {
              date: selectedDate.toLocaleDateString(),
              departure: departureAirport?.airport_Name || 'Unknown',
              arrival: arrivalAirport?.airport_Name || 'Unknown',
              passengers: passengers
            }
          });
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <FiArrowRight size={28} color="#fff" />
      </button>
    </div>
  </div>
);
}




export default App;
