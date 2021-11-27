const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'sql5.freesqldatabase.com',
    user:'sql5446566',
    database:'sql5446566',
    password:'HcIbUnlQtt',
    multipleStatements: true
});


mysqlConnection.connect((err) =>{
    if(err){
        console.err(err);
        return;
    }else{
        console.log('db is connected!');
    }
})
module.exports = mysqlConnection;