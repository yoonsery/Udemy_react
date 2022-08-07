import { MongoClient } from 'mongodb';

//  /api/new-meetup
//  POST /api/new-meetup

function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://yoonsery:${process.env.REACT_APP_MONGODB_PASSWORD}@cluster0.wb3vgzu.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({message: 'Meetup inserted!'})
  }
}

export default handler;
