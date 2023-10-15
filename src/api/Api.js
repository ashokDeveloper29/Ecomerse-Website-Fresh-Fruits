import { ARL_URL } from "../Utils"
import { getToken } from "../component/utils/Storage,"
import { ROUTE } from "../routes/Routes"

export const image = async()=>{
    const res = await fetch(`${ARL_URL}${ROUTE?.allProduct}`,{
        method:"Get",
        headers:{
                "Content-type" : "application/json"
            },
        body:JSON.stringify()

    })
    return await res.json()

}

export const getProductCategory = async(id)=>{
    const res = await fetch(`http://localhost:8088/auth/category/${id}`,{
        method:"Post",
        headers:{
            
                "Content-type" : "application/json"
            },
        body:JSON.stringify()

    })
    return await res.json()

}

export const getSingelProduct = async (id)=>{
    const res = await fetch(`http://localhost:8088/auth/admin/${id}`,{
        method:"Get",
        headers:{
            
            "Content-type" : "application/json"
        },
        body:JSON.stringify()
    })
    return await res.json()
}


export const rgistration = async (data)=>{
    const res = await fetch(`${ARL_URL}${ROUTE.signUp}`,{
        method:"Post",
        headers:{
            "Content-type" : "application/json"
        },
        body:JSON.stringify(data)
    })
    return await res.json()
}



export const login = async (data)=>{
    const res = await fetch(`${ARL_URL}${ROUTE?.login}`,{
        method:"Post",
        headers:{
            "Content-type" : "application/json"
        },
        body:JSON.stringify(data)
    })
    return await res.json()
}


export const sliderImage = async()=>{
    const res = await fetch(`${ARL_URL}${ROUTE.slider}`,{
        method:"Get",
        
    })
    return await res.json()

}



export const getProductSubCategory = async(id)=>{
        
    const res = await fetch(`http://localhost:8088/api/subcategory/${id}`,{
        method:"Post",
        headers:{
            
                "Content-type" : "application/json"
            },
        body:JSON.stringify()

    })
    return await res.json()

}

export const allCategory = async ()=>{
    const res = await fetch("http://localhost:8088/auth/category",{
        method:"GET",
        headers:{
            
            "Content-type" : "application/json"
        },
        body:JSON.stringify()
    })
    return await res.json()
}



export const searchProduct = async (data)=>{
    const res = await fetch("http://localhost:8088/auth/search",{
        method:"Post",
        headers:{
            "Content-type" : "application/json"
        },
        body:JSON.stringify(data)
    })
    return await res.json()
}

export const addToCartApi = async (data)=>{
    const res = await fetch("http://localhost:8088/api/addcart",{
        method:"Post",
        headers:{
            "Authorization":`Bearer ${getToken()}`,
            "Content-type" : "application/json"
        },
        body:JSON.stringify(data)
    })
    return await res.json()
}

export const addToCartGet = async()=>{
    const res = await fetch("http://localhost:8088/api/addcart",{
        method:"get",
        headers:{
            "Authorization":`Bearer ${getToken()}`,
            "Content-type" : "application/json"
        },
        body:JSON.stringify()
    })
    return await res.json()
}



export const addToCartDelete = async(deleteId)=>{
    console.log(deleteId + "deleteId")
    const res = await fetch(`http://localhost:8088/api/addcart/${deleteId}`,{
        method:"DELETE",
        headers:{
            "Authorization":`Bearer ${getToken()}`,
        },
        body:JSON.stringify()
    })
    return await res.json()
}


export const payment = async (data)=>{
    const res = await fetch("http://localhost:8088/api/order",{
        method:"Post",
        headers:{
            "Authorization":`Bearer ${getToken()}`,
            "Content-type" : "application/json"
        },
        body:JSON.stringify(data)
    })
    return await res.json()
}


export const verify = async (data)=>{
    const res = await fetch("http://localhost:8088/api/verify",{
        method:"Post",
        headers:{
            "Authorization":`Bearer ${getToken()}`,
            "Content-type" : "application/json"
        },
        body:JSON.stringify(data)
    })
    return await res.json()
}