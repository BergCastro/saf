const Cronograma = require('./cronograma')
const errorHandler = require('../common/errorHandler')

Cronograma.methods(['get', 'post', 'put', 'delete'])
Cronograma.updateOptions({new: true, runValidators: true})
Cronograma.after('post', errorHandler).after('put', errorHandler)

Cronograma.route('count', (req, res, next) => {
    Cronograma.countDocuments((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})



module.exports = Cronograma