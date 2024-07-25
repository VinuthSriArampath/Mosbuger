let orderarray = JSON.parse(localStorage.getItem("Order"));

let ordercount = JSON.parse(localStorage.getItem("ordercount")) || 0;

let cart=JSON.parse(localStorage.getItem("Cart"));

let TotalPrice=JSON.parse(localStorage.getItem("TotalPrice"));

function GenarateOrderID() {
    ordercount = JSON.parse(localStorage.getItem("ordercount"));
    let str = "";
    if (ordercount - 1 < 9) {
        str = "ORD-000" + (ordercount);
    } else if (size - 1 < 99) {
        str = "ORD-00" + (ordercount);
    } else if (size - 1 < 999) {
        str = "ORD-0" + (ordercount);
    } else if (size - 1 < 9999) {
        str = "ORD-" + (ordercount);
    }
    return str;
}
let searchindex=null;
function searchitemtorder(id){
    let searchby=document.getElementById(id).value;
    if(searchby!==""){
        itemsarray = JSON.parse(localStorage.getItem("Items")) || itemsarray; 
        let found=false;
        for (let i = 0; i < itemsarray.length; i++) {
            if(itemsarray[i].itemid === searchby || itemsarray[i].name === searchby){
                let tablebody=document.getElementById("tablebody");
                
                let item=``;
                item+=  `   <tr>
                                <td>${itemsarray[i].itemid}</td>
                                <td>${itemsarray[i].name}</td>
                                <td>${itemsarray[i].expdate}</td>
                                <td>${itemsarray[i].stock}</td>
                                <td>${itemsarray[i].unitprice}</td>
                                <td>${itemsarray[i].disrate}%</td>
                            </tr>
                        `
                tablebody.innerHTML=item;
                found=true;
                searchindex=i;
                break;
            } 
            
        }
        if(found==false){
            alert("Items Not Found !!");
        }
    }else{
        searchindex=null
    }
}
function addtocart(){
    TotalPrice = JSON.parse(localStorage.getItem("TotalPrice"));
    itemsarray = JSON.parse(localStorage.getItem("Items")) || itemsarray;
    
    cart =JSON.parse(localStorage.getItem("Cart"));
    const qty=document.getElementById("qty").value;
    if(qty==""){
        alert("Enter a Quantity For The Item!")
    }else{
        if(qty<=0){
            alert("Invalid Quantity !!")
        }else{
            if(searchindex==null){
                alert("Search An Item !!")
            }
            const price=qty * itemsarray[searchindex].unitprice;
            const discount=itemsarray[searchindex].disrate;
            const netvalue=price*((100-discount)/100);
            TotalPrice+=netvalue;
            localStorage.setItem("TotalPrice",JSON.stringify(TotalPrice));
            cart.push(
                {
                    itemid:itemsarray[searchindex].itemid,
                    name:itemsarray[searchindex].name,
                    unitprice:itemsarray[searchindex].unitprice,
                    qty:qty,
                    netprice:netvalue
                }
            )
            localStorage.setItem("Cart",JSON.stringify(cart));
            alert("Item Added To Cart Successfully !!");
            document.getElementById("tablebody").innerHTML="";
            document.getElementById("searchby-small").value="";
            document.getElementById("searchby-large").value="";
            document.getElementById("qty").value="";
        }
    } 
}

window.onload = function viewcart() {
    document.getElementById("OrdID").value=GenarateOrderID();
    TotalPrice=JSON.parse(localStorage.getItem("TotalPrice")) || TotalPrice;
    cart = JSON.parse(localStorage.getItem("Cart")) || cart;
    let cartitems=document.getElementById("cartitems");
    let body=``;
    cart.forEach(data => {
        body+=`
            <tr>
                <td>${data.itemid}</td>
                <td>${data.name}</td>
                <td>${data.unitprice}</td>
                <td>${data.qty}</td>
                <td>${data.netprice}</td>
            </tr>
        `
    });
    body+=`
        <tr>
            <td colspan="4">Total Price</td>
            <td>${TotalPrice}</td>
        </tr>
            `
    cartitems.innerHTML=body;

}
function validatecustomer(customerid) {
    const customerarray =JSON.parse(localStorage.getItem("Customer"));
    let available =customerarray.some(obj =>obj.customerid===customerid);
    return available;
}
function confirmorder(){
    const date=new Date();
    const customerid= document.getElementById("customerid").value;
    const orderid= document.getElementById("OrdID").value;
    const orderdate=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    ordercount=JSON.parse(localStorage.getItem("ordercount"));
    orderarray=JSON.parse(localStorage.getItem("Order"));
    TotalPrice=JSON.parse(localStorage.getItem("TotalPrice"));
    cart=JSON.parse(localStorage.getItem("Cart"));
    const itemlist=cart;
    if(customerid==""){
        alert("Customer ID Required !!");
    }else{
        cart=[];
        localStorage.setItem("Cart",JSON.stringify(cart));
        if(validatecustomer(customerid)){
            if(itemlist.length==0){
                alert("Cart is Empty !!");
            }else{
                ordercount
                localStorage.setItem("ordercount",JSON.stringify(ordercount));
                orderarray.push(
                    {
                        orderid:orderid,
                        customerid:customerid,
                        orderdate:orderdate,
                        itemlist:itemlist,
                        TotalPrice:TotalPrice
                    }
                );
                ordercount++;
                localStorage.setItem("ordercount",JSON.stringify(ordercount));
                localStorage.setItem("Order",JSON.stringify(orderarray));
                TotalPrice=0.0;
                localStorage.setItem("TotalPrice",JSON.stringify(TotalPrice));
                cashierhomepage();
                alert("Order Placed Successfully !!");
            }
        }else{
            alert("Customer Not Found !!");
        }
    }
    
}
let num;
let searchindexorder=null;
function searchorder(id,numtaken){
    num=numtaken; 
    let searchby=document.getElementById(id).value;
    let tablebody=document.getElementById("tablebody");
    if(searchindexorder!==""){
        orderarray = JSON.parse(localStorage.getItem("Order")) || orderarray; 
        let found=false;
        for (let i = 0; i < orderarray.length; i++) {
            if(orderarray[i].orderid === searchby){
                document.getElementById("customerid").value=orderarray[i].customerid;
                let order=``;
                order+=  `   <tr>
                                <td>${orderarray[i].orderid}</td>
                                <td>${orderarray[i].orderdate}</td>
                                <td>${orderarray[i].TotalPrice}</td>
                                <td><button value="${orderarray[i].orderid}" class="btn btn-danger" onclick="vieworder(this.value)">View More</button</td>
                            </tr>
                        `
                tablebody.innerHTML=order;
                found=true;
                searchindexorder=i;
                break;
            }else if(orderarray[i].customerid === searchby){
                let order=``;
                document.getElementById("customerid").value=orderarray[i].customerid;
                orderarray.forEach(data => {
                    order+=  `   <tr>
                                <td>${data.orderid}</td>
                                <td>${data.orderdate}</td>
                                <td>${data.TotalPrice}</td>
                                <td><button value="${orderarray[i].orderid}" class="btn btn-danger" onclick="vieworder(this.value)">View More</button</td>
                            </tr>
                        `
                });
                tablebody.innerHTML=order;
                found=true;
                searchindexorder=i;
                break;
            } 
            
        }
        if(found==false){
            alert("Order Not Found !!");
        }
    }else{
        searchindexorder=null
    }
}

function vieworder(orderid){
    let vieworderid=orderid;
    localStorage.setItem("vieworderid",JSON.stringify(vieworderid));
    if(num==1){
        app_custoemer_vieworderitempage();
    }else if(num==2){
        app_owner_vieworderitempage();
    }
}
viewitemdetails();
function viewitemdetails() {
    let found=false;
    let vieworderid=JSON.parse(localStorage.getItem("vieworderid"));
    orderarray=JSON.parse(localStorage.getItem("Order")) || orderarray;
    for (let i = 0; i < orderarray.length; i++) {
        if(orderarray[i].orderid === vieworderid){
            document.getElementById("customerid").value=orderarray[i].customerid;
            document.getElementById("orderid").value=orderarray[i].orderid;
            document.getElementById("orderdate").value=orderarray[i].orderdate;
            let tableitembody=document.getElementById("tableitembody");
            let body=``;
            orderarray[i].itemlist.forEach(data => {
                body+=`
                    <tr>
                        <td>${data.itemid}</td>
                        <td>${data.name}</td>
                        <td>${data.unitprice}</td>
                        <td>${data.qty}</td>
                        <td>${data.netprice}</td>
                    </tr>
                `
            });
            body+=`
                    <tr>
                        <td colspan="4">Total Amount</td>
                        <td>${orderarray[i].TotalPrice}</td>
                    </tr>
                `
            tableitembody.innerHTML=body;
            found=true;
        }
    }
    vieworderid=null;
    localStorage.setItem("vieworderid",JSON.stringify(vieworderid));
}
function searchorderup(id){
    let searchby=document.getElementById(id).value;
    let tablebody=document.getElementById("tableupdelbody");
    let found=false;
    if(searchby!==""){
        orderarray = JSON.parse(localStorage.getItem("Order")) || orderarray; 
        for (let i = 0; i < orderarray.length; i++) {
            if(orderarray[i].orderid === searchby){
                document.getElementById("customerupdelid").value=orderarray[i].customerid;
                document.getElementById("orderupdelid").value=orderarray[i].orderid;
                document.getElementById("orderupdeldate").value=orderarray[i].orderdate;
                let order=``;
                orderarray[i].itemlist.forEach(data => {
                    order += `
                        <tr>
                            <td>${data.itemid}</td>
                            <td>${data.name}</td>
                            <td>${data.unitprice}</td>
                            <td><input type="number" value="${data.qty}" name="qty" id="${data.itemid}"></td>
                            <td>${data.netprice}</td>
                            <td><input type="checkbox" id="${data.name}"></td>
                        </tr>
                    `;
                });
                tablebody.innerHTML=order;
                found=true;
                searchindexorder=i;
                break;
            }    
        }
        if(found==false){
            alert("Order Not Found !!");
        }
    }else{
        searchindexorder=null
    }
}

function searchorderdel(id){
    let searchby=document.getElementById(id).value;
    let tablebody=document.getElementById("tableupdelbody");
    let found=false;
    if(searchby!==""){
        orderarray = JSON.parse(localStorage.getItem("Order")) || orderarray; 
        for (let i = 0; i < orderarray.length; i++) {
            if(orderarray[i].orderid === searchby){
                document.getElementById("customerupdelid").value=orderarray[i].customerid;
                document.getElementById("orderupdelid").value=orderarray[i].orderid;
                document.getElementById("orderupdeldate").value=orderarray[i].orderdate;
                let order=``;
                orderarray[i].itemlist.forEach(data => {
                    order+=  `   
                            <tr>
                                <td>${data.itemid}</td>
                                <td>${data.name}</td>
                                <td>${data.unitprice}</td>
                                <td>${data.qty}</td>
                                <td>${data.netprice}</td>
                            </tr>
                        `
                });
                tablebody.innerHTML=order;
                found=true;
                searchindexorder=i;
                break;
            }    
        }
        if(found==false){
            alert("Order Not Found !!");
        }
    }else{
        searchindexorder=null
    }
}

function updateorder() {
    orderarray = JSON.parse(localStorage.getItem("Order")) || orderarray;
    if (searchindexorder === null) {
        alert("Search An Order !!");
    } else {
        itemlist = orderarray[searchindexorder].itemlist;
        for (let i = 0; i < itemlist.length; i++) {
            itemlist[i].qty = document.getElementById(itemlist[i].itemid).value;
            itemlist[i].netprice = itemlist[i].unitprice * itemlist[i].qty;
            orderarray[searchindexorder].itemlist = itemlist;
        }
        for (let i = 0; i < itemlist.length; i++) {
            const element = itemlist[i];
            if (document.getElementById(element.name).checked) {
                itemlist.splice(i, 1);
                i--;
            }
        }
        document.getElementById("customerupdelid").value = "";
        document.getElementById("orderupdelid").value = "";
        document.getElementById("orderupdeldate").value = "";
        document.getElementById("searchby-small").value = "";
        document.getElementById("searchby-large").value = "";
        document.getElementById("tableupdelbody").value = "";

        localStorage.setItem("Order", JSON.stringify(orderarray));
        alert("Order Updated Successfully !!");
        searchindexorder = null;
    }
}

function deleteorder(){
    orderarray = JSON.parse(localStorage.getItem("Order")) || orderarray;
    if(searchindexorder===null){
        alert("Search a Order !!");
    }else{
        orderarray.splice(searchindexorder,1);
        localStorage.setItem("Order",JSON.stringify(orderarray));
        alert("Order Deleted Successfully !!");
        searchindexorder=null;
    }
}