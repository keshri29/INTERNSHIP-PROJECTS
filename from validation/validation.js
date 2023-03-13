function validate()
{
    var username = document.getElementById('username').vlaue
    var email = document.getElementById('email').vlaue
    var password = document.getElementById('password').vlaue
    var confirmpassword = document.getElementById('confirmpassowrd').vlaue

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkconfirmpassowd(password, confirmpassowrd)
}

function checkusername(username)
{
if(username.length > 7)
{
    document.getElementById('username').classList.add('success') 
    document.getElementById('username').classList.replace('error', 'success') 
    document.getElementById('username_error').innerHTML=''
}
}
 else
     {
    document.getElementById('username').classList.add('error')
    document.getElementById('username_error').innerText='username should be 8 letters long'
}


function checkemail(email)
{
if(email.length > 8 && email.includes('@gmail.com'))
{
    document.getElementById('email').classList.add('success') 
    document.getElementById('email').classList.replace('error', 'success') 
    document.getElementById('email_error').innerHTML=''
}
}
else
{
    document.getElementById('email').classList.add('error')
    document.getElementById('email_error').innerText='enter valid email'
}



function checkpassword(password)
{
if(password.length > 8)
{
    document.getElementById('password').classList.add('success') 
    document.getElementById('password').classList.replace('error', 'success') 
    document.getElementById('password_error').innerHTML=''
}
}
else
{
    document.getElementById('password').classList.add('error')
    document.getElementById('password_error').innerText='enter valid password'
}

function checkpasswordsmatch(password, confirmpassowrd)
{
  if (password==confirmpassowrd && password!=''){
  document.getElementById(' confirmpassowrd').classList.add('success') 
  document.getElementById(' confirmpassowrd').classList.replace('error', 'success') 
  document.getElementById(' confirmpassowrd_error').innerHTML=''
}
}

else
{
    document.getElementById('confirmpassowr').classList.add('error')
    document.getElementById('confirmpassowrd_error').innerText='password dont match'
}
