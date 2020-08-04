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
        data[i].quotes.USD.price = format2((data[i].quotes.USD.price * 1) / btcValue.price_usd);
        data[i].quotes.USD.volume_24h = format2((data[i].quotes.USD.volume_24h * 1) / btcValue.price_usd);
        data[i].quotes.USD.market_cap = format2((data[i].quotes.USD.market_cap * 1) / btcValue.price_usd);
        data[i].quotes.USD.ath_price = format2((data[i].quotes.USD.ath_price * 1) / btcValue.price_usd);

        data[i].status = true;
    }
    console.log(data);
    return data;
}

function convertEth() {

}