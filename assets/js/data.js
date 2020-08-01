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
                data.sort((a, b) => a.rank - b.rank);
                /* change display of loader */
                document.getElementById("loader").style.display = "none";
                /* call functions to render tables */
                renderPrice(data, tab);
                /* array with 100 positions */
                data2 = response.filter((elem) => elem.rank > 0 && elem.rank <= 100);
                allData = response;
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.log(error);
    }
}