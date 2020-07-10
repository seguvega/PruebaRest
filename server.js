const express = require('express');
const bodyParser = require('body-parser');


//Inicio la app
const app = express()
require('./config/mongo');


//Settings
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

//Router
app.use(require('./router/routes'));

app.listen(app.get('port'), () => {
    console.log("Serrvidor en el puerto ", app.get('port'));
});