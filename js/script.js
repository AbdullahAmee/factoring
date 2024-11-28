document.getElementById('factorButton').onclick = function() {
    const input = document.getElementById('numberInput').value;
    const number = parseInt(input);
  
    if (isNaN(number) || number <= 0) {
        document.getElementById('result2').innerText = 'Please enter a valid positive number.';
        return;
    }
  
    let factorPairs = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factorPairs.push([i, number / i]);
        }
    }
    let formattedPairs = factorPairs.map(pair => '(' + pair[0] + ', ' + pair[1] + ')').join(', ');
    document.getElementById('result2').innerHTML = 'The factor pairs of ' + input + ' are: <br> ' + formattedPairs + '<br>'+'<br>' +' Math is fun&#128512;';
  };