let marka = [
  ["Jeep"]
  ["Toyota"]
  ["Nissan"]
];

let model = [
  ["Grand Cherokee"]
  ["LC Prado"]
  ["Patrol"]
];

let img = [
  ["777.jpeg"]
  ["907.jpeg"]
  ["999.jpeg"]
];

let markaS = document.getElementById("marka");
let modelS = document.getElementById("model");
let imgS = document.getElementById("img");

onload = function () {
  let data = `<option value="" selected disabled> Marka sec </option>`;
  for (i = 0; i < marka.length; i++) {
    data += `<option value="${[i]}" > ${marka[i]} </option>`;
  }
  markaS.innerHTML = data;
};

function sec() {
  show.style.display = "none";
  let val = markaS.value;
  let data = `<option value="" selected disabled> Model sec </option>`;
  for (i = 0; i < model[val].length; i++) {
    data += `<option value="${[i]}"> ${img[val][i]} </option>`;
  }
  modelS.innerHTML = data;
}

function img() {
  show.style.display = "block";
  let data = markaS.value;
  show.innerHTML = `<img width="200px" src="${flag[data]}" />`;
}
