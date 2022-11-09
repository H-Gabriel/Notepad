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

module.exports = {
    getNotas,
    getNotaById,
    updateNotaById,
    adicionarNota
}