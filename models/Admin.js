var mongoose = require('mongoose');

// mongoose.connect('mongodb//:localhost/peculiar-app');

// mongoose.connect('mongodb://cccspfuta:Cccspfuta00;@ds359077.mlab.com:59077/cccspfuta', ()=>{
//   console.log('connected to mlab');
// });
var Schema =  mongoose.Schema;
var AdminSchema = new Schema({

    username: {
        type : String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});


module.exports=mongoose.model('Admin', AdminSchema);
