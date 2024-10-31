const passwordInput = document.getElementById('password');
const btn = document.getElementById('generate')
const togglePassword = document.querySelector('.toggle-password')

btn.addEventListener('click', (e) =>{
    e.preventDefault()

    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const number = '0123456789'
    const longeur = '20'
    const magicPswrd = upperCase + lowerCase + number
    
    let password = ''
    for (let i = 0; i < longeur; i++) { 
        const randompswrd = Math.floor(Math.random() * magicPswrd.length)
        password += magicPswrd[randompswrd]
    }
    
    document.getElementById('password').value = password
    console.log(password)
})

togglePassword.addEventListener('click', (e) => {
    e.preventDefault()
    const type = passwordInput.type === 'password' ? '' : 'password'
    passwordInput.type = type

    togglePassword.textContent = type === 'password' ? '️See' : 
    '️‍️Unsee'

    textContent = 'Unsee'
})

