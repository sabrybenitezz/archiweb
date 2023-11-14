const mongoose = require('mongoose'); 


const turnoSchema = mongoose.Schema({
    namePet: { type: String, required: true },
    especie: { type: String, required: true },
    raza: { type: String, required: true },
    sexo: { type: String, required: true },
    description: { type: String, required: true },
    fechaTurno: { type: string, required: true },
    time: { type: String, required: true },
    idTurno: { type: String, required: true },

});

module.exports = mongoose.model('Turno', turnoSchema); 

