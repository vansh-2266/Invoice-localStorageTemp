//Get All Value
let sendBtn = document.getElementById('send');
let resetBtn = document.getElementById('reset');
let form = document.getElementById('form');

//Form Refresh State
form.addEventListener('submit', (e) => {
    e.preventDefault();
});


//********************************************* */
let quantity = document.getElementById('Quantity');
let price = document.getElementById('Price');
let cgst = document.getElementById('CGST');
let sgst = document.getElementById('SGST');


quantity = quantity.value;
price = price.value;
cgst = Number(cgst.value);
sgst = Number(sgst.value);

// total Ammount
let Qprice = quantity * price;
let netAmount = Qprice + cgst + sgst;
const text = `<h2>Your Total Ammount (Price + CGST + SGST) = ₹ ${netAmount} </h2>`;

let display = document.getElementById('totalAmount');
display.innerHTML = text;


//Now Working For Reset Btn
resetBtn.addEventListener('click', (e) => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let number = document.getElementById('number');
    let date = document.getElementById('Date');
    let pname = document.getElementById('Pname');
    let quantity = document.getElementById('Quantity');
    let price = document.getElementById('Price');
    let CGST = document.getElementById('CGST');
    let SGST = document.getElementById('SGST');

    

    //Set Value
    name.value = '';
    email.value = '';
    number.value = '';
    date.value = '';
    pname.value = '';
    quantity.value = '';
    price.value = '';
    CGST.value = '';
    SGST.value = '';


});

//Now Start SendBtn
sendBtn.addEventListener('click', (e) => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let number = document.getElementById('number');
    let date = document.getElementById('Date');
    let pname = document.getElementById('Pname');
    let quantity = document.getElementById('Quantity');
    let price = document.getElementById('Price');
    let cgst = document.getElementById('CGST');
    let sgst = document.getElementById('SGST');


    quantity = quantity.value;
    price = price.value;
    cgst = Number(cgst.value);
    sgst = Number(sgst.value);

    // total Ammount
    let Qprice = quantity * price;
    let netAmount = Qprice + cgst + sgst;
    const text = `<h2>Your Total Ammount (Price + CGST + SGST) = ₹ ${netAmount} </h2>`;

    let display = document.getElementById('totalAmount');
    display.innerHTML = text;


    //Set Value And LocalStorage
    
    name = name.value;
    localStorage.setItem('name', name);

    email = email.value;
    localStorage.setItem('email', email);

    localStorage.setItem('quantity', quantity);
    localStorage.setItem('price', price);
    localStorage.setItem('cgst', cgst);
    localStorage.setItem('sgst', sgst);

    pname = pname.value;
    localStorage.setItem('pname', pname);

    number = number.value;
    localStorage.setItem('number', number);

    date = date.value;
    localStorage.setItem('date', date);

    

});


