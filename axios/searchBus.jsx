import { api } from './axiosConfig'


export async function searchbus({ boarding, destination, date }) {
    return await api.get(`/api/buses/search?departure=${boarding}&destination=${destination}&date=${date}`)
}

export async function popularRoutes() {
    return await api.get(`/api/top-routes`)
}