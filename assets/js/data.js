/* request to API */
function getData(position = 0, finish = 100) {
    try {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((response) => {
                /* filter th array */
                data = response.filter((elem) => elem.rank > position && elem.rank <= finish);
                data.sort((a, b) => a.rank - b.rank);
                /* validation */
                if (data[0] == null) {
                    return;
                }
                /* change display of loader */
                document.getElementById("loader").style.display = "none";
                /* call functions to render tables */
                renderPrice(data, tab);
                data2 = response.filter((elem) => elem.rank > 0 && elem.rank <= 100);
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.log(error);
    }
}