const fs = require('fs');

// HTML content for the website with a calculator
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 20px;
    }
    input[type="number"] {
      width: 100px;
      padding: 10px;
      margin: 5px;
    }
    button {
      padding: 10px 20px;
      margin: 5px;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Simple Calculator</h1>
  <form id="calculatorForm">
    <input type="number" id="num1" placeholder="Enter first number" required>
    <input type="number" id="num2" placeholder="Enter second number" required>
    <br><br>
    <button type="button" onclick="calculate()">Calculate</button>
  </form>
  <div id="result"></div>
  
  <script>
    function calculate() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      const result = num1 + num2;
      document.getElementById('result').innerHTML = \`Result: \${result}\`;
    }
  </script>
</body>
</html>
`;

// Write HTML content to a file named index.html
fs.writeFileSync('index.html', htmlContent);

console.log('index.html created successfully!');
