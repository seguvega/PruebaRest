const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://seguvega:Hesoyam456789123@cluster0.l7owg.mongodb.net/impresoras", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(db => console.log("Mongo is Connected"))
    .catch(err => console.error(err));