window.onload=function genaratereport(){
    orderarray=JSON.parse(localStorage.getItem("Order"));
    let annualsalesreportbody=document.getElementById("annualsalesreport");
    let body2=``;
    orderarray.forEach(data => {
        body2+=`
                <tr>
                    <td>${data.orderid}</td>
                    <td>${data.orderdate}</td>
                    <td>${data.TotalPrice}</td>
                </tr>
            `
    });
    annualsalesreportbody.innerHTML=body2;
}
// orderarray=JSON.parse(localStorage.getItem(itemlist));
orderarray =[
    {
        customerid: "Cu0001",
        orderid: "OR1001",
        itemlist: [
            {
                itemid: "IT1005",
                name: "Chicken Burger(Regular)",
                qty: 2,
                unitprice: 800,
                netprice: 1280,
            }
        ],
        orderdate: "2024-7-20",
        TotalPrice: 1280
    },
    {
        customerid: "Cu0001",
        orderid: "OR1002",
        itemlist: [
            {
                itemid: "IT1031",
                name: "Chicken Penne Pasta",
                qty: 3,
                unitprice: 1700,
                netprice: 5100,
            },
            {
                itemid: "IT1035",
                name: "Tagliatelle Pasta",
                qty: 3,
                unitprice: 2400,
                netprice: 7128,
            },
            {
                itemid: "IT1033",
                name: "Creamy Shrimp Pasta",
                qty: 1,
                unitprice: 2000,
            }
        ],
        orderdate: "2024-7-10",
        TotalPrice: 14228
    },
    {
        customerid: "Cu0001",
        orderid: "OR1003",
        itemlist: [
            {
                itemid: "IT1037",
                name: "Fried Chicken(Small)",
                qty: 2,
                unitprice: 1200,
                netprice: 2400,
            }
        ],
        orderdate: "2024-7-5",
        TotalPrice: 2400
    },
    {
        customerid: "Cu0001",
        orderid: "OR1004",
        itemlist: [
            {
                itemid: "IT1003",
                name: "Turkey Burger",
                qty: 4,
                unitprice: 1600,
                netprice: 6400,
            },
            {
                itemid: "IT1002",
                name: "Classic Burger(Regular)",
                qty: 5,
                unitprice: 750,
                netprice: 3187.5,
            },
            {
                itemid: "IT1005",
                name: "Chicken Burger(Regular)",
                qty: 5,
                unitprice: 800,
                netprice: 3200,
            },
            {
                itemid: "IT1010",
                name: "Olive Burger",
                qty: 5,
                unitprice: 1800,
                netprice: 9000,
            },
            {
                itemid: "IT1014",
                name: "Paneer Burger",
                qty: 5,
                unitprice: 900,
                netprice: 4500,
            }
        ],
        orderdate: "2024-8-20",
        TotalPrice: 26287.5
    },
    {
        customerid: "Cu0001",
        orderid: "OR1005",
        itemlist: [
            {
                itemid: "IT1003",
                name: "Turkey Burger",
                qty: 4,
                unitprice: 1600,
                netprice: 6400,
            },
            {
                itemid: "IT1002",
                name: "Classic Burger(Regular)",
                qty: 5,
                unitprice: 750,
                netprice: 3187.5,
            },
            {
                itemid: "IT1005",
                name: "Chicken Burger(Regular)",
                qty: 5,
                unitprice: 800,
                netprice: 3200,
            },
            {
                itemid: "IT1010",
                name: "Olive Burger",
                qty: 5,
                unitprice: 1800,
                netprice: 9000,
            },
            {
                itemid: "IT1014",
                name: "Paneer Burger",
                qty: 5,
                unitprice: 900,
                netprice: 4500,
            }
        ],
        orderdate: "2024-8-10",
        TotalPrice: 26287.5
    },
    {
        customerid: "Cu0001",
        orderid: "OR1005",
        itemlist: [
            {
                itemid: "IT1003",
                name: "Turkey Burger",
                qty: 4,
                unitprice: 1600,
                netprice: 6400,
            },
            {
                itemid: "IT1002",
                name: "Classic Burger(Regular)",
                qty: 5,
                unitprice: 750,
                netprice: 3187.5,
            },
            {
                itemid: "IT1005",
                name: "Chicken Burger(Regular)",
                qty: 5,
                unitprice: 800,
                netprice: 3200,
            },
            {
                itemid: "IT1010",
                name: "Olive Burger",
                qty: 5,
                unitprice: 1800,
                netprice: 9000,
            },
            {
                itemid: "IT1014",
                name: "Paneer Burger",
                qty: 5,
                unitprice: 900,
                netprice: 4500,
            }
        ],
        orderdate: "2025-8-20",
        TotalPrice: 26287.5
    },
    {
        customerid: "Cu0001",
        orderid: "OR1005",
        itemlist: [
            {
                itemid: "IT1003",
                name: "Turkey Burger",
                qty: 4,
                unitprice: 1600,
                netprice: 6400,
            },
            {
                itemid: "IT1002",
                name: "Classic Burger(Regular)",
                qty: 5,
                unitprice: 750,
                netprice: 3187.5,
            },
            {
                itemid: "IT1005",
                name: "Chicken Burger(Regular)",
                qty: 5,
                unitprice: 800,
                netprice: 3200,
            },
            {
                itemid: "IT1010",
                name: "Olive Burger",
                qty: 5,
                unitprice: 1800,
                netprice: 9000,
            },
            {
                itemid: "IT1014",
                name: "Paneer Burger",
                qty: 5,
                unitprice: 900,
                netprice: 4500,
            }
        ],
        orderdate: "2025-7-10",
        TotalPrice: 26287.5
    },
    {
        "index": 6,
        customerid: "Cu0001",
        orderid: "OR1006",
        itemlist: [
            {
                itemid: "IT1003",
                name: "Turkey Burger",
                qty: 4,
                unitprice: 1600,
                netprice: 6400,
            },
            {
                itemid: "IT1002",
                name: "Classic Burger(Regular)",
                qty: 5,
                unitprice: 750,
                netprice: 3187.5,
            },
            {
                itemid: "IT1005",
                name: "Chicken Burger(Regular)",
                qty: 5,
                unitprice: 800,
                netprice: 3200,
            },
            {
                itemid: "IT1010",
                name: "Olive Burger",
                qty: 5,
                unitprice: 1800,
                netprice: 9000,
            },
            {
                itemid: "IT1014",
                name: "Paneer Burger",
                qty: 5,
                unitprice: 900,
                netprice: 4500,
            }
        ],
        orderdate: "2025-5-17",
        TotalPrice: 26287.5
    }
]
monthlyorders=[];
function validatemonthlydate(dateInput) {
    const year = Number(dateInput.substring(0, 4));
    const month = Number(dateInput.substring(5, 6));
    const day = Number(dateInput.substring(8));

    const currentdate = new Date();
    const currentYear = currentdate.getFullYear();
    const currentMonthValue = currentdate.getMonth() + 1;
    if(year == currentYear && month == currentMonthValue){
        return true;
    }else{
        return false;
    }
}

function MonthlyGenerate() {
    orderarray.forEach(data => {
        if(validatemonthlydate(data.orderdate)){
            monthlyorders.push(data);
        }
    });
    console.log(monthlyorders);
    var pdfObject = jsPDFInvoiceTemplate.default(Annual);
}

var Annual = {
    outputType: jsPDFInvoiceTemplate.Save,
    returnJsPDFDocObject: true,
    fileName: "Annual Sales Report",
    orientationLandscape: false,
    compress: true,
    logo: {
        src: "logo.png",
        type: 'PNG', //optional, when src= data:uri (nodejs case)
        width: 40, //aspect ratio = width/height
        height: 40,
        margin: {
            top: -10, //negative or positive num, from the current position
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
        name: "Mos Burgers",
        address: "No 75/6A Kottikawaththa Road,Gothatuwa New Town,Angoda.",
        phone: "(+94) 077 00 00 000",
        email: "MosBurgers@gmail.com",
        website: "www.MosBurgers.com",
    },
    invoice: {
        label: "Invoice #: ",
        num: 19,
        invDate: "Payment Date: 01/01/2021 18:12",
        invGenDate: "Invoice Date: 02/02/2021 10:17",
        headerBorder: false,
        tableBodyBorder: false,
        header: [
            { title: "Quantity" },
            { title: "Unit" },
            { title: "Total" }
        ],
        table: Array.from(Array(monthlyorders.length), (item, index) => ([
            String(monthlyorders[index].orderid),
            String(monthlyorders[index].orderdate),
            String(monthlyorders[index].TotalPrice)
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

    },
    footer: {
        text: "The invoice is created on a computer and is valid without the signature and stamp.",
    },
    pageEnable: true,
    pageLabel: "Page ",
};