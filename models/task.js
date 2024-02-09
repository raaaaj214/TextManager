const { Schema, model, default: mongoose } = require("mongoose");

const taskSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    deadline : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true,
        enum : ['urgent' , 'important' , "completed"]
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    }
});

export const Task = mongoose.models?.Task || model('Task' , taskSchema);