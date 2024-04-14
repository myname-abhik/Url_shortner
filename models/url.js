const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://abhik16chakrabortty:${PASSWORD}@cluster0.iuakazn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{  
    console.log('Error connecting to MongoDB',err);
})

const Url_Schema = new mongoose.Schema({
    Short_Id:{
        type : String,
        required : true,
        unique : true,
    },
    redirect_Url: {
        type: String,
        required: true,
      },
      visitHistory: [{ timestamp: { type: Number } }],
    },
    { timestamps: true }
  );

// },{timeStamp: true})
 const URL = mongoose.model('url',Url_Schema);
 module.exports = URL;
