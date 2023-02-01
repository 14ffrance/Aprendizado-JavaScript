function contar ()
{
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let resultado = document.getElementById('resultado')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
    {
        window.alert('[ERRO] Faltam dados!')
        resultado.innerHTML = 'Impossível contar!'
    } 
    else 
    {   resultado.innerHTML = 'Contando: <br>'
        let iinicio = Number(inicio.value)
        let fiim = Number(fim.value)
        let ppasso = Number(passo.value)
        if (ppasso <= 0) 
        {
            window.alert ('Passo inválido! Considerando PASSO = 1')
            ppasso = 1
        }
        if (iinicio < fiim) // contagem crescente
        {
        for(let c = iinicio; c <= fiim; c += ppasso) 
        {
            resultado.innerHTML += `👉 ${c} `
        }  
        }
         else // contagem regressiva
        {
        for (let c = iinicio; c >= fiim; c -= ppasso) 
        {
            resultado.innerHTML += ` ${c} 👉 `
        }
        }
    resultado.innerHTML += `🏁`
 }
}