username=document.getElementById('username')
email=document.getElementById('email')
password=document.getElementById('password')
formbtn=document.getElementById('formbtn')
login=document.getElementById('log')
// login.setAttribute('class','btn btn-outline-primary btn-lg mx-2')
signup=document.getElementById('sup')
// signup.setAttribute('class','btn btn-primary btn-lg m-md-2')
navs=document.getElementById('navs')
sin = false

formbtn.addEventListener('click',function(){
    usv=username.value
    ev=email.value
    pv=password.value
    console.log(usv)
    if(usv=="" || ev=="" || pv==""){
        alert('Please fill all Fields')
    }else{
        if(ev.match('@gmail.com')){
            formbtn.setAttribute('href','index.html')
            sin=true
        }else{alert('Please dont forget @gmail.com')}
    }
})

// window.addEventListener('DOMContentLoaded',function(){
//     if(sin){
//         navs.removeChild(login)
//         navs.removeChild(signup)
//     }else{
//         navs.removeChild(login)
//         navs.removeChild(signup)
//         navs.appendChild(login)
//         navs.appendChild(signup)
//     }
// })