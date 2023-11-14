const express = require('express'); 
const mongoose = require('mongoose'); 
const Turno = require('./modelos/turno')

const app = express();



mongoose.connect('mongodb+srv://sabryb:2023Sabry@veterinaria.4uviqkp.mongodb.net/vete?retryWrites=true&w=majority')
    
 .then(() => {
        console.log('Conectados a MongoDB !');
    })
    .catch((error) => {
        console.log('FALLA al conectarse a MongoDB Compass!');
        console.error(error);
    });
    app.use(express.json()) 

    const calenRoutes = require('./rutas/calendario');
    const usuariosRoutes = require('./rutas/usuario');
    
    
    app.use('/api/v1/turno', calenRoutes);
    app.use('/api/v1/auth', usuariosRoutes);
    
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
         res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
         res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
         next();
       });

    
    module.exports = app; 
    
    