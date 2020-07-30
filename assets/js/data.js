// /* global variable */
// var data;
// var coins;
// /* request to API */
// function getData() {
//     try {
//         fetch("https://api.coinpaprika.com/v1/tickers")
//             .then((response) => response.json())
//             .then((response) => {
//                 /* filter th array */
//                 data = response.filter((elem) => elem.rank > 0 && elem.rank <= 100);
//                 /* validation */
//                 if (data[0] == null) {
//                     return;
//                 }
//                 console.log(data);
//                 data.forEach(element => {
//                     fetch("https://api.coinpaprika.com/v1/tickers/" + element.id)
//                         .then((response) => response.json())
//                         .then((response) => {
//                             coins.add(response);
//                         })
//                         .catch((error) => {
//                             console.log(error);
//                         });
//                 });
//                 console.log(coins);
//                 /* change display of loader */
//                 // document.getElementById("loader").style.display = "none";
//                 /* call functions to render tables */
//                 // renderPrice(data);
//                 // renderReturn(data);
//                 // renderCommunity(data);
//                 // renderAth(data);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     } catch (error) {
//         console.log(error);
//     }
// }
// // getData();