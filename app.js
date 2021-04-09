const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

//BD
const mongoose = require('mongoose');
//conection to our bbdd local
const uri = 'mongodb://localhost:27017/appjs';
const options ={
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
}
//conection
mongoose.connect(uri, options).then(
    ()=>{console.log('conectado a mongo') },
    err =>{err}
)
//middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api', require('./routes/nota'));

const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname,'public')));

  app.set('puerto', process.env.PORT ||3000);

  app.listen(app.get('puerto'),() => {
    console.log('Escuchando el puerto:'+ app.get('puerto'));
  });
  