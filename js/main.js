const form = document.querySelector ('#form-div');
const submit = document.querySelector("#submit-btn");
const myForm = document.querySelector(".myForm");
const Msg = document.querySelector('.Msg');
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const age = document.querySelector("#age");
const maleGender = document.querySelector("#maleGender");
const femaleGender = document.querySelector("#femaleGender");
const otherGender = document.querySelector("#otherGender");
const address = document.querySelector("#address");
const phoneNumber = document.querySelector("#phoneNumber");
const email = document.querySelector("#email");
const date = document.querySelector("#date");


submit.addEventListener("click", function(e) {
    e.preventDefault();

    if(firstname.value.length === 0 || 
        lastname.value.length === 0 ||
        age.value.length === 0 ||
        maleGender.value.length === 0 ||
        femaleGender.value.length === 0 ||
        otherGender.value.length === 0 ||
        address.value.length === 0 ||
        phoneNumber.value.length ===0 ||
        email.value.length === 0 ||
        date.value.length === 0) {

        console.log("false");
        
        Msg.innerHTML = "<h4 class='errorMsg'> Please complete the details.</h4>";
        Msg.style.color = 'red';
        let errorMsg = document.querySelector('.errorMsg');
        setTimeout(function() {
            errorMsg.remove()
        }, 3000);
    }else{
        console.log("true");
    };
});