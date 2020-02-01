function solve() {
    var math_opt = document.getElementsByName("math");
    var sum = document.getElementById("sum").value;
    var brutosots = 0.33;
    var brutokindlustustooandja = 0.008;
    var pension = 0.02;
    var kindlustustootaja = 0.016;
    var tulumaks = 0.1928;


    if (math_opt[0].checked == true) {

            Bruto = (sum *100) / ((1 + brutosots  + brutokindlustustooandja)*100);
            Neto = Bruto - ((Bruto * pension) + (Bruto * kindlustustootaja) + (Bruto * tulumaks));


        results =
        "<a class='message'> Tööandja kulu: " +  sum + " €</a>"
        + " <br></br> "
        + "<a class='message'> Bruto: " +  Bruto.toFixed(2) + " €</a>"
        + " <br></br> "
        + "<a class='message'> Neto: " +  Neto.toFixed(2) + " €</a>";

        document.getElementById('palk').innerHTML = results;
        return false;

    } else if (math_opt[1].checked == true) {

            Tooandja = sum  * (1 + brutosots + brutokindlustustooandja);
            Neto = sum - ((sum*pension)  + (sum * kindlustustootaja)  + (sum * tulumaks));


        results =
        "<a class='message'> Tööandja kulu: " +  Tooandja.toFixed(2) + " €</a>"
        + " <br></br> "
        + "<a class='message'> Bruto: " +  sum + " €</a>"
        + " <br></br> "
        + "<a class='message'> Neto: " +  Neto.toFixed(2) + " €</a>";

        document.getElementById('palk').innerHTML = results;

        return false;

    } else if (math_opt[2].checked == true) {

            Bruto = (sum  * 100) / ((1 - tulumaks - pension - kindlustustootaja)*100);
            Tooandja = Bruto  * (1 + brutosots + brutokindlustustooandja);


        results =
        "<a class='message'> Tööandja kulu: " +  Tooandja.toFixed(2) + " €</a>"
        + " <br></br> "
        + "<a class='message'> Bruto: " +  Bruto.toFixed(2) + " €</a>"
        + " <br></br> "
        + "<a class='message'> Neto: " +  sum+ " €</a>";

        document.getElementById('palk').innerHTML = results;

        return false;
    }
}

function reset_msg() {
    document.getElementById('msg').innerHTML = '';
}

function clear_msg() {
    document.getElementById('msg').innerHTML = "";
    sum = "";
    sum.focus();
}


$('input[type="checkbox"]').on('change', function() {
    $(this).siblings('input[type="checkbox"]').not(this).prop('checked', false);
 });