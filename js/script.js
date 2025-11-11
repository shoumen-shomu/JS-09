let fisrtPage = document.getElementById("fisrtPage");
let number = document.getElementById("number");
let pin = document.getElementById("pin");
let loginBtn = document.getElementById("loginBtn");
let error = document.getElementById("error");
let errorMsg = document.getElementById("errorMsg");
let success = document.getElementById("success");
let secendPage = document.getElementById("secendPage");
let logOut = document.getElementById("logOut");

// 1st Page
loginBtn.addEventListener("click", () => {
  let phoneNumber = number.value;
  let pinNumber = pin.value;

  // Wrong number & pin
  if (phoneNumber !== "12345" && pinNumber !== "12345") {
    error.removeAttribute("hidden");
  } else if (phoneNumber !== "12345") {
    errorMsg.innerHTML = "Wrong Number";
    error.removeAttribute("hidden");
  } else if (pinNumber !== "12345") {
    errorMsg.innerHTML = "Wrong PIN";
    error.removeAttribute("hidden");
  } else {
    // correct number & pin
    error.setAttribute("hidden", true);
    success.removeAttribute("hidden");
    secendPage.removeAttribute("hidden");
    fisrtPage.setAttribute("hidden", true);
  }
  number.value = "";
  pin.value = "";
});
// 1st Page

// 2nd Page

let addMoneyBtn = document.getElementById("addMoneyBtn");
let cashoutBtn = document.getElementById("cashoutBtn");
let transferMoneyBtn = document.getElementById("transferMoneyBtn");
let getBonusBtn = document.getElementById("getBonusBtn");
let payBillBtn = document.getElementById("payBillBtn");
let transactionsBtn = document.getElementById("transactionsBtn");
let latestPaymentPart = document.getElementById("latestPaymentPart");
let addMoneyPart = document.getElementById("addMoneyPart");
let cashOutPart = document.getElementById("cashOutPart");
let transferMoneyPart = document.getElementById("transferMoneyPart");
let getBonusPart = document.getElementById("getBonusPart");
let payBillPart = document.getElementById("payBillPart");
let transactionsPart = document.getElementById("transactionsPart");
// let commonBtn = document.querySelectorAll(".commonBtn");

logOut.addEventListener("click", () => {
  secendPage.setAttribute("hidden", true);
  fisrtPage.removeAttribute("hidden");
  success.setAttribute("hidden", true);
});

addMoneyBtn.addEventListener("click", () => {
  latestPaymentPart.setAttribute("hidden", true);
  cashOutPart.setAttribute("hidden", true);
  transferMoneyPart.setAttribute("hidden", true);
  getBonusPart.setAttribute("hidden", true);
  payBillPart.setAttribute("hidden", true);
  transactionsPart.setAttribute("hidden", true);
  addMoneyPart.removeAttribute("hidden");
});

cashoutBtn.addEventListener("click", () => {
  latestPaymentPart.setAttribute("hidden", true);
  addMoneyPart.setAttribute("hidden", true);
  transferMoneyPart.setAttribute("hidden", true);
  getBonusPart.setAttribute("hidden", true);
  payBillPart.setAttribute("hidden", true);
  transactionsPart.setAttribute("hidden", true);
  cashOutPart.removeAttribute("hidden");
});

transferMoneyBtn.addEventListener("click", () => {
  latestPaymentPart.setAttribute("hidden", true);
  addMoneyPart.setAttribute("hidden", true);
  cashOutPart.setAttribute("hidden", true);
  getBonusPart.setAttribute("hidden", true);
  payBillPart.setAttribute("hidden", true);
  transactionsPart.setAttribute("hidden", true);
  transferMoneyPart.removeAttribute("hidden");
});
getBonusBtn.addEventListener("click", () => {
  latestPaymentPart.setAttribute("hidden", true);
  addMoneyPart.setAttribute("hidden", true);
  cashOutPart.setAttribute("hidden", true);
  transferMoneyPart.setAttribute("hidden", true);
  payBillPart.setAttribute("hidden", true);
  transactionsPart.setAttribute("hidden", true);
  getBonusPart.removeAttribute("hidden");
});
payBillBtn.addEventListener("click", () => {
  latestPaymentPart.setAttribute("hidden", true);
  addMoneyPart.setAttribute("hidden", true);
  cashOutPart.setAttribute("hidden", true);
  transferMoneyPart.setAttribute("hidden", true);
  getBonusPart.setAttribute("hidden", true);
  transactionsPart.removeAttribute("hidden");
  payBillPart.removeAttribute("hidden");
  
});
transactionsBtn.addEventListener("click", () => {
  latestPaymentPart.setAttribute("hidden", true);
  addMoneyPart.setAttribute("hidden", true);
  cashOutPart.setAttribute("hidden", true);
  transferMoneyPart.setAttribute("hidden", true);
  getBonusPart.setAttribute("hidden", true);
  payBillPart.setAttribute("hidden",true);
  transactionsPart.removeAttribute("hidden");
});

// Add Money Part
let mainAmount = document.getElementById("mainAmount");
let addMoneyPin = document.getElementById("addMoneyPin");
let addMoney = document.getElementById("addMoney");
let addMoneyAgent = document.getElementById("addMoneyAgent");
let addMoneyAmount = document.getElementById("addMoneyAmount");
let secendPageError = document.getElementById("secendPageError");
let secendPagesuccess = document.getElementById("secendPagesuccess");

addMoney.addEventListener("click", () => {
  let total = parseInt(mainAmount.innerText);
  let addMoneyinput = parseInt(addMoneyAmount.value);
  // let pin = addMoneyPin.value;

  if (addMoneyPin.value == "12345") {
    let addMoneyAmounts = total + addMoneyinput;
    mainAmount.innerText = addMoneyAmounts;
    secendPagesuccess.removeAttribute("hidden");
    setTimeout(() => {
      secendPagesuccess.setAttribute("hidden", true);
    }, 2000);
  } else {
    secendPageError.removeAttribute("hidden");
    secendPageError.removeAttribute("hidden");
    setTimeout(() => {
      secendPageError.setAttribute("hidden", true);
    }, 2000);
  }
  addMoneyAmount.value = "";
  addMoneyPin.value = "";
});

// addMoneyAgent.addEventListener("input", () => {
//   if (addMoneyAgent.value == "") {
//     addMoney.disabled = true;
//   }
//   else{
//     addMoney.disabled = false
//   }
// });

// Add Money Part

// Cash Out Part
let cashOutNumber = document.getElementById("cashOutNumber");
let cashOutAmount = document.getElementById("cashOutAmount");
let cashoutPin = document.getElementById("cashoutPin");
let withdraw = document.getElementById("withdraw");
let secendPageerrorMsg = document.getElementById("secendPageerrorMsg");
let secendPagesuccessMsg = document.getElementById("secendPagesuccessMsg");

withdraw.addEventListener("click", () => {
  let total = parseInt(mainAmount.innerText);
  let cashoutInput = parseInt(cashOutAmount.value);

  if (cashoutPin.value === "12345") {
    let cashoutAmounts = total - cashoutInput;
    mainAmount.innerText = cashoutAmounts;
    secendPagesuccess.removeAttribute("hidden");
    secendPagesuccessMsg.innerHTML = "Cashout Successfully";
    setTimeout(() => {
      secendPagesuccess.setAttribute("hidden", true);
    }, 2000);
  } else {
    secendPageError.removeAttribute("hidden");
    setTimeout(() => {
      secendPageError.setAttribute("hidden", true);
    }, 2000);
  }
  cashOutAmount.value = "";
  cashoutPin.value = "";
});
// Cash Out Part

// Transfer Money Part
let tranferMoneyNumber = document.getElementById("tranferMoneyNumber");
let transferMoneyAmount = document.getElementById("transferMoneyAmount");
let transferMoneyPin = document.getElementById("transferMoneyPin");
let sendNow = document.getElementById("sendNow");

sendNow.addEventListener("click", () => {
  let total = parseInt(mainAmount.innerText);
  let transferMoneyInput = parseInt(transferMoneyAmount.value);
  if (transferMoneyPin.value === "12345") {
    let transferMoneyAmounts = total - transferMoneyInput;
    mainAmount.innerText = transferMoneyAmounts;
    secendPagesuccess.removeAttribute("hidden");
    secendPagesuccessMsg.innerHTML = "Transfer Money Successfully";
    setTimeout(() => {
      secendPagesuccess.setAttribute("hidden", true);
    }, 2000);
  } else {
    secendPageError.removeAttribute("hidden");
    setTimeout(() => {
      secendPageError.setAttribute("hidden", true);
    }, 2000);
  }
  transferMoneyAmount.value = "";
  transferMoneyPin.value = "";
});
// Transfer Money Part

// Bonus Coupon Part
let bonusCoupon = document.getElementById("bonusCoupon");
let getBonus = document.getElementById("getBonus");

getBonus.addEventListener("click", () => {
  let total = parseInt(mainAmount.innerText);
  let gift = 100;
  if (bonusCoupon.value === "12345") {
    let gifts = total + gift;
    mainAmount.innerText = gifts;
    secendPagesuccess.removeAttribute("hidden");
    secendPagesuccessMsg.innerHTML = " Bonus Collected Successfully";
    setTimeout(() => {
      secendPagesuccess.setAttribute("hidden", true);
    }, 2000);
  } else {
    secendPageError.removeAttribute("hidden");
    setTimeout(() => {
      secendPageError.setAttribute("hidden", true);
    }, 2000);
  }
});
// Bonus Coupon Part

// Pay Bill Part
let payBillNumber = document.getElementById("payBillNumber");
let payBillAmount = document.getElementById("payBillAmount");
let payBillPin = document.getElementById("payBillPin");
let payNow = document.getElementById("payNow");

payNow.addEventListener("click", () => {
  let total = parseInt(mainAmount.innerText);
  let payBillinput = parseInt(payBillAmount.value);

  if (payBillPin.value === "12345") {
    let payBillAmounts = total - payBillinput;
    mainAmount.innerText = payBillAmounts;
    secendPagesuccess.removeAttribute("hidden");
    secendPagesuccessMsg.innerHTML = " Bill Pay Successfully";
    setTimeout(() => {
      secendPagesuccess.setAttribute("hidden", true);
    }, 2000);
  }
  else{
    secendPageError.removeAttribute("hidden");
    setTimeout(() => {
      secendPageError.setAttribute("hidden", true);
    }, 2000);
  }
});
// Cash Out Part

// commonBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     alert("Moner Takai Asol Taka");
//   });
// });

// Another Method
// let fisrtPage = document.getElementById("fisrtPage");
// let number = document.getElementById("number");
// let pin = document.getElementById("pin");
// let loginBtn = document.getElementById("loginBtn");
// let error = document.getElementById("error");
// let errorMsg = document.getElementById("errorMsg");
// let success = document.getElementById("success");
// let secendPage = document.getElementById("secendPage");

// loginBtn.addEventListener("click", () => {
//   let phoneNumber = number.value;
//   let pinNumber = pin.value;

//   if (phoneNumber !== "12345" && pinNumber !== "123") {
//    error.removeAttribute("hidden");
//       number.value = "";
//       pin.value = "";
//     if (phoneNumber !== "12345" && pinNumber === "123") {
//       errorMsg.innerHTML = "Wrong Number";
//       number.value = "";
//       pin.value = "";
//     } else if (phoneNumber === "12345" && pinNumber !== "123") {
//       errorMsg.innerHTML = "Wrong PIN";
//       number.value = "";
//       pin.value = "";
//     } else {
//       error.removeAttribute("hidden");
//       number.value = "";
//       pin.value = "";
//     }
//   } else {
//     error.setAttribute("hidden", true);
//     success.removeAttribute("hidden");
//     secendPage.removeAttribute("hidden");
//     fisrtPage.setAttribute("hidden", true);
//   }
// });
