const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema

const cronogramaSchema = new Schema({
    data: Date,
    testes: String,
    local: String,
    hora: String,
    ambulancia: String,
    finalidade: String,
    concluido: Boolean
    
})

module.exports = restful.model('Cronograma', cronogramaSchema)