/* tables */
const listPrice = document.getElementById("list-price");

/* Load add event listeners */
function loadEventListeners() {
    document.addEventListener("DOMContentLoaded", getData);
    $("#position").val(true);
    $("#name").val(true);
    $("#price").val(true);
}

/* initialization  */
loadEventListeners();

/* Router functions */
$("#btn_price").click(function() {
    $('.th-return').css("display", "none");
    $('.th-ath').css("display", "none");
    $('.th-community').css("display", "none");
    $('.th-price').css("display", "table-cell");
    tab = "price";
});
$("#btn_return").click(function() {
    $('.th-price').css("display", "none");
    $('.th-ath').css("display", "none");
    $('.th-community').css("display", "none");
    $('.th-return').css("display", "table-cell");
    tab = "return";
});
$("#btn_community").click(function() {
    $('.th-price').css("display", "none");
    $('.th-ath').css("display", "none");
    $('.th-return').css("display", "none");
    $('.th-community').css("display", "table-cell");
    tab = "community";
});
$("#btn_ath").click(function() {
    $('.th-price').css("display", "none");
    $('.th-community').css("display", "none");
    $('.th-return').css("display", "none");
    $('.th-ath').css("display", "table-cell");
    tab = "ath";
});
/* globals variables */
let data;
let data2;
let tab;

/* order by position */
$("#position").click(function() {
        $("#tbody-list-price").remove();
        if ($("#position").val()) {
            $("#position").val(false);
            data2.sort((a, b) => a.rank - b.rank);
            renderPrice(data2, tab);
        } else {
            $("#position").val(true);
            data.sort((a, b) => b.rank - a.rank);
            renderPrice(data, tab);
        }
    })
    /* order by name */
$("#name").click(function() {
        $("#tbody-list-price").remove();
        if ($("#name").val()) {
            $("#name").val(false);
            data2.sort((a, b) => a.name > b.name);
            renderPrice(data2, tab);
        } else {
            $("#name").val(true);
            data.sort((a, b) => a.name < b.name);
            renderPrice(data, tab);
        }
    })
    /* order by price */
$("#price").click(function() {
    $("#tbody-list-price").remove();
    if ($("#price").val()) {
        $("#price").val(false);
        data2.sort((a, b) => a.quotes.USD.price - b.quotes.USD.price);
        renderPrice(data2, tab);
    } else {
        $("#price").val(true);
        data.sort((a, b) => b.quotes.USD.price - a.quotes.USD.price);
        renderPrice(data, tab);
    }
})