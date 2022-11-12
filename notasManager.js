var notas = [];

function getNotas() {
    return notas;
}

function getNotaById(id) {
    return notas[id-1];
}

function updateNotaById(id, text) {
    notas[id-1] = text;
}

function adicionarNota(nota) {
    notas.push(nota);
}

function deletarNota(id) {
    notas.splice(id - 1, 1);
}

function dados() {
    var caracteres = 0;
    notas.forEach(element => {
        caracteres += element.length;
    });
    let returnStatement = `Existem ${notas.length} notas registradas, totalizando ${caracteres} caracteres escritos`;
    return returnStatement;
}
function upperCaseText(id){
notas[id-1] = notas[id-1].toUpperCase();
}
function lowerCaseText(id){
    notas[id-1] = notas[id-1].toLowerCase();
    }

module.exports = {
    getNotas,
    getNotaById,
    updateNotaById,
    adicionarNota,
    deletarNota,
    dados,
    upperCaseText,
    lowerCaseText
}

// Se você estiver lendo isso eu odeio javascript do fundo do meu coração