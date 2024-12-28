import React from 'react';
import './App.css'; // If you want to add styles here, this is optional.



function Footer() {
  return (
    <footer>
      <p>© 2024 Private Aviation Line. All Rights Reserved.</p>
    </footer>
  );
}

function Header() {
  return (
    <header>
      <h1>Private Aviation Line</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to Our Private Aviation Company</h1>
        <p>Fly with us and experience luxury!</p>
      </main>
      <Footer />
    </div>
  );
}



export default App;
