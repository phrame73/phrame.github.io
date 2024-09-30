const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cat-smoking.jpg") {
    myImage.setAttribute("src", "images/pet_darui_cat.png");
  } else {
    myImage.setAttribute("src", "images/cat-smoking.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("pleas enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Smoking cat very pog, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Smoking cat very pog, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};