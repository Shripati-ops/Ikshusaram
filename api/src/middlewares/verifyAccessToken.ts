import express,{Request,Response,Application} from 'express';
import jwt from 'jsonwebtoken'

const {verify} = jwt;
export const verifyAccessToken = (request:Request,response:Response,next:any) => {
    const token:any = request.headers.authorization;
    const newToken:string = token.split(' ')[1]
    
    if (newToken) {
        // verifies secret and checks exp
        verify(newToken, 'key', function(err:any, decoded:any) {
            if (err) {
                return response.status(401).json({"error": true, "message": 'Unauthorized access.' });
            }
            else{
                next();
            }
        });
    }
}
