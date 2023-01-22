    import express,{Request,Response,Application} from 'express';
    import jwt from 'jsonwebtoken'

    const {verify} = jwt;
    export const verifyToken = (request:Request,response:Response,next:any) => {
        const token:any = request.body.refreshToken;
        if (token) {
            // verifies secret and checks exp
            verify(token, 'refreshKey', function(err:any, decoded:any) {
                if (err) {
                    return response.status(401).json({"error": true, "message": 'Unauthorized access.'});
                }
                else{   
                    next();
                    return response.status(200).json({"error" : false, "message" : "Access Granted"});
                }
            });
        }
    }

