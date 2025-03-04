import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { date, departure, arrival, passengers } = location.state || {};

  const [passengerDetails, setPassengerDetails] = useState(
    Array.from({ length: passengers }, () => ({
      name: '',
      idNumber: ''
    }))
  );
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleInputChange = (index, field, value) => {
    const newDetails = [...passengerDetails];
    newDetails[index][field] = value;
    setPassengerDetails(newDetails);
  };

  const handlePayment = () => {
    const allFilled = passengerDetails.every(
      (p) => p.name && p.idNumber
    );
    
    if (!allFilled) {
      alert('Please complete all passenger details');
      return;
    }
    
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }
    
    alert('Payment successful!');
    navigate('/');
  };

  if (!date || !departure || !arrival) {
    return (
      <div style={{
        color: 'red',
        textAlign: 'center',
        margin: '50px'
      }}>
        Invalid booking data
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      background: '#2B2B2B',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center' }}>Flight Checkout</h1>
      
      <div style={{
        background: 'white',
        padding: '25px',
        borderRadius: '8px',
        marginBottom: '30px'
      }}>
        <h2>Booking Details</h2>
        {[
          { label: 'Date', value: date },
          { label: 'Departure', value: departure },
          { label: 'Arrival', value: arrival },
          { label: 'Passengers', value: passengers }
        ].map((item, index) => (
          <div key={index} style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '12px 0',
            borderBottom: index < 3 ? '1px solid #eee' : 'none'
          }}>
            <span style={{ color: '#666', fontWeight: 600 }}>{item.label}:</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>

      <div style={{
        background: 'white',
        padding: '25px',
        borderRadius: '8px',
        marginBottom: '30px'
      }}>
        <h2>Passenger Information</h2>
        {passengerDetails.map((passenger, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h3>Passenger {index + 1}</h3>
            <input
              type="text"
              placeholder="Full Name"
              value={passenger.name}
              onChange={(e) => handleInputChange(index, 'name', e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                margin: '8px 0',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px'
              }}
              required
            />
            <input
              type="text"
              placeholder="Passport/ID Number"
              value={passenger.idNumber}
              onChange={(e) => handleInputChange(index, 'idNumber', e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                margin: '8px 0',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px'
              }}
              required
            />
          </div>
        ))}
      </div>

      <div style={{
        background: 'white',
        padding: '25px',
        borderRadius: '8px'
      }}>
        <h2>Payment Method</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginBottom: '25px'
        }}>
          {['visa', 'mastercard', 'amex'].map((method) => (
            <label key={method} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px',
              border: `2px solid ${paymentMethod === method ? '#4CAF50' : '#ddd'}`,
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              background: paymentMethod === method ? '#e8f5e9' : 'transparent'
            }}>
              <input
                type="radio"
                name="payment"
                value={method}
                checked={paymentMethod === method}
                onChange={(e) => setPaymentMethod(e.target.value)}
                style={{ display: 'none' }}
              />
              <span style={{
                fontSize: '18px',
                fontWeight: 600,
                padding: '10px 0',
                width: '100%',
                textAlign: 'center',
                color: method === 'visa' ? '#1a1f71' :
                      method === 'mastercard' ? '#EB001B' :
                      '#007CC2'
              }}>
                {method.toUpperCase()}
              </span>
            </label>
          ))}
        </div>
      </div>

      <button 
        style={{
          background: paymentMethod ? '#4CAF50' : '#cccccc',
          color: 'white',
          border: 'none',
          padding: '15px 30px',
          borderRadius: '25px',
          fontSize: '18px',
          cursor: paymentMethod ? 'pointer' : 'not-allowed',
          width: '100%',
          transition: 'background 0.3s ease'
        }}
        onClick={handlePayment}
        disabled={!paymentMethod}
      >
        Confirm & Pay
      </button>
    </div>
  );
};

export default NewPage;