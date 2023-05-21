const submitBtn = document.getElementById("genMemeBtn");
const undoBtn = document.getElementById("undoBtn");
const form = document.getElementById("form")
const pictureContainer = document.getElementById("memes")

function createImgElement(){
  const linkInput = document.getElementById("imgLink").value;
  const newDivElem = document.createElement("div");
  const newImgElem = document.createElement("img");
  const newTopText = document.createElement("div");
  const newBottomText = document.createElement("div")
  const topTextInput = document.getElementById("topText").value;
  const bottomTextInput = document.getElementById("bottomText").value;

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
  const pictureContainer = document.getElementById("memes")
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
