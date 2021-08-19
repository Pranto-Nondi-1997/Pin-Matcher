function getPin() {
    let pin = Math.round(Math.random() * 10000);
    return pin;
}

document.getElementById('pin-generate-btn').addEventListener('click', function() {

    let pinOutputField = document.getElementById('pin-output-field');
    // let pin = Math.round(Math.random() * 10000);
    let pinFinally = getPin();
    console.log(pinFinally);
    let pinString = pinFinally + '';
    if (pinString.length == 4) {
        pinOutputField.value = pinFinally;

    } else {
        console.log('try again');
        return getPin();
    }

})

document.getElementById('key-clicked').addEventListener('click', function(event) {

    let keyValue = event.target.innerText;
    let keyOutput = document.getElementById('key-output');
    let keyOutputValue = keyOutput.value;


    function key() {

        keyOutput.value = keyOutputValue + keyValue;
    }

    if (isNaN(keyValue) == true) {
        if (keyValue == 'C') {
            console.log(keyValue);
            keyOutput.value = '';
        }

    } else {
        // let keyOutputValue = keyOutput.value;
        // keyOutput.value = keyOutputValue + keyValue;
        return key();

    }

})
document.getElementById('submit-button').addEventListener('click', function() {
    let pinOutputField = document.getElementById('pin-output-field').value;

    let keyOutput = document.getElementById('key-output').value;

    if (pinOutputField == keyOutput) {

        document.getElementById('match-sucess').style.display = 'block';
        document.getElementById('miss-match').style.display = 'none';

    } else {
        document.getElementById('miss-match').style.display = 'block';
        document.getElementById('match-sucess').style.display = 'none';
    }



})