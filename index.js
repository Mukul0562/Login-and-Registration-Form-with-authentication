let password;

function validation(ele)
{
    let name = ele.name;
    let value = ele.value;
    let err = ele.nextElementSibling;

    if(name=='uname')
    {
        let nameRegex = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$/;
        if(value=="")
        {
            err.innerHTML = "<span class='red'><b>*</b></span>Name should be required.";
            ele.classList.add('is-invalid');
            ele.classList.remove('is-valid');
        }
        else if(nameRegex.test(value))
        {
            err.innerHTML = "";
            ele.classList.remove('is-invalid');
            ele.classList.add('is-valid');
        }
        else
        {
            err.innerHTML = "<span class='red'><b>*</b></span>Enter valid name.";
            ele.classList.add('is-invalid');
            ele.classList.remove('is-valid');
        }
    }
    else if(name=='password')
    {
        let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        
        if(value == "")
        {
            err.innerHTML = "<span class='red'><b>*</b></span>Password should be required.";
            ele.classList.add('is-invalid');
            ele.classList.remove('is-valid');
        }
        else if(passRegex.test(value))
        {
            err.innerHTML = ""
            ele.classList.remove('is-invalid');
            ele.classList.add('is-valid');
        }
        else
        {
            err.innerHTML = "<span class='red'><b>*</b></span>Password should be contain at least 1 Capital, 1 Single Latter, 1 Number and minimum 8 Character.";
            ele.classList.add('is-invalid');
            ele.classList.remove('is-valid');
        }
    }
    else if(name=='email')
    {
        let emailRegex = /^[a-zA-Z0-9]*[a-zA-Z]+[0-9]*@gmail\.com$/;
        if(value=="")
        {
            err.innerHTML = "<span class='red'><b>*</b></span>Email should be required.";
            ele.classList.add('is-invalid');
            ele.classList.remove('is-valid');
        }
        else if(emailRegex.test(value))
        {
            err.innerHTML = "";
            ele.classList.remove('is-invalid');
            ele.classList.add('is-valid');
        }
        else
        {
            err.innerHTML = "<span class='red'><b>*</b></span>Enter Valid Email";
            ele.classList.remove('is-valid');
            ele.classList.add('is-invalid');
        }
    }
    else if(name=='pass')
    {
        let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        let cpassword = document.querySelector('#cpass');
        password = value;
        if(cpassword.value == "")
        {
            password = value;
        }
        else
        {
            password = value;
            if(cpassword.value == value)
            {
                cpassword.nextElementSibling.innerHTML = "";
                cpassword.classList.remove('is-invalid');
                cpassword.classList.add('is-valid');
            }
            else
            {
                cpassword.nextElementSibling.innerHTML = "<span class='red'><b>*</b></span>Password not matched";
                cpassword.classList.remove('is-valid');
                cpassword.classList.add('is-invalid');
            }
        }
        if(passRegex.test(value))
        {
            err.innerHTML = "";
            ele.classList.remove('is-invalid');
            ele.classList.add('is-valid');
        }
        else
        {
            err.innerHTML = "<span class='red'><b>*</b></span>Password should be contain at least 1 Capital, 1 Single Latter, 1 Number and minimum 8 Character.";
            ele.classList.remove('is-valid');
            ele.classList.add('is-invalid');
        }
    }
    else if(name=='cpass')
    {
        password = document.querySelector("#pass").value;

        if(value == password)
        {
            err.innerHTML = "";
            ele.classList.add('is-valid');
            ele.classList.remove('is-invalid');
        }
        else
        {
            err.innerHTML = "<span class='red'><b>*</b></span>Password not matched";
            ele.classList.remove('is-valid');
            ele.classList.add('is-invalid');
        }
    }
}