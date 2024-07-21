let cashierarray=JSON.parse(localStorage.getItem("Cashier"));

let cashiercount=JSON.parse(localStorage.getItem("cashiercount"));

function GenarateCashierID(){
    cashiercount=JSON.parse(localStorage.getItem("cashiercount"));
    let str="";
    if(cashiercount-1<9){
        str="CSH-000"+cashiercount;  
    }else if(cashiercount-1<99){
        str="CSH-00"+cashiercount;
    }else if(cashiercount-1<999){
        str="CSH-0"+cashiercount;
    }else if(cashiercount-1<9999){
        str="CSH-"+cashiercount;
    }
    cashiercount++;
    localStorage.setItem("cashiercount",cashiercount);
    return str;
}
function validatename(name){
    if(name!==""){
        return true;
    }
    return false;
}
function validatecashiertelphone(phone){
    cashierarray=JSON.parse(localStorage.getItem("Cashier"));
    if(phone.length==10){
        str=phone.charAt(0);
        if(str=='0'){
            let available;
            cashierarray.forEach(i => {
                if(i.phone===phone){
                    available=true;
                }
            });
            return !available;
        }else{
            return false;
        }
    }else{
        return false;
    }
}
function validatecashierusername(username){
    cashierarray=JSON.parse(localStorage.getItem("Cashier"));
    if(username==""){
        return false;
    }
    let available =cashierarray.some(obj =>obj.username===username);
    return !available;
}
function validatecashierpassword(password){
    if(password!==""){
        return true;
    }else{
        return false;
    }
}
function addcashier(){
    cashierarray=JSON.parse(localStorage.getItem("Cashier")) || cashierarray;

    let cashieridInput=GenarateCashierID();
    let nameInput=document.getElementById('cashiername').value;
    let phoneInput=document.getElementById('cashiertel').value;
    let usernameInput=document.getElementById('cashierusername').value;
    let passwordInput=document.getElementById('cashierpassword').value;
    if(validatename(nameInput)){
        if(validatecashiertelphone(phoneInput)){
            if(validatecashierusername(usernameInput)){
                if(validatecashierpassword(passwordInput)){
                    if(cashierarray[0].name==="Default"){
                        cashierarray.splice(0,1,{
                            cashierid : cashieridInput,
                            name:nameInput,
                            phone:phoneInput,
                            username:usernameInput,
                            password:passwordInput
                        });
                        localStorage.setItem("Cashier",JSON.stringify(cashierarray));
                        alert("Cashier Added Successfully !!");
                        document.getElementById('cashiername').value="";
                        phoneInput=document.getElementById('cashiertel').value="";
                        document.getElementById('cashierusername').value="";
                        document.getElementById('cashierpassword').value="";
                    }else{
                        cashierarray.push({
                            cashierid : cashieridInput,
                            name:nameInput,
                            phone:phoneInput,
                            username:usernameInput,
                            password:passwordInput
                        });
                        localStorage.setItem("Cashier",JSON.stringify(cashierarray));
                        alert("Cashier Added Successfully !!");
                        document.getElementById('cashiername').value="";
                        phoneInput=document.getElementById('cashiertel').value="";
                        document.getElementById('cashierusername').value="";
                        document.getElementById('cashierpassword').value="";
                    }
                }else{
                    alert("Invalid Password !!")
                }
            }else{
                alert("Invalid Useername !!");
            }
        }else{
            alert("Invalid Phone Number !!");
        }
    }else{
        alert("Cashier Name Required !!");
    }
}
function passwordvisiblity(passwordfieldID){
    let passwordfield = document.getElementById(passwordfieldID);
    let view =document.getElementById("viewpassword");

    if(view.checked){
        passwordfield.type="text";
    }else{
        passwordfield.type="password";
    }
}

//---------------------------------- Update Cashier ------------------------------

let searchindex=null;

function searchcashier(id){
    let searchby=document.getElementById(id).value;
    if(searchby!==""){
        cashierarray = JSON.parse(localStorage.getItem("Cashier")) || cashierarray; 
        let found=false;
        for (let i = 0; i < cashierarray.length; i++) {
            if(cashierarray[i].cashierid === searchby || cashierarray[i].phone === searchby || cashierarray[i].username === searchby){
                document.getElementById('cashierid').value=cashierarray[i].cashierid;
                document.getElementById('cashiername').value=cashierarray[i].name;
                document.getElementById('cashiertel').value=cashierarray[i].phone;
                document.getElementById('cashierusername').value=cashierarray[i].username;
                document.getElementById('cashierpassword').value=cashierarray[i].password;
                searchindex=i;
                found=true;
                alert("Cashier Found");
                break;
            } 
        }
        if(found==false){
            alert("Cashier Not Found !!");
        }
    }else{
        searchindex=null
    }
}
function updatecashier(){
    cashierarray = JSON.parse(localStorage.getItem("Cashier")) || cashierarray;
    let nameInput=document.getElementById("cashiername").value;
    let phoneInput=document.getElementById("cashiertel").value;
    let usernameInput=document.getElementById("cashierusername").value;
    let passwordInput=document.getElementById("cashierpassword").value;
    if(searchindex===null){
        alert("Search a cashier !!");
    }else{
        if(validatename(nameInput)){
                    if(validatecashierpassword(passwordInput)){
                        cashierarray[searchindex].name=nameInput;
                        cashierarray[searchindex].phone=phoneInput;
                        cashierarray[searchindex].username=usernameInput;
                        cashierarray[searchindex].password=passwordInput;
                        localStorage.setItem("Cashier",JSON.stringify(cashierarray));
                        alert("Cashier Updated Successfully !!");
                        searchindex=null;
                    }else{
                        alert("Invalid Password !!")
                    }
        }else{
            alert("Cashier Name Required !!");
        }
    }
}


//------------------------------------- Delete Cashier --------------------------

function deletecashier(){
    cashierarray = JSON.parse(localStorage.getItem("Cashier")) || cashierarray;
    if(searchindex===null){
        alert("Search An cashier !!");
    }else{
        cashierarray.splice(searchindex,1);
        localStorage.setItem("Cashier",JSON.stringify(cashierarray));
        alert("Cashier Deleted Successfully !!");
        searchindex=null;
    }
}


//------------------------------------- View Cashier --------------------------


window.onload = function viewcashiers() {
    cashierarray = JSON.parse(localStorage.getItem("Cashier")) || cashierarray;
    let cashiertablebody=document.getElementById("cashiertablebody");

    let body=``;
    cashierarray.forEach(data => {
        body+=`
            <tr>
                <td>${data.cashierid}</td>
                <td>${data.name}</td>
                <td>${data.phone}</td>
                <td>${data.username}</td>
                <td>${data.password}</td>
            </tr>
        `
    });
    cashiertablebody.innerHTML=body;

}