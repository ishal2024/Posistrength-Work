import {api} from './axiosConfig'


export async function searchbus(){
    return await api.get(`https://www.dev.pssplbooking.com/api/buses/search?departure=Delhi&destination=Lucknow&date=2025-12-17`) 
}