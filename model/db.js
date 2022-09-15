const mysql = require('mysql');

const database = mysql.createConnection({
    host: 'localhost',
    database: 'marketplace',
    user: 'root',
    password: ''
});

database.connect((err)=>{
    if(!err){
        console.log('Connected');
    }else{
        console.log('Connection Failed');
    }
})
module.exports = database;