const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://G:1356vxvx!!@boilerplate.nar3s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{useNewUrlParser: true},{useUnifiedTopology: true})
.then(() => {console.log('connected to MGDB')})
.catch((err) => {console.error(err)});
app.get('/',(req,res) => {
  res.send('Hello World!');
})

app.listen(5000);