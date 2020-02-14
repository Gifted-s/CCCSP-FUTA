var mongoose = require('mongoose');


// mongoose.connect('mongodb//:localhost/peculiar-app');
// mongoose.connect('mongodb://cccspfuta:Cccspfuta00;@ds359077.mlab.com:59077/cccspfuta', ()=>{
//   console.log('connected to mlab');
// });

var Schema =  mongoose.Schema;
var UserSchema = new Schema({
    firstname :{
        type: String,
        required: false

    },
    secondname :{
        type: String,
        required: false

    },

    level:{
        type:Number,
        required:false,
    },
    unit:{
      type:String,
      required:false,

    },
    unit2:{
        type:String,
        required:false,

    },
    phone_number:{
        type:String,
        required:false,
    },
status:{
      type:String,
    required:true
},
    school:{
        type:String,
        required:true
    },
    graduation_year:{
        type:String,
        required:false
    },


    profile_image:{
        type:String,
    required:false
},
    m_b:{
        type:Number,
        required:false
    },
    d_b:{
       type:Number,
       required:false
    },
    y_b:{
      type: String,
      required:false
    },
executive_role:{
        type:Array,
    required:false
},
    executive:{
        type:String,
        required:false
    },

    department:{
        type:String,
        required:false
    },
    address:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false
    },
    facebook:{
        type:String,
        required:false
    },
    twitter:{
        type:String,
        required:false
    },
    whatsapp:{
      type:String,
      required:false
    },
    set_name :{

            type:String,
            required:false

    },
    quote:{
        type:String,
        required:false
    },
    P_A:{
        type:String,
        required:false

    },
    sun:{
        type:String,
        required:false

    },
    wed:{
        type:String,
        required:false

    },
    fri:{
        type:String,
        required:false

    }

});
var User= module.exports=mongoose.model('User', UserSchema);

