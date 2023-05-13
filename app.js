let submitBtn = document.getElementById("genMemeBtn");
let undoBtn = document.getElementById("undoBtn");
let form = document.getElementById("form")
let pictureContainer = document.getElementById("memes")

function createImgElement(){
  let linkInput = document.getElementById("imgLink").value;
  let newDivElem = document.createElement("div");
  let newImgElem = document.createElement("img");
  let newTopText = document.createElement("div");
  let newBottomText = document.createElement("div")
  let topTextInput = document.getElementById("topText").value;
  let bottomTextInput = document.getElementById("bottomText").value;

  pictureContainer.appendChild(newDivElem)
  newDivElem.appendChild(newImgElem)
  newDivElem.appendChild(newTopText)
  newDivElem.appendChild(newBottomText)

  newDivElem.setAttribute("class","imgContainer")
  newImgElem.setAttribute("src", linkInput)
  newImgElem.setAttribute("class","image")
  newTopText.setAttribute("class","tText")
  newBottomText.setAttribute("class","bText")
  newTopText.innerHTML += topTextInput
  newBottomText.innerHTML += bottomTextInput
};

function clearInputs(){
  form.reset();
}

function removeImgElement(){
  let pictureContainer = document.getElementById("memes")
   pictureContainer.removeChild(pictureContainer.lastElementChild)
};

//Event listener to Create Meme
submitBtn.addEventListener("click", function(e){
    e.preventDefault()
    createImgElement()
    clearInputs()
  });

//Event listener to remove most recently added meme
undoBtn.addEventListener("click", function(e){
  e.preventDefault()
  removeImgElement()
});
