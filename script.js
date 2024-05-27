let inputTag = document.querySelector("#inputForList");
let addButton = document.getElementById("addlist");
let toDoCont = document.querySelector(".todocontainer");

addButton.addEventListener("click", function () {
  if (inputTag.value == "") return;
  // creating new div with text from input and giving it the class I have styled in css
  let text = document.createElement("div");
  text.innerText = inputTag.value;
  text.classList.add("todotask");
  console.log(text); // to check if my code works
  toDoCont.appendChild(text);

  // creating an image element and making it child of the div the created in above code and giving the image a class I have styled in css
  let image = document.createElement("img");
  image.src = "./images/dustbin.png";
  image.classList.add("dustbin");
  text.appendChild(image);

  // delete by clicking on bin
  image.addEventListener("click", function () {
    toDoCont.removeChild(text);
  });

  inputTag.value = "";
});
