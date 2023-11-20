import mongoose from 'mongoose';
const { Schema } = mongoose;

const ConfirmbSchema= new mongoose.Schema({
    bid:{
        type:String,
        
    },
    sdate:{
        type:String,
        
    },
    edate:{
        type:String,
    }
    
});

export default mongoose.model("confirmb",ConfirmbSchema)