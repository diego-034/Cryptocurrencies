/* tables */
const listPrice = document.getElementById("list-price");

/* Load add event listeners */
document.addEventListener('DOMContentLoaded', function() {
    getData();
    tab = "price";
});

/* Router functions */
$("#btn_price").click(function() {
    $('.th-return').css("display", "none");
    $('.th-ath').css("display", "none");
    $('.th-community').css("display", "none");
    $('.th-price').css("display", "table-cell");
    tab = "price";
});
$("#btn_return").click(function() {
    $('.th-price').css("display", "none");
    $('.th-ath').css("display", "none");
    $('.th-community').css("display", "none");
    $('.th-return').css("display", "table-cell");
    tab = "return";
});
$("#btn_community").click(function() {
    $('.th-price').css("display", "none");
    $('.th-ath').css("display", "none");
    $('.th-return').css("display", "none");
    $('.th-community').css("display", "table-cell");
    tab = "community";
});
$("#btn_ath").click(function() {
    $('.th-price').css("display", "none");
    $('.th-community').css("display", "none");
    $('.th-return').css("display", "none");
    $('.th-ath').css("display", "table-cell");
    tab = "ath";
});
/* globals variables */
let first100;
let tab;
let allData;
let next100;
/* order by position */
$("#position").click(function() {
        var data = first100;
        if (next100 != null) {
            data = next100;
        }
        $("#tbody-list-price").remove();
        if ($("#position").val()) {
            $("#position").val(false);
            data.sort((a, b) => a.rank - b.rank);
            renderPrice(data, tab);
        } else {
            $("#position").val(true);
            data.sort((a, b) => b.rank - a.rank);
            renderPrice(data, tab);
        }
    })
    /* order by name */
$("#name").click(function() {
        var data = first100;
        if (next100 != null) {
            data = next100;
        }
        $("#tbody-list-price").remove();
        if ($("#name").val()) {
            $("#name").val(false);
            data.sort((a, b) => a.name > b.name);
            renderPrice(data, tab);
        } else {
            $("#name").val(true);
            data.sort((a, b) => a.name < b.name);
            renderPrice(data, tab);
        }
    })
    /* order by price */
$("#price").click(function() {
    var data = first100;
    if (next100 != null) {
        data = next100;
    }
    $("#tbody-list-price").remove();
    if ($("#price").val()) {
        $("#price").val(false);
        data.sort((a, b) => a.quotes.USD.price - b.quotes.USD.price);
        renderPrice(data, tab);
    } else {
        $("#price").val(true);
        data.sort((a, b) => b.quotes.USD.price - a.quotes.USD.price);
        renderPrice(data, tab);
    }
})

/* order by h1 */
$("#1h").click(function() {
        var data = first100;
        if (next100 != null) {
            data = next100;
        }
        $("#tbody-list-price").remove();
        if ($("#1h").val()) {
            $("#1h").val(false);
            data.sort((a, b) => a.quotes.USD.percent_change_1h - b.quotes.USD.percent_change_1h);
            renderPrice(data, tab);
        } else {
            $("#1h").val(true);
            data.sort((a, b) => b.quotes.USD.percent_change_1h - a.quotes.USD.percent_change_1h);
            renderPrice(data, tab);
        }
    })
    /* order by 24h */
$("#24h").click(function() {
        var data = first100;
        if (next100 != null) {
            data = next100;
        }
        $("#tbody-list-price").remove();
        if ($("#24h").val()) {
            $("#24h").val(false);
            data.sort((a, b) => a.quotes.USD.percent_change_24h - b.quotes.USD.percent_change_24h);
            renderPrice(data, tab);
        } else {
            $("#24h").val(true);
            data.sort((a, b) => b.quotes.USD.percent_change_24h - a.quotes.USD.percent_change_24h);
            renderPrice(data, tab);
        }
    })
    /* order by 7d */
$("#7d").click(function() {
        var data = first100;
        if (next100 != null) {
            data = next100;
        }
        $("#tbody-list-price").remove();
        if ($("#7d").val()) {
            $("#7d").val(false);
            data.sort((a, b) => a.quotes.USD.percent_change_7d - b.quotes.USD.percent_change_7d);
            renderPrice(data, tab);
        } else {
            $("#7d").val(true);
            data.sort((a, b) => b.quotes.USD.percent_change_7d - a.quotes.USD.percent_change_7d);
            renderPrice(data, tab);
        }
    })
    /* order by volumen 24 */
$("#volumen24").click(function() {
        var data = first100;
        if (next100 != null) {
            data = next100;
        }
        $("#tbody-list-price").remove();
        if ($("#volumen24").val()) {
            $("#volumen24").val(false);
            data.sort((a, b) => a.quotes.USD.volume_24h - b.quotes.USD.volume_24h);
            renderPrice(data, tab);
        } else {
            $("#volumen24").val(true);
            data.sort((a, b) => b.quotes.USD.volume_24h - a.quotes.USD.volume_24h);
            renderPrice(data, tab);
        }
    })
    /* order by marketcap */
$("#marketcap").click(function() {
        var data = first100;
        if (next100 != null) {
            data = next100;
        }
        $("#tbody-list-price").remove();
        if ($("#marketcap").val()) {
            $("#marketcap").val(false);
            data.sort((a, b) => a.quotes.USD.market_cap - b.quotes.USD.market_cap);
            renderPrice(data, tab);
        } else {
            $("#marketcap").val(true);
            data.sort((a, b) => b.quotes.USD.market_cap - a.quotes.USD.market_cap);
            renderPrice(data, tab);
        }
    })
    /* order by 30d */
$("#30d").click(function() {
        var data = first100;
        if (next100 != null) {
            data = next100;
        }
        $("#tbody-list-price").remove();
        if ($("#30d").val()) {
            $("#30d").val(false);
            data.sort((a, b) => a.quotes.USD.percent_change_30d - b.quotes.USD.percent_change_30d);
            renderPrice(data, tab);
        } else {
            $("#30d").val(true);
            data.sort((a, b) => b.quotes.USD.percent_change_30d - a.quotes.USD.percent_change_30d);
            renderPrice(data, tab);
        }
    })
    /* order by 1y */
$("#1y").click(function() {
        var data = first100;
        if (next100 != null) {
            data = next100;
        }
        $("#tbody-list-price").remove();
        if ($("#1y").val()) {
            $("#1y").val(false);
            data.sort((a, b) => a.quotes.USD.percent_change_1y - b.quotes.USD.percent_change_1y);
            renderPrice(data, tab);
        } else {
            $("#1y").val(true);
            data.sort((a, b) => b.quotes.USD.percent_change_1y - a.quotes.USD.percent_change_1y);
            renderPrice(data, tab);
        }
    })
    /* order by ath */
$("#ath").click(function() {
        var data = first100;
        if (next100 != null) {
            data = next100;
        }
        $("#tbody-list-price").remove();
        if ($("#ath").val()) {
            $("#ath").val(false);
            data.sort((a, b) => a.quotes.USD.ath_price - b.quotes.USD.ath_price);
            renderPrice(data, tab);
        } else {
            $("#ath").val(true);
            data.sort((a, b) => b.quotes.USD.ath_price - a.quotes.USD.ath_price);
            renderPrice(data, tab);
        }
    })
    /* order by ath date */
$("#athDate").click(function() {
        var data = first100;
        if (next100 != null) {
            data = next100;
        }
        $("#tbody-list-price").remove();
        if ($("#athDate").val()) {
            $("#athDate").val(false);
            data.sort((a, b) => new Date(a.quotes.USD.ath_date) - new Date(b.quotes.USD.ath_date));
            renderPrice(data, tab);
        } else {
            $("#athDate").val(true);
            data.sort((a, b) => new Date(b.quotes.USD.ath_date) - new Date(a.quotes.USD.ath_date));
            renderPrice(data, tab);
        }
    })
    /* order by ath days */
$("#athDays").click(function() {
        var data = first100;
        if (next100 != null) {
            data = next100;
        }
        $("#tbody-list-price").remove();
        if ($("#athDays").val()) {
            $("#athDays").val(false);
            data.sort((a, b) => new Date(a.quotes.USD.ath_date) - new Date(b.quotes.USD.ath_date));
            renderPrice(data, tab);
        } else {
            $("#athDays").val(true);
            data.sort((a, b) => new Date(b.quotes.USD.ath_date) - new Date(a.quotes.USD.ath_date));
            renderPrice(data, tab);
        }
    })
    /* order by ath days */
$("#fromAth").click(function() {
        var data = first100;
        if (next100 != null) {
            data = next100;
        }
        $("#tbody-list-price").remove();
        if ($("#fromAth").val()) {
            $("#fromAth").val(false);
            data.sort((a, b) => a.quotes.USD.percent_from_price_ath - b.quotes.USD.percent_from_price_ath);
            renderPrice(data, tab);
        } else {
            $("#fromAth").val(true);
            data.sort((a, b) => b.quotes.USD.percent_from_price_ath - a.quotes.USD.percent_from_price_ath);
            renderPrice(data, tab);
        }
    })
    /* order by ath days */
$("#next100").click(function() {
    $("#tbody-list-price").remove();
    if (next100 == null) {
        next100 = allData.filter((elem) => elem.rank > 100 && elem.rank <= 200);
    }
    renderPrice(next100, tab);
    $("#next100").css("display", "none");
    $("#first100").css("display", "block");
})
$("#first100").click(function() {
    $("#tbody-list-price").remove();
    next100 = null;
    renderPrice(first100, tab);
    $("#next100").css("display", "block");
    $("#first100").css("display", "none");
})