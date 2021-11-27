const express = require('express');
const app = express();


app.set('port', process.env.PORT || 8000);
//middleware
app.use(express.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//Routes app
app.use(require('./src/routes/routes'));






//server listening
app.listen(app.get('port'), ()=>{
    console.log('Server Run!');
});
