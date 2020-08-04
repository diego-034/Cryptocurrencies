/* Load add event listeners */
document.addEventListener("DOMContentLoaded", function() {
    getData();
    tab = "price";
});

/* Router functions */
$("#btn_price").click(function() {
    $(".th-return").css("display", "none");
    $(".th-ath").css("display", "none");
    $(".th-community").css("display", "none");
    $(".th-price").css("display", "table-cell");
    tab = "price";
});
$("#btn_return").click(function() {
    $(".th-price").css("display", "none");
    $(".th-ath").css("display", "none");
    $(".th-community").css("display", "none");
    $(".th-return").css("display", "table-cell");
    tab = "return";
});
$("#btn_community").click(function() {
    $(".th-price").css("display", "none");
    $(".th-ath").css("display", "none");
    $(".th-return").css("display", "none");
    $(".th-community").css("display", "table-cell");
    tab = "community";
});
$("#btn_ath").click(function() {
    $(".th-price").css("display", "none");
    $(".th-community").css("display", "none");
    $(".th-return").css("display", "none");
    $(".th-ath").css("display", "table-cell");
    tab = "ath";
});
/* globals variables */
let first100;
let tab;
let filter;
let allData;
let next100;
let flMarketcap = {};
let flVolumen = {};
let flPrice = {};
let etcValue;
let btcValue;

// convert to Bitcoin
$("#btc").click(function() {
    let data = convertBtc(first100);
    $("tbody>tr").remove();
    renderView(data, tab);
});

// convert to Ethereum
$("#eth").click(function() {
    console.log(first100);
});
/* order by position */
$("#position").click(function() {
    var data = first100;
    if (filter != null) {
        data = filter;
        console.log(filter);
    }
    if (next100 != null) {
        data = next100;
    }
    $("tbody>tr").remove();
    if ($("#position").val()) {
        $("#position").val(false);
        data.sort((a, b) => a.rank - b.rank);
        renderView(data, tab);
    } else {
        $("#position").val(true);
        data.sort((a, b) => b.rank - a.rank);
        renderView(data, tab);
    }
});
/* order by name */
$("#name").click(function() {
    var data = first100;
    if (filter != null) {
        data = filter;
        console.log(filter);
    }
    if (next100 != null) {
        data = next100;
    }
    $("tbody>tr").remove();
    if ($("#name").val()) {
        $("#name").val(false);
        data.sort((a, b) => a.name > b.name);
        renderView(data, tab);
    } else {
        $("#name").val(true);
        data.sort((a, b) => a.name < b.name);
        renderView(data, tab);
    }
});
/* order by price */
$("#price").click(function() {
    var data = first100;
    if (filter != null) {
        data = filter;
        console.log(filter);
    }
    if (next100 != null) {
        data = next100;
    }
    $("tbody>tr").remove();
    if ($("#price").val()) {
        $("#price").val(false);
        data.sort((a, b) => a.quotes.USD.price - b.quotes.USD.price);
        renderView(data, tab);
    } else {
        $("#price").val(true);
        data.sort((a, b) => b.quotes.USD.price - a.quotes.USD.price);
        renderView(data, tab);
    }
});

/* order by h1 */
$("#1h").click(function() {
    var data = first100;
    if (filter != null) {
        data = filter;
        console.log(filter);
    }
    if (next100 != null) {
        data = next100;
    }
    $("tbody>tr").remove();
    if ($("#1h").val()) {
        $("#1h").val(false);
        data.sort(
            (a, b) => a.quotes.USD.percent_change_1h - b.quotes.USD.percent_change_1h
        );
        renderView(data, tab);
    } else {
        $("#1h").val(true);
        data.sort(
            (a, b) => b.quotes.USD.percent_change_1h - a.quotes.USD.percent_change_1h
        );
        renderView(data, tab);
    }
});
/* order by 24h */
$("#24h").click(function() {
    var data = first100;
    if (filter != null) {
        data = filter;
        console.log(filter);
    }
    if (next100 != null) {
        data = next100;
    }
    $("tbody>tr").remove();
    if ($("#24h").val()) {
        $("#24h").val(false);
        data.sort(
            (a, b) =>
            a.quotes.USD.percent_change_24h - b.quotes.USD.percent_change_24h
        );
        renderView(data, tab);
    } else {
        $("#24h").val(true);
        data.sort(
            (a, b) =>
            b.quotes.USD.percent_change_24h - a.quotes.USD.percent_change_24h
        );
        renderView(data, tab);
    }
});
/* order by 7d */
$("#7d").click(function() {
    var data = first100;
    if (filter != null) {
        data = filter;
        console.log(filter);
    }
    if (next100 != null) {
        data = next100;
    }
    $("tbody>tr").remove();
    if ($("#7d").val()) {
        $("#7d").val(false);
        data.sort(
            (a, b) => a.quotes.USD.percent_change_7d - b.quotes.USD.percent_change_7d
        );
        renderView(data, tab);
    } else {
        $("#7d").val(true);
        data.sort(
            (a, b) => b.quotes.USD.percent_change_7d - a.quotes.USD.percent_change_7d
        );
        renderView(data, tab);
    }
});
/* order by volumen 24 */
$("#volumen24").click(function() {
    var data = first100;
    if (filter != null) {
        data = filter;
        console.log(filter);
    }
    if (next100 != null) {
        data = next100;
    }
    $("tbody>tr").remove();
    if ($("#volumen24").val()) {
        $("#volumen24").val(false);
        data.sort((a, b) => a.quotes.USD.volume_24h - b.quotes.USD.volume_24h);
        renderView(data, tab);
    } else {
        $("#volumen24").val(true);
        data.sort((a, b) => b.quotes.USD.volume_24h - a.quotes.USD.volume_24h);
        renderView(data, tab);
    }
});
/* order by fl */
$("#marketcap").click(function() {
    var data = first100;
    if (filter != null) {
        data = filter;
        console.log(filter);
    }
    if (next100 != null) {
        data = next100;
    }
    $("tbody>tr").remove();
    if ($("#marketcap").val()) {
        $("#marketcap").val(false);
        data.sort((a, b) => a.quotes.USD.market_cap - b.quotes.USD.market_cap);
        renderView(data, tab);
    } else {
        $("#marketcap").val(true);
        data.sort((a, b) => b.quotes.USD.market_cap - a.quotes.USD.market_cap);
        renderView(data, tab);
    }
});
/* order by 30d */
$("#30d").click(function() {
    var data = first100;
    if (filter != null) {
        data = filter;
        console.log(filter);
    }
    if (next100 != null) {
        data = next100;
    }
    $("tbody>tr").remove();
    if ($("#30d").val()) {
        $("#30d").val(false);
        data.sort(
            (a, b) =>
            a.quotes.USD.percent_change_30d - b.quotes.USD.percent_change_30d
        );
        renderView(data, tab);
    } else {
        $("#30d").val(true);
        data.sort(
            (a, b) =>
            b.quotes.USD.percent_change_30d - a.quotes.USD.percent_change_30d
        );
        renderView(data, tab);
    }
});
/* order by 1y */
$("#1y").click(function() {
    var data = first100;
    if (filter != null) {
        data = filter;
        console.log(filter);
    }
    if (next100 != null) {
        data = next100;
    }
    $("tbody>tr").remove();
    if ($("#1y").val()) {
        $("#1y").val(false);
        data.sort(
            (a, b) => a.quotes.USD.percent_change_1y - b.quotes.USD.percent_change_1y
        );
        renderView(data, tab);
    } else {
        $("#1y").val(true);
        data.sort(
            (a, b) => b.quotes.USD.percent_change_1y - a.quotes.USD.percent_change_1y
        );
        renderView(data, tab);
    }
});
/* order by ath */
$("#ath").click(function() {
    var data = first100;
    if (filter != null) {
        data = filter;
        console.log(filter);
    }
    if (next100 != null) {
        data = next100;
    }
    $("tbody>tr").remove();
    if ($("#ath").val()) {
        $("#ath").val(false);
        data.sort((a, b) => a.quotes.USD.ath_price - b.quotes.USD.ath_price);
        renderView(data, tab);
    } else {
        $("#ath").val(true);
        data.sort((a, b) => b.quotes.USD.ath_price - a.quotes.USD.ath_price);
        renderView(data, tab);
    }
});
/* order by ath date */
$("#athDate").click(function() {
    var data = first100;
    if (filter != null) {
        data = filter;
        console.log(filter);
    }
    if (next100 != null) {
        data = next100;
    }
    $("tbody>tr").remove();
    if ($("#athDate").val()) {
        $("#athDate").val(false);
        data.sort(
            (a, b) =>
            new Date(a.quotes.USD.ath_date) - new Date(b.quotes.USD.ath_date)
        );
        renderView(data, tab);
    } else {
        $("#athDate").val(true);
        data.sort(
            (a, b) =>
            new Date(b.quotes.USD.ath_date) - new Date(a.quotes.USD.ath_date)
        );
        renderView(data, tab);
    }
});
/* order by ath days */
$("#athDays").click(function() {
    var data = first100;
    if (filter != null) {
        data = filter;
        console.log(filter);
    }
    if (next100 != null) {
        data = next100;
    }
    $("tbody>tr").remove();
    if ($("#athDays").val()) {
        $("#athDays").val(false);
        data.sort(
            (a, b) =>
            new Date(a.quotes.USD.ath_date) - new Date(b.quotes.USD.ath_date)
        );
        renderView(data, tab);
    } else {
        $("#athDays").val(true);
        data.sort(
            (a, b) =>
            new Date(b.quotes.USD.ath_date) - new Date(a.quotes.USD.ath_date)
        );
        renderView(data, tab);
    }
});
/* order by ath days */
$("#fromAth").click(function() {
    var data = first100;
    if (filter != null) {
        data = filter;
        console.log(filter);
    }
    if (next100 != null) {
        data = next100;
    }
    $("tbody>tr").remove();
    if ($("#fromAth").val()) {
        $("#fromAth").val(false);
        data.sort(
            (a, b) =>
            a.quotes.USD.percent_from_price_ath -
            b.quotes.USD.percent_from_price_ath
        );
        renderView(data, tab);
    } else {
        $("#fromAth").val(true);
        data.sort(
            (a, b) =>
            b.quotes.USD.percent_from_price_ath -
            a.quotes.USD.percent_from_price_ath
        );
        renderView(data, tab);
    }
});
/* order by ath days */
$("#next100").click(function() {
    filter = null;
    $("tbody>tr").remove();
    if (next100 == null) {
        next100 = allData.filter((elem) => elem.rank > 100 && elem.rank <= 200);
    }
    renderView(next100, tab);
    $("#next100").css("display", "none");
    $("#first100").css("display", "block");
});
$("#first100").click(function() {
    $("tbody>tr").remove();
    next100 = null;
    filter = null;
    renderView(first100, tab);
    $("#next100").css("display", "block");
    $("#first100").css("display", "none");
});
/* filter Market Cap */
$("#fl-m-1b").click(function() {
    $("tbody>tr").remove();
    renderView(flMarketcap.billionMore, tab);
    filter = flMarketcap.billionMore;
});
$("#fl-m-100-1m").click(function() {
    $("tbody>tr").remove();
    let data = [];
    for (let i = 0; i < 35; i++) {
        data.push(flMarketcap.hundredThousandToMillion[i]);
    }
    renderView(data, tab);
    filter = data;
});
$("#fl-m-10-100m").click(function() {
    $("tbody>tr").remove();
    let data = [];
    for (let i = 0; i < 35; i++) {
        data.push(flMarketcap.millionToMillions[i]);
    }
    filter = data;
    renderView(data, tab);
});
$("#fl-m-1-10m").click(function() {
    $("tbody>tr").remove();
    let data = [];
    for (let i = 0; i < 35; i++) {
        data.push(flMarketcap.millionsToBillions[i]);
    }
    filter = data;
    renderView(data, tab);
});
$("#fl-m-100k-1m").click(function() {
    $("tbody>tr").remove();
    let data = [];
    for (let i = 0; i < 35; i++) {
        data.push(flMarketcap.millionsToMillions[i]);
    }
    filter = data;
    renderView(data, tab);
});
$("#fl-m-0-100k").click(function() {
    $("tbody>tr").remove();
    let data = [];
    for (let i = 0; i < 35; i++) {
        data.push(flMarketcap.zeroToHundredThousand[i]);
    }
    filter = data;
    renderView(data, tab);
});
$("#fl-m-all").click(function() {
    $("tbody>tr").remove();
    let data = [];
    for (let i = 0; i < 100; i++) {
        data.push(flMarketcap.all[i]);
    }
    filter = data;
    renderView(data, tab);
});
/* filter volumen */
$("#fl-v-10").click(function() {
    $("tbody>tr").remove();
    let data = [];
    for (let i = 0; i < 35; i++) {
        data.push(flVolumen.moreTenMillions[i]);
    }
    filter = data;
    renderView(data, tab);
});
$("#fl-v-1").click(function() {
    $("tbody>tr").remove();
    let data = [];
    for (let i = 0; i < 35; i++) {
        data.push(flVolumen.moreAMillion[i]);
    }
    filter = data;
    renderView(data, tab);
});
$("#fl-v-100k").click(function() {
    $("tbody>tr").remove();
    let data = [];
    for (let i = 0; i < 35; i++) {
        data.push(flVolumen.moreOneHundredThousand[i]);
    }
    filter = data;
    renderView(data, tab);
});
$("#fl-v-10k").click(function() {
    $("tbody>tr").remove();
    let data = [];
    for (let i = 0; i < 35; i++) {
        data.push(flVolumen.moreTenThousand[i]);
    }
    filter = data;
    renderView(data, tab);
});
$("#fl-v-1k").click(function() {
    $("tbody>tr").remove();
    let data = [];
    for (let i = 0; i < 35; i++) {
        data.push(flVolumen.moreOneThousand[i]);
    }
    filter = data;
    renderView(data, tab);
});
$("#fl-v-all").click(function() {
    $("tbody>tr").remove();
    let data = [];
    for (let i = 0; i < 100; i++) {
        data.push(flVolumen.all[i]);
    }
    filter = data;
    renderView(data, tab);
});
/* filter price */
$("#fl-p-m-100").click(function() {
    $("tbody>tr").remove();
    let data = [];
    for (let i = 0; i < 35; i++) {
        data.push(flPrice.moreOneHundred[i]);
    }
    filter = data;
    renderView(data, tab);
});
$("#fl-p-m-1-100").click(function() {
    $("tbody>tr").remove();
    let data = [];
    for (let i = 0; i < 35; i++) {
        data.push(flPrice.between1and100[i]);
    }
    filter = data;
    renderView(data, tab);
});
$("#fl-p-m-0-3").click(function() {
    $("tbody>tr").remove();
    let data = [];
    for (let i = 0; i < 35; i++) {
        data.push(flPrice.between0_01and1_00[i]);
    }
    filter = data;
    renderView(data, tab);
});
$("#fl-p-m-0-2").click(function() {
    $("tbody>tr").remove();
    let data = [];
    for (let i = 0; i < 35; i++) {
        data.push(flPrice.between0_0001and0_01[i]);
    }
    filter = data;
    renderView(data, tab);
});
$("#fl-p-m-0-1").click(function() {
    $("tbody>tr").remove();
    let data = [];
    for (let i = 0; i < 35; i++) {
        data.push(flPrice.betweenZeroand0_0001[i]);
    }
    filter = data;
    renderView(data, tab);
});
$("#fl-p-m-all").click(function() {
    $("tbody>tr").remove();
    let data = [];
    for (let i = 0; i < 100; i++) {
        data.push(flPrice.all[i]);
    }
    filter = data;
    renderView(data, tab);
});