const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex:true, 
    useUnifiedTopology: true,
    useFindAndModify: true,
    promiseLibrary: global.Promise
    
   })

// MongoClient.connect(connectionURL, { useUnifiedTopology: true, useNewUrlParser: true } 













