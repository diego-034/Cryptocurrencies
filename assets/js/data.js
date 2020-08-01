/* request to API */
function getData() {
    try {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((response) => {
                /* filter th array */
                first100 = response.filter((elem) => elem.rank > 0 && elem.rank <= 100);
                /* validation */
                if (first100[0] == null) {
                    return;
                }
                first100.sort((a, b) => a.rank - b.rank);
                /* change display of loader */
                document.getElementById("loader").style.display = "none";
                /* call functions to render tables */
                renderPrice(first100, tab);
                /* array with 100 positions */
                allData = response;
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.log(error);
    }
}