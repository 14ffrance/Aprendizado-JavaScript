function confirmar ()
{
    var primeironumero = Number(document.getElementById('primeironumero').value)
    var segundonumero = Number(document.getElementById('segundonumero').value)
    var resultado = document.getElementById('resultado')

    var adicao = ((primeironumero) + (segundonumero))
    var subtracao = ((primeironumero - segundonumero))
    var multiplicacao = ((primeironumero * segundonumero))
    var divisao = ((primeironumero / segundonumero))

    resultado.innerHTML = `A soma entre ${primeironumero} e ${segundonumero} é ${adicao};<br/>
    A subtração dá: ${subtracao}, a multiplicação dá ${multiplicacao} e a divisão dá ${divisao}`
}
