import axios from 'axios';

// Create an instance of Axios with default settings
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_HARRY_POTTER_CHARACTERS, // Use Vite's environment variables
  timeout: 10000, // Set a timeout for requests (optional)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a response interceptor to handle errors globally
apiClient.interceptors.response.use(
  response => response,
  error => {
    // Handle errors globally
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// Helper function to make GET requests
export const get = (url, params = {}) => {
  return apiClient.get(url, { params });
};

// Helper function to make POST requests
export const post = (url, data = {}) => {
  return apiClient.post(url, data);
};

// Helper function to make PUT requests
export const put = (url, data = {}) => {
  return apiClient.put(url, data);
};

// Helper function to make DELETE requests
export const del = (url, params = {}) => {
  return apiClient.delete(url, { params });
};
