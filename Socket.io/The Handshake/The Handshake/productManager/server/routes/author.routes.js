const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api/author', AuthorController.getAll);
    app.post('/api/author/new', AuthorController.create);
    app.get('/api/author/show/:id', AuthorController.getOne);
    app.put('/api/author/edit/:id', AuthorController.update);
    app.delete('/api/author/delete/:id', AuthorController.destroy);









}

