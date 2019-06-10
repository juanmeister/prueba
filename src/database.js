const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/app-notes')
.then(db=> console.log('db conectada'))
.catch(err => console.log(err));