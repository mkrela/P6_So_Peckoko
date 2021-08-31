const mongoose = require('mongoose');


// Creation du modèle de données de Sauce grâce a mongoose Schema --------------------
const sauceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true},
  description: { type: String, required: true },
  mainPepper: { type: String, required: true},
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true},
  likes:{ type: Number, required : false, default: 0},
  dislikes:{ type: Number, required : false, default: 0},
  usersLiked:{ type: [String], required: false},
  usersDisliked:{ type: [String], required: false}
})

// Export du modèle de donnée "Sauce" ---------------------------------------------
module.exports = mongoose.model('Sauce', sauceSchema);