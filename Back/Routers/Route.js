const express=require("express")
const router=express.Router();
const{MobileLogin,Otp}=require("../Controller/OtpAuth")
const {SignUp,getAll,Login,userVerification,getUser} = require("../Controller/Register");
const passport=require("passport")



router.post("/",SignUp)
router.get("/",getAll)
router.post("/login",Login)
router.post("/mobilelogin",MobileLogin)
router.post("/otp",Otp)
router.get("/verify",userVerification,getUser)

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: 'http://localhost:5173/home',
    failureRedirect: 'http://localhost:5173'
}));

router.get('/login/success', (req, res) => {
    if (req.user) {
        res.status(200).json({ message: "success", user: req.user });
    } else {
        res.status(400).json({ message: "unsuccess" });
    }
});router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: 'http://localhost:5173/home',
    failureRedirect: 'http://localhost:5173'
}));

router.get('/login/success', (req, res) => {
    if (req.user) {
        res.status(200).json({ message: "success", user: req.user });
    } else {
        res.status(400).json({ message: "unsuccess" });
    }
});



module.exports=router