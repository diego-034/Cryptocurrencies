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
}

/* initialization  */
loadEventListeners();

/* Router functions */
function tabPrice() {
    document.getElementById("list-price").style.display = "block";
    document.getElementById("list-return").style.display = "none";
    document.getElementById("list-community").style.display = "none";
    document.getElementById("list-ath").style.display = "none";
}

function tabReturn() {
    document.getElementById("list-return").style.display = "block";
    document.getElementById("list-price").style.display = "none";
    document.getElementById("list-community").style.display = "none";
    document.getElementById("list-ath").style.display = "none";
}

function tabCommunity() {
    document.getElementById("list-community").style.display = "block";
    document.getElementById("list-return").style.display = "none";
    document.getElementById("list-price").style.display = "none";
    document.getElementById("list-ath").style.display = "none";
}

function tabAth() {
    document.getElementById("list-ath").style.display = "block";
    document.getElementById("list-return").style.display = "none";
    document.getElementById("list-price").style.display = "none";
    document.getElementById("list-community").style.display = "none";
}

/* globals variables */
let data;
let data2;
let dataGlobal = [];


/* Search data */
function findData() {
    const value = search.value;
    const find = [];
    if (value != "") {
        // for(const value of dataGlobal){
        find.push(Contains(dataGlobal, value));
        // }
    }
    console.log("DATA GLOBAL", dataGlobal);
    console.log("DATA FILTER", find);
}

/* Compare Data */
function Contains(elementos, texto) {
    let result = [];
    elementos.forEach(a => { if (a.name.includes(texto)) result.push(a.textContent) })
    return result;
}
/* order by */
$("#position").click(function() {
    $("#tbody-list-price").remove();
    if ($("#position").val()) {
        $("#position").val(false);
        renderPrice(data2);
    } else {
        $("#position").val(true);
        renderPrice(data);
    }
})