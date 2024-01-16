
const mongoose=require('mongoose')

const connectionString=process.env.DATABASE


mongoose.connect(connectionString,{
    useUnifiedTopology: true ,
    
    useNewUrlParser :true
}).then(()=>{
    console.log("mongodb atlas connected to ems serverf!!!");
}).catch((err)=>{
  console.log('mongo db connection failed');
})

