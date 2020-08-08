/*-------- Globals variables ------------*/
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


/*-------- Load add event listeners -----------*/
document.addEventListener("DOMContentLoaded", function() {
    getData();
    tab = "price";

});

/*---------------- Router functions-----------------------*/
$("#btn_price").click(function() {
    $(".th-return").css("display", "none");
    $(".th-ath").css("display", "none");
    $(".th-price").css("display", "table-cell");
    tab = "price";
});
$("#btn_return").click(function() {
    $(".th-price").css("display", "none");
    $(".th-ath").css("display", "none");
    $(".th-return").css("display", "table-cell");
    tab = "return";
});
$("#btn_ath").click(function() {
    $(".th-price").css("display", "none");
    $(".th-return").css("display", "none");
    $(".th-ath").css("display", "table-cell");
    tab = "ath";
});


/*--------------- Convert currency ------------*/
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

$("#eth").click(function() {
    console.log(first100);
});

/*----------- Order by---------------*/

// Order by position 
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
// Order by name 
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
// Order by price 
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

// Order by 1h 
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
// Order by 24h 
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
// Order by 7d 
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
//Order by volumen 24 
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
// Order by fl 
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
// Order by 30d 
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
// Order by 1y 
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
// Order by ath 
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
// Order by ath date 
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
//Order by ath days 
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
// Order by ath days 
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
// Order by ath days 
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

function inject(flag, data) {
    switch (flag) {
        case 0:
            flPrice = priceFilter(data);
            flVolumen = volume24hFilter(data);
            break;
        case 1:
            flMarketcap = marketCapFilter(data);
            flPrice = priceFilter(data);
            break;
        case 2:
            flMarketcap = marketCapFilter(data);
            flVolumen = volume24hFilter(data);
            break;

        default:
            "En el default"
            break;
    }
}
/*------------ dimanic -----------*/

function dinamicValues() {
    // Market cap
    $("#fl-m-all").html(`All(${flMarketcap.all.length})`);
    // document.querySelector("#fl-m-all").innerText = `All(${flMarketcap.all.length})`;
    document.querySelector("#fl-m-1b").innerText = `$1 Billion+ (${flMarketcap.billionMore.length})`;
    document.querySelector("#fl-m-100-1b").innerText = `$100 Millions - $1 Billion(${flMarketcap.millionsToBillions.length}) `;
    document.querySelector("#fl-m-10-100m").innerText = `$10 Millions - $100 Millions (${flMarketcap.millionsToMillions.length})`;
    document.querySelector("#fl-m-1-10m").innerText = `$1 Million - $10 Millions (${flMarketcap.millionToMillions.length})`;
    document.querySelector("#fl-m-100k-1m").innerText = `$100k - $1 Million(${flMarketcap.hundredThousandToMillion.length}) `;
    document.querySelector("#fl-m-0-100k").innerText = `$0 - $100k (${flMarketcap.zeroToHundredThousand.length})`;
    //volumen
    document.querySelector('#fl-v-all').innerText = `All(${flVolumen.all.length})`;
    document.querySelector('#fl-v-10').innerText = `$10 Million+ (${flVolumen.moreTenMillions.length})`;
    document.querySelector('#fl-v-1').innerText = `$1 Million+(${flVolumen.moreAMillion.length})`;
    document.querySelector('#fl-v-100k').innerText = `$100k+(${flVolumen.moreOneHundredThousand.length})`;
    document.querySelector('#fl-v-10k').innerText = `$10k+(${flVolumen.moreTenThousand.length})`;
    document.querySelector('#fl-v-1k').innerText = `$1k+(${flVolumen.moreOneThousand.length})`;
    //price
    document.querySelector("#fl-p-m-all").innerText = `All (${flPrice.all.length})`;
    document.querySelector("#fl-p-m-100").innerText = `$100+ (${flPrice.moreOneHundred.length})`;
    document.querySelector("#fl-p-m-1-100").innerText = `$1 - $100 (${flPrice.between1and100.length})`;
    document.querySelector("#fl-p-m-0-3").innerText = `$0.01 - $1.00 (${flPrice.between0_01and1_00.length})`;
    document.querySelector("#fl-p-m-0-2").innerText = `$0.0001 - $0.01 (${flPrice.between0_0001and0_01.length})`;
    document.querySelector("#fl-p-m-0-1").innerText = `$0 - $0.0001 (${flPrice.betweenZeroand0_0001.length})`;

}
/*---------- Filters -------------*/

$("#first100").click(function() {
    $("tbody>tr").remove();
    next100 = null;
    filter = null;
    renderView(first100, tab);
    $("#next100").css("display", "block");
    $("#first100").css("display", "none");
});

// Filter Market Cap 
$('#select-m').on('change', function() {
    var value = $(this).val();
    if (value == null) return;
    switch (value) {
        case "billionMore":
            if (flMarketcap.billionMore.length < 1) return;
            next100 = null;
            $("tbody>tr").remove();
            renderView(flMarketcap.billionMore, tab);
            filter = flMarketcap.billionMore;
            inject(0, flMarketcap.billionMore)
            dinamicValues()
            break;
        case "hundredThousandToMillion":
            if (flMarketcap.hundredThousandToMillion.length < 1) return;
            showFilter(0, flMarketcap.hundredThousandToMillion);
            break;
        case "millionToMillions":
            if (flMarketcap.millionToMillions.length < 1) return;
            showFilter(0, flMarketcap.millionToMillions);
            break;
        case "millionsToMillions":
            if (flMarketcap.millionsToMillions.length < 1) return;
            showFilter(0, flMarketcap.millionsToMillions);
            break;
        case "millionsToBillions":
            if (flMarketcap.millionsToBillions.length < 1) return;
            showFilter(0, flMarketcap.millionsToBillions);
            break;
        case "hundredThousandToMillion":
            if (flMarketcap.hundredThousandToMillion.length < 1) return;
            showFilter(0, flMarketcap.hundredThousandToMillion);
            break;
        case "zeroToHundredThousand":
            if (flMarketcap.zeroToHundredThousand.length < 1) return;
            showFilter(0, flMarketcap.zeroToHundredThousand);
            break;
        default:
            if (flMarketcap.all.length < 1) return;
            showFilter(0, flMarketcap.all);
            break;
    }

});

// Filter volumen 24h
$('#select-v').on('change', function() {
    var value = $(this).val();
    if (value == null) return;
    switch (value) {
        case "moreTenMillions":
            if (flVolumen.moreTenMillions.length < 1) return;
            showFilter(1, flVolumen.moreTenMillions)
            break;
        case "moreAMillion":
            if (flVolumen.moreAMillion.length < 1) return;
            showFilter(1, flVolumen.moreAMillion);
            break;
        case "moreOneHundredThousand":
            if (flVolumen.moreOneHundredThousand.length < 1) return;
            showFilter(1, flVolumen.moreOneHundredThousand);
            break;
        case "moreTenThousand":
            if (flVolumen.moreTenThousand.length < 1) return;
            showFilter(1, flVolumen.moreTenThousand);
            break;
        case "moreOneThousand":
            if (flVolumen.moreOneThousand.length < 1) return;
            showFilter(1, flVolumen.moreOneThousand);
            break;
        default:
            if (flVolumen.all.length < 1) return;
            showFilter(1, flVolumen.all);
            break;
    }

});

// Filter price
$('#select-p').on('change', function() {
    var value = $(this).val();
    if (value == null) return;
    switch (value) {
        case "moreOneHundred":
            if (flPrice.moreOneHundred.length < 1) return;
            showFilter(2, flPrice.moreOneHundred)
            break;
        case "between1and100":
            if (flPrice.between1and100.length < 1) return;
            showFilter(2, flPrice.between1and100);
            break;
        case "between0_01and1_00":
            if (flPrice.between0_01and1_00.length < 1) return;
            showFilter(2, flPrice.between0_01and1_00);
            break;
        case "between0_0001and0_01":
            if (flPrice.between0_0001and0_01.length < 1) return;
            showFilter(2, flPrice.between0_0001and0_01);
            break;
        case "betweenZeroand0_0001":
            if (flPrice.betweenZeroand0_0001.length < 1) return;
            showFilter(2, flPrice.betweenZeroand0_0001);
            break;
        default:
            if (flPrice.all.length < 1) return;
            showFilter(2, flPrice.all);
            break;
    }

});

function showFilter(flag, object) {
    next100 = null;
    $("tbody>tr").remove();
    let data = object;
    inject(flag, data);

    if (object[100]) {
        let array = [];
        for (let i = 0; i < 35; i++) {
            array.push(object[i]);
        }
        data = array;
    }
    dinamicValues();
    filter = data;
    renderView(data, tab);
}
/*-------------------  Render view --------------------*/
function renderView(data, tab) {
    try {
        /* foreach to set data in rows */
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
        // Add rows at tbody
        $("#tbody-list-price").append(tr);
        // Switch to show tab selected
        switch (tab) {
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

/*-------------- Dark Mode -----------------*/
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
        $("tbody td").css("border", "#585e61 1px solid");
        $("tbody th").css("border", "#585e61 1px solid");
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
        $("tbody td").css("border", "#b3b3b3 1px solid");
        $("tbody th").css("border", "#b3b3b3 1px solid");
    }
}
/*------------- Request to API  Data Tickers ------------------*/
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

            dinamicValues();
        },
        error: function(error) {
            console.log(error);
        }
    });
    // Request price BTC to conver USD
    $.ajax({
        url: "https://api.coinpaprika.com/v1/ticker/btc-bitcoin",
        type: 'GET',
        dataType: "json",
        success: function(response) {
            btcValue = response;
        },
        error: function(error) {
            console.log(error);
        }
    });
    // Request price ETH to convert USD
    $.ajax({
        url: "https://api.coinpaprika.com/v1/ticker/eth-ethereum",
        type: 'GET',
        dataType: "json",
        success: function(response) {
            ethValue = response;
        },
        error: function(error) {
            console.log(error);
        }
    });
}

/*------------- Filters -------------------*/
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
// Try convert to BTC
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
/* Date convert to days 239 days */
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
/* Date Format 27 jun 2020 */
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
/* Number Format  $ 1000.00 */
function format(data) {
    try {
        return "$  " + Number.parseFloat(data).toFixed(2);
    } catch (error) {
        console.log(error);
        return null;
    }
}
/* Bitcoin Format 0.123 BTC */
function format2(data) {
    try {
        return Number.parseFloat(data).toFixed(6) + " BTC";
    } catch (error) {
        console.log(error);
        return null;
    }
}