const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getUsers} = require("../controllers/UserController")
const {createUsers} = require("../controllers/UserController")
const router = Router();

router.get("/users", getUsers);
router.post("/users", createUsers);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;