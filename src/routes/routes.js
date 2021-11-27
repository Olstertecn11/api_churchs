const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

router.get('/', (req, res)=>{
    res.send("hola mundo ctm");
});


router.get('/getChurch', (req, res)=>{
    var sql = "select * from Iglesia";
    mysqlConnection.query(sql, (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});




router.get('/:id', (req, res)=>{
    const {id} = req.params;
    var sql = "select * from Iglesia where Id=?;"
    mysqlConnection.query(sql, [id], (err, rows, field)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});


router.get('/getMision/:Mision', (req, res)=>{
    const {Mision} = req.params;
    var sql = "select * from Iglesia where Mision=?";
    mysqlConnection.query(sql, [Mision], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.get('/getPastor/:Pastor', (req, res)=>{
    const {Pastor} = req.params;
    var sql = "select * from Iglesia where Pastor=?";
    mysqlConnection.query(sql, [Pastor], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});


router.get('/getDistrito/:Distrito', (req, res)=>{
    const {Distrito} = req.params;
    var sql = "select * from Iglesia where Distrito=?";
    mysqlConnection.query(sql, [Distrito], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.get('/getC/mand', (req, res)=>{
    var sql = "select PosX, PosY from Iglesia";
    mysqlConnection.query(sql, (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});







module.exports = router;