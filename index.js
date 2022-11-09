const express = require("express"); // Eu odeio express 🤮
var manager = require('./notasManager')

const app = express();

app.use(express.static('WebContent'));
app.use(express.json());

app.set("views", "./WebContent");
app.set("view engine", "ejs");

app.listen(4000, function(err) {
    if (err) {
        console.log("Erro ao iniciar o servidor.");
    } else {
        console.log("Servidor Iniciado.");
    }
})

// ROTAS GET

app.get('/', function(req,res) {
    res.render("inicio");
});

app.get('/gerenciamento', function(req,res) {
    res.render("gerenciamento", {notas: manager.getNotas()});
});

app.get('/nota/', function(req,res) {
    var idNota = req.query["id"];
    if(idNota) {
        res.render("nota", {texto: manager.getNotaById(idNota), id: idNota});
    } else {
        res.render("nota");
    }
});

app.get('/edicoes', function(req, res) {
    res.render("edicoes");
});

app.get('/frequencia', function(req, res) {
    res.render("frequencia");
});

app.get('/sobre', function(req,res) {
    res.render("sobre");
});

//

app.post('/save', function(req, res) {
    manager.adicionarNota(req.body.text);
})

app.patch('/save', function(req, res) {
    manager.updateNotaById(req.body.id, req.body.text);
})

app.delete('/delete', function(req, res) {
    manager.deletarNota(req.body.id);
})