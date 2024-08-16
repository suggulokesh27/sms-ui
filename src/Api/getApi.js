import axios from 'axios';

// const PORT = 8083;
const getApi = async (URL,header,PORT) => {
    
    try {
        const response = await axios.get(`http://localhost:${PORT}/api/v1/${URL}`,{
            headers : header
        });
        return response; 
    } catch (err) {
        console.error('Error fetching data from API:', err.message);
        if (err.response) {
            console.error('Response error:', err.response.status, err.response.data);
        } else if (err.request) {
            console.error('No response received:', err.request);
        } else {
            console.error('Request setup error:', err.message);
        }
        return { error: "Url Not Found" };
    }
};

export default getApi;
