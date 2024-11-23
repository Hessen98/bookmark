var nameInput = document.getElementById("input-name");
var urlInput = document.getElementById("input-url");
var descInput = document.getElementById("input-desc");
var saveInput = document.getElementById("input-save");
var rowGetIn = document.getElementById("rowGetIn");
var mainForm = document.forms[0];


// console.log(nameInput);
// console.log(urlInput);
// console.log(descInput);
// console.log(saveInput);
// console.log(appendSection);
// console.log(mainForm);


var mainArr = [];

if (localStorage.getItem("pages")) {
    mainArr = JSON.parse(localStorage.getItem("pages"));
    displayPage(JSON.parse(localStorage.getItem("pages")));
} 

mainForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (urlInput.classList.contains("is-valid") && nameInput.classList.contains("is-valid"))
   {
    console.log("form work");
    var bookMark = {
    theName: nameInput.value,
    theUrl: urlInput.value,
    desc: descInput.value,
    };
    mainArr.push(bookMark);
    console.log(mainArr);
        displayPage(mainArr);
        localStorage.setItem("pages", JSON.stringify(mainArr));
        console.log(JSON.parse(localStorage.getItem('pages')))
    clearForm();
} 
else
{
window.alert(`make a name more than 3 character
write a right url or domain name`);
}
});


function displayPage (arr){
    var itemBox = ''
    for(i = 0 ; i < arr.length ; i++ ){
        itemBox += `
            <div class="row text-center text-capitalize p-2 bg-white border-toop" >
                <div class="col-3">
                    <p>${i + 1}</p>
                </div>
                <div class="col-3">
                    <p>${arr[i].theName}</p>
                </div>
                <div class="col-3">
                    <a href="${arr[i].theUrl}" title="${arr[i].desc}" class="btn btn-success" target="_blank"><i class="fa-solid fa-eye"></i> Visit </a>
                </div>
                <div class="col-3">
                    <button class="btn btn-danger" onclick="deletePage(${i})"> <i class="fa-solid fa-trash"> </i> Delete</button>
                </div>
            </div>
        `;
    }
    rowGetIn.innerHTML = itemBox
}

function deletePage(indexDel) {
  mainArr.splice(indexDel, 1);
  displayPage(mainArr);
  localStorage.setItem("pages", JSON.stringify(mainArr));
  console.log(mainArr)
}

function clearForm() {
  urlInput.value = 'https:';
  nameInput.value = null;
  descInput.value = null;
}

// start regex

var regexName = /\w{2,30}/;

function validateName(element) {
  if (regexName.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    document.getElementById("alert-name").classList.add("d-none");
  } else {
    document.getElementById("alert-name").classList.add("d-block");
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
  }
}

var regexUrl = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/;

function validateUrl(element) {
  if (regexUrl.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    document.getElementById("url-name").classList.add("d-none");
  } else {
    document.getElementById("url-name").classList.add("d-block");
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
  }
}

var regexDesc = /\w{0,30}/;

function validateDesc(element) {
  if (regexDesc.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
  }
}

// end regex
