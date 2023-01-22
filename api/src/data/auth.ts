import { User } from "../interface/userInterface";
import userModel from "../models/userModel";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const {sign} = jwt;

const authFunctions = {
    'rootFunction': async (data:any) =>{
        const user:any = await userModel.find({username:data.email})

        if(await bcrypt.compare(data.password,user[0].password)){
        const Accesstoken = sign({email : user[0].username, password : user[0].password},"key",{expiresIn:"30m"})
        const refreshToken = sign({email : user[0].username, password:user[0].password},"refreshKey",{expiresIn:"1d"})
        return {error:false, token:{Accesstoken,refreshToken}}; 
        }else{
            return {error:true, message: "Invalid Credentialsx"}
        }
    },

    'refreshFunction' : (data:User) => {
        const Accesstoken = sign({email : data.email, password : data.password},"key",{expiresIn:"30m"})
        return Accesstoken;
    },

    'signupFunction' : async (data:any) => {
        var newData = {};

        const encryptedPassword = await bcrypt.hash(data.password,10);

        newData = {username: data.username, password: encryptedPassword};

        await userModel.create(newData);
        return {error:false, message : "data inserted Successfully"}
    }
}

export default authFunctions;