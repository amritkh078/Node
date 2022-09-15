const express = require('express');
const controller = require('../controller/crud_auth');
const router = express.Router();

router.get('/auth', controller.authget);
router.post('/auth', controller.authpost);

function authentication(req, res, next) {
    const headerBearer = req.headers['authorization'];
    if (typeof headerBearer !== 'undefined') {
        const brear = headerBearer.split(" ");
        const tokenBearer = brear[1];
        req.body.token = tokenBearer;
        next();
}}

module.exports= router;