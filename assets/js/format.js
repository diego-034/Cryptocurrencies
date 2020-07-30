/* date convert to days */
function days(oldDate, actualDate) {
    try {
        var fechaini = new Date(oldDate);
        var fechafin = new Date(actualDate);
        var diasdif = fechafin.getTime() - fechaini.getTime();
        var contdias = Math.round(diasdif / (1000 * 60 * 60 * 24));
        return contdias;
    } catch (error) {
        console.log(error);
    }
}
/* date format */
function date(data) {
    try {
        let date = new Date(data);
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)

        return `${da} ${mo} ${ye}`;
    } catch (error) {
        console.log(error);
    }
}
/* number format */
function format(data) {
    try {
        return Number.parseFloat(data).toFixed(2);
    } catch (error) {
        console.log(error);
        return null;
    }
}