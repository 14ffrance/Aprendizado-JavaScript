function confirmar () 
{
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('txtano')
    var resultado = document.getElementById('resultado')
    var imagem = document.getElementById('imagemfotos')
    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) {
        window.alert('Verifique os dados novamente!')
    } else {
        var MasculinosexoFeminino = document.getElementsByName('radiosexo')
        var idade = ano - Number(formularioAno.value)
        var genero = ''
        if (MasculinosexoFeminino[0].checked) 
        {
            genero = 'homem'
            if (idade >= 0 && idade < 10) // bebe
            {
                imagem.src = 'imagens/foto-bebe-m.png'
            } 
            else if (idade >= 10 && idade < 21) // jovem
            { 
                imagem.src = 'imagens/foto-jovem-m.png'
            }
            else if (idade < 50) // adulto
            {
                imagem.src = 'imagens/foto-adulto-m.png'
            }
            else // idoso 
            {
                imagem.src = 'imagens/foto-idoso-m.png'
            }
        } else if (MasculinosexoFeminino[1].checked) 
        {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) // bebe
            {
                imagem.src = 'imagens/foto-bebe-f.png'
            } 
            else if (idade >= 10 && idade < 21) // jovem
            { 
                imagem.src = 'imagens/foto-jovem-f.png'
            }
            else if (idade < 50) // adulto
            {
                imagem.src = 'imagens/foto-adulto-f.png'
            }
            else // idoso 
            {
                imagem.src = 'imagens/foto-idoso-f.png'
            }
        }
        resultado.innerHTML = `Você é ${genero} com ${idade} anos.`
    }
} 

function carregar () 
{
    var ano = (new Date ()).getFullYear()
    document.getElementById('txtano').value = ano
}