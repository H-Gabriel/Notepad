const express = require("express"); // Eu odeio express 🤮

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

app.get('/', function(req,res) {
    res.render("inicio");
});

app.get('/gerenciamento', function(req,res) {
    res.render("gerenciamento");
});

app.get('/sobre', function(req,res) {
    res.render("sobre");
});