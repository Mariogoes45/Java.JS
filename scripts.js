// (1) Mensagem 'Olá Mundo'
console.log('Olá Mundo');

// (2) Soma de 2 inteiros
var num1 = 10;
var num2 = 20;
var soma = num1 + num2;
console.log('A soma de ' + num1 + ' e ' + num2 + ' é igual a ' + soma);

// (3) Altera a propriedade de um elemento por id
document.addEventListener('DOMContentLoaded', function() {
    var elementoPorId = document.getElementById('elementoId');
    elementoPorId.innerHTML = 'Texto alterado por id';
});

// (4) Altere a propriedade de um elemento por name
document.addEventListener('DOMContentLoaded', function() {
    var elementosPorName = document.getElementsByName('elementoName');
    elementosPorName.forEach(function(elemento) {
        elemento.innerHTML = 'Texto alterado por name';
    });
});

// (5) Altere a propriedade de um elemento por class
document.addEventListener('DOMContentLoaded', function() {
    var elementosPorClasse = document.getElementsByClassName('elementoClass');
    for (var i = 0; i < elementosPorClasse.length; i++) {
        elementosPorClasse[i].innerHTML = 'Texto alterado por class';
    }
});