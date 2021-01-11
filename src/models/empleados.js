const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpleadoSchema = new Schema ({
    id: Number,
    name: String,
    lastname: String,
    cedula: Number,
    fechanacimiento: Date,
    antiguedad: String,
    tipo: String,
    clientes: Number
});

module.exports = mongoose.model('empleados', EmpleadoSchema);