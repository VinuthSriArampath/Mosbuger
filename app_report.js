let monthlyorders = [];
let annualorders = [];
const currentdate = new Date();
const currentYear = currentdate.getFullYear();
const currentMonthValue = currentdate.getMonth() + 1;


function validatemonthly(dateInput) {
    const year = Number(dateInput.substring(0, 4));
    const month = Number(dateInput.substring(5, 6));
    const day = Number(dateInput.substring(8));
    if (year == currentYear && month == currentMonthValue) {
        return true;
    } else {
        return false;
    }
}
function validateyearly(dateInput) {
    const year = Number(dateInput.substring(0, 4));
    const month = Number(dateInput.substring(5, 6));
    const day = Number(dateInput.substring(8));
    if (year == currentYear) {
        return true;
    } else {
        return false;
    }
}

function MonthlyGenerate() {
    orderarray=JSON.parse(localStorage.getItem("Order"));
    orderarray.forEach(data => {
        if (validatemonthly(data.orderdate)) {
            monthlyorders.push(data);
        }
    });
    var Monthly = {
        outputType: jsPDFInvoiceTemplate.Save,
        returnJsPDFDocObject: true,
        fileName: "Monthly Sales Report",
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
                { title: "#" },
                { title: "orderid" },
                { title: "order date" },
                { title: "Total" }
            ],
            table: Array.from(Array(monthlyorders.length), (item, index) => ([
                index + 1,
                monthlyorders[index].orderid,
                monthlyorders[index].orderdate,
                monthlyorders[index].TotalPrice
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
        pageLabel: "Page ",
    };
    var pdfObject = jsPDFInvoiceTemplate.default(Monthly);
}

function AnnualGenerate() {
    orderarray=JSON.parse(localStorage.getItem("Order"));
    orderarray.forEach(data => {
        if (validateyearly(data.orderdate)) {
            annualorders.push(data);
        }
    });
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
                { title: "#" },
                { title: "orderid" },
                { title: "order date" },
                { title: "Total" }
            ],
            table: Array.from(Array(annualorders.length), (item, index) => ([
                index + 1,
                annualorders[index].orderid,
                annualorders[index].orderdate,
                annualorders[index].TotalPrice
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
        pageLabel: "Page ",
    };
    var pdfObject = jsPDFInvoiceTemplate.default(Annual);
}

function ItemCountGenarate() {
    itemarray = JSON.parse(localStorage.getItem("Items"))
    var itemcount = {
        outputType: jsPDFInvoiceTemplate.Save,
        returnJsPDFDocObject: true,
        fileName: "Item Count Report",
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
                { title: "#" },
                { title: "Item ID" },
                { title: "Item Name" },
                { title: "Item expdate" },
                { title: "Item Stock" },
                { title: "Item unitprice" },
                { title: "Total Amount" }
            ],
            table: Array.from(Array(itemarray.length), (item, index) => ([
                index + 1,
                String(itemarray[index].itemid),
                String(itemarray[index].name),
                String(itemarray[index].expdate),
                String(itemarray[index].stock),
                String(itemarray[index].unitprice),
                String(itemarray[index].stock * itemarray[index].unitprice),
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
        pageLabel: "Page ",
    };
    var pdfObject = jsPDFInvoiceTemplate.default(itemcount);
}
function getbestcustomer() {
    let bestcustomer = [];
    orderarray = JSON.parse(localStorage.getItem("Order"));
    customerarray = JSON.parse(localStorage.getItem("Customer"));
    index = 0;
    customerarray.forEach(customer => {
        bestcustomer.push({
            customerid: customer.customerid,
            name: customer.name,
            TotalAmount: 0
        })
        orderarray.forEach(order => {
            bestcustomer.push
            if (customer.customerid == order.customerid) {
                bestcustomer[index].TotalAmount += order.TotalPrice;
            }
        });
        index++;
    });
    bestcustomer.sort((a, b) => b.TotalAmount - a.TotalAmount);
    return bestcustomer;
}

function BestCustomerGenarate() {
    let bestcustomerlist = getbestcustomer();
    var best = {
        outputType: jsPDFInvoiceTemplate.Save,
        returnJsPDFDocObject: true,
        fileName: "Best Customer Report",
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
                { title: "#" },
                { title: "Customer ID" },
                { title: "Customer Name" },
                { title: "Total Amount" }
            ],
            table: Array.from(Array(bestcustomerlist.length), (item, index) => ([
                index + 1,
                String(bestcustomerlist[index].customerid),
                String(bestcustomerlist[index].name),
                String(bestcustomerlist[index].TotalAmount)
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
        pageLabel: "Page ",
    };
    var pdfObject = jsPDFInvoiceTemplate.default(best);
}