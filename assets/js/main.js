/* Tables to write data */
const listPrice = document.querySelector("#list-price");
const listReturn = document.querySelector("#list-return");
const listCommunity = document.querySelector("#list-community");

/* Buttons to router */
const btn_price =document.getElementById('btn_price');
const btn_return =document.getElementById('btn_return');
const btn_community =document.getElementById('btn_community');

/* Globals varibles */
var data;

/* Load add event listeners */
function loadEventListeners() {
    document.addEventListener("DOMContentLoaded", domLoaded);
    btn_price.addEventListener('click', tabPrice);
    btn_return.addEventListener('click', tabReturn);
    btn_community.addEventListener('click', tabCommunity);
    
}
loadEventListeners();

/* Router functions */
function tabPrice(){

    document.getElementById("list-price").style.display = "block";
    document.getElementById("list-return").style.display = "none";
    document.getElementById("list-community").style.display = "none";
    
}

function tabReturn(){
    
    document.getElementById("list-return").style.display = "block";
    document.getElementById("list-price").style.display = "none";
    document.getElementById("list-community").style.display = "none";
    
}

function tabCommunity(){
    document.getElementById("list-community").style.display = "block";
    document.getElementById("list-return").style.display = "none";
    document.getElementById("list-price").style.display = "none";    
}


/* Request to API */
function domLoaded() {
    fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then(
            (response) => {
                data = response.filter((elem) => elem.rank > 0 && elem.rank <= 100);
                
                document.getElementById("loader").style.display = "none";

                renderPrice(data);
                renderReturn(data);
                renderCommunity(data);
            }
        )
        .catch((error) => { console.log(error);})
}
/* Convert number */
function format(x) {return Number.parseFloat(x).toFixed(2);}
  
/* Render Price Overview in view */
function renderPrice(data) {
    const body = document.createElement("tbody");
    data.forEach((element, index) => {
        body.innerHTML +=`<tr>
                            <td class="uk-table-shrink" id="countC">${index + 1}</td>
                            <td class="uk-width-small" id="nameC">
                                 ${element.name + "  "+"      "+ element.symbol}</p>
                                
                            </td>
                           
                            <td class="uk-width-small uk-text-right" id="priceC">
                            $ ${format(element.quotes.USD.price)}
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
    listPrice.appendChild(body);
}

/* Render Return rates in view */
function renderReturn(data) {
    const body = document.createElement("tbody");
    data.forEach((element, index) => {
        body.innerHTML +=`<tr>
                            <td class="uk-table-shrink">${index + 1}</td>
                            <td class="uk-width-small" >
                                 ${element.name + "  "+"      "+ element.symbol}</p>
                               
                                
                                
                            </td>
                           
                            <td class="uk-width-small uk-text-right">
                                $ ${format(element.quotes.USD.price)}
                            </td>                            
                            <td class="uk-text-success">${element.quotes.USD.percent_change_7d}%</td>
                            <td class="uk-text-right">${element.quotes.USD.percent_change_30d}%</td>
                            <td class="uk-text-right">$...</td>
                            <td class="uk-text-right">$${element.quotes.USD.percent_change_1y} </td>
                        </tr>`;
    });        
    listReturn.appendChild(body);
}

/* Render Community in view */
function renderCommunity(data) {
    const body = document.createElement("tbody");
    data.forEach((element, index) => {
        body.innerHTML +=`<tr>
                            <td class="uk-table-shrink">${index + 1}</td>
                            <td class="uk-width-small">
                                 ${element.name + "  "+"      "+ element.symbol}</p> 
                            </td>                           
                            <td class="uk-width-small uk-text-right">$${format(element.quotes.USD.price)}</td>
                            <td class="uk-width-small uk-table-shrink uk-text-right">...</td>
                            <td class="uk-text-success">...</td>
                            <td class="uk-text-right">...</td>
                            <td class="uk-text-right">...</td>
                            <td class="uk-text-right">...</td>
                            <td class="uk-text-right">...</td>
                        </tr>`;
    });        
    listCommunity.appendChild(body);
}