import app from "./server.js";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import PasswordDao from "./passwordDao.js";

dotenv.config();

const mongo_username = process.env.MONGO_USERNAME;
const mongo_password = process.env.MONGO_PASSWORD;

const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.gsqxeed.mongodb.net/`;
const client = new MongoClient(uri);

const port = 8000;

(async ()=>{
    try{
        client.connect().catch((err)=>{
            console.error(`error occured in connecting client to server: ${err}`);
            process.exit(1);
        });

        await PasswordDao.injectDB(client);

        app.listen(port, ()=>{
            console.log(`listening on port ${port}`);
        })
    }
    catch(error){
        console.error(`error connecting to db: ${error}`);
        process.exit(1);
    }
})();
