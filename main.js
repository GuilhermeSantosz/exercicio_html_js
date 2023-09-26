const form = document.getElementById('valid')

const numero1 = document.getElementById('number1')    
const numero2 = document.getElementById('number2')



 form.addEventListener("submit", function (e) {
    e.preventDefault()


    
    const mensagemSucesso = `O valor <b>${numero2.value}</b> é maior que o valor <b>${numero1.value}</b>`
    const mensagemErro = "O <b>segundo</b> valor tem que ser maior"
    const mensagemIgual = "Os valores são <b>iguais</b>"

    if(numero1.value < numero2.value) {
        const containerMensagemSucesso = document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'     

        const containerMensagemErro = document.querySelector('.error-msg')
        containerMensagemErro.innerHTML = mensagemErro
        containerMensagemErro.style.display = 'none' 

        const containerMensagemIgual = document.querySelector('.equal-msg')
        containerMensagemIgual.innerHTML = mensagemIgual
        containerMensagemIgual.style.display = 'none'

        numero1.value = ''
        numero2.value = ''

    } else if (numero1.value > numero2.value) {
        const containerMensagemErro = document.querySelector('.error-msg')
        containerMensagemErro.innerHTML = mensagemErro
        containerMensagemErro.style.display = 'block' 

        const containerMensagemSucesso = document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'none' 

        const containerMensagemIgual = document.querySelector('.equal-msg')
        containerMensagemIgual.innerHTML = mensagemIgual
        containerMensagemIgual.style.display = 'none'

        
        
        numero1.value = ''
        numero2.value = ''
    }

    else  {
        const containerMensagemIgual = document.querySelector('.equal-msg')
        containerMensagemIgual.innerHTML = mensagemIgual
        containerMensagemIgual.style.display = 'block'

        const containerMensagemSucesso = document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'none'

        const containerMensagemErro = document.querySelector('.error-msg')
        containerMensagemErro.innerHTML = mensagemErro
        containerMensagemErro.style.display = 'none' 

        numero1.value = ''
        numero2.value = ''
    }

})


