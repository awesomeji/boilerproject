const monggose = require('mongose');

const userSchema = monggose.Schema({

//user's name
 name:{
   type:String,
   maxlength:50,
 },
 email:{
   type:String,
   trim:true,
   unique:1, //which means true
 },
 password:{
   type:String,
   minlength:6,
 },
 lastname:{
   type:String,
   maxlength:50,
 },
 role:{
   type:Number,
   default:0, //normal user
 },
 token:{
   type:String,
 },
 tokenExp:{
   type:Number,
 }


})

const User = monggose.model('User', userSchema);