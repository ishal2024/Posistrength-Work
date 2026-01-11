import {api} from './axiosConfig'


export async function homePageData(){
    return await api.get('/api/home/data' , {
        withCredentials : true,
        headers : {
            Accept : "application/json",
            "Content-Type" : "application/json"
        }
    })
}

export async function contactPageData(){
    return await api.get('/api/home/contact-page' , {
        withCredentials : true,
        headers : {
            Accept : "application/json",
            "Content-Type" : "application/json"
        }
    })
}

export async function citiesData(){
    return await api.get('/api/cities' , {
        withCredentials : true,
        headers : {
            Accept : "application/json",
            "Content-Type" : "application/json"
        }
    })
}


export async function allBlogsData(){
    return await api.get('/api/home/blogs' , {
        withCredentials : true,
        headers : {
            Accept : "application/json",
            "Content-Type" : "application/json"
        }
    })
}

