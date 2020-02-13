var mongoose = require('mongoose');


// mongoose.connect('mongodb//:localhost/peculiar-app');
// mongoose.connect('mongodb://cccspfuta:Cccspfuta00;@ds359077.mlab.com:59077/cccspfuta', ()=>{
//   console.log('connected to mlab');
// });
var Schema =  mongoose.Schema;
var ASchema = new Schema({

user :{
  type: Object,
  required: true
},
    set_name:
        {
            type: String,
            required: true
        },

    year:
        {
            type: String,
            required: true
        }
});

var User= module.exports=mongoose.model('Alumni', ASchema);

