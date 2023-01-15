const { MongoClient } = require("mongodb");
const ObjectId = require('mongodb').ObjectId;

export async function getGalleries() {
  const mongodb_connection = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}/?retryWrites=true&w=majority&ssl=true`;
  const client = new MongoClient(mongodb_connection);
  await client.connect();
  const db = client.db(process.env.MONGODB_DATABASE);
  const galleriesCollection = db.collection(process.env.MONGODB_GALLERIES_COLLECTION);
  let galleries = [];
  await galleriesCollection.find({}).forEach(gallery => {
    galleries.push(gallery);
  });
  return JSON.parse(JSON.stringify(galleries));
};
