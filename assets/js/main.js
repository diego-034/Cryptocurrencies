const listCoins = document.querySelector("#list-coins");
var data;
loadEventListeners();
function loadEventListeners() {
    document.addEventListener("DOMContentLoaded", domLoaded);
    
}

function domLoaded() {
    fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then(
            (response) => {
                data = response.filter((elem) => elem.rank > 0 && elem.rank <= 100);
                console.log(data);
                document.getElementById("loader").style.display = "none";

                render(data);
            }
        )
        .catch((error) => { console.log(error);})
}

/* Render Data in view */
function render(data) {
    const body = document.createElement("tbody");
    data.forEach((element, index) => {
        body.innerHTML +=`<tr>
                            <td class="uk-table-shrink" id="countC">${index + 1}</td>
                            <td class="uk-width-small" id="nameC">
                                 ${element.name + "  "+"      "+ element.symbol}</p>
                               
                                
                                
                            </td>
                           
                            <td class="uk-width-small uk-text-right" id="priceC">
                                $ ${element.quotes.USD.price}
                            </td>
                            <td class="uk-width-small uk-table-shrink uk-text-right uk-text-danger">
                                    ${element.quotes.USD.percent_change_1h}%
                            </td>
                            <td class="uk-text-success">${element.quotes.USD.percent_change_24h}%</td>
                            <td class="uk-text-right">${element.quotes.USD.percent_change_7d}%</td>
                            <td class="uk-text-right">$${element.quotes.USD.volume_24h}</td>
                            <td class="uk-text-right uk-background-primary">GRAPHIC</td>
                            <td class="uk-text-right">$${element.quotes.USD.market_cap} </td>
                        </tr>`;
    });        
    listCoins.appendChild(body);
}

