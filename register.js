console.log("User Register");
//create constructor
class User{
    constructor(email,pass,first,last,age,phone,address,payment,color){
            //this.attribute=parameter;
            this.email=email;
            this.password=pass
            this.fname=first;
            this.lname=last;
            this.age=age;
            this.phone=phone;
            this.address=address;
            this.payment=payment;
            this.color=color;
    }
}



function isValid(user){
    //return false when the user is not valid
    //return true when the user is valid
    let valid = true;
    $("input").removeClass("error");

    if(user.fname.length <= 0){
        //is not a valid value
        valid = false;
        $("#txtFirst").addClass("error");
        
    }
    if(user.lname.length <= 0){
        //is not a valid value
        $("#txtLast").addClass("error");
        valid = false;

    }
    if(user.password.length <= 0){
        //is not a valid value
        $("#txtPassword").addClass("error");
        valid = false;
    }
    if(user.email.length <= 0){
        //is not a valid value
        $("#txtEmail").addClass("error");
        valid = false;
    }
    return valid;
}

function registerUser(){
    let email = $("#txtEmail").val();//check your id on the HTML
    let password = $("#txtPassword").val();
    let fname = $("#txtFirst").val();
    let lname = $("#txtLast").val();
    let age = $("#txtAge").val();
    let phone = $("#txtPhone").val();
    let address = $("#txtAddress").val();
    let payment = $("#paymentMethod").val();
    let color = $("#txtColor").val();
    let user=new User(email,password,fname,lname,age,phone,address,payment,color);//creating an instance
    if(isValid(user)){
       // $("#usersTable").append(createRow(user));
        console.log(user);
        saveUser(user);//this fn is on the storeManager.js
    }
    clearInputs();
}
function clearInputs(){
    $("#txtFirst").val("");
    $("#txtLast").val("");
    $("#txtAge").val("");
    $("#txtAddress").val("");
    $("#txtPhone").val("");
    $("#paymentMethod").val("");
    $("#txtColor").val("");
    $("#txtEmail").val("");
    $("#txtPassword").val("");
}

function init(){
    console.log("Init function");
    $("btnSave").click(registerUsers);

}
window.onload=init;