const MongoClient = require("mongodb").MongoClient;
const uri =
    "mongodb+srv://vibhuk10:<Mridangam10>@cluster0.pvma3.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
client.connect((err) => {
    const collection = client.db("test").collection("devices");
    client.close();
});

export default async (req, res) => {
    res.json({ test: "test" });
};

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/*export default (req, res) => {
    res.statusCode = 200;
    res.json({ name: "John Doe" });
};*/
