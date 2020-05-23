const mongoose = require('mongoose');

const host = "127.0.0.1";
const dbName = "filmes-db";

mongoose.connect(`mongodb://${host}/${dbName}`, {useNewUrlParser: true});
