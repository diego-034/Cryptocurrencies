document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.coinpaprika.com/v1/coins')
        .then((response) => response.json())
        .then(
            (response) => {
                console.log("response");
                console.log(response);
            },
            (error) => {
                console.log(error);
            }
        )
})