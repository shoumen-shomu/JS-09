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

  if (phoneNumber !== "12345" || pinNumber !== "123") {
    
    if (phoneNumber !== "12345" && pinNumber === "123") {
      errorMsg.innerHTML = "Wrong Phone Number";
      number.value = "";
      pin.value = "";
    } else if (phoneNumber === "12345" && pinNumber !== "123") {
      errorMsg.innerHTML = "Wrong PIN";
      number.value = "";
      pin.value = "";
    } else {
      error.removeAttribute("hidden");
      number.value = "";
      pin.value = "";
    }
  } else {
    error.setAttribute("hidden", true);
    success.removeAttribute("hidden");
    secendPage.removeAttribute("hidden");
    fisrtPage.setAttribute("hidden", true);
  }
});
