
// Cashier Related LocalStorages.
let cashierarrayhome=JSON.parse(localStorage.getItem("Cashier")) || [{cashierid :"CSH-0001",name:"Default",phone:"0000000000",username:"Default",password:"Default@123"}];
localStorage.setItem("Cashier",JSON.stringify(cashierarrayhome));

let cashierlogincounthome=JSON.parse(localStorage.getItem("cashierlogincount")) || 0 ;
localStorage.setItem("cashierlogincount",JSON.stringify(cashierlogincounthome));

let cashiercounthome = JSON.parse(localStorage.getItem("cashiercount")) || 1;
localStorage.setItem("cashiercount",JSON.stringify(cashiercounthome));

// Admin Related LocalStorages.
let adminlogincounthome=JSON.parse(localStorage.getItem("adminlogincount")) || 0;
localStorage.setItem("adminlogincount",JSON.stringify(adminlogincounthome));

// Customer Related LocalStorages.
let customerarrayhome = JSON.parse(localStorage.getItem("Customer")) || [];
localStorage.setItem("Customer",JSON.stringify(customerarrayhome));

let customercounthome = JSON.parse(localStorage.getItem("customercount")) || 1;
localStorage.setItem("customercount",JSON.stringify(customercounthome));

// Item Related LocalStorages.
let itemsarrayhome=JSON.parse(localStorage.getItem("Items")) || [
    {itemid:"P0001",name:"Classic Burger(Large)",category:"burgers",unitprice:1500,disrate:0,stock:15,expdate:"2025-07-04"},
    {itemid:"P0002",name:"Classic Burger(Regular)",category:"burgers",unitprice:750,disrate:15,stock:15,expdate:"2025-07-04"},
    {itemid:"P0003",name:"Turkey Burger",category:"burgers",unitprice:1600,disrate:0,stock:10,expdate:"2025-07-04"},
    {itemid:"P0004",name:"Chicken Burger(Large)",category:"burgers",unitprice:1400,disrate:0,stock:15,expdate:"2025-07-04"},
    {itemid:"P0005",name:"Chicken Burger(Regular)",category:"burgers",unitprice:800,disrate:20,stock:15, expdate:"2025-07-04"},
    {itemid:"P0006",name:"Cheese Burger(Large)",category:"burgers",unitprice:1000,disrate:0,stock:10,expdate:"2025-07-04"},
    {itemid:"P0007",name:"Cheese Burger(Regular)",category:"burgers",unitprice:600,disrate:0,stock:20,expdate:"2025-07-04"},
    {itemid:"P0008",name:"Bacon Burger",category:"burgers",unitprice:650,disrate:15,stock:15,expdate:"2025-07-04"},
    {itemid:"P0009",name:"Shawarma Burger",category:"burgers",unitprice:800,disrate:0,stock:15,expdate:"2025-07-04" },
    {itemid:"P0010",name:"olive Burger",category:"burgers",unitprice:1800,disrate:0,stock:15,expdate:"2025-07-04"},
    {itemid:"P0011",name:"Double-Cheese Burger",category:"burgers",unitprice:1250,disrate:20,stock:15,expdate:"2025-07-04"},
    {itemid:"P0012",name:"Crispy Chicken Burger(Regular)",category:"burgers",unitprice:1200,disrate:0,stock:15,expdate:"2025-07-04"},
    {itemid:"P0013",name:"Crispy Chicken Burger(Large)",category:"burgers",unitprice:1600,disrate:10,stock:15,expdate:"2025-07-04"},
    {itemid:"P0014",name:"Paneer Burger",category:"burgers",unitprice:900,disrate:0,stock:15,expdate:"2025-07-04"},

    {itemid:"P0015",name:"Crispy Chicken Submarine(Large)",category:"submarines",unitprice:2000,disrate:0,stock:15,expdate:"2025-07-15"},
    {itemid:"P0016",name:"Crispy Chicken Submarine(Regular)",category:"submarines",unitprice:1500,disrate:0,stock:15,expdate:"2025-07-15"},
    {itemid:"P0017",name:"Chicken Submarine(Large)",category:"submarines",unitprice:1800,disrate:3,stock:15,expdate:"2025-07-15"},
    {itemid:"P0018",name:"Chicken Submarine(Regular)",category:"submarines",unitprice:1400,disrate:0,stock:15,expdate:"2025-07-15"},
    {itemid:"P0019",name:"Grinder Submarine",category:"submarines",unitprice:2300,disrate:0,stock:15,expdate:"2025-07-15"},
    {itemid:"P0019",name:"Cheese Submarine",category:"submarines",unitprice:2200,disrate:0,stock:15,expdate:"2025-07-15"},
    {itemid:"P0020",name:"Double Cheese n Chicken Submarine",category:"submarines",unitprice:1900,disrate:16,stock:15,expdate:"2025-07-15"},
    {itemid:"P0021",name:"Special Horgie Submarine",category:"submarines",unitprice:2800,disrate:0,stock:15,expdate:"2025-07-15"},
    {itemid:"P0022",name:"BQ Special Submarine",category:"submarines",unitprice:3000,disrate:0,stock:15,expdate:"2025-07-15"},

    {itemid:"P0023",name:"Steak Fries(Large)",category:"fries",unitprice:1200,disrate:0,stock:10,expdate:"2025-07-20"},
    {itemid:"P0024",name:"Steak Fries(Medium)",category:"fries",unitprice:600,disrate:0,stock:10,expdate:"2025-07-20"},
    {itemid:"P0025",name:"French Fries(Large)",category:"fries",unitprice:800,disrate:0,stock:10,expdate:"2025-07-20"},
    {itemid:"P0026",name:"French Fries(Medium)",category:"fries",unitprice:650,disrate:0,stock:10,expdate:"2025-07-20"},
    {itemid:"P0027",name:"French Fries(Small)",category:"fries",unitprice:450,disrate:0,stock:10,expdate:"2025-07-20"},
    {itemid:"P0028",name:"Sweet Potato Fries(Large)",category:"fries",unitprice:600,disrate:0,stock:10,expdate:"2025-07-20"},

    {itemid:"P0029",name:"Chicken n Cheese Pasta",category:"pasta",unitprice:1600,disrate:15,stock:5,expdate:"2025-07-02"},
    {itemid:"P0030",name:"Chicken Penne Pasta",category:"pasta",unitprice:1700,disrate:0,stock:5,expdate:"2025-07-02"},
    {itemid:"P0031",name:"Ground Turkey Pasta Bake",category:"pasta",unitprice:2900,disrate:10,stock:5,expdate:"2025-07-02"},
    {itemid:"P0032",name:"Creamy Shrimp Pasta",category:"pasta",unitprice:2000,disrate:0,stock:5,expdate:"2025-07-02"},
    {itemid:"P0033",name:"Lemon Butter Pasta",category:"pasta",unitprice:1950,disrate:0,stock:5,expdate:"2025-07-02"},
    {itemid:"P0034",name:"Tagliatelle Pasta",category:"pasta",unitprice:2400,disrate:1,stock:5,expdate:"2025-07-02"},
    {itemid:"P0035",name:"Baked Ravioli",category:"pasta",unitprice:2000,disrate:1,stock:5,expdate:"2025-07-02"},

    {itemid:"P0036",name:"Fried Chicken(Small)",category:"chicken",unitprice:1200,disrate:0,stock:10,expdate:"2025-07-25"},
    {itemid:"P0037",name:"Fried Chicken(Regular)",category:"chicken",unitprice:2300,disrate:10,stock:10,expdate:"2025-07-25"},
    {itemid:"P0038",name:"Fried Chicken(Large)",category:"chicken",unitprice:3100,disrate:5,stock:10,expdate:"2025-07-25"},
    {itemid:"P0039",name:"Hot Wings(Large)",category:"chicken",unitprice:2400,disrate:0,stock:10,expdate:"2025-07-25"},
    {itemid:"P0040",name:"Devilled Chicken(Large)",category:"chicken",unitprice:900,disrate:0,stock:10,expdate:"2025-07-25"},
    {itemid:"P0041",name:"BBQ Chicken(Regular)",category:"chicken",unitprice:2100,disrate:0,stock:10,expdate:"2025-07-25"},

    {itemid:"P0042",name:"Pepsi(330ml)",category:"beverage",unitprice:990,disrate:5,stock:20,expdate:"2026-07-25"},
    {itemid:"P0043",name:"Coca-Cola(330ml)",category:"beverage",unitprice:1230,disrate:0,stock:20,expdate:"2026-07-25"},
    {itemid:"P0044",name:"Sprite(330ml)",category:"beverage",unitprice:1500,disrate:3,stock:20,expdate:"2026-07-25"},
    {itemid:"P0045",name:"Mirinda(330ml)",category:"beverage",unitprice:850,disrate:7,stock:20,expdate:"2026-07-25"}
];
localStorage.setItem("Items",JSON.stringify(itemsarrayhome));

let itemcounthome=JSON.parse(localStorage.getItem("itemcount")) || 46 ;
localStorage.setItem("itemcount",JSON.stringify(itemcounthome));

// Order related LocalStorages
let orderarrayhome = JSON.parse(localStorage.getItem("Order")) || [];
localStorage.setItem("Order", JSON.stringify(orderarrayhome));

let ordercounthome = JSON.parse(localStorage.getItem("ordercount")) || 0;
localStorage.setItem("ordercount",JSON.stringify(ordercounthome));

let carthome=JSON.parse(localStorage.getItem("Cart")) || [];
localStorage.setItem("Cart",JSON.stringify(carthome));

let TotalPricehome=JSON.parse(localStorage.getItem("TotalPrice")) || 0;
localStorage.setItem("TotalPrice",JSON.stringify(TotalPricehome));

// Report Related LocalStorages.
let monthlyindexhome=JSON.parse(localStorage.getItem("monthlyindex")) || 0;
localStorage.setItem("monthlyindex",JSON.stringify(monthlyindexhome));

let annualindexhome=JSON.parse(localStorage.getItem("annualindex")) || 0;
localStorage.setItem("annualindex",JSON.stringify(annualindexhome));

let itemcountindexhome=JSON.parse(localStorage.getItem("itemcountindex")) || 0;
localStorage.setItem("itemcountindex",JSON.stringify(itemcountindexhome));

let bestcustomerindexhome=JSON.parse(localStorage.getItem("bestcustomerindex")) || 0;
localStorage.setItem("bestcustomerindex",JSON.stringify(bestcustomerindexhome));



function cashierloginvalidation(username,password){
    cashierarrayhome=JSON.parse(localStorage.getItem("Cashier"));
    let founduser=false;
    let foundpass=false;
    for(let i=0 ;i<cashierarrayhome.length;i++){
        if(cashierarrayhome[i].username==username){
            if(cashierarrayhome[i].password==password){
                return true;
            }else{
                found=false;
            }
        }else{
            found=false;
        }
    }
    if(found==false){
        alert("Username or Password Invalid !!");
        return found; 
    }
}
function loginform() {
    adminlogincounthome=JSON.parse(localStorage.getItem("adminlogincount")) || 0;
    cashierlogincounthome=JSON.parse(localStorage.getItem("cashierlogincount")) || 0;
    localStorage.setItem("adminlogincount",JSON.stringify(adminlogincounthome));
    localStorage.setItem("cashierlogincount",JSON.stringify(adminlogincounthome));
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username!==""){
        if(password!==""){
            if (username === "Admin" && password === "Admin@123") {
                adminlogincounthome++;
                localStorage.setItem("adminlogincount",JSON.stringify(adminlogincounthome));
                window.location.href="./ownerhomepage.html";
            } else if (cashierloginvalidation(username,password)) {
                cashierlogincounthome++;
                localStorage.setItem("cashierlogincount",JSON.stringify(cashierlogincounthome));
                window.location.href ="./cashierhomepage.html";
            }
        }else{
            alert("Password Required !!");
        }
    }else{
        alert("Username Required !!")
    }
}
// CASHIER BTN NAVIAGTIONS
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

//OWNER BTN NAVIGATIONS
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
function ownerbestcustomerreportpage() {
    window.location.href = './ownerbestcustomerreportpage.html';
}




function app_custoemer_vieworderitempage(){
    window.location.href = './app_cashier_vieworderitempage.html';
}
function app_owner_vieworderitempage(){
    window.location.href = './app_owner_vieworderitempage.html';
}
