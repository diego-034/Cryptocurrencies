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
    // search.addEventListener('keypress', findData);
}

let dataGlobal = [];
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
var data;

/* request to API */
function getData() {
    try {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((response) => {
                /* filter th array */
                data = response.filter((elem) => elem.rank > 0 && elem.rank <= 100);
                data.sort((a, b) => a.rank - b.rank);
                /* validation */
                if (data[0] == null) {
                    return;
                }
                /* change display of loader */
                document.getElementById("loader").style.display = "none";
                /* call functions to render tables */
                renderPrice(data);
                renderReturn(data);
                renderCommunity(data);
                renderAth(data);
                dataGlobal = data;
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.log(error);
    }
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
        return Number.parseFloat(data).toFixed(2);
    } catch (error) {
        console.log(error);
        return null;
    }
}

/* create tbody with price overview */
function renderPrice(data) {
    try {
        /* tbody object */
        const body = document.createElement("tbody");
        body.id = "tbody-list-price";
        body.className = "font-color-gray";
        data.forEach((element, index) => {
            body.innerHTML += `<tr>
                                <td class="uk-table-shrink" id="countC">${element.rank}</td>
                                <td class="uk-width-max" id="nameC">
                                <img class="coin-icon" src="https://static2.coinpaprika.com/coin/${element.id}/logo-thumb.png"/>
                                     ${element.name +" " +element.symbol}
                                </td>
                                <td class="uk-width-small uk-text-right" id="priceC">
                                    $ ${format(element.quotes.USD.price)}
                                </td>
                                <td class="uk-table-shrink uk-text-right uk-text-${(color =
                                  element.quotes.USD.percent_change_1h < 0
                                    ? "danger"
                                    : "success")}">
                                        ${element.quotes.USD.percent_change_1h}%
                                </td>
                                <td class="uk-table-shrink uk-text-right uk-text-${(color =
                                  element.quotes.USD.percent_change_24h < 0
                                    ? "danger"
                                    : "success")}">
                                    ${element.quotes.USD.percent_change_24h}%
                                </td>
                                <td class=" uk-width-max  uk-text-${(color =
                                  element.quotes.USD.percent_change_7d < 0
                                    ? "danger"
                                    : "success")}">
                                    <img class="svg-icon" src="https://graphs2.coinpaprika.com/currency/chart/${element.id}/7d/chart.svg"/>
                                    ${element.quotes.USD.percent_change_7d}%
                                </td>
                                <td class="uk-text-right">
                                    $ ${element.quotes.USD.volume_24h}
                                </td>
                                <td class="uk-text-right uk-background-primary">GRAPHIC</td>
                                <td class="uk-text-right">
                                    $ ${element.quotes.USD.market_cap} 
                                </td>
                            </tr>`;
        });
        listPrice.appendChild(body);
    } catch (error) {
        console.log(error);
    }
}

/* create tbody with return rates */
function renderReturn(data) {
    try {
        /* tbody object */
        const body = document.createElement("tbody");
        body.className = className = "font-color-gray";
        data.forEach((element, index) => {
            body.innerHTML += `<tr>
                        <td class="uk-table-shrink">${element.rank}</td>
                        <td class="uk-width-max" >
                        <img class="coin-icon" src="https://static2.coinpaprika.com/coin/${element.id}/logo-thumb.png"/>
                        ${element.name +" " +element.symbol}
                   </td>
                        </td>
                        <td class="uk-width-small uk-text-right">
                            $ ${format(element.quotes.USD.price)}
                        </td>                            
                        <td class="uk-width-max uk-text-${(color =
                            element.quotes.USD.percent_change_7d < 0
                              ? "danger"
                              : "success")}">
                              <img class="svg-icon" src="https://graphs2.coinpaprika.com/currency/chart/${element.id}/7d/chart.svg"/>

                            ${element.quotes.USD.percent_change_7d}%
                        </td>
                        <td class="uk-width-max uk-text-${(color =
                            element.quotes.USD.percent_change_30d < 0
                              ? "danger"
                              : "success")}">
                              <img class="svg-icon" src="https://graphs2.coinpaprika.com/currency/chart/${element.id}/30d/chart.svg"/>
                            ${element.quotes.USD.percent_change_30d}%
                        </td>
                        <td class="uk-width-max uk-text-${(color =
                            element.quotes.USD.percent_change_30d < 0
                              ? "danger"
                              : "success")}">
                              <img class="svg-icon" src="https://graphs2.coinpaprika.com/currency/chart/${element.id}/1q/chart.svg"/>
                        </td>
                        <td class="uk-width-max uk-text-${(color =
                            element.quotes.USD.percent_change_1y < 0
                              ? "danger"
                              : "success")}">
                              <img class="svg-icon" src="https://graphs2.coinpaprika.com/currency/chart/${element.id}/1y/chart.svg"/>
                        $ ${element.quotes.USD.percent_change_1y} 
                        </td>
                    </tr>`;
        });
        listReturn.appendChild(body);
    } catch (error) {
        console.log(error);
    }
}

/*  create tbody with community */
function renderCommunity(data) {
    try {
        /* tbody object */
        const body = document.createElement("tbody");
        body.className = className = "font-color-gray";
        data.forEach((element, index) => {
            body.innerHTML += `<tr>
                                <td class="uk-table-shrink">${element.rank}</td>
                                <td class="uk-width-small uk-width-max">
                                <img class="coin-icon" src="https://static2.coinpaprika.com/coin/${element.id}/logo-thumb.png"/>
                                ${element.name +" " +element.symbol}
                           </td>
                                </td>                           
                                <td class="uk-width-small uk-text-right">
                                    $ ${format(element.quotes.USD.price)}
                                </td>
                                <td class="uk-width-small uk-table-shrink uk-text-right">...</td>
                                <td class="uk-text-success">...</td>
                                <td class="uk-text-right">...</td>
                                <td class="uk-text-right">...</td>
                                <td class="uk-text-right">...</td>
                                <td class="uk-text-right">...</td>
                            </tr>`;
        });
        listCommunity.appendChild(body);
    } catch (error) {
        console.log(error);
    }
}

/* create tbody with ATH */
function renderAth(data) {
    try {
        /* tbody object */
        const body = document.createElement("tbody");
        body.className = className = "font-color-gray";
        data.forEach((element, index) => {
            body.innerHTML += `<tr>
                                <td class="uk-table-shrink" id="countC">${element.rank}</td>
                                <td class="uk-width-max" id="nameC">
                                <img class="coin-icon" src="https://static2.coinpaprika.com/coin/${element.id}/logo-thumb.png"/>
                                ${element.name +" " +element.symbol}
                           </td>
                                </td>
                                <td class="uk-width-small uk-text-right" id="priceC">
                                    $ ${format(element.quotes.USD.price)}
                                </td>
                                <td class="uk-table-small uk-text-right ">
                                       $ ${format(element.quotes.USD.ath_price)}
                                </td>
                                <td class="uk-table-small uk-text-right">
                                    ${date(element.quotes.USD.ath_date)}
                                </td>
                                <td class="uk-table-small uk-text-right ">
                                    ${(reponse = days(element.quotes.USD.ath_date,element.last_updated) < 1? "today":days(element.quotes.USD.ath_date,element.last_updated)+ " days ago")} 
                                </td>
                                <td class="uk-text-right">
                                    ${element.quotes.USD.percent_from_price_ath}
                                </td>
                            </tr>`;
        });
        lsitAth.appendChild(body);
    } catch (error) {
        console.log(error);
    }
}
/* order by */
$("#position").click(function() {
    $("#tbody-list-price").remove();
    if ($("#position").val()) {
        data.sort((a, b) => a.rank - b.rank);
        $("#position").val(false);
        console.log("if");
    } else {
        console.log("else");
        data.sort((a, b) => b.rank - a.rank);
        $("#position").val(true);
    }
    renderPrice(data);
    console.log("hola");
});
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