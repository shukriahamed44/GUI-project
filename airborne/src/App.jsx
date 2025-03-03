import React, { useState, useEffect } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import NewPage from './components/NewPage';

import Xp from './components/Xp/Xp';
import Cta from './components/Cta/Cta';
import Parallex from './components/Parallex/Parallex';
import Destinations from './components/Destinations/Destinations';
import Carousel from './components/Carousel/Carousel';
import r_image from "/src/images/reg_image.png";
import ImageCr from './components/ImageCr/ImageCr';

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
              <Header />
              <div style={{width: "100%", height: "50vh", backgroundColor: "#1A1A1A", zIndex: "1", alignItems: "center", justifyItems: "center" }}>
                <BookingSection/>
              </div>
              <Xp/>
              <Destinations style={{zIndex: "2", backgroundColor: "white"}}/>
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
              <Footer />
            </div>
          </div>
        } />

        {/* New Page route */}
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
    borderRadius: '50%',
    width: '50px',
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
      <div style={{ ...sectionStyle, flex: 0.8 }}>
        <h3 style={{ color: '#666', marginBottom: '8px' }}>Date</h3>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={new Date()}
          customInput={<CustomDateInput />}
          popperClassName="react-datepicker-dark"
        />
      </div>

      {/* Departure Section */}
      <div style={sectionStyle}>
        <h3 style={{ color: '#666', marginBottom: '8px' }}>Departure</h3>
        <select
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          style={dropdownStyle}
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
  <h3 style={{ color: '#666', marginBottom: '8px' }}>Arrival</h3>
  <select
    value={arrival}
    onChange={(e) => setArrival(e.target.value)}
    style={dropdownStyle}
  >
    <option value="" hidden>Select Airport</option>
    {/* Use sample data condition here too */}
    {(useSampleData ? sampleAirports : airports).map((airport) => (
      <option key={airport.id} value={airport.id}>
        {airport.airport_Name}
      </option>
    ))}
  </select>
</div>

      {/* Passengers Section */}
      <div style={sectionStyle}>
        <h3 style={{ color: '#666', marginBottom: '8px' }}>Passengers</h3>
        <select
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          style={dropdownStyle}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      {/* Arrow Section */}
      <div style={{ ...sectionStyle, borderRight: 'none', flex: 0.5 }}>
        <button
          style={arrowButtonStyle}
          onClick={() => navigate('/new-page') } //Add navigation logic here
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}






export default App;
