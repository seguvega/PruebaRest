const { Router } = require('express');
const Impresora = require('../models/impresora');


//Inicio el router
const router = Router();

router.get('/impresora', async(req, res) => {
    await Impresora.find({}, '-contador').exec((error, resultado) => {
        if (!error) {
            res.json({
                ok: true,
                Impresoras: resultado
            });
        } else {
            res.json({
                ok: false,
                error
            })
        };
    })
});

router.put('/impresora/:id', async(req, res) => {
    const id = req.params.id; //cuando es un solo parametro
    const { marca, modelo, serie, color, ip, contador, precio } = req.body;
    await Impresora.findByIdAndUpdate(id, { marca: marca, serie: serie, contador: contador }, { new: true }, (error, resultado) => {
        if (!resultado) {
            res.json({
                ok: false,
                mensaje: "Impresora no encontrado"
            });
        }
        if (error) {
            res.json({
                ok: false,
                error
            });
        } else {
            res.json({
                ok: true,
                Impresoras: resultado
            });
        }
    });
});

router.post('/impresora', async(req, res) => {
    const { marca, modelo, serie, color, ip, contador, precio } = req.body;
    const imp = new Impresora({
        marca,
        modelo,
        serie,
        color,
        ip,
        contador,
        precio
    });
    await imp.save((error, resultado) => {
        if (!error) {
            res.json({
                ok: true,
                Impresora: resultado
            });
        } else {
            res.json({
                ok: false,
                error
            });
        }
    });
});

router.delete('/impresora/:id', (req, res) => {
    const id = req.params.id;
    Impresora.findByIdAndDelete(id, (error, imEliminado) => {
        if (!error) {
            res.json({
                ok: true,
                Impresora_Eliminada: imEliminado
            });
        } else {
            res.json({
                ok: true,
                error
            })
        }
    });
});

module.exports = router;