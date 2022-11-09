const express = require("express"); // Eu odeio express 🤮
var notas = require('./notasManager')

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

app.get('/nota/', function(req,res) {
    var idNota = req.query["id"];
    if(idNota) {
        res.render("nota", {texto: notas.getNotaById(idNota), id: idNota});
    } else {
        res.render("nota");
    }
});

app.get('/gerenciamento', function(req,res) {
    res.render("gerenciamento");
});

app.get('/sobre', function(req,res) {
    res.render("sobre");
});

//

app.post('/save', function(req, res) {
    notas.adicionarNota(req.body.text);
})

app.patch('/save', function(req, res) {
    notas.updateNotaById(req.body.id, req.body.text);
})