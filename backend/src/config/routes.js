const express = require('express')
const auth = require('./auth')

module.exports = function (server) {

    /*
     * Rotas protegidas por Token JWT
     */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    const Prova = require('../api/prova/provaService')
    Prova.register(protectedApi, '/provas')

    const Usuarios = require('../api/user/userService')
    Usuarios.register(protectedApi, '/usuarios')

    const Avaliados = require('../api/avaliados/avaliadosService')
    Avaliados.register(protectedApi, '/avaliados')

  
    /*
     * Rotas abertas
     */
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/validateToken', AuthService.validateToken)
    //const Usuarios = require('../api/user/userService')
    //openApi.get('/hasAdmin', Usuarios.)
}