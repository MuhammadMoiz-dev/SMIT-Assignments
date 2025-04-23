var getname = document.getElementById("name");
var getprice = document.getElementById("price");
var getdiscription = document.getElementById("discription");
var getimg = document.getElementById("img");
var getmodel = document.getElementById("model");
var card = document.getElementById("card");

function createcardbtn() {
  if (getdiscription.value == "") {
    getdiscription.value =
      "Some quick example text to build on the card title and make up the bulk of the cards content.";
  }
  if (
    getname.value == "" ||
    getprice.value == "" ||
    getimg.value == "" ||
    getmodel.value == ""
  ) {
    alert("Enter all filds");
  } else {
    card.innerHTML += `<div class="card m-3" style="width: 18rem;">
     <img src="${getimg.value}" class="card-img-top" alt="...">
     <div class="card-body">
    <h5 class="card-title">${getname.value}</h5>
    <h5 class="card-title">${getmodel.value}</h5>
    <h5 class="card-title">${getprice.value}</h5>
    <h5 class="card-title">${getdiscription.value}</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>`;
  }
  getname.value = "";
  getprice.value = "";
  getimg.value = "";
  getmodel.value = "";
  getdiscription.value = "";
}
