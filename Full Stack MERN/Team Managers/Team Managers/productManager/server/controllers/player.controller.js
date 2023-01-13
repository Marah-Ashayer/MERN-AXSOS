const { Player } = require('../models/player.model');

// ------------------------------------ Create a Player-------------------------------------//

module.exports.create = (request, response) => {
    const { name,position} = request.body;
    Player.create({ name , position })
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err))
}
// ------------------------------ Get All Players -------------------------------------------------// 
module.exports.getAll = (request, response) => {
    Player.find({})
        .then(players => response.json(players))
        .catch(err => response.json(err))
}

// ------------------------------------- Get One Player -----------------------------------------//
module.exports.getOne = (request, response) => {
    Player.findOne({_id:request.params.id})
        .then(player => response.json(player))
        .catch(err => response.json(err))
}
// ------------------------------------- Update a Player  ------------------------------------------------//
module.exports.update = (request, response) => {
    Player.findOneAndUpdate({_id: request.params.id}, request.body,{new:true, runValidators:true})
        .then(update => response.json(update))
        .catch(err => response.status(400).json(err))
}

// ------------------------------------- Delete a Player ------------------------------------------------// 

module.exports.destroy = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}




