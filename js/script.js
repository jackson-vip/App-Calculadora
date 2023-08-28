// FUNÇÂO :

function calcular(tipo, valor) {

    if (tipo === 'acao') {
        // limpa o visor (id resultado)
        if (valor === 'c') {
            document.getElementById('resultado').value = ''
        }
        // valor digitado recebe uma concatenação dos valores ( + , - , * , / ou . ) 
        if (valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.') {
            document.getElementById('resultado').value += valor
        }
        // Mostar resultado 
        if (valor === '=') {
            var valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
        }
        
    } else if (tipo === 'valor') {
        document.getElementById('resultado').value += valor
    }
}