const express = require('express');
const router = express.Router();

const Usuario = require('../modelos/usuario');
const usuarioCtrl = require('../controladores/usuario');


router.post('/signup', usuarioCtrl.signup);
router.post('/login', usuarioCtrl.login);
router.get('/', usuarioCtrl.listadoUsuarios);


module.exports = router;


