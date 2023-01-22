import { axiosPublic } from "./axiosPublic";
export const refreshToken = async() => {
    const rawTokens:any = localStorage.getItem("tokens");
    const tokens = JSON.parse(rawTokens);
    console.log(tokens.tokens.token.refreshToken)   
    try {
        const response = await axiosPublic.post("/auth/refresh", {refreshToken:tokens.tokens.token.refreshToken});
        const session = response.data;
        return session;
    }catch(error) {
        console.log(error);
    }
    
}