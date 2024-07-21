let title = "";
let temp = [];
let date = "";

const currentdate = new Date();
const currentYear = currentdate.getFullYear();
const currentMonthValue = currentdate.getMonth() + 1;

Ord =[
    {
        "index": 1,
        "Cuid": "Cu0001",
        "Orid": "OR1001",
        "Order": [
            {
                "Itid": "IT1005",
                "Itname": "Chicken Burger(Regular)",
                "qty": "2",
                "price": 800,
                "Netprice": 1280,
                "Totalprice": 1600
            }
        ],
        "date": "2024-7-20",
        "Price": 1280
    },
    {
        "index": 2,
        "Cuid": "Cu0001",
        "Orid": "OR1002",
        "Order": [
            {
                "Itid": "IT1031",
                "Itname": "Chicken Penne Pasta",
                "qty": 3,
                "price": 1700,
                "Netprice": 5100,
                "Totalprice": 5100
            },
            {
                "Itid": "IT1035",
                "Itname": "Tagliatelle Pasta",
                "qty": 3,
                "price": 2400,
                "Netprice": 7128,
                "Totalprice": 7200
            },
            {
                "Itid": "IT1033",
                "Itname": "Creamy Shrimp Pasta",
                "qty": 1,
                "price": 2000,
                "Netprice": 2000,
                "Totalprice": 2000
            }
        ],
        "date": "2024-7-10",
        "Price": 14228
    },
    {
        "index": 3,
        "Cuid": "Cu0001",
        "Orid": "OR1003",
        "Order": [
            {
                "Itid": "IT1037",
                "Itname": "Fried Chicken(Small)",
                "qty": 2,
                "price": 1200,
                "Netprice": 2400,
                "Totalprice": 2400
            }
        ],
        "date": "2024-7-5",
        "Price": 2400
    },
    {
        "index": 4,
        "Cuid": "Cu0001",
        "Orid": "OR1004",
        "Order": [
            {
                "Itid": "IT1003",
                "Itname": "Turkey Burger",
                "qty": 4,
                "price": 1600,
                "Netprice": 6400,
                "Totalprice": 0
            },
            {
                "Itid": "IT1002",
                "Itname": "Classic Burger(Regular)",
                "qty": 5,
                "price": 750,
                "Netprice": 3187.5,
                "Totalprice": 3750
            },
            {
                "Itid": "IT1005",
                "Itname": "Chicken Burger(Regular)",
                "qty": 5,
                "price": 800,
                "Netprice": 3200,
                "Totalprice": 4000
            },
            {
                "Itid": "IT1010",
                "Itname": "Olive Burger",
                "qty": 5,
                "price": 1800,
                "Netprice": 9000,
                "Totalprice": 9000
            },
            {
                "Itid": "IT1014",
                "Itname": "Paneer Burger",
                "qty": 5,
                "price": 900,
                "Netprice": 4500,
                "Totalprice": 4500
            }
        ],
        "date": "2024-8-20",
        "Price": 26287.5
    },
    {
        "index": 5,
        "Cuid": "Cu0001",
        "Orid": "OR1005",
        "Order": [
            {
                "Itid": "IT1003",
                "Itname": "Turkey Burger",
                "qty": 4,
                "price": 1600,
                "Netprice": 6400,
                "Totalprice": 0
            },
            {
                "Itid": "IT1002",
                "Itname": "Classic Burger(Regular)",
                "qty": 5,
                "price": 750,
                "Netprice": 3187.5,
                "Totalprice": 3750
            },
            {
                "Itid": "IT1005",
                "Itname": "Chicken Burger(Regular)",
                "qty": 5,
                "price": 800,
                "Netprice": 3200,
                "Totalprice": 4000
            },
            {
                "Itid": "IT1010",
                "Itname": "Olive Burger",
                "qty": 5,
                "price": 1800,
                "Netprice": 9000,
                "Totalprice": 9000
            },
            {
                "Itid": "IT1014",
                "Itname": "Paneer Burger",
                "qty": 5,
                "price": 900,
                "Netprice": 4500,
                "Totalprice": 4500
            }
        ],
        "date": "2024-8-10",
        "Price": 26287.5
    },
    {
        "index": 5,
        "Cuid": "Cu0001",
        "Orid": "OR1005",
        "Order": [
            {
                "Itid": "IT1003",
                "Itname": "Turkey Burger",
                "qty": 4,
                "price": 1600,
                "Netprice": 6400,
                "Totalprice": 0
            },
            {
                "Itid": "IT1002",
                "Itname": "Classic Burger(Regular)",
                "qty": 5,
                "price": 750,
                "Netprice": 3187.5,
                "Totalprice": 3750
            },
            {
                "Itid": "IT1005",
                "Itname": "Chicken Burger(Regular)",
                "qty": 5,
                "price": 800,
                "Netprice": 3200,
                "Totalprice": 4000
            },
            {
                "Itid": "IT1010",
                "Itname": "Olive Burger",
                "qty": 5,
                "price": 1800,
                "Netprice": 9000,
                "Totalprice": 9000
            },
            {
                "Itid": "IT1014",
                "Itname": "Paneer Burger",
                "qty": 5,
                "price": 900,
                "Netprice": 4500,
                "Totalprice": 4500
            }
        ],
        "date": "2025-8-20",
        "Price": 26287.5
    },
    {
        "index": 5,
        "Cuid": "Cu0001",
        "Orid": "OR1005",
        "Order": [
            {
                "Itid": "IT1003",
                "Itname": "Turkey Burger",
                "qty": 4,
                "price": 1600,
                "Netprice": 6400,
                "Totalprice": 0
            },
            {
                "Itid": "IT1002",
                "Itname": "Classic Burger(Regular)",
                "qty": 5,
                "price": 750,
                "Netprice": 3187.5,
                "Totalprice": 3750
            },
            {
                "Itid": "IT1005",
                "Itname": "Chicken Burger(Regular)",
                "qty": 5,
                "price": 800,
                "Netprice": 3200,
                "Totalprice": 4000
            },
            {
                "Itid": "IT1010",
                "Itname": "Olive Burger",
                "qty": 5,
                "price": 1800,
                "Netprice": 9000,
                "Totalprice": 9000
            },
            {
                "Itid": "IT1014",
                "Itname": "Paneer Burger",
                "qty": 5,
                "price": 900,
                "Netprice": 4500,
                "Totalprice": 4500
            }
        ],
        "date": "2025-7-10",
        "Price": 26287.5
    },
    {
        "index": 6,
        "Cuid": "Cu0001",
        "Orid": "OR1006",
        "Order": [
            {
                "Itid": "IT1003",
                "Itname": "Turkey Burger",
                "qty": 4,
                "price": 1600,
                "Netprice": 6400,
                "Totalprice": 0
            },
            {
                "Itid": "IT1002",
                "Itname": "Classic Burger(Regular)",
                "qty": 5,
                "price": 750,
                "Netprice": 3187.5,
                "Totalprice": 3750
            },
            {
                "Itid": "IT1005",
                "Itname": "Chicken Burger(Regular)",
                "qty": 5,
                "price": 800,
                "Netprice": 3200,
                "Totalprice": 4000
            },
            {
                "Itid": "IT1010",
                "Itname": "Olive Burger",
                "qty": 5,
                "price": 1800,
                "Netprice": 9000,
                "Totalprice": 9000
            },
            {
                "Itid": "IT1014",
                "Itname": "Paneer Burger",
                "qty": 5,
                "price": 900,
                "Netprice": 4500,
                "Totalprice": 4500
            }
        ],
        "date": "2025-5-17",
        "Price": 26287.5
    }
]
temp = checkmonth(Ord);
function MonthlyGenerate() {
    
    // temp = JSON.parse(localStorage.getItem("Order"));
    var pdfObject = jsPDFInvoiceTemplate.default(MonthlyReport);
}

function AnnualGenerate() {
    console.log(checkyear(Ord));
    // temp = checkyear(JSON.parse(localStorage.getItem("Order")));
    //var pdfObject = jsPDFInvoiceTemplate.default(props);
}

function checkmonth(temp){
    let index =1;
    let Temp =[];
    temp.forEach(element => {
        const year = Number(element.date.substring(0, 4));
        const month = Number(element.date.substring(5, 6));
        const day = Number(element.date.substring(8));
        if(year == currentYear && month == currentMonthValue){
            Temp.push({index:index++,Orid:element.Orid,date:element.date,price:element.Price});
        }
    });
    console.log(Temp);
    return Temp;
}

function checkyear(temp){
    let Temp =[];
    temp.forEach(element => {
        const year = Number(element.date.substring(0, 4));
        const month = Number(element.date.substring(5, 6));
        const day = Number(element.date.substring(8));
        if(year == currentYear){
            Temp.push(element);
        }
    });
    return Temp;
}`
`

var MonthlyReport = {
    outputType: jsPDFInvoiceTemplate.Save,
    returnJsPDFDocObject: true,
    fileName:"BQ Burgers Monthly report",
    orientationLandscape: false,
    compress: true,
    logo:{
        src: "Untitled-2.png",
        type: 'PNG', //optional, when src= data:uri (nodejs case)
        width: 40, //aspect ratio = width/height
        height: 30,
        margin: {
            top: 0, //negative or positive num, from the current position
            left: 0 //negative or positive num, from the current position
        }
    },
    stamp: {
        inAllPages: true, //by default = false, just in the last page
        src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
        type: 'JPG', //optional, when src= data:uri (nodejs case)
        width: 20, //aspect ratio = width/height
        height: 20,
        margin: {
            top: 0, //negative or positive num, from the current position
            left: 0 //negative or positive num, from the current position
        }
    },
    business: {
        name: "BQ Burgers",
        address: "Icet Panadura.",
        phone: "(+94) 76 488 7732",
        email: "BQBurgers@gmail.com",
        website: "www.BQBurgers.com",
    },
    contact: {
        label: "Invoice issued for:",
        name: "Client Name",
        address: "Icet Panadura.",
        phone: "(+94) 76 488 77322",
        email: "BQBurgers@gmail.com",
        otherInfo: "www.BQBurgers.com",
    },
    invoice: {
        invDate: currentMonthValue+"/"+currentYear,
        headerBorder: false,
        tableBodyBorder: false,
        header: [
            {
                title: "#",
                style: {
                    width: 10
                }
            },
            {
                title: "Order ID",
                style: {
                    width: 50
                }
            },
            {
                title: "Order Date",
                style: {
                    width: 80
                }
            },
            { title: "Total" }
        ],
        table: Array.from(Array(temp.length), (item, index) => ([
            index + 1,
            "hello",
            temp[index].date,
            temp[index].Price
        ])),
        additionalRows: [{
            col1: 'Total:',
            col2: '145,250.50',
            col3: 'ALL',
            style: {
                fontSize: 14 //optional, default 12
            }
        },
        {
            col1: 'VAT:',
            col2: '20',
            col3: '%',
            style: {
                fontSize: 10 //optional, default 12
            }
        },
        {
            col1: 'SubTotal:',
            col2: '116,199.90',
            col3: 'ALL',
            style: {
                fontSize: 10 //optional, default 12
            }
        }],
        invDescLabel: "Invoice Note",
        invDesc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    },
    footer: {
        text: "All copyrights recieved for BQ Burgers",
    },
    pageEnable: true,
    pageLabel: "Page ",
};

function Login() {
    let password = document.getElementById("Password").value;
    let username = document.getElementById("Username").value;
    if (password == "Admin123") {
        if (username !== "") {
            window.alert("Username Required");
        }
        else {
            window.location.href = "AdminMainMenu.html";
        }
    }
    else if (password == "User123") {
        if (username !== "") {
            window.alert("Username Required");
        }
        else{
            window.location.href = "UserMainMenu.html";
        }
    }
    else {
        window.alert("Wrong Password");
    }
}