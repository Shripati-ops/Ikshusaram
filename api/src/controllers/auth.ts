import express,{Request,Response,Application} from 'express';
const authRouter = express.Router();

import { verifyToken } from '../middlewares/verifyRefreshToken';
import { verifyAccessToken } from '../middlewares/verifyAccessToken';
import authFunctions from '../data/auth';
// define the path for the routers
authRouter.post('/', async (req:Request, res:Response) => { 
    
    const response:any = await authFunctions.rootFunction(req.body);
    if(response.error){
        return res.status(401).json(response);
    }else{
        return res.status(200).json(response)
    }
})

authRouter.post('/signup', async (req:Request, res:Response) => {
    const response:any = await authFunctions.signupFunction(req.body);
    if(response.error){
        return res.status(401).json(response);
    }else{
        return res.status(200).json(response)
    }
})

authRouter.post('/refresh', verifyToken, (req:Request,res:Response) => {
    const newToken = authFunctions.refreshFunction(req.body);
    return res.send({'data' : newToken});
})

authRouter.post("/users", verifyAccessToken, (req:Request, res:Response) => {
    return res.send(req.body);
})



export default authRouter;

