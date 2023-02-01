function confirmar () 
{
   var numero = parseInt(document.getElementById('txtnumero').value);
   var resultado = document.getElementById('resultado');
   var tabuada = '';

   for (var multiplicador = 1; multiplicador <= 10; multiplicador++)
   tabuada += numero+' x '+multiplicador+' = '+
              numero * multiplicador + '<br />';
    resultado.innerHTML = tabuada
}