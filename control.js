let btnIngresar = document.querySelector('#btnIngresar')
let msg = document.querySelector('#msg')

let mensajeError = (mensaje, selector) => {
    selector.innerHTML = mensaje
    selector.style.display = 'block'
    selector.style.border = '5px solid red';
    selector.style.background = 'rgba(255, 0, 0, 0.3)';
    setTimeout(() => {
        selector.innerHTML = ''
        selector.style.display = 'none'
    }, 3000);
}
let mensajeAceptado = (mensaje, selector) => {
    selector.innerHTML = mensaje
    selector.style.display = 'block'
    selector.style.border = '5px solid rgb(28, 226, 54)';
    selector.style.background = 'rgba(28, 226, 54, 0.3)';
    setTimeout(() => {
        selector.innerHTML = ''
        selector.style.display = 'none'
    }, 3000);
}

btnIngresar.addEventListener('click', () => {
    let email = document.querySelector('#email').value;
    if (email.indexOf('@') !== -1 && email.indexOf('@') !== 0 && email.lastIndexOf('.com' !== -1) && email.lastIndexOf('.com') > email.indexOf('@')) {
        let password = document.querySelector('#password').value;
        if (password === '') {
            mensajeError('La contraseña no puede estar vacia', msg);
        } else {
            mensajeAceptado('Usuario aceptado!', msg)
        }
    } else {
        mensajeError('Usuario en formato incorrecto o inválido', msg)
    }


})




