const Avaliados = require('./avaliados')
const errorHandler = require('../common/errorHandler')

Avaliados.methods(['get', 'post', 'put', 'delete'])
Avaliados.updateOptions({new: true, runValidators: true})
Avaliados.after('post', errorHandler).after('put', errorHandler)

Avaliados.route('count', (req, res, next) => {
    Avaliados.countDocuments((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})



module.exports = Avaliados