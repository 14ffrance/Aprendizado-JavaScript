function carregar() {
    var mensagem = window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('imagem')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var minuto = data.getMinutes()
    //var hora = 18
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas e ${minuto} minutos!`
    if (hora >= 0 && hora < 12) {
        // bom dia!
        imagem.src = 'imagem/diia.png'
        document.body.style.background = '#e2cd9f'
        imagem.title = 'Bom dia!'
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde!
        imagem.src = 'imagem/ttarde.png'
        document.body.style.background = '#b9846f'
        imagem.title = 'Boa tarde!'
    } else {
        // boa noite!
        imagem.src = 'imagem/noitte.png'
        document.body.style.background = '#515154'
        imagem.title = 'Boa noite!'
    }
}
