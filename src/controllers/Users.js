const UsersData = require("../models/Users");
const bcrypt = require("bcrypt");
const e = require("express");
const jwt = require("jsonwebtoken");

if (process.env.NODE_ENV !== "production") {
  require("dotenv/config");
}

const { SWT_KEY } = process.env;
let newUser = {};
let users = [];

const register = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send("debes indicar nombre, email y password");
    }
    const { name, email, password } = req.body;
    if (!(name && email && password)) {
      res.status(400).send("debes indicar nombre, email y password");
    }

    const userExist = users.find((user) => user.email === email);

    if (userExist){
        res.status(400).send("el usuario ya existe, por favor ingresa un nuevo email")
    }

    const encryptedPassword = await bcrypt.hash(password, 10)
//El segundo parametro (10), es la cantidad de encriptaciones que queremos recibir
newUser = UsersData.User(name, email, encryptedPassword)

users = [...users, newUser]
  } catch (error) {
    console.log("Ha ocurrido un error",error);
  }
  return res.status(201).json(newUser)
};

const login = async (req, res) => {
  try {
    const {email, password} = req.body
    if(!(email && password)){
      res.status(400).send("indica email y/o contraseña")
    }
    const user = users.find(us => us.email === email)

    if(user && (await bcrypt.compare(password, user.password))){
      const token = jwt.sign({email}, SWT_KEY, {expiresIn:"2h"})
      user.token= token
    res.status(200).json(user)
    } else {
      res.status(403).send("Credenciales inválidas")
    }
    
  } catch (error) {
    console.log("Ha ocurrido un error",errorn);
  }
};

module.exports = { register, login };
