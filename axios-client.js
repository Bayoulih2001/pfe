import axios from "axios"
import router from "./router";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.BASE_URL}`
});

axiosClient.interceptors.request.use((Config) => {
    const token = '123';
    Config.headers.Authorization = `Bearer ${localStorage.getItem('TOKEN')}`;
    return Config;
});

axiosClient.interceptors.response.use((response) => {
    return response;
}, error => {
        if (error.response && error.response.status === 401) {
            router.navigate('/login')
            return error;
        }
        throw error;
});

export default axiosClient;