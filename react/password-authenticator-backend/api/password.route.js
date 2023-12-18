import express from 'express';
import PasswordCtrl from './password.controller.js';

const router = express.Router();

router.route("/").get((req,res)=>res.send("it is working!!"));
router.route("/storepassword").post(PasswordCtrl.apiStorePassword);

export default router;