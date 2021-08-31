const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

// Création du modèle d'utilisateur via mongoSchema -------------------------
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

// Export du modèle d'utilisateur dans la DB --------------------------------
module.exports = mongoose.model("User", userSchema);
