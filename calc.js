const priceElemt = document.getElementById("price");
const downPaymentElemt = document.getElementById("downPayment");
const interestElemt = document.getElementById("interest");
const loanPeriodElemt = document.getElementById("loanPeriod");
const calc = document.getElementById("calculate");

const monthly = document.getElementById("monthly");
const totals = document.getElementById("totals");
const loanAmount = document.getElementById("loanAmount");
const interestPaid = document.getElementById("interestPaid");
const transaction = document.getElementById("transaction");

function calculate() {
   //since dealing with numbers, parse them 1st to float for safety, so we know JS see them as floats not strings. 
   let price = parseFloat(priceElemt.value);
   let downPayment = parseFloat(downPaymentElemt.value);
   let interest = parseFloat(interestElemt.value);
   let loanPeriod = parseFloat(loanPeriodElemt.value);

   let loan = price - downPayment;
   let totalPayment = loan + ((interest / 100) * loan * loanPeriod);
   let months = loanPeriod * 12;
   let monthlyInstallment = totalPayment / months;
   let paymentBack = monthlyInstallment.toFixed(2) * months;
   let totalInterestPaid = paymentBack - loan;
   let totalTransaction = paymentBack + downPayment;

   monthly.innerHTML = "RM " + monthlyInstallment.toFixed(2);
   totals.innerHTML = "RM " + paymentBack.toFixed(2);
   loanAmount.innerHTML = "RM " + loan.toFixed(2);
   interestPaid.innerHTML = "RM " + totalInterestPaid.toFixed(2);
   transaction.innerHTML = "RM " + totalTransaction.toFixed(2);
}

calc.addEventListener("click", calculate);

document.onkeydown = function (e) {
   e = e || window.event;
   switch (e.which || e.keyCode) {
      case 13:
         calculate();
         break;
   }
}