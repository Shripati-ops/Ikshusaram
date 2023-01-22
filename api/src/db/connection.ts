import * as config from '../config/config.json'
import mongoose from 'mongoose'

const connection = async() => {  
    await mongoose.connect(config.mongooseUrl.serverUrl + '/' + config.mongooseUrl.db).then(res => {
        console.log("Mongoose Connected Successfully");
    }).catch(err => {
        console.log(err);
    })
};

export default connection
