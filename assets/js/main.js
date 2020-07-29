/* tables */
const listPrice = document.getElementById("list-price");
const listReturn = document.getElementById("list-return");
const listCommunity = document.getElementById("list-community");

/* buttons to router */
const btn_price = document.getElementById("btn_price");
const btn_return = document.getElementById("btn_return");
const btn_community = document.getElementById("btn_community");

/* Load add event listeners */
function loadEventListeners() {
    document.addEventListener("DOMContentLoaded", getData);
    btn_price.addEventListener("click", tabPrice);
    btn_return.addEventListener("click", tabReturn);
    btn_community.addEventListener("click", tabCommunity);
}

/* initialization  */
loadEventListeners();

/* Router functions */
function tabPrice() {
    document.getElementById("list-price").style.display = "block";
    document.getElementById("list-return").style.display = "none";
    document.getElementById("list-community").style.display = "none";
}

function tabReturn() {
    document.getElementById("list-return").style.display = "block";
    document.getElementById("list-price").style.display = "none";
    document.getElementById("list-community").style.display = "none";
}

function tabCommunity() {
    document.getElementById("list-community").style.display = "block";
    document.getElementById("list-return").style.display = "none";
    document.getElementById("list-price").style.display = "none";
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
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.log(error);
    }
}

/* number format */
function format(x) {
    try {
        return Number.parseFloat(x).toFixed(2);
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
        body.className = className = "font-color-gray";
        data.forEach((element, index) => {
            body.innerHTML += `<tr>
                                <td class="uk-table-shrink" id="countC">${index + 1}</td>
                                <td class="uk-width-small" id="nameC">
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
                                <td class="uk-text-right uk-width-small uk-text-${(color =
                                  element.quotes.USD.percent_change_7d < 0
                                    ? "danger"
                                    : "success")}">
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
                        <td class="uk-table-shrink">${index + 1}</td>
                        <td class="uk-width-small" >
                             ${element.name+" " +element.symbol}
                        </td>
                        <td class="uk-width-small uk-text-right">
                            $ ${format(element.quotes.USD.price)}
                        </td>                            
                        <td class="uk-text-right uk-text-${(color =
                            element.quotes.USD.percent_change_7d < 0
                              ? "danger"
                              : "success")}">
                            ${element.quotes.USD.percent_change_7d}%
                        </td>
                        <td class="uk-text-right uk-text-${(color =
                            element.quotes.USD.percent_change_30d < 0
                              ? "danger"
                              : "success")}">
                            ${element.quotes.USD.percent_change_30d}%
                        </td>
                        <td class="uk-text-right">$...</td>
                        <td class="uk-text-right uk-text-${(color =
                            element.quotes.USD.percent_change_1y < 0
                              ? "danger"
                              : "success")}">
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
                                <td class="uk-table-shrink">${index + 1}</td>
                                <td class="uk-width-small">
                                     ${element.name +" " +element.symbol}
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