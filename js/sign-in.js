// sign in event 
document.getElementById('btn-sign-in').addEventListener('click', function(){
    // 1.get the user name
    const userNameInput = document.getElementById('input-username');
    const userName = userNameInput.value;
    // console.log(userName)

    // 2.get the password
    const passwordInput = document.getElementById('input-password');
    const password = passwordInput.value;
    // console.log(password)


    // 3. match the username and password

    if(userName ==='admin' && password === 'admin123'){
        alert('sign in successfull');
        window.location.assign('/home.html')
    }else{
        alert('sign in failed')
    }
})