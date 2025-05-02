// Button Click Event
const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
  alert("Button clicked!");
});

// Hover Effect
const hoverElement = document.querySelector("#hoverElement");
hoverElement.addEventListener("mouseover", function() {
  hoverElement.style.backgroundColor = "lightblue";
});
hoverElement.addEventListener("mouseout", function() {
  hoverElement.style.backgroundColor = "transparent";
});

// Keypress Detection
document.addEventListener("keydown", function(event) {
  console.log(`You pressed: ${event.key}`);
});

// Long Press or Double Click Event
let timeout;
const longPressElement = document.querySelector("#longPress");

longPressElement.addEventListener("mousedown", function() {
  timeout = setTimeout(() => {
    alert("Long press detected!");
  }, 1000); // 1 second for long press
});

longPressElement.addEventListener("mouseup", function() {
  clearTimeout(timeout); // Clear timeout if mouseup happens early
});

longPressElement.addEventListener("dblclick", function() {
  alert("Double-click detected!");
});

// Button that changes text and color
const changeButton = document.querySelector("#changeButton");
changeButton.addEventListener("click", function() {
  changeButton.innerText = "You clicked me!";
  changeButton.style.backgroundColor = "green";
});

// Image Gallery and Slideshow
const images = document.querySelectorAll(".gallery img");
let currentImage = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
}

document.querySelector("#next").addEventListener("click", function() {
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
});

showImage(currentImage);

// Tabs Example
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", function() {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    document.querySelectorAll(".tab-content").forEach(content => {
      content.style.display = "none";
    });
    
    document.querySelector(`#${tab.dataset.target}`).style.display = "block";
  });
});

// Form Validation
const form = document.querySelector("#myForm");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", function(event) {
  if (!emailInput.value || !passwordInput.value) {
    event.preventDefault();
    alert("Please fill out all fields!");
  }
});

// Email Format Validation
emailInput.addEventListener("input", function() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    emailInput.style.borderColor = "red";
  } else {
    emailInput.style.borderColor = "green";
  }
});

// Password Rules (Min 8 Characters)
passwordInput.addEventListener("input", function() {
  if (passwordInput.value.length >= 8) {
    passwordInput.style.borderColor = "green";
  } else {
    passwordInput.style.borderColor = "red";
  }
});
