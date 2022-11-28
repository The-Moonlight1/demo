let showPassword = document.querySelector('.showPassword')
let passwordInput = document.querySelector('#password')
let flag = true
showPassword.addEventListener('click',()=>{
    flag = !flag
    flag?passwordInput.type="password":passwordInput.type="text"
})

// 同样也可以使用calss类封装的方法，在这里我们就不写辣