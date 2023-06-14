import axios from 'axios';
const useAxiosProtected = () => {

    const axiosProtect = axios.create({
        baseURL: 'https://summer-camp-server-six-iota.vercel.app/'
    })
    axiosProtect.interceptors.request.use(request => {
        const token = localStorage.getItem('token-receive')
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

