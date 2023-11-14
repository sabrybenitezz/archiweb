const express = require('express');
const router = express.Router();

const Turno = require('../modelos/turno'); 
const turnoCtrl = require('../controladores/turno');

const auth = require('../middleware/auth');


router.get('/:id', auth, turnoCtrl.datosUnTurno );


router.put('/:id', auth, turnoCtrl.modificarTurno );


router.delete('/:id', auth, turnoCtrl.borrarTurno );


router.post('/', auth, turnoCtrl.crearTurno );


router.get('/', turnoCtrl.listadoTurnos );

module.exports = router;
