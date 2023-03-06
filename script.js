function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msg2 = window.document.getElementById('msg2')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas e <strong>${min}</strong> minutos.`
    if (hora >= 1 && hora < 4) {
        // Boa Madrugada!
        img.src = 'fotomadrugada.png'
        msg2.innerText = 'Boa Madrugada!'
        document.body.style.background = '#2b3746'
    }else if (hora >= 4 && hora < 12) {
        // Boa Dia!
        img.src = 'fotomanha.png'
        msg2.innerText = 'Bom Dia!'
        document.body.style.background = '#787999'
    }else if (hora >= 12 && hora < 18) {
        // Boa Tarde!
        img.src = 'fototarde.png'
        msg2.innerText = 'Boa Tarde!'
        document.body.style.background = '#c84401'
    }else {
        // Boa Noite!
        img.src = 'fotonoite.png'
        msg2.innerText = 'Boa Noite!'
        document.body.style.background = '#362b48'
    }
}