import { api } from './axiosConfig'
import Toast from 'react-native-toast-message'

export async function registerUser(data) {
    
        return await api.post('/api/user/register', data, {
            withCredentials: true, 
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
   
}

export async function loginUser(data) {
    
        return await api.post('/api/user/login', data, {
            withCredentials: true, 
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
    
}

export async function updateUserDetails(data){
    try {
        return await api.post('/api/user/update-profile', data, {
            withCredentials: true, 
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        Toast.show({
            type : "error",
            text1 : "Internal Server Error",
            text2 : error?.response?.data?.message
        })
    }
}