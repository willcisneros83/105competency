function saveUser(user){
    //load the old data
    let data=readUsers();
    //merge the data
    data.push(user);
    let val = JSON.stringify(data);
    localStorage.setItem("users",val);
    //val is the string
    //user is the obj
}

function readUsers(){
    let data=localStorage.getItem("users");
    if (!data){ //Not data?
        return[]; //create an array the first regitration
    }else{
        let list=JSON.parse(data);//pars string back into obj
        return list;//return the obj
    }
}