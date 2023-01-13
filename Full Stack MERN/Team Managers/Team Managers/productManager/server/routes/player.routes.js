const PlayerController = require('../controllers/player.controller');
module.exports = function(app){
    app.get('/api/player', PlayerController.getAll);
    app.post('/api/player/new', PlayerController.create);
    app.get('/api/player/show/:id', PlayerController.getOne);
    app.put('/api/player/edit/:id', PlayerController.update);
    app.delete('/api/player/delete/:id', PlayerController.destroy);









}

