function createRow(users){
   //travel the array
    for(let i=0;i<users.length;i++){
        //get each one of the user
        
        //display the user
   
        let tmp=`<tr>
                <td>${users[i].fname}</td>
                <td>${users[i].lname}</td>
                <td>${users[i].email}</td>
                <td>${users[i].age}</td>
                <td>${users[i].phone}</td>
                <td>${users[i].address}</td>
            </tr>`;
            console.log(tmp);
    //append teh tmp to the table
    //document.getElementById("usersTable").innerHTML+=tmp;
    $("#usersTable").append(tmp);
    }
}
function init(){
    console.log("listing users");
    let users = readUsers();// this function is on the storeManager
    createRow(users);

}
window.onload=init;