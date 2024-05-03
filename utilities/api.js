import axios from 'axios';
export const fetchUniversities = async () => {
  try {
    const response = await axios.get('http://universities.hipolabs.com/search?country=United%20Arab%20Emirates');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Returning an empty array to handle errors gracefully
  }
};
