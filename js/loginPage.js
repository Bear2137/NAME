var x= document.getElementById('email');
var y= document.getElementById("password");
const inpObj = document.getElementById("email");
// const inpobjCorrect= inpObj.value;
const inpObj1 = document.getElementById("password");
// const inpobjCorrect1= inpObj.value;
var nextPageValidation=false;
const inputEl = document.querySelector("#password");
  


function myFunction() {
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("demo").innerHTML = "email OK";
  } 
} 





var passwordsDictionary={
  cat:"Hi!213",
  bear:"FiSh43%",
  human:"helpME%$",
  you:"123Rf$",
  
};

function myFunction1() {

  if (!inpObj1.checkValidity()) {
    document.getElementById("demo1").innerHTML = inpObj1.validationMessage;
  } else {
    document.getElementById("demo1").innerHTML = "password  OK";
  } 
} 
/// פה ניסיתי לעשות עמוד מתקדם
let inputArray = [];




var pass="123Eve!";
var emailExample="passwordisnotsafe@gmail.com";
var pass2="catForLife.567";
var emailExample2="catlover@gmail.com";
var pass3="dogLover345.";
var emailExample3="dog@gmail.com"
var emailCheck = document.getElementById("email");



function ValidateEmail() {
  var valueForEmail = emailCheck.value;
 var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  console.log(valueForEmail);
  if (valueForEmail.match(validRegex)) {
    alert("Valid email address!");
    document.getElementById("demo").innerHTML = "email OK";
    // return true
  }
  else {
    // document.getElementById("demo").innerHTML = emailCheck.validationMessage;
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
    alert("Invalid email address!");
    // document.form1.text11.focus();
    // return false

  }

}

function nextPage(){
  
  location.href="../html/homePage.html";
  // if(nextPageValidation==true){
  //  location.replace="../html/homePage.html"; 
}


var passCheck=document.getElementById('password');
function CheckPassword() 
{ 
  var inputtxt= passCheck.value;
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(inputtxt.match(passw)) 
{ 
 
  alert('Valid password');
  document.getElementById("demo1").innerHTML = "password  OK";
return true;
}
else
{ 
  document.getElementById("demo1").innerHTML = inpObj.validationMessage;
alert('Wrong, password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter');
return false;
}
}


function storeInput() {
  if(document.getElementById("demo1").innerHTML== "password  OK" &&  document.getElementById("demo").innerHTML =="email OK"){
 const emailInput1 = document.getElementById("email");
 const passwordInput1 = document.getElementById("password");
 const valueEmail1 = emailCheck.value;
 const valuePassword2 = passCheck.value;
  inputArray.push(valueEmail1, valuePassword2);
   console.log(inputArray);
  if(valueEmail1== inputArray[0] && valuePassword2==inputArray[1]){
    window.alert("log in successfuly");
    nextPageValidation=true;
    location.href="../html/homePage.html";
}
   else if(inputArray.includes(valueEmail1)&& inputArray.includes(valuePassword2)){
       window.alert("log in successfuly");
       nextPageValidation=true;
       location.href="../html/homePage.html"; 
    }
  }
}

function loginCheck(){
    if(document.getElementById("demo1").innerHTML== "password  OK" &&  document.getElementById("demo1").innerHTML =="password  OK"){
       const email_input2 = document.getElementById("email");
       const password_input2 = document.getElementById("password");
       const valueCheck3 = email_input2.value;
       const valueCheck4 = password_input2.value;
      if((valueCheck3==emailExample &&valueCheck4==pass)||(valueCheck3==emailExample2 && valueCheck4==pass2)||(valueCheck3==emailExample3 && valueCheck4==pass3)){
        window.alert("Secret saved password- log in successfuly! Welcome back"+ valueCheck3);
        nextPage(); 
        nextPageValidation=true;
      }
    }
  
}

function dictionaryPass(){
  var inputtxt= passCheck.value;
  var valueForEmail = emailCheck.value;
  if(valueForEmail in passwordsDictionary && 
    passwordsDictionary[valueForEmail]===inputtxt ){
      alert(valueForEmail+" have successfuly logged in!")
      nextPage();
    }
}