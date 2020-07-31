/* tables */
const listPrice = document.getElementById("list-price");
const listReturn = document.getElementById("list-return");
const listCommunity = document.getElementById("list-community");
const lsitAth = document.getElementById("list-ath");

/* buttons to router */
const btn_price = document.getElementById("btn_price");
const btn_return = document.getElementById("btn_return");
const btn_community = document.getElementById("btn_community");
const btn_ath = document.getElementById("btn_ath");

/* Input search */
// const search = document.getElementById('input-search');
/* Load add event listeners */
function loadEventListeners() {
    document.addEventListener("DOMContentLoaded", getData);
    btn_price.addEventListener("click", tabPrice);
    btn_return.addEventListener("click", tabReturn);
    btn_community.addEventListener("click", tabCommunity);
    btn_ath.addEventListener("click", tabAth);
    $("#position").val(true);
    $("#name").val(true);
    $("#price").val(true);
}

/* initialization  */
loadEventListeners();

/* Router functions */
function tabPrice() {
    validate(".th-return");
    validate(".th-community");
    validate(".th-ath");
}

function tabReturn() {
    validate(".th-price");
    validate(".th-community");
    validate(".th-ath");
}

function tabCommunity() {
    validate(".th-return");
    validate(".th-price");
    validate(".th-ath");
}

function tabAth() {
    validate(".th-return");
    validate(".th-community");
    validate(".th-price");
}

function validate(selector) {
    let a = document.querySelectorAll(selector);
    for (let i in a) {
        a[i].style.display = "none";
    }
}
/* globals variables */
let data;
let data2;
let dataGlobal = [];

/* order by */
$("#position").click(function() {
    $("#tbody-list-price").remove();
    if ($("#position").val()) {
        $("#position").val(false);
        data2.sort((a, b) => a.rank - b.rank);
        renderPrice(data2);
    } else {
        $("#position").val(true);
        data.sort((a, b) => b.rank - a.rank);
        renderPrice(data);
    }
})

$("#name").click(function() {
    $("#tbody-list-price").remove();
    if ($("#name").val()) {
        $("#name").val(false);
        data2.sort((a, b) => a.name > b.name);
        renderPrice(data2);
    } else {
        $("#name").val(true);
        data.sort((a, b) => a.name < b.name);
        renderPrice(data);
    }
})

$("#price").click(function() {
    $("#tbody-list-price").remove();
    if ($("#price").val()) {
        $("#price").val(false);
        data2.sort((a, b) => a.quotes.USD.price - b.quotes.USD.price);
        renderPrice(data2);
    } else {
        $("#price").val(true);
        data.sort((a, b) => b.quotes.USD.price - a.quotes.USD.price);
        renderPrice(data);
    }
})