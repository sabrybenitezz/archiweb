const Turno = require('../modelos/turno');

exports.crearTurno = (req, res, next) => {
    const turno = new Turno({
        namePet: req.body.namePet,
        especie: req.body.especie,
        raza: req.body.raza,
        sexo:req.body.sexo,
        description:req.body.description,
        fechaTurno:req.body.fechaTurno,
        time:req.body.time,
        turnoId: req.body.turnoId,
    });
    turno.save().then(
        () => {
            res.status(201).json({
                message: 'Turno Creado !'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.datosUnTurno = (req, res, next) => {
    Turno.findOne({
      _id: req.params.id
    }).then(
      (turno) => {
        res.status(200).json(turno);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };

exports.listadoTurnos = (req, res, next) => {
    Turno.find().then(
      (turno) => {
        res.status(200).json(turno);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

exports.modificarTurno = (req, res, next) => {
    const turno = new Turno({
      _id: req.params.id,
      namePet: req.body.namePet,
        especie: req.body.especie,
        raza: req.body.raza,
        sexo:req.body.sexo,
        description:req.body.description,
        fechaTurno:req.body.fechaTurno,
        time:req.body.time,
        turnoId: req.body.turnoId,
  });
    Turno.updateOne({_id: req.params.id}, turno).then(
      () => {
        res.status(201).json({
          message: 'Turno Actualizado!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

exports.borrarTurno = (req, res, next) => {
    Turno.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: ' Turno Borrado!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };





