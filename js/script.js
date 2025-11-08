let fisrtPage = document.getElementById("fisrtPage");
let number = document.getElementById("number");
let pin = document.getElementById("pin");
let loginBtn = document.getElementById("loginBtn");
let error = document.getElementById("error");
let errorMsg = document.getElementById("errorMsg");
let success = document.getElementById("success");
let secendPage = document.getElementById("secendPage");

loginBtn.addEventListener("click", () => {
  let phoneNumber = number.value;
  let pinNumber = pin.value;

   // Wrong number & pin
  if (phoneNumber !== "12345" && pinNumber !== "123") {
    error.removeAttribute("hidden");
  } 
  else if (phoneNumber !== "12345") {
    errorMsg.innerHTML = "Wrong Number";
    error.removeAttribute("hidden");
  } 
  else if (pinNumber !== "123") {
    errorMsg.innerHTML = "Wrong PIN";
    error.removeAttribute("hidden");
  } 
  else {
    // correct number & pin 
    error.setAttribute("hidden", true);
    success.removeAttribute("hidden");
    secendPage.removeAttribute("hidden");
    fisrtPage.setAttribute("hidden", true);
  
  }
  number.value = "";
  pin.value = "";
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


