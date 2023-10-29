function convertToCelsius() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const resultBox = document.getElementById("resultBox");
    const celsiusValue = parseFloat(celsiusInput.value);
    const convertedValue = (celsiusValue * 9/5) + 32;
    fahrenheitInput.value = convertedValue.toFixed(2);
    resultBox.style.display = "block";
    document.getElementById("conversionResult").innerText = `${celsiusValue} °C is ${convertedValue.toFixed(2)} °F`;
  }
  
  function convertToFahrenheit() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const resultBox = document.getElementById("resultBox");
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const convertedValue = (fahrenheitValue - 32) * 5/9;
    celsiusInput.value = convertedValue.toFixed(2);
    resultBox.style.display = "block";
    document.getElementById("conversionResult").innerText = `${fahrenheitValue} °F is ${convertedValue.toFixed(2)} °C`;
  }