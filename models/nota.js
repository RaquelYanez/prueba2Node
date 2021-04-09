import mongoose from 'mongoose';
const Schema = mongoose.Schema;
//structure
const notaSchema = new Schema({
    nombre:{type: String, required: [true, 'nombre obligatorio'],
    descripcion: String,
    usuarioId: String,
    date:{type: Date, default: Date.now},
    activo: {type: Boolean, default:true}
    }
});
//Model
const Nota = mongoose.model('Nota', notaSchema);
//convert to model
export default Nota;
