// const mongoose = require("mongoose");

// const connectDatabase = () => {
//     const connectionParams={
//         useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//     try{

//         mongoose.connect(`mongodb://${process.env.db_uri}`,connectionParams)
//         console.log("mongodb connected successfully")
//     }catch(error){
//         console.log(error)
//         console.log("unable to connect to db due to some error")
//     }
   
// };

// module.exports = connectDatabase;
const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(`mongodb://${process.env.db_uri}`, {
    // .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;