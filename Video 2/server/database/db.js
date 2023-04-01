import mongoose from "mongoose";

const Connection = async (username,password) => {
    const URL = `mongodb://${username}:${password}@ac-htohcko-shard-00-00.95rhqob.mongodb.net:27017,ac-htohcko-shard-00-01.95rhqob.mongodb.net:27017,ac-htohcko-shard-00-02.95rhqob.mongodb.net:27017/?ssl=true&replicaSet=atlas-58zxey-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
      await  mongoose.connect(URL, { useNewUrlParser : true });
      console.log('Database connected successfully.');
    } catch (error) {
        console.log('Error while connecting with the database.',error);
    }
}

export default Connection;