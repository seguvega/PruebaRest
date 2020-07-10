const { Schema, model } = require('mongoose');

const Impresora = new Schema({
    marca: {
        type: String,
        required: [true, "La marca es requerida"]
    },
    modelo: {
        type: String,
        required: [true, "El modelo es requerido"]
    },
    serie: {
        type: Number,
        required: [true, "El numero de serie de la Impresora es requerido"],
        unique: true
    },
    color: {
        type: Boolean,
        required: false,
        default: false
    },
    ip: {
        type: String,
        required: true
    },
    contador: {
        type: Number,
        required: false,
        default: 0
    },
    precio: {
        type: Number,
        required: true
    }
});

module.exports = model('impresora', Impresora);