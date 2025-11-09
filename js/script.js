let fisrtPage = document.getElementById("fisrtPage");
let number = document.getElementById("number");
let pin = document.getElementById("pin");
let loginBtn = document.getElementById("loginBtn");
let error = document.getElementById("error");
let errorMsg = document.getElementById("errorMsg");
let success = document.getElementById("success");
let secendPage = document.getElementById("secendPage");
let logOut = document.getElementById("logOut");
let addMoneyBtn = document.getElementById("addMoneyBtn");
let cashoutBtn = document.getElementById("cashoutBtn");
let transferMoneyBtn = document.getElementById("transferMoneyBtn");
let getBonusBtn = document.getElementById("getBonusBtn");
let payBillBtn = document.getElementById("payBillBtn");
let transactionsBtn = document.getElementById("transactionsBtn");
let transactionsPart = document.getElementById("transactionsPart");
let addMoneyPart = document.getElementById("addMoneyPart");
let cashOutPart = document.getElementById("cashOutPart");
let transferMoneyPart = document.getElementById("transferMoneyPart");
let getBonusPart = document.getElementById("getBonusPart");
let payBillPart = document.getElementById("payBillPart");
let commonBtn = document.querySelectorAll(".commonBtn");

loginBtn.addEventListener("click", () => {
  let phoneNumber = number.value;
  let pinNumber = pin.value;

  // Wrong number & pin
  if (phoneNumber !== "12345" && pinNumber !== "bolbona") {
    error.removeAttribute("hidden");
  } else if (phoneNumber !== "12345") {
    errorMsg.innerHTML = "Wrong Number";
    error.removeAttribute("hidden");
  } else if (pinNumber !== "bolbona") {
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

logOut.addEventListener("click", () => {
  secendPage.setAttribute("hidden", true);
  fisrtPage.removeAttribute("hidden");
  success.setAttribute("hidden", true);
});

addMoneyBtn.addEventListener("click", () => {
  transactionsPart.setAttribute("hidden", true);
  cashOutPart.setAttribute("hidden", true);
  transferMoneyPart.setAttribute("hidden", true);
  getBonusPart.setAttribute("hidden", true);
  payBillPart.setAttribute("hidden", true);
  addMoneyPart.removeAttribute("hidden");
});

cashoutBtn.addEventListener("click", () => {
  transactionsPart.setAttribute("hidden", true);
  addMoneyPart.setAttribute("hidden", true);
  transferMoneyPart.setAttribute("hidden", true);
  getBonusPart.setAttribute("hidden", true);
  payBillPart.setAttribute("hidden", true);
  cashOutPart.removeAttribute("hidden");
});

transferMoneyBtn.addEventListener("click", () => {
  transactionsPart.setAttribute("hidden", true);
  addMoneyPart.setAttribute("hidden", true);
  cashOutPart.setAttribute("hidden", true);
  getBonusPart.setAttribute("hidden", true);
  payBillPart.setAttribute("hidden", true);
  transferMoneyPart.removeAttribute("hidden");
});
getBonusBtn.addEventListener("click", () => {
  transactionsPart.setAttribute("hidden", true);
  addMoneyPart.setAttribute("hidden", true);
  cashOutPart.setAttribute("hidden", true);
  transferMoneyPart.setAttribute("hidden", true);
  payBillPart.setAttribute("hidden", true);
  getBonusPart.removeAttribute("hidden");
});
payBillBtn.addEventListener("click", () => {
  transactionsPart.setAttribute("hidden", true);
  addMoneyPart.setAttribute("hidden", true);
  cashOutPart.setAttribute("hidden", true);
  transferMoneyPart.setAttribute("hidden", true);
  getBonusPart.setAttribute("hidden", true);
  payBillPart.removeAttribute("hidden");
});

commonBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Moner Takai Asol Taka");
  });
});

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
