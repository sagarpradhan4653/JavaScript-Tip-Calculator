// // create the system which give 20% of total value


function evaluateTip() {
    let enterBill1 = document.getElementById("enterBill1").value;
    let numOfPeople = document.getElementById("numOfPeople").value;
    let tipToWaiter = document.getElementById("tipToWaiter").value;




    let fullAmount = (enterBill1 * tipToWaiter/20) / numOfPeople;
    fullAmount = Math.round(fullAmount*100)/100;
    fullAmount = fullAmount.toFixed(2);
    let h1 = document.createElement("h1");
    let textValue = document.createTextNode('Tip' + '' + '' + fullAmount);
    h1.setAttribute('id', 'fullAmount');
    h1.appendChild(textValue);
    document.getElementById('flex-box-result').appendChild(h1);
    document.getElementById('enterBill1').innerHTML = fullAmount; 
    



}

function remove1(){
    document.getElementById('fullAmount').remove();
}










//     if (enterBill1 === "" || numOfPeople == 0) {
//         alert("Please enter values");
//         return;


//     }
//     //Check to see if this input is empty or less than or equal to 1
//     if (numOfPeople === "" || numOfPeople <= 1) {
//         numOfPeople = 1;
//         document.getElementById("tipsmall").style.display = "none";
//     }
//     else {
//         document.getElementById("tipsmall").style.display = "block";
//     }

//     var whole = (enterBill1 * tipToWaiter) / numOfPeople;
//     //round to two decimal places
//     whole = Math.round(whole * 100) / 100;
//     //next line allows us to always have two digits after decimal point
//     whole = whole.toFixed(2);

//     //Display the tip
//     document.getElementById("totalTips").style.display = "block";
//     document.getElementById("tipdollar").innerHTML = whole;


// }
// //Hide the tip amount on load
// document.getElementById("totalTips").style.display = "none";
// document.getElementById("tipsmall").style.display = "none";

// //click to call function
// document.getElementById("calcu1").onclick = function () {
//     evaluateTip();

// };

// function calcTip(){
//     // grab the input values
//         let tipAmount= document.getElementById("tipForm").value;
//         let billAmount = document.getElementById("billInput").value;
//         let billCard = document.getElementById("bill-card");
//     //turn strings into numbers
//         let tipAmountNumber = parseFloat(tipAmount);
//         let billAmountNumber = parseFloat(billAmount);

//         //grab elements
//         let bill = document.getElementById('bill-p');
//         let tip = document.getElementById('tip-p');
//         let total = document.getElementById('total-p');
//     // calculations
//         let totalAmount = (tipAmountNumber * billAmountNumber);
//         let totalBill = totalAmount + billAmountNumber;
//     //append content
//         tip.innerHTML = "$" + (totalAmount).toFixed(2);
//         bill.innerHTML =  "$" + billAmountNumber.toFixed(2);
//         total.innerHTML = "$" + totalBill.toFixed(2);

//         // show the bill info 
//         billCard.style.display = "block";

//     }










// /Calculate Tip
// function calculateTip() {
//   var billAmt = document.getElementById("billamt").value;
//   var serviceQual = document.getElementById("serviceQual").value;
//   var numOfPeople = document.getElementById("peopleamt").value;

//   //validate input
//   if (billAmt === "" || serviceQual == 0) {
//     alert("Please enter values");
//     return;
//   }
//   //Check to see if this input is empty or less than or equal to 1
//   if (numOfPeople === "" || numOfPeople <= 1) {
//     numOfPeople = 1;
//     document.getElementById("each").style.display = "none";
//   } else {
//     document.getElementById("each").style.display = "block";
//   }

//   //Calculate tip
//   var total = (billAmt * serviceQual) / numOfPeople;
//   //round to two decimal places
//   total = Math.round(total * 100) / 100;
//   //next line allows us to always have two digits after decimal point
//   total = total.toFixed(2);

//   //Display the tip
//   document.getElementById("totalTip").style.display = "block";
//   document.getElementById("tip").innerHTML = total;

// }

// //Hide the tip amount on load
// document.getElementById("totalTip").style.display = "none";
// document.getElementById("each").style.display = "none";

// //click to call function
// document.getElementById("calculate").onclick = function() {
//   calculateTip();

// };