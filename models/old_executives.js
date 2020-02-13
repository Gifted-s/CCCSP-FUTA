var mongoose = require('mongoose');


// mongoose.connect('mongodb//:localhost/peculiar-app');

var Schema =  mongoose.Schema;
var OESchema = new Schema({


    oexecutive:{
        type:Object,
        required:false,

    }
});

 module.exports=mongoose.model('OExecutive', OESchema);

