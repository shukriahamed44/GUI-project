import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchAirports = async () => {
  try {
    console.log("Fetching airports...");

    const response = await api.get('/airports');
    console.log("Airport response:", response);

    return response.data;
  } catch (error) {
    console.error('API Errtror:', error.response?.data || error.message);
    console.error('API Errtrtror message:', error.message);

    if (error.response) {
        console.error('API Error status:', error.response.status);
        console.error('API Error data:', error.response.data);
      }
      
    throw error;
  }
};

export const createFlightBooking = async (bookingData) => {
  try {
    const response = await api.post('/flights', bookingData);
    return response.data;
  } catch (error) {
    console.error('Booking Error:', error.response?.data || error.message);
    throw error;
  }
};