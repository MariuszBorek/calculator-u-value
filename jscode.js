function start() {
    addRow();
    document.getElementById('table-rsi-rse').style.display = 'none';
}

window.onload = start();

var actualRowNumber = 0;

function rowNumber() {
    actualRowNumber = actualRowNumber + 1;
    console.log(actualRowNumber);

}


function addRow() {
    var rowBox = document.getElementById('row-box');
    var div = document.createElement('div');
    rowBox.appendChild(div);
    div.id = 'input-values-' + actualRowNumber;
    div.innerHTML = '<input type="text" id="material' + actualRowNumber + '" placeholder="input material" /><input type="number" id="thickness-' + actualRowNumber + '" placeholder="input thickness" /><input type="number" id="lambda-' + actualRowNumber + '" placeholder="input lambda-' + actualRowNumber + '" /><input type="number" id="resistance-' + actualRowNumber + '" class="resistance" />';
    rowNumber();
}

var rowNumberButton = document.getElementById('row-numbers');
rowNumberButton.addEventListener('click', addRow);

// -----------

function computeResistance() {

    for (i = 0; i < actualRowNumber; i++) {

        var thickness = document.getElementById('thickness-' + i + '').value;
        var lambda = document.getElementById('lambda-' + i + '').value;

        console.log(thickness);
        console.log(lambda);

        var placeToPrintResistace = document.getElementById('resistance-' + i + '');
        console.log(placeToPrintResistace);
        placeToPrintResistace.value = Number.parseFloat(thickness) / Number.parseFloat(lambda);
    }
}

var computeResistanceButton = document.getElementById('compute-resistance');
computeResistanceButton.addEventListener('click', computeResistance);

// -----------

function computeHTC() {
    var rsi = document.getElementById('rsi').value;
    var rse = document.getElementById('rse').value;
    var resistanceSum = 0;

    for (i = 0; i < actualRowNumber; i++) {
        resistanceSum += Number.parseFloat(document.getElementById('resistance-' + i + '').value);

    }

    var uValue = 1 / (Number.parseFloat(rsi) + Number.parseFloat(rse) + Number.parseFloat(resistanceSum));

    var placeToPrintHtc = document.getElementById('htc-score');
    placeToPrintHtc.innerHTML = 'U value = ' + uValue;
}

var computeHtcButton = document.getElementById('compute-hrc');
computeHtcButton.addEventListener('click', computeHTC);

function showTable() {
    var table = document.getElementById('table-rsi-rse');
    if (table.style.display === 'none') {
        table.style.display = 'block';
    } else {
        table.style.display = 'none';
    }
}

var showRsiRseButton = document.getElementById('show-rsi-rse-table');
showRsiRseButton.addEventListener('click', showTable);