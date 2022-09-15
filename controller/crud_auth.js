const express = require('express')
const jwt = require('jsonwebtoken')
const db = require('../model/db')


exports.authget = (req, res) => {
    jwt.verify(req.body.token, 'mykey', (err, data) => {
        if (err) {
            res.send(err);
        } else {
            let sql = `SELECT * FROM product WHERE id=${1}`;
            db.query(sql, (err, result) => {
                if (err) throw err
                res.send(result);
            })
        }
    })
}

//token generation
exports.authpost = (req, res) => {
    const name = { name: 'Name' };
    token = jwt.sign({ name }, "mykey");
    res.json({ token: token });
}