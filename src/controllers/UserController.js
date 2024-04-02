
const {User} = require("../db")

const getUsers = async (req, res)=> {
    const UserBd = await User.findAll()
    console.log(UserBd);
    res.status(200).json(UserBd)
    
}
const createUsers = async (req, res)=>{
    let {user_name} = req.body
    const newUser = await User.create({
        user_name
    })
    res.status(200).json(newUser)
}

module.exports = {getUsers, createUsers}