let itemsarray=JSON.parse(localStorage.getItem("Items"));

let itemcount=JSON.parse(localStorage.getItem("itemcount")) ;

function GenarateItemID(){
    itemcount=JSON.parse(localStorage.getItem("itemcount"));
    let str="";
    if(itemcount-1<9){
        str="P000"+(itemcount+1);  
    }else if(itemcount-1<99){
        str="P00"+(itemcount+1);
    }else if(itemcount-1<999){
        str="P0"+(itemcount+1);
    }else if(size-1<9999){
        str="P"+(itemcount+1);
    }
    itemcount++;
    localStorage.setItem("itemcount",itemcount);
    return str;
}
function validateitemname(name){
    custoitemsarraymerarray=JSON.parse(localStorage.getItem("Items"));
    if(name!==""){
        let available;
        itemsarray.forEach(i => {
           if(i.name===name){
                available=true;
            }
        });
        return !available;
    }
    return false;
}
function validateitememail(email){
    if(email!==""){
        return true;
    }
    return false;
}
function validateitemaddress(address){
    if(address!==""){
        return true;
    }
    return false;
}


function validday(year,month,day){	//--> VALIDATE DAY METHOD.
	const currentdate=new Date();			//--> GET THE LOCAL DATE
    const currentYear=currentdate.getFullYear();    				//--> EXTRACTING THE YEAR VALUE FROM THE currentdate VARIABELE
    const currentMonthValue = currentdate.getMonth()+1;	//--> EXTRACTING THE MONTH VALUE FROM THE currentdate VARIABELE
    const currentMonthDate=currentdate.getDate();		//--> EXTRACTING THE DAY VALUE FROM THE currentdate VARIABELE

    let leap=true;
    if(year%400==0){
        leap=true;
    }else if(year%4==0){
        if(year%100==0){
            leap=false;
        }else{
            leap=true;
        }
    }else{
        leap=false;
    }

    if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
        if(day>=1 && day<=31){
            if(year==currentYear){
                if(month==currentMonthValue){
                    if(day>currentMonthDate){
                        return true;
                    }
                }else{
                    return true;
                }
            }else if(year>currentYear){
                return true;
            }
        }
        return false;
    }else if(month==4 || month==6 || month==9 || month==11){
        if(day>=1 && day<=30){
            if(year==currentYear){
                if(month==currentMonthValue){
                    if(day>currentMonthDate){
                        return true;
                    }
                }else{
                    return true;
                }
            }else if(year>currentYear){
                return true;
            }
        }
        return false;
    }else if(month==2){
        if(!leap){
            if(day>=1 && day<=28){
                if(year==currentYear){
                    if(month==currentMonthValue){
                        if(day>currentMonthDate){
                            return true;
                        }
                    }else{
                        return true;
                    }
                }else if(year>currentYear){
                    return true;
                }
            }
            return false;
        }else{
            if(day>=1 && day<=29){
                if(year==currentYear){
                    if(month==currentMonthValue){
                        if(day>currentMonthDate){
                            return true;
                        }
                    }else{
                        return true;
                    }
                }else if(year>currentYear){
                    return true;
                }
            }
            return false;
        }

    }
    return false;
}
function validmonth(year,month){		//--> VALIDATE MONTH METHOD.
    const currentdate=new Date();			//--> GET THE LOCAL DATE
    const currentYear=currentdate.getFullYear();    				//--> EXTRACTING THE YEAR VALUE FROM THE currentdate VARIABELE
    const currentMonthValue = currentdate.getMonth()+1;	//--> EXTRACTING THE MONTH VALUE FROM THE currentdate VARIABELE
    const currentMonthDate=currentdate.getDate();		//--> EXTRACTING THE DAY VALUE FROM THE currentdate VARIABELE

    if(month>=1 && month<=12){	//--> CHECK WETHER THE USER INPUTER MONTH IS BETWEEN 1 AND 12
        if(year==currentYear){	//--> IF THE USER INPUTED YEAR IS CURRENT YEAR WE SHOULD CHECK WEATHER THE USER INPUTED MONTH LESS THAN OR EQUAL CURRENT MONTH
            if(month>=currentMonthValue){
                return true;
            }
        }else if(year>currentYear){
            return true;
        }
    }
    return false;
}
function validyear( year){					//--> VALIDATE YEAR METHOD.
	const currentdate=new Date();			//--> GET THE LOCAL DATE
    const currentYear=currentdate.getFullYear();    				//--> EXTRACTING THE YEAR VALUE FROM THE currentdate VARIABELE
    const currentMonthValue = currentdate.getMonth()+1;	//--> EXTRACTING THE MONTH VALUE FROM THE currentdate VARIABELE
    const currentMonthDate=currentdate.getDate();		//--> EXTRACTING THE DAY VALUE FROM THE currentdate VARIABELE

    if(year>=currentYear){
        return true;
    }
    return false;
}
function validateitemexpdate(bday){			//--> VALIDATE DATE OF BIRTH METHOD.
	const currentdate=new Date();			//--> GET THE LOCAL DATE
    const currentYear=currentdate.getFullYear();    				//--> EXTRACTING THE YEAR VALUE FROM THE currentdate VARIABELE
    const currentMonthValue = currentdate.getMonth()+1;	//--> EXTRACTING THE MONTH VALUE FROM THE currentdate VARIABELE
    const currentMonthDate=currentdate.getDate();		//--> EXTRACTING THE DAY VALUE FROM THE currentdate VARIABELE.

    const year=Number(bday.substring(0,4));			//--> EXTRACTING THE YEAR VALUE FROM THE USER GIVEN INPUT.
    const month=Number(bday.substring(5,7));		//--> EXTRACTING THE MONTH VALUE FROM THE USER GIVEN INPUT.
    const day=Number(bday.substring(8));			//--> EXTRACTING THE DAY VALUE FROM THE USER GIVEN INPUT.

    const boolyear=validyear(year);			//--> GETING TRUE/FALSE BY VALIDATING THE YEAR THROUG A METHOD.
    const boolmonth=validmonth(year,month);	//--> GETING TRUE/FALSE BY VALIDATING THE MONTH THROUG A METHOD.
    const boolday=validday(year,month,day);	//--> GETING TRUE/FALSE BY VALIDATING THE DAY THROUG A METHOD.

    if(bday.length==10){ //--> IF THE LENGTH IS NOT EQUAL TO 10 THEN RETURN FALSE.
        if(boolyear && boolmonth && boolday){
            return true;
        }
        return false;
    }else{
        return false;
    }
}
function validateitestock(stock){
    if(stock!==""){
        return true;
    }
    return false;
}
function validateunitprice(price){
    if(price!==""){
        if(price>0){
            return true;
        }
        return false;
    }
    return false;
}
function validatedisrate(disrate){
    if(disrate!==""){
        if(disrate >= 0 && disrate<=100){
            return true;
        }
        return false;
    }
    return false;
}
function validatecategory(category){
    if(category!==""){
        return true;
    }
    return false;
}
function additem(){
    itemsarray=JSON.parse(localStorage.getItem("Items"));
    const itemidinput=GenarateItemID();
    const itemnameinput=document.getElementById("itemname").value;
    const itemexpirydateinput=document.getElementById("itemexpirydate").value;
    const itemstocklevelinput=document.getElementById("itemstocklevel").value;
    const itemunitpriceinput=document.getElementById("itemunitprice").value;
    const itemdiscountrateinput=document.getElementById("itemdiscountrate").value;
    const itemcategoryinput=document.getElementById("itemcategory").value;
    if(validateitemname(itemnameinput)){
            if(validateitemexpdate(itemexpirydateinput)){
                if(validateitestock(itemstocklevelinput)){
                    if(validateunitprice(itemunitpriceinput)){
                        if(validatedisrate(itemdiscountrateinput)){
                            if(validatecategory(itemcategoryinput)){
                                itemsarray.push({
                                    itemid : itemidinput,
                                    name:itemnameinput,
                                    expdate:itemexpirydateinput,
                                    stock:itemstocklevelinput,
                                    unitprice:itemunitpriceinput,
                                    disrate:itemdiscountrateinput,
                                    category:itemcategoryinput
                                });
                                localStorage.setItem("Items",JSON.stringify(itemsarray));
                                alert("Items Added Successfully !!");
                                document.getElementById("itemname").value="";
                                document.getElementById("itemexpirydate").value="";
                                document.getElementById("itemstocklevel").value="";
                                document.getElementById("itemunitprice").value="";
                                document.getElementById("itemdiscountrate").value="";
                                document.getElementById("itemcategory").value="";
                            }else{
                                alert("Category Required !!");
                            }
                        }else{
                            alert("Invalid Discount Rate Should Be In Range 0-100 !!")
                        }
                    }else{
                        alert("Invalid Price !!")
                    }
                }else{
                    alert("Stock Level Required(0 or greater) !!");
                }
            }else{
                alert("Invalid Expiry Date !!");
            }
    }else{
        alert("Invalid Item Name !!");
    }
}

// --------------------------------- Update Items ----------------------------------------- 

let searchindex=null;

function searchitem(id){
    let searchby=document.getElementById(id).value;
    if(searchby!==""){
        itemsarray = JSON.parse(localStorage.getItem("Items")) || itemsarray; 
        let found=false;
        for (let i = 0; i < itemsarray.length; i++) {
            if(itemsarray[i].itemid === searchby || itemsarray[i].name === searchby){
                document.getElementById("itemid").value=itemsarray[i].itemid;
                document.getElementById("itemname").value=itemsarray[i].name;
                document.getElementById("itemexpirydate").value=itemsarray[i].expdate;
                document.getElementById("itemstocklevel").value=itemsarray[i].stock;
                document.getElementById("itemunitprice").value=itemsarray[i].unitprice;
                document.getElementById("itemdiscountrate").value=itemsarray[i].disrate;
                document.getElementById("itemcategory").value=itemsarray[i].category;
                searchindex=i;
                found=true;
                alert("Items Found");
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

function updateitem(){
    itemsarray = JSON.parse(localStorage.getItem("Items")) || itemsarray;
    let itemnameinput=document.getElementById("itemname").value;
    let itemexpdateinput=document.getElementById("itemexpirydate").value;
    let itemstockinput=document.getElementById("itemstocklevel").value;
    let itemunitpriceinput=document.getElementById("itemunitprice").value;
    let itemdiscountinput=document.getElementById("itemdiscountrate").value;
    let itemcategoryinput=document.getElementById("itemcategory").value;
    if(searchindex===null){
        alert("Search a Items !!");
    }else{
        if(validateitemexpdate(itemexpdateinput)){
            if(validateitestock(itemstockinput)){
                if(validateunitprice(itemunitpriceinput)){
                    if(validatedisrate(itemdiscountinput)){
                        if(validatecategory(itemcategoryinput)){
                            itemsarray[searchindex].name=itemnameinput;
                            itemsarray[searchindex].expdate=itemexpdateinput;
                            itemsarray[searchindex].stock=itemstockinput;
                            itemsarray[searchindex].unitprice=itemunitpriceinput;
                            itemsarray[searchindex].disrate=itemdiscountinput;
                            itemsarray[searchindex].category=itemcategoryinput;
                            localStorage.setItem("Items",JSON.stringify(itemsarray));
                            alert("Item Updated Successfully !!");
                            searchindex=null;
                            document.getElementById("searchby-large").value="";
                            document.getElementById("searchby-small").value="";
                            document.getElementById("itemid").value="";
                            document.getElementById("itemname").value="";
                            document.getElementById("itemexpirydate").value="";
                            document.getElementById("itemstocklevel").value="";
                            document.getElementById("itemunitprice").value="";
                            document.getElementById("itemdiscountrate").value="";
                            document.getElementById("itemcategory").value="";
                        }else{
                            alert("Category Required !!");
                        }
                    }else{
                        alert("Invalid Discount Rate Should Be In Range 0 to 100 !! ");
                    }
                }else{
                    alert("Invalid Price !!");
                }
            }else{
                alert("Stock Level Required(0 or greater) !!");
            }
        }else{
            alert("Invalid Expiary !!");
        }
        
    }
}

function deleteitem(){
    itemsarray = JSON.parse(localStorage.getItem("Items")) || itemsarray;
    if(searchindex===null){
        alert("Search a Item !!");
    }else{
        itemsarray.splice(searchindex,1);
        localStorage.setItem("Items",JSON.stringify(itemsarray));
        alert("Item Deleted Successfully !!");
        searchindex=null;
        document.getElementById("searchby-large").value="";
        document.getElementById("searchby-small").value="";
        document.getElementById("itemid").value="";
        document.getElementById("itemname").value="";
        document.getElementById("itemexpirydate").value="";
        document.getElementById("itemstocklevel").value="";
        document.getElementById("itemunitprice").value="";
        document.getElementById("itemdiscountrate").value="";
        document.getElementById("itemcategory").value="";
    }
}

//------------------------------------- View Items --------------------------


window.onload = function viewitem() {
    itemsarray = JSON.parse(localStorage.getItem("Items")) || itemsarray;
    let burgersbody=document.getElementById("burgersbody");
    let submarinesbody=document.getElementById("submarinesbody");
    let friesbody=document.getElementById("friesbody");
    let pastabody=document.getElementById("pastabody");
    let chickenbody=document.getElementById("chickenbody");
    let beveragesbody=document.getElementById("beveragesbody");

    let burgers=``;
    let submarines=``;
    let fries=``;
    let pasta=``;
    let chicken=``;
    let beverages=``;
    itemsarray.forEach(data => {
        if(data.category==="burgers"){
            burgers+=`
                    <tr>
                        <td>${data.itemid}</td>
                        <td>${data.name}</td>
                        <td>${data.expdate}</td>
                        <td>${data.stock}</td>
                        <td>${data.unitprice}</td>
                        <td>${data.disrate}</td>
                    </tr>
                    `
        }else if(data.category==="submarines"){
            submarines+=`
                    <tr>
                        <td>${data.itemid}</td>
                        <td>${data.name}</td>
                        <td>${data.expdate}</td>
                        <td>${data.stock}</td>
                        <td>${data.unitprice}</td>
                        <td>${data.disrate}</td>
                    </tr>
                    `
        }else if(data.category==="fries"){
            fries+=`
                    <tr>
                        <td>${data.itemid}</td>
                        <td>${data.name}</td>
                        <td>${data.expdate}</td>
                        <td>${data.stock}</td>
                        <td>${data.unitprice}</td>
                        <td>${data.disrate}</td>
                    </tr>
                    `
        }else if(data.category==="pasta"){
            pasta+=`
                    <tr>
                        <td>${data.itemid}</td>
                        <td>${data.name}</td>
                        <td>${data.expdate}</td>
                        <td>${data.stock}</td>
                        <td>${data.unitprice}</td>
                        <td>${data.disrate}</td>
                    </tr>
                    `
        }else if(data.category==="chicken"){
            chicken+=`
                    <tr>
                        <td>${data.itemid}</td>
                        <td>${data.name}</td>
                        <td>${data.expdate}</td>
                        <td>${data.stock}</td>
                        <td>${data.unitprice}</td>
                        <td>${data.disrate}</td>
                    </tr>
                    `
        }else if(data.category==="beverage"){
            beverages+=`
                    <tr>
                        <td>${data.itemid}</td>
                        <td>${data.name}</td>
                        <td>${data.expdate}</td>
                        <td>${data.stock}</td>
                        <td>${data.unitprice}</td>
                        <td>${data.disrate}</td>
                    </tr>
                    `
        }   
    });
    burgersbody.innerHTML=burgers;
    submarinesbody.innerHTML=submarines;
    friesbody.innerHTML=fries;
    pastabody.innerHTML=pasta;
    chickenbody.innerHTML=chicken;
    beveragesbody.innerHTML=beverages;

}