// App.jsx
import { useState } from 'react';
import { FaUser, FaLock, FaPlaneDeparture } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    alert('Login submitted!');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-section">
          {/* <FaPlaneDeparture className="logo-icon" /> */}
          {/* <h1>SkyElite Airways</h1> */}
          <img
        src="/src/images/main_logo.jpg"
        alt="Airborne logo"
        style = {{width: '60%'}}/>
          <p>Private Aviation Experience</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <div className="form-footer">
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;