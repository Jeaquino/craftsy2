const fs = require('fs')
const indexController = {
    index: function(req, res) {
        const id = req.params.id;
        const users = JSON.parse(fs.readFileSync(__dirname + "/../data/users.json"), "utf-8");
        const user = users.find(elemento => elemento.id == id);
        res.render('index', { title: 'Express', users });
    },
    detail:function(req, res) {
        const id = req.params.id;
        const users = JSON.parse(fs.readFileSync(__dirname + "/../data/users.json"), "utf-8");
        const user = users.find(elemento => elemento.id == id);
        res.render('detail', { title: 'Dev', user });
    }
}

module.exports = indexController;