import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const addUser = async (userData) => {
    try {
        const response = await axios.post('http://localhost:5000/api/users', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
