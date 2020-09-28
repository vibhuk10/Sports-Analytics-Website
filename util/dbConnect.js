/*const MongoClient = require("mongodb").MongoClient;
const uri =
    "mongodb+srv://vibhuk10:<Mridangam10>@cluster0.pvma3.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});*/

/*import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect("mongodb+srv://vibhuk10:<Mridangam10>@cluster0.pvma3.mongodb.net/nfl_stats?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log(isConnected);
}

export default dbConnect;*/

