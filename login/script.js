const login = document.getElementById('form-one');
const signup = document.getElementById('form-two');

const loginBut = document.getElementById('but-one');
const signupBut = document.getElementById('but-two');

loginBut.style.backgroundColor="white";
loginBut.style.color="#ddd";

GoToSignUp = ()=>{
    login.style.display="none";
    signup.style.display="flex";
    loginBut.style.backgroundColor="#ddd";
    loginBut.style.color="white";
    signupBut.style.backgroundColor="white";
    signupBut.style.color="#ddd";
}

GoToLogin = ()=>{
    login.style.display="flex";
    signup.style.display="none";
    signupBut.style.backgroundColor="#ddd";
    signupBut.style.color="white";
    loginBut.style.backgroundColor="white";
    loginBut.style.color="#ddd";
}