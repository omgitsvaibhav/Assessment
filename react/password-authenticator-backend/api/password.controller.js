import PasswordDao from "../passwordDao.js";

export default class PasswordCtrl{
    static async apiStorePassword(req,res, next){
        try{
            const passwordValue = req.body.password;
            //console.log(passwordValue);

            const dbResponse = await PasswordDao.storePassword(passwordValue);
            if(dbResponse){
                console.log(`successfully stored password in DB`);
            }
            res.json({status:"success"});
        }catch(e){
            res.status(500).json({error: e.message})
        }
    }
}