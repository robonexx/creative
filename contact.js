/* setting variables to the different accessible elements*/
let nName = document.getElementById('name');
let nEmail = document.getElementById('email');
let nMessage = document.getElementById('textMessage');
let button = document.querySelector('.btn');
const regEx = /\S+@\S+\.\S+/;
let form = document.querySelector('.form');
// var redirect = "https://youtu.be/wj5VODa-eTY?t=53";

function validate (){
    
    if (nName.value.trim() !== "" && regEx.test(nEmail.value) && nMessage.value.trim() !== "") {
        button.style.backgroundColor = '#78f578c4';
        button.disabled = false;
        
        } else {
        button.style.backgroundColor = '#fc7974';
        button.disabled = true;
    }
}

/* on submit function */
form.addEventListener('submit', function (event) {

    event.preventDefault();
   // window.location.href = redirect;
   window.location.href = "./thankyou.html"
})





const inputs = document.getElementsByTagName("input");

for(let x = 0; x < inputs.length; x++) {

    inputs[x].addEventListener('blur', function () {
        const content = this.value;
        if(content == "") {
            console.log("Blank!");
            this.style.backgroundColor = "Red";
            throwError(this);
        } else {
            this.style.backgroundColor = "";
            clearError(this);
        }

        
    });
}

function throwError(field) {
    const errorDiv = field.id + "Error";
    console.log(errorDiv);
    document.getElementById(errorDiv).innerHTML = "This field is required";
}

function clearError(field) {
    const errorDiv = field.id + "Error";
    document.getElementById(errorDiv).innerHTML = "";
}
