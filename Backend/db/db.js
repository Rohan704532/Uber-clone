const mongoose = require('mongoose')


async function connectDb(){
    await mongoose.connect(process.env.DB_CONNECT)
    .then(()=>console.log("DB connected"))
    .catch((error)=>console.log(error))
}

module.exports = connectDb