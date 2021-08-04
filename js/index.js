function mostrarPassword(){
    var eye = document.getElementById('eye')
    var eyeslash = document.getElementById('eye-slash')
    var fieldpass = document.getElementById('field-password')

    if(eye.style.display === 'none'){
        eye.style.display = 'block'
        eyeslash.style.display = 'none'
        fieldpass.type = 'text'
    }else{
        eye.style.display = 'none'
        eyeslash.style.display = 'block'
        fieldpass.type = 'password'
    }
}

document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault()
    alert('Você está Logado!')
})