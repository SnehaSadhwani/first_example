var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url,{useNewUrlParser:true}).then(client =>{
    // console.log("response");
    const db=client.db('my-db');
    const collection = db.collection('my-collection');
    return collection.find({}).limit(1).toArray();
    return console.log('CREATED');
})
.then(db =>{
    console.log("response ===>");
})
.catch(error =>{
    console.error("error=====>",error)
})

// try{
//     MongoClient.connect(url,{useNewUrlParser:true},(err,db)=>{
//         console.log("Database Created");
//         db.close();
//     })
// }catch(err){
//     console.log("Error ===>",err)
// }
