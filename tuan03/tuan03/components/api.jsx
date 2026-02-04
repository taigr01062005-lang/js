const API_URL = 'https://698312909c3efeb892a44b29.mockapi.io/a/:endpoint';

// --- Dùng FETCH + ASYNC/AWAIT ---
export const getUsersFetch = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Lỗi Fetch GET:", error);
    }
};

// --- Dùng AXIOS (Cần cài đặt: npm install axios) ---
import axios from 'axios';

// READ (GET)
export const getUsers = async () => {
    const res = await axios.get(API_URL);
    return res.data;
};

// CREATE (POST)
export const createUser = async (name) => {
    const res = await axios.post(API_URL, { name: name });
    return res.data;
};

// UPDATE (PUT)
export const updateUser = async (id, newName) => {
    const res = await axios.put(`${API_URL}/${id}`, { name: newName });
    return res.data;
};

// DELETE (DELETE)
export const deleteUser = async (id) => {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
};