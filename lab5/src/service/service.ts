import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const CACHE_KEY = 'user_profiles';

export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch users');
    }
};

export const getCachedUsers = async () => {
    const cachedData = await AsyncStorage.getItem(CACHE_KEY);
    return cachedData ? JSON.parse(cachedData) : null;
};
