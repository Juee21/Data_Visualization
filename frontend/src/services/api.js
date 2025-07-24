import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getAllDataPoints = () => api.get('/data-points');
export const getDataPointById = (id) => api.get(`/data-points/${id}`);
export const createDataPoint = (data) => api.post('/data-points', data);
export const updateDataPoint = (id, data) => api.put(`/data-points/${id}`, data);
export const deleteDataPoint = (id) => api.delete(`/data-points/${id}`);

export default api; 