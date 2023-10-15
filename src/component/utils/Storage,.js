export function setStorage(logindata){
    localStorage.setItem("loginInfo",JSON.stringify(logindata))
    }
    
    export function getToken(){
        if(localStorage.getItem("loginInfo")){
            return JSON.parse(localStorage.getItem("loginInfo")).token
        }
    }
    
    export function crearStorage(){
        localStorage.clear()
    }
    
    export function getStorage(){
        if(localStorage.getItem("loginInfo")){
            return JSON.parse(localStorage.getItem("loginInfo"))
        }
    }