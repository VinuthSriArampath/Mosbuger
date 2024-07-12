class cashier{
    constructor (cashierID,name,telephone,username,password){
        this.cashierID=cashierID;
        this.name=name;
        this.telephone=telephone;
        this.username=username;
        this.password=password;
    }
}

let cashierobj =[new cashier("CSH-0001", "Default", "0000000000 ", "Default","Default@123")];

function GenarateCashierID(){
    let str="";
    let size=cashierobj.length;
        if(cashierobj[0].name==="Default"){
            size=0;
        }
        
        if(size-1<9){
            str="CSH-000"+size;
        }else if(size-1<99){
            str="CSH-00"+size;
        }else if(size-1<999){
            str="CSH-0"+size;
        }else if(size-1<9999){
            str="CSH-"+size;
        }
        return str;
}
function validatecashiername(name){
    if(name===""){
        return true;
    }else{
        return false;
    }
}
function validatecashiertelphone(phone){
    if(phone.length==10){
        str=phone.charAt(0);
        if(str=='0'){
            let available = cashierobj.some(obj =>obj.telephone===phone);
            return !available;
        }else{
            return false;
        }
    }else{
        return false;
    }
}
function validatecashierusername(username){
    if(username===""){
        return true;
    }
    let available =cashierobj.some(obj =>obj.username===username);
    return available;
}
function validatecashierpassword(password){
    if(password==""){
        return true;
    }else{
        return false;
    }
}
function addcashier(){
    let cashierID=GenarateCashierID();
    let name=document.getElementById('cashiername').value;
    let tel=document.getElementById('cashiertel').value;
    let username=document.getElementById('cashierusername').value;
    let password=document.getElementById('cashierpassword').value;
    if(!validatecashiername(name)){
        if(validatecashiertelphone(tel)){
            if(!validatecashierusername(username)){
                if(!validatecashierpassword(password)){
                    if(cashierobj[0].name==="Default"){
                        cashierobj.splice(0,1,new cashier(cashierID,name,tel,username,password));
                        alert("Cashier Added Successfully!");
                        console.log(cashierobj);
                    }else{
                        cashierobj.push(new cashier(cashierID,name,tel,username,password));
                        alert("Cashier Added Successfully!");
                        console.log(cashierobj);
                    }
                }else{
                    alert("** Cashier Password Invalid **");
                }
            }else{
                alert("** Cashier Username Invalid **");    
            }
        }else{
            alert("** Cashier Telephone Number Invalid **");
        }
    }else{
        alert("** Cashier Name Required !!");
    }
}
function passwordvisiblity(){
    let passwordfield = document.getElementById("cashierpassword");
    let view =document.getElementById("viewpassword");

    if(view.checked){
        passwordfield.type="text";
    }else{
        passwordfield.type="password";
    }
}
function searchcashier(id){
    let searchtxt = document.getElementById(id).value;
    console.log(cashierobj);
    let found=false;
    for (let i = 0; i < cashierobj.length; i++) {
        if(cashierobj[i].name===searchtxt || cashierobj[i].cashierID===searchtxt){
            document.getElementById("cashierID").value=cashierobj[i].cashierID;
            document.getElementById("cashiername").value=cashierobj[i].name;
            document.getElementById("cashiertel").value=cashierobj[i].telephone;
            document.getElementById("cashierusername").value=cashierobj[i].username;
            document.getElementById("cashierpassword").value=cashierobj[i].password;
            found=true;
            break;
        }
    };
    if(!found){
        alert("Cashier Not Fount");
    }
}
function removecashier(){

}













function loginform() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "Admin" && password === "Admin@123") {
        window.location.href="./ownerhomepage.html";
    } else if (username === "Default" && password === "Default@123") {
        window.location.href ="./cashierhomepage.html";
    } else {
        alert("Wrong login");
    }
}

// CASHIER NAVIAGTIONS

function logout() {
    window.location.href = './index.html';
}
function cashieraddcustomerpage() {
    window.location.href = './cashieraddcustomerpage.html';
}
function cashierdeletecustomerpage() {
    window.location.href = './cashierdeletecustomerpage.html';
}
function cashierdeleteorderpage() {
    window.location.href = './cashierdeleteorderpage.html';
}
function cashierhomepage() {
    window.location.href = './cashierhomepage.html';
}
function cashierorderupdatepage() {
    window.location.href = './cashierorderupdatepage.html';
}
function cashierviewmenupage() {
    window.location.href = './cashierviewmenupage.html';
}
function cashierupdatecustomerpage() {
    window.location.href = './cashierupdatecustomerpage.html';
}
function cashierviewcustomerpage() {
    window.location.href = './cashierviewcustomerpage.html';
}
function cashierviewmenuepage() {
    window.location.href = './cashierviewmenupage.html';
}
function cashiervieworderpage() {
    window.location.href = './cashiervieworderpage.html';
}
function cashierplaceorderpage() {
    window.location.href = './cashierplaceorderpage.html';
}
function cashierordercheckoutpage() {
    window.location.href = './cashierordercheckoutpage.html';
}

//OWNER NAVIGATIONS
function ownerhomepage() {
    window.location.href = "./ownerhomepage.html";
}
function owneraddcashierpage() {
    window.location.href = './owneraddcashierpage.html';
}
function owneraddcustomerpage() {
    window.location.href = './owneraddcustomerpage.html';
}
function owneradditemspage() {
    window.location.href = './owneradditemspage.html';
}
function ownerannualsalesreportpage() {
    window.location.href = './ownerannualsalesreportpage.html';
}
function ownerdeletecashierpage() {
    window.location.href = './ownerdeletecashierpage.html';
}
function ownerdeletecustomerpage() {
    window.location.href = './ownerdeletecustomerpage.html';
}
function ownerdeleteitemspage() {
    window.location.href = './ownerdeleteitemspage.html';
}
function ownerdeleteorderpage() {
    window.location.href = './ownerdeleteorderpage.html';
}
function ownergenaratereportspage() {
    window.location.href = './ownergenaratereportspage.html';
}
function ownerinventorymanagementpage() {
    window.location.href = './ownerinventorymanagementpage.html';
}
function owneritemcountreportpage() {
    window.location.href = './owneritemcountreportpage.html';
}
function ownermonthlysalesreportpage() {
    window.location.href = './ownermonthlysalesreportpage.html';
}
function ownerupdatecashierpage() {
    window.location.href = './ownerupdatecashierpage.html';
}
function ownerupdateorderpage() {
    window.location.href = './ownerupdateorderpage.html';
}
function ownerupdatecashierpage() {
    window.location.href = './ownerupdatecashierpage.html';
}
function ownerupdatecustomerpage() {
    window.location.href = './ownerupdatecustomerpage.html';
}
function ownerupdateitemspage() {
    window.location.href = './ownerupdateitemspage.html';
}
function ownerviewcashierpage() {
    window.location.href = './ownerviewcashierpage.html';
}
function ownerviewcustomerpage() {
    window.location.href = './ownerviewcustomerpage.html';
}
function ownerviewitemspage() {
    window.location.href = './ownerviewitemspage.html';
}
function ownervieworderpage() {
    window.location.href = './ownervieworderpage.html';
}


