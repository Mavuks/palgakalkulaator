function clear_msg() {
    document.getElementById('neto').innerHTML = "";
    document.getElementById('bruto').innerHTML = "";
    document.getElementById('tooandja').innerHTML = "";
    summa = "";
}

function solve() {
    var math_opt = document.getElementsByName("math");
    var summa = document.getElementById("summa").value;
    var brutosots = 0.33;
    var brutokindlustustooandja = 0.008;
    var pension = 0.02;
    var kindlustustootaja = 0.016;
    var tulumaks = 0.1928;

    if (math_opt[0].checked == true) {

            bruto = (summa *100) / ((1 + brutosots  + brutokindlustustooandja)*100);
            neto = bruto - ((bruto * pension) + (bruto * kindlustustootaja) + (bruto * tulumaks));

            document.getElementById('neto').innerHTML = neto.toFixed(2);
            document.getElementById('bruto').innerHTML = bruto.toFixed(2);
            document.getElementById('tooandja').innerHTML = summa;


    } else if (math_opt[1].checked == true) {

            tooandja = summa  * (1 + brutosots + brutokindlustustooandja);
            neto = summa - ((summa*pension)  + (summa * kindlustustootaja)  + (summa * tulumaks));

            document.getElementById('neto').innerHTML = neto.toFixed(2);
            document.getElementById('bruto').innerHTML = summa;
            document.getElementById('tooandja').innerHTML = tooandja.toFixed(2);

    } else if (math_opt[2].checked == true) {

            bruto = (summa  * 100) / ((1 - tulumaks - pension - kindlustustootaja)*100);
            tooandja = bruto  * (1 + brutosots + brutokindlustustooandja);

            document.getElementById('neto').innerHTML = summa;
            document.getElementById('bruto').innerHTML = bruto.toFixed(2);
            document.getElementById('tooandja').innerHTML = tooandja.toFixed(2);

    }
    return false;
}
