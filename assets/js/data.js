/* request to API */
function getData() {
    try {
        fetch("https://coinpaprika.com/ajax/coins/1?section=social&all=false&expand=social%2Cprice_stats&sort%5Bsort%5D=index&sort%5Bsortorder%5D=asc&tagID=&filters%5Bcoins%5D=true&filters%5Btokens%5D=true&currency=usd", {
                "headers": {
                    "Access-Control-Allow-Origin": "*"
                }
            })
            .then((response) => response.json())
            .then((response) => {
                /* filter th array */
                data = response.data;
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