let customerarray = JSON.parse(localStorage.getItem("Customer"));
let customercount = JSON.parse(localStorage.getItem("customercount")); 

function GenarateCustomerID() {
    customercount = JSON.parse(localStorage.getItem("customercount"));
    let str = "";
    if (customercount - 1 < 9) {
        str = "CUS-000" + (customercount + 1);
    } else if (size - 1 < 99) {
        str = "CUS-00" + (customercount + 1);
    } else if (size - 1 < 999) {
        str = "CUS-0" + (customercount + 1);
    } else if (size - 1 < 9999) {
        str = "CUS-" + (customercount + 1);
    }
    customercount++;
    localStorage.setItem("customercount",JSON.stringify(customercount));
    return str;
}
function validatecustomername(name) {
    if (name !== "") {
        return true;
    }
    return false;
}
function validatecustomertelphone(phone) {
    customerarray = JSON.parse(localStorage.getItem("Customer"));
    if (phone.length == 10) {
        str = phone.charAt(0);
        if (str == '0') {
            let available;
            customerarray.forEach(i => {
                if (i.phone === phone) {
                    available = true;
                }
            });
            return !available;
        } else {
            return false;
        }
    } else {
        return false;
    }
}


function validday(year, month, day) {	//--> VALIDATE DAY METHOD.
    const currentdate = new Date();			//--> GET THE LOCAL DATE
    const currentYear = currentdate.getFullYear();    				//--> EXTRACTING THE YEAR VALUE FROM THE currentdate VARIABELE
    const currentMonthValue = currentdate.getMonth() + 1;	//--> EXTRACTING THE MONTH VALUE FROM THE currentdate VARIABELE
    const currentMonthDate = currentdate.getDate();		//--> EXTRACTING THE DAY VALUE FROM THE currentdate VARIABELE

    let leap = true;
    if (year % 400 == 0) {
        leap = true;
    } else if (year % 4 == 0) {
        if (year % 100 == 0) {
            leap = false;
        } else {
            leap = true;
        }
    } else {
        leap = false;
    }

    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        if (day >= 1 && day <= 31) {
            if (year == currentYear) {
                if (month == currentMonthValue) {
                    if (day < currentMonthDate) {
                        return true;
                    }
                } else {
                    return true;
                }
            } else if (year < currentYear) {
                return true;
            }
        }
        return false;
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        if (day >= 1 && day <= 30) {
            if (year == currentYear) {
                if (month == currentMonthValue) {
                    if (day < currentMonthDate) {
                        return true;
                    }
                } else {
                    return true;
                }
            } else if (year < currentYear) {
                return true;
            }
        }
        return false;
    } else if (month == 2) {
        if (!leap) {
            if (day >= 1 && day <= 28) {
                if (year == currentYear) {
                    if (month == currentMonthValue) {
                        if (day < currentMonthDate) {
                            return true;
                        }
                    } else {
                        return true;
                    }
                } else if (year < currentYear) {
                    return true;
                }
            }
            return false;
        } else {
            if (day >= 1 && day <= 29) {
                if (year == currentYear) {
                    if (month == currentMonthValue) {
                        if (day < currentMonthDate) {
                            return true;
                        }
                    } else {
                        return true;
                    }
                } else if (year < currentYear) {
                    return true;
                }
            }
            return false;
        }

    }
    return false;
}
function validmonth(year, month) {		//--> VALIDATE MONTH METHOD.
    const currentdate = new Date();			//--> GET THE LOCAL DATE
    const currentYear = currentdate.getFullYear();    				//--> EXTRACTING THE YEAR VALUE FROM THE currentdate VARIABELE
    const currentMonthValue = currentdate.getMonth() + 1;	//--> EXTRACTING THE MONTH VALUE FROM THE currentdate VARIABELE
    const currentMonthDate = currentdate.getDate();		//--> EXTRACTING THE DAY VALUE FROM THE currentdate VARIABELE

    if (month >= 1 && month <= 12) {	//--> CHECK WETHER THE USER INPUTER MONTH IS BETWEEN 1 AND 12
        if (year == currentYear) {	//--> IF THE USER INPUTED YEAR IS CURRENT YEAR WE SHOULD CHECK WEATHER THE USER INPUTED MONTH LESS THAN OR EQUAL CURRENT MONTH
            if (month <= currentMonthValue) {
                return true;
            }
        } else if (year < currentYear) {
            return true;
        }
    }
    return false;
}
function validyear(year) {					//--> VALIDATE YEAR METHOD.
    const currentdate = new Date();			//--> GET THE LOCAL DATE
    const currentYear = currentdate.getFullYear();    				//--> EXTRACTING THE YEAR VALUE FROM THE currentdate VARIABELE
    const currentMonthValue = currentdate.getMonth() + 1;	//--> EXTRACTING THE MONTH VALUE FROM THE currentdate VARIABELE
    const currentMonthDate = currentdate.getDate();		//--> EXTRACTING THE DAY VALUE FROM THE currentdate VARIABELE

    if (year <= currentYear) {
        return true;
    }
    return false;
}
function validatecustomerbday(bday) {			//--> VALIDATE DATE OF BIRTH METHOD.
    const currentdate = new Date();			//--> GET THE LOCAL DATE
    const currentYear = currentdate.getFullYear();    				//--> EXTRACTING THE YEAR VALUE FROM THE currentdate VARIABELE
    const currentMonthValue = currentdate.getMonth() + 1;	//--> EXTRACTING THE MONTH VALUE FROM THE currentdate VARIABELE
    const currentMonthDate = currentdate.getDate();		//--> EXTRACTING THE DAY VALUE FROM THE currentdate VARIABELE.

    const year = Number(bday.substring(0, 4));			//--> EXTRACTING THE YEAR VALUE FROM THE USER GIVEN INPUT.
    const month = Number(bday.substring(5, 7));		//--> EXTRACTING THE MONTH VALUE FROM THE USER GIVEN INPUT.
    const day = Number(bday.substring(8));			//--> EXTRACTING THE DAY VALUE FROM THE USER GIVEN INPUT.

    const boolyear = validyear(year);			//--> GETING TRUE/FALSE BY VALIDATING THE YEAR THROUG A METHOD.
    const boolmonth = validmonth(year, month);	//--> GETING TRUE/FALSE BY VALIDATING THE MONTH THROUG A METHOD.
    const boolday = validday(year, month, day);	//--> GETING TRUE/FALSE BY VALIDATING THE DAY THROUG A METHOD.

    if (bday.length == 10) { //--> IF THE LENGTH IS NOT EQUAL TO 10 THEN RETURN FALSE.
        if (boolyear && boolmonth && boolday) {
            return true;
        }
        return false;
    } else {
        return false;
    }
}
function validatecustomeremail(email) {
    if (email !== "") {
        return true;
    }
    return false;
}
function validatecustomeraddress(address) {
    if (address !== "") {
        return true;
    }
    return false;
}


function addcustomer() {
    customerarray = JSON.parse(localStorage.getItem("Customer"));
    const customeridinput = GenarateCustomerID();
    const customernameinput = document.getElementById("customername").value;
    const customerphoneinput = document.getElementById("customerphone").value;
    const customerbdayinput = document.getElementById("customerbday").value;
    const customeremailinput = document.getElementById("customeremail").value;
    const customeraddressinput = document.getElementById("customeraddress").value;
    if (validatecustomername(customernameinput)) {
        if (validatecustomertelphone(customerphoneinput)) {
            if (validatecustomerbday(customerbdayinput)) {
                if (validatecustomeremail(customeremailinput)) {
                    if (validatecustomeraddress(customeraddressinput)) {
                        customerarray.push({
                            customerid: customeridinput,
                            name: customernameinput,
                            phone: customerphoneinput,
                            bday: customerbdayinput,
                            email: customeremailinput,
                            address: customeraddressinput
                        });
                        localStorage.setItem("Customer", JSON.stringify(customerarray));
                        alert("Customer Added Successfully !!");

                        document.getElementById("customername").value = "";
                        document.getElementById("customerphone").value = "";
                        document.getElementById("customerbday").value = "";
                        document.getElementById("customeremail").value = "";
                        document.getElementById("customeraddress").value = "";
                    } else {
                        alert("Address Required !!");
                    }
                } else {
                    alert("Email Required !!");
                }
            } else {
                alert("Invalid Birthday !!");
            }
        } else {
            alert("Invalid Phone Number !!");
        }
    } else {
        alert("Customer Name Required !!");
    }
}

//--------------------------------- Update Customer ----------------------------------------- 

let searchindex = null;

function searchcustomer(id) {
    let searchby = document.getElementById(id).value;
    if (searchby !== "") {
        customerarray = JSON.parse(localStorage.getItem("Customer")) || customerarray;
        let found = false;
        for (let i = 0; i < customerarray.length; i++) {
            if (customerarray[i].customerid === searchby || customerarray[i].phone === searchby || customerarray[i].email === searchby) {
                document.getElementById('customerid').value = customerarray[i].customerid;
                document.getElementById('customername').value = customerarray[i].name;
                document.getElementById('customerphone').value = customerarray[i].phone;
                document.getElementById('customerbday').value = customerarray[i].bday;
                document.getElementById('customeremail').value = customerarray[i].email;
                document.getElementById('customeraddress').value = customerarray[i].address;
                searchindex = i;
                found = true;
                alert("Customer Found");
                break;
            }
        }
        if (found == false) {
            alert("Customer Not Found !!");
        }
    } else {
        searchindex = null
    }
}

function updatecustomer() {
    customerarray = JSON.parse(localStorage.getItem("Customer")) || customerarray;
    let customernameinput = document.getElementById("customername").value;
    let customerphoneinput = document.getElementById("customerphone").value;
    let customerbdayinput = document.getElementById("customerbday").value;
    let customeremailinput = document.getElementById("customeremail").value;
    let customeraddressinput = document.getElementById("customeraddress").value;
    if (searchindex === null) {
        alert("Search a Customer !!");
    } else {
        if (validatecustomername(customernameinput)) {
            if (validatecustomerbday(customerbdayinput)) {
                if (validatecustomeremail(customeremailinput)) {
                    if (validatecustomeraddress(customeraddressinput)) {
                        customerarray[searchindex].name = customernameinput;
                        customerarray[searchindex].phone = customerphoneinput;
                        customerarray[searchindex].bday = customerbdayinput;
                        customerarray[searchindex].email = customeremailinput;
                        customerarray[searchindex].address = customeraddressinput;
                        localStorage.setItem("Customer", JSON.stringify(customerarray));
                        alert("Customer Updated Successfully !!");
                        searchindex = null;
                        document.getElementById("searchby-large").value = "";
                        document.getElementById("searchby-small").value = ""
                        document.getElementById("customerid").value = "";
                        document.getElementById("customername").value = "";
                        document.getElementById("customerphone").value = "";
                        document.getElementById("customerbday").value = "";
                        document.getElementById("customeremail").value = "";
                        document.getElementById("customeraddress").value = "";
                    } else {
                        alert("Address Required !!");
                    }
                } else {
                    alert("Email Required !!");
                }
            } else {
                alert("Invalid Birthday !!");
            }
        } else {
            alert("Customer Name Required !!");
        }

    }
}

function deletecustomer() {
    customerarray = JSON.parse(localStorage.getItem("Customer")) || customerarray;
    if (searchindex === null) {
        alert("Search a Customer !!");
    } else {
        customerarray.splice(searchindex, 1);
        localStorage.setItem("Customer", JSON.stringify(customerarray));
        alert("Customer Deleted Successfully !!");
        searchindex = null;
        document.getElementById("searchby-large").value = "";
        document.getElementById("searchby-small").value = ""
        document.getElementById("customerid").value = "";
        document.getElementById("customername").value = "";
        document.getElementById("customerphone").value = "";
        document.getElementById("customerbday").value = "";
        document.getElementById("customeremail").value = "";
        document.getElementById("customeraddress").value = "";
    }
}

//------------------------------------- View Cashier --------------------------


window.onload = function viewcustomer() {
    customerarray = JSON.parse(localStorage.getItem("Customer")) || customerarray;
    let customertablebody = document.getElementById("customertablebody");

    let body = ``;
    customerarray.forEach(data => {
        body += `
            <tr>
                <td>${data.customerid}</td>
                <td>${data.name}</td>
                <td>${data.phone}</td>
                <td>${data.bday}</td>
                <td>${data.email}</td>
                <td>${data.address}</td>
            </tr>
        `
    });
    customertablebody.innerHTML = body;

}