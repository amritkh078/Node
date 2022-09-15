const express = require('express');
const db = require('../model/db');

exports.get = (req, res)=>{
    let sql = 'SELECT * FROM product'
    db.query(sql, (err, result) => {
        if(err) throw err;
        
        const page = parseInt(req.query.page); // parsing value as string and return integer
        const limit= parseInt(req.query.limit);
        const startindex= (page -1) * limit; 
        const endindex = page * limit;
        const results = {};

        if(endindex < result.length){
            results.next = {
                page : page + 1,
                limit : limit
            }
        }
        if(startindex > 0){  // there is no previous page for 1st page 
            results.previous = {
                page : page - 1,
                limit : limit
            }
        }
        results.results = result.slice(startindex, endindex)
        res.json(results);
    })    
}
exports.post = (req, res)=>{
    let record = req.body;
    var sql = `INSERT INTO product(name, type, price) VALUES('${record.name}','${record.type}', '${record.price}' )`;
    db.query(sql, (err, result) => {
        if (!err) {
            console.log('Data inserted');
        } else {
            console.log('Data insertion failed');
        }
    })
}
exports.put = ()=>{
    var sql = `UPDATE product SET name ="Updated" where id=${id}`;
    db.query(sql, (err, result) => {
        if (!err) {
            console.log('Data updated');
        } else {
            console.log('Updation failed');
        }
    })
}
exports.delete = ()=>{
    let id = 5;
    var sql = `DELETE FROM product WHERE id = ${id}`;
    db.query(sql, (err, result) => {
        if (!err) {
            console.log('Data deleted');
        } else {
            console.log('Deletion failed');
        }
    })
}
