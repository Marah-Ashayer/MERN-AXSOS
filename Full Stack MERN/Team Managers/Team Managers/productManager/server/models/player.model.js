const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { type: String,   required: [true,"Player Name is required"],minlength :[2,"Name Should Be At Least 2 Characters"] },
    position :{type : String, required : [false] }
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);

