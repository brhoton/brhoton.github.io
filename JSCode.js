    function playGame()
    {
      let x = 0;
      let y = 0;
      x = prompt('Enter a number.');
      x = parseInt(x);
      
      if (isNaN(x)) {
        document.getElementById('output').innerHTML = x + ' is not a number! Please enter a positive integer.'; }
      else if (x < 0) {
        document.getElementById('output').innerHTML = x + ' is a negative number! Please enter a positive number.'; }
      else if {
        y = x * 5;
        documnet.getElementById('output').innerHTML = 'Result ' + y; }
    }
