const mongoose = require("mongoose");

const celibritySchema = new mongoose.Schema({
    name: {
      type: String
    },
    occupation: {
      type: String
    },
    catchPhrase: {
      type: String
    }
});

const Celebrity = mongoose.model("Celebrity", celibritySchema);
//Pokemon -> pokemons
module.exports = Celebrity;