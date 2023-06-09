import axios from 'axios';
const useAxiosProtected = () => {

    const axiosProtect = axios.create({
        baseURL: 'http://localhost:5000/'
    })
    axiosProtect.interceptors.request.use(request => {
        const token = localStorage.getItem('access-token')
        request.headers.Authorization = `bearer ${token}`
        return request;
    })
    axiosProtect.interceptors.response.use(response => {
        return response.data
    }),
        (err) => {
            return Promise.reject(err)
        }

    return [axiosProtect]
};

export default useAxiosProtected;