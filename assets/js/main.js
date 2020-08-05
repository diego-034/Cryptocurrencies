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
    let data = first100;
    if (filter != null) {
        data = filter;
        console.log(filter);
    }
    if (next100 != null) {
        data = next100;
    }
    let response = convertBtc(data);
    $("tbody>tr").remove();
    $("#btConvert").html("BTC");
    $("#btc").css("display", "none");
    $("#usd").css("display", "block");
    renderView(response, tab);
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
/* render view */
function renderView(data, tab) {
    try {
        /* tr with data */
        let tr;
        data.forEach((element, index) => {
            tr += `<tr>
                                <td class="uk-table-shrink">${element.rank}</td>
                                <td class="uk-width-max">
                                <img class="coin-icon" src="https://static2.coinpaprika.com/coin/${
                                  element.id
                                }/logo-thumb.png"/>
                                     ${element.name + " " + element.symbol}
                                </td>
                                <td class="uk-width-small uk-text-right">
                                     ${(price =
                                       element.status != undefined
                                         ? format2(element.quotes.USD.price)
                                         : format(element.quotes.USD.price))}
                                </td>
                                <td class="uk-table-shrink uk-text-right uk-text-${(color =
                                  element.quotes.USD.percent_change_1h < 0
                                    ? "danger"
                                    : "success")}  th-price">
                                        ${element.quotes.USD.percent_change_1h}%
                                </td>
                                <td class="uk-table-shrink uk-text-right uk-text-${(color =
                                  element.quotes.USD.percent_change_24h < 0
                                    ? "danger"
                                    : "success")}  th-price">
                                    ${element.quotes.USD.percent_change_24h}%
                                </td>
                                <td class=" uk-width-max  uk-text-${(color =
                                  element.quotes.USD.percent_change_7d < 0
                                    ? "danger"
                                    : "success")}  th-price">
                                    <img class="svg-icon" src="https://graphs2.coinpaprika.com/currency/chart/${
                                      element.id
                                    }/7d/chart.svg"/>
                                    ${element.quotes.USD.percent_change_7d}%
                                </td>
                                <td class="uk-text-right  th-price">
                                ${(volumen =
                                  element.status != undefined
                                    ? format2(element.quotes.USD.volume_24h)
                                    : format(element.quotes.USD.volume_24h))}
                                </td>
                                <td class="uk-text-right  th-price">
                                ${(marketCap =
                                  element.status != undefined
                                    ? format2(element.quotes.USD.market_cap)
                                    : format(element.quotes.USD.market_cap))}
                                </td>
                                <td class="uk-width-max uk-text-${(color =
                                  element.quotes.USD.percent_change_30d < 0
                                    ? "danger"
                                    : "success")}  th-return">
                                      <img class="svg-icon" src="https://graphs2.coinpaprika.com/currency/chart/${
                                        element.id
                                      }/30d/chart.svg"/>
                                    ${element.quotes.USD.percent_change_30d}%
                                </td>
                                <td class="uk-width-max uk-text-${(color =
                                  element.quotes.USD.percent_change_30d < 0
                                    ? "danger"
                                    : "success")} th-return">
                                      <img class="svg-icon" src="https://graphs2.coinpaprika.com/currency/chart/${
                                        element.id
                                      }/1q/chart.svg"/>
                                </td>
                                <td class="uk-width-max uk-text-${(color =
                                  element.quotes.USD.percent_change_1y < 0
                                    ? "danger"
                                    : "success")} th-return">
                                      <img class="svg-icon" src="https://graphs2.coinpaprika.com/currency/chart/${
                                        element.id
                                      }/1y/chart.svg"/>
                                $ ${element.quotes.USD.percent_change_1y} 
                                </td>
                                <td class="uk-text-right th-community">...</td>
                                <td class="uk-table-small uk-text-right th-ath">
                                ${(athPrice =
                                  element.status != undefined
                                    ? format2(element.quotes.USD.ath_price)
                                    : format(element.quotes.USD.ath_price))}
                         </td>
                         <td class="uk-table-small uk-text-right th-ath">
                             ${date(element.quotes.USD.ath_date)}
                         </td>
                         <td class="uk-table-small uk-text-right th-ath">
                             ${(reponse =
                               days(
                                 element.quotes.USD.ath_date,
                                 element.last_updated
                               ) < 1
                                 ? "today"
                                 : days(
                                     element.quotes.USD.ath_date,
                                     element.last_updated
                                   ) + " days ago")} 
                         </td>
                         <td class="uk-text-right th-ath">
                             ${element.quotes.USD.percent_from_price_ath}
                         </td>
                            </tr>`;
        });
        $("#tbody-list-price").append(tr);
        switch (tab) {
            case "community":
                $(".th-ath").css("display", "none");
                $(".th-price").css("display", "none");
                $(".th-return").css("display", "none");
                break;
            case "return":
                $(".th-ath").css("display", "none");
                $(".th-community").css("display", "none");
                $(".th-price").css("display", "none");
                break;
            case "ath":
                $(".th-price").css("display", "none");
                $(".th-community").css("display", "none");
                $(".th-return").css("display", "none");
                break;
            case "price":
                $(".th-ath").css("display", "none");
                $(".th-community").css("display", "none");
                $(".th-return").css("display", "none");
                break;
        }
    } catch (error) {
        console.log(error);
    }
}

/* dark mode */
function theme(value) {
    if (value == "true") {
        $("body").addClass("uk-light uk-background-secondary");
        $("#theme").val(false);
        $("#theme").html("Day Mode");
        $("#list-price").removeClass("uk-table-hover");
        $("#list-price").addClass("uk-table-hover-night");
        $("th").removeClass("th");
        $("th").addClass("th-night");
        $(".uk-card-default").css("background-color", "black");
        $(".uk-dropdown-bottom-left").css("background-color", "black");
        $(".uk-dropdown").css("background-color", "black");
    } else {
        $("body").removeClass("uk-light uk-background-secondary");
        $("#theme").val(true);
        $("#theme").html("Night Mode");
        $("#list-price").removeClass("uk-table-hover-night");
        $("#list-price").addClass("uk-table-hover");
        $("th").removeClass("th-night");
        $("th").addClass("th");
        $(".uk-card-default").css("background-color", "white");
        $(".uk-dropdown-bottom-left").css("background-color", "white");
        $(".uk-dropdown").css("background-color", "white");
    }
}
/* request to API  Data Tickers*/
function getData() {
    console.time("Peticion");
    $.ajax({
        url: "https://api.coinpaprika.com/v1/tickers",
        type: 'GET',
        dataType: "json",
        success: function(response) {
            // array with 100 positions 
            allData = response;
            // filter th array 
            first100 = response.filter((elem) => elem.rank > 0 && elem.rank <= 100);
            //  validation 
            if (first100[0] == null) {
                return;
            }
            first100.sort((a, b) => a.rank - b.rank);
            //  change display of loader 
            document.getElementById("loader").style.display = "none";
            //  call functions to render tables 
            renderView(first100, tab);
            // get filter data 
            flMarketcap = marketCapFilter(allData);
            flVolumen = volume24hFilter(allData);
            flPrice = priceFilter(allData);
            console.timeEnd("Peticion");
        },
        error: function(error) {
            console.log(error);
        }
    });
    console.time("request-Bitcoin");
    $.ajax({
        url: "https://api.coinpaprika.com/v1/ticker/btc-bitcoin",
        type: 'GET',
        dataType: "json",
        success: function(response) {
            btcValue = response;
            console.log(btcValue);
            console.timeEnd("request-Bitcoin");
        },
        error: function(error) {
            console.log(error);
        }
    });
    console.time("request-ethereum");
    $.ajax({
        url: "https://api.coinpaprika.com/v1/ticker/eth-ethereum",
        type: 'GET',
        dataType: "json",
        success: function(response) {
            ethValue = response;
            console.log(ethValue);
            console.timeEnd("request-ethereum");
        },
        error: function(error) {
            console.log(error);
        }
    });
}


// Funtion return object with arrays filtereds
function marketCapFilter(dataFilters) {
    let filters = {};
    let all = dataFilters;
    let billionMore = dataFilters.filter(elem => elem.quotes.USD.market_cap >= 1000000000);
    let millionsToBillions = dataFilters.filter(elem => elem.quotes.USD.market_cap >= 100000000 && elem.quotes.USD.market_cap <= 1000000000);
    let millionsToMillions = dataFilters.filter(elem => elem.quotes.USD.market_cap >= 10000000 && elem.quotes.USD.market_cap <= 100000000);
    let millionToMillions = dataFilters.filter(elem => elem.quotes.USD.market_cap >= 1000000 && elem.quotes.USD.market_cap <= 10000000);
    let hundredThousandToMillion = dataFilters.filter(elem => elem.quotes.USD.market_cap >= 100000 && elem.quotes.USD.market_cap <= 1000000);
    let zeroToHundredThousand = dataFilters.filter(elem => elem.quotes.USD.market_cap >= 0 && elem.quotes.USD.market_cap <= 100000);
    filters.all = all;
    filters.billionMore = billionMore;
    filters.millionsToBillions = millionsToBillions;
    filters.millionsToMillions = millionsToMillions;
    filters.millionToMillions = millionToMillions;
    filters.hundredThousandToMillion = hundredThousandToMillion;
    filters.zeroToHundredThousand = zeroToHundredThousand;
    return filters;
}

function volume24hFilter(dataFilters) {
    let filters = {};
    let all = dataFilters;
    let moreTenMillions = dataFilters.filter(elem => elem.quotes.USD.volume_24h >= 10000000);
    let moreAMillion = dataFilters.filter(elem => elem.quotes.USD.volume_24h >= 1000000);
    let moreOneHundredThousand = dataFilters.filter(elem => elem.quotes.USD.volume_24h >= 100000);
    let moreTenThousand = dataFilters.filter(elem => elem.quotes.USD.volume_24h >= 10000);
    let moreOneThousand = dataFilters.filter(elem => elem.quotes.USD.volume_24h >= 1000);
    filters.all = all;
    filters.moreTenMillions = moreTenMillions;
    filters.moreAMillion = moreAMillion;
    filters.moreOneHundredThousand = moreOneHundredThousand;
    filters.moreTenThousand = moreTenThousand;
    filters.moreOneThousand = moreOneThousand;
    return filters;
}

function priceFilter(dataFilters) {
    let filters = {};
    let all = dataFilters;
    let moreOneHundred = dataFilters.filter(elem => elem.quotes.USD.price >= 100);
    let between1and100 = dataFilters.filter(elem => elem.quotes.USD.price >= 1 && elem.quotes.USD.price >= 100);
    let between0_01and1_00 = dataFilters.filter(elem => elem.quotes.USD.price >= 0.01 && elem.quotes.USD.price >= 1.00);
    let between0_0001and0_01 = dataFilters.filter(elem => elem.quotes.USD.price >= 0.0001 && elem.quotes.USD.price >= 0.01);
    let betweenZeroand0_0001 = dataFilters.filter(elem => elem.quotes.USD.price >= 0 && elem.quotes.USD.price >= 0.0001);
    filters.all = all;
    filters.moreOneHundred = moreOneHundred;
    filters.between1and100 = between1and100;
    filters.between0_01and1_00 = between0_01and1_00;
    filters.between0_0001and0_01 = between0_0001and0_01;
    filters.betweenZeroand0_0001 = betweenZeroand0_0001;
    return filters;
}

function convertBtc(data) {
    for (let i = 0; i < data.length; i++) {
        data[i].quotes.USD.price = (data[i].quotes.USD.price * 1) / btcValue.price_usd;
        data[i].quotes.USD.volume_24h = (data[i].quotes.USD.volume_24h * 1) / btcValue.price_usd;
        data[i].quotes.USD.market_cap = (data[i].quotes.USD.market_cap * 1) / btcValue.price_usd;
        data[i].quotes.USD.ath_price = (data[i].quotes.USD.ath_price * 1) / btcValue.price_usd;

        data[i].status = true;
    }
    console.log(data);
    return data;
}

function convertEth() {

}
/* date convert to days */
function days(oldDate, actualDate) {
    try {
        var fechaini = new Date(oldDate);
        var fechafin = new Date(actualDate);
        var diasdif = fechafin.getTime() - fechaini.getTime();
        var contdias = Math.round(diasdif / (1000 * 60 * 60 * 24));
        return contdias;
    } catch (error) {
        console.log(error);
    }
}
/* date format */
function date(data) {
    try {
        let date = new Date(data);
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)

        return `${da} ${mo} ${ye}`;
    } catch (error) {
        console.log(error);
    }
}
/* number format */
function format(data) {
    try {
        return "$  " + Number.parseFloat(data).toFixed(2);
    } catch (error) {
        console.log(error);
        return null;
    }
}

function format2(data) {
    try {
        return Number.parseFloat(data).toFixed(6) + " BTC";
    } catch (error) {
        console.log(error);
        return null;
    }
}