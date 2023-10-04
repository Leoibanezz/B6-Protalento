const express = require('express');
const personsRouter = require('./person.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router); // Cambiado '/app/v1' a '/api/v1'
    router.use('/persons', personsRouter);
}

module.exports = routerApi;




