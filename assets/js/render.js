/* create tbody with price overview */
function renderPrice(data) {
    try {
        /* tbody object */
        const body = document.createElement("tbody");
        body.id = "tbody-list-price";
        body.className = "font-color-gray";
        data.forEach((element, index) => {
            body.innerHTML += `<tr>
                                <td class="uk-table-shrink" id="countC">${
                                  element.rank
                                }</td>
                                <td class="uk-width-max" id="nameC">
                                <img class="coin-icon" src="https://static2.coinpaprika.com/coin/${
                                  element.id
                                }/logo-thumb.png"/>
                                     ${element.name + " " + element.symbol}
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
                                    <img class="svg-icon" src="https://graphs2.coinpaprika.com/currency/chart/${
                                      element.id
                                    }/7d/chart.svg"/>
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
                        <img class="coin-icon" src="https://static2.coinpaprika.com/coin/${
                          element.id
                        }/logo-thumb.png"/>
                        ${element.name + " " + element.symbol}
                   </td>
                        </td>
                        <td class="uk-width-small uk-text-right">
                            $ ${format(element.quotes.USD.price)}
                        </td>                            
                        <td class="uk-width-max uk-text-${(color =
                          element.quotes.USD.percent_change_7d < 0
                            ? "danger"
                            : "success")}">
                              <img class="svg-icon" src="https://graphs2.coinpaprika.com/currency/chart/${
                                element.id
                              }/7d/chart.svg"/>

                            ${element.quotes.USD.percent_change_7d}%
                        </td>
                        <td class="uk-width-max uk-text-${(color =
                          element.quotes.USD.percent_change_30d < 0
                            ? "danger"
                            : "success")}">
                              <img class="svg-icon" src="https://graphs2.coinpaprika.com/currency/chart/${
                                element.id
                              }/30d/chart.svg"/>
                            ${element.quotes.USD.percent_change_30d}%
                        </td>
                        <td class="uk-width-max uk-text-${(color =
                          element.quotes.USD.percent_change_30d < 0
                            ? "danger"
                            : "success")}">
                              <img class="svg-icon" src="https://graphs2.coinpaprika.com/currency/chart/${
                                element.id
                              }/1q/chart.svg"/>
                        </td>
                        <td class="uk-width-max uk-text-${(color =
                          element.quotes.USD.percent_change_1y < 0
                            ? "danger"
                            : "success")}">
                              <img class="svg-icon" src="https://graphs2.coinpaprika.com/currency/chart/${
                                element.id
                              }/1y/chart.svg"/>
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
                                <img class="coin-icon" src="https://static2.coinpaprika.com/coin/${
                                  element.id
                                }/logo-thumb.png"/>
                                ${element.name + " " + element.symbol}
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
                                <td class="uk-table-shrink" id="countC">${
                                  element.rank
                                }</td>
                                <td class="uk-width-max" id="nameC">
                                <img class="coin-icon" src="https://static2.coinpaprika.com/coin/${
                                  element.id
                                }/logo-thumb.png"/>
                                ${element.name + " " + element.symbol}
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

function theme(value) {
    if (value == "true") {
        $("body").addClass("uk-light uk-background-secondary");
        $("#theme").val(false);
        $("#theme").html("Day Mode");
        $("#list-price").removeClass("uk-table-hover");
        $("#list-price").addClass("uk-table-hover-night");
        $("th").removeClass("th");
        $("th").addClass("th-night");
    } else {
        $("body").removeClass("uk-light uk-background-secondary");
        $("#theme").val(true);
        $("#theme").html("Night Mode");
        $("#list-price").removeClass("uk-table-hover-night");
        $("#list-price").addClass("uk-table-hover");
        $("th").removeClass("th-night");
        $("th").addClass("th");
    }
}