import { api } from './axiosConfig'


export async function searchbus() {
    const todayDate = new Date()
    const formattedDate = String(todayDate.getDate()).padStart(2, '0') + '-' +
        String(todayDate.getMonth() + 1).padStart(2, '0') + '-' +
        todayDate.getFullYear();
    return await api.get(`https://www.dev.pssplbooking.com/api/buses/search?departure=Delhi&destination=Lucknow&date=${formattedDate}`)
}