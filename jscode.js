function computeResistance() {
    var thickness1 = document.getElementById('thickness-1').value;
    var lambda1 = document.getElementById('lambda-1').value;

    var thickness2 = document.getElementById('thickness-2').value;
    var lambda2 = document.getElementById('lambda-2').value;
    console.log(thickness1);
    console.log(thickness2);
    console.log(lambda1);
    console.log(lambda2);

    var score1 = Number.parseFloat(thickness1) / Number.parseFloat(lambda1);
    var score2 = Number.parseFloat(thickness2) / Number.parseFloat(lambda2);

    // console.log(score1);
    // console.log(score2);

    var placeToPrintResistace1 = document.getElementById('resistance-1');
    console.log(placeToPrintResistace1);
    placeToPrintResistace1.value = score1;

    var placeToPrintResistace2 = document.getElementById('resistance-2');
    console.log(placeToPrintResistace2);
    placeToPrintResistace2.value = score2;


}

var computeResistanceButton = document.getElementById('compute-resistance');
computeResistanceButton.addEventListener('click', computeResistance);



function computeHTC() {
    var inputRsi = document.getElementById('rsi').value;
    var inputRse = document.getElementById('rse').value;
    var inputR1 = document.getElementById('resistance-1').value;
    var inputR2 = document.getElementById('resistance-2').value;

    var score = 1 / (Number.parseFloat(inputRsi) +
        Number.parseFloat(inputRse) +
        Number.parseFloat(inputR1) +
        Number.parseFloat(inputR2));

    var placeToPrintHtc = document.getElementById('htc-score');
    placeToPrintHtc.innerHTML = 'HTC = ' + score;
    console.log('HTC', score);
}

var computeHtcButton = document.getElementById('compute-hrc');
computeHtcButton.addEventListener('click', computeHTC);