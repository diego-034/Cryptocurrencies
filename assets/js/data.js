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
                data2 = response.filter((elem) => elem.rank > 0 && elem.rank <= 100);
                data2.sort((a, b) => b.rank - a.rank);

                dataGlobal = data;
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.log(error);
    }
}