const nombre = document.querySelector('.nombre')
//nombre.addEventListener('input', (e)=>{
    //console.log(e.target.value)
//})

const password = document.querySelector('.contraseña')
password.addEventListener('input', funcioncontraseña)

function funcioncontraseña() {
    password.type = "text"

    setTimeout(() =>{
        password.type ="password"
    }, 300);
}

//evento submit

const container = document.querySelector('.container')

const formulario = document.querySelector('.formulario')
formulario.addEventListener('submit', (e)=>{

    e.preventDefault()
    //const nom = document.querySelector('.nombre')
    const nombd = nombre.value
    const passwordbd = password.value
    //console.log(nombd)
    //console.log(passwordbd)

    const alerta = document.createElement('DIV')
    
    

    if (nombd === '' || passwordbd === ''){
        alerta.textContent="Llenar todos los campos"
        alerta.classList.add('alerta-error')
        container.appendChild(alerta)
    }else{
        alerta.textContent="Enviando los datos"
        alerta.classList.add('alerta-exito')
        container.appendChild(alerta)
    }

    setTimeout(() =>{
        alerta.remove()
    }, 3995);

})

