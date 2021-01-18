const express = require("express")
const router = express.Router()
const signUpTemCopy = require("../models/Signup")

router.post('/signup', (req, res) =>{
    const signedUpUser = new signUpTemCopy({
        fullName:req.body.fullName,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password

    })
    signedUpUser.save()
    .then(data => {
        res.json(data.signedUpUser)
    })
    .catch(error => {
        res.json(error)
    })
})

module.exports = router