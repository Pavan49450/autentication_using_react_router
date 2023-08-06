import { redirect } from "react-router-dom";

export const getAuthToken=()=>{
    const token = localStorage.getItem('token');
    if(!token){
        return null;
    }
    const tokenDuration = getTokenDuration();
    if(tokenDuration<0){
        return 'EXPIRED';

    }
    return token;
    
}

export function getTokenDuration(){
    const StoredExpirationDate = localStorage.getItem('expiration')
    const expirationDate = new Date(StoredExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
}

export const tokenLoader=()=>{
    return getAuthToken();
    
}

export const checkAuthToken=()=>{
    const token = getAuthToken();

    if(!token){
        window.alert('Please login')
        return redirect('/auth');
    }
    else{
        return null;
    }
    
}
