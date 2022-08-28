const mongoose =require('mongoose');
//const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  firstName:  String, // String is shorthand for {type: String}
  lastName: String,
  mobile: {
    type: String,
    unique: true,            
    required: true  
  },
  emailId:String,         
  gender:{
    type:String,
    enum:["Male","Female","LGBTQ","Other"]//enum means enumrated
  },
  age: Number
  //comments: [{ body: String, date: Date }],
  //date: { type: Date, default: Date.now },
  //hidden: Boolean,
  //meta: {
  //  votes: Number,
  //  favs:  Number
  //}
}, {timestamp: true});

module.exports = mongoose.model('user',userSchema)