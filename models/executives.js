var mongoose = require('mongoose');


// mongoose.connect('mongodb//:localhost/peculiar-app');
// mongoose.connect('mongodb://cccspfuta:Cccspfuta00;@ds359077.mlab.com:59077/cccspfuta', ()=>{
//   console.log('connected to mlab');
// });
var Schema =  mongoose.Schema;
var ESchema = new Schema({


    executive:{
        type:Object,
        required:true
    }
});

 module.exports=mongoose.model('Executive', ESchema);

