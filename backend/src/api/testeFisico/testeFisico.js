const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema

const presidenteComissao = new Schema({
    nome: String,
    matricula: String,
    cargo: String
})




const testeFisicoSchema = new Schema({
    objetivo: { type: String, uppercase: true },
    tipoTeste: { type: String, uppercase: true },
    dataInicial: { type: Date,  required: true },
    dataFinal: {type: Date, required: true}, 
    presidenteComissao: presidenteComissao,
    comissao: [],
    resultados: []
})


module.exports = restful.model('testeFisico', testeFisicoSchema)