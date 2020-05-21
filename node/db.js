const mongoose = require("mongoose");
const schema = mongoose.schema;

const Filme = new schema({
    name: { type: String}
});

module.exports = mongoose.model("Filme", Filme); 