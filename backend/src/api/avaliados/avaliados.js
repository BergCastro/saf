const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema




const avaliadosSchema = new Schema({
    numero: String,
    matricula: String,
    nome: String,
    nomeDeGuerra: String,
    cargo: String,
    unidadePolicial: String,
    dataNascimento: Date,
    sexo: String,
    tipoSanguineo: String,
    telefone: String,
    email: String,      
})



module.exports = restful.model('Avaliados', avaliadosSchema)