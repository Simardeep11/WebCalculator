// Higher-order function to create conversion functions
function createConversionFunction(fromUnit, toUnit, conversionFactor) {
    return (value) => value * conversionFactor;
}

// Weight conversion functions
const poundsToKilograms = createConversionFunction("lb", "kg", 0.453592);
const kilogramsToPounds = createConversionFunction("kg", "lb", 2.20462);

// Function to handle weight conversion
function convertWeight() {
    const weightInput = document.getElementById("weightInput").value;
    const conversionDirection = document.getElementById("conversionDirection").value;
    const resultContainer = document.getElementById("resultContainer");

    if (weightInput.trim() !== "") {
        const weightValue = parseFloat(weightInput);
        let convertedValue;

        if (conversionDirection === "poundsToKilograms") {
            convertedValue = poundsToKilograms(weightValue);
        } else if (conversionDirection === "kilogramsToPounds") {
            convertedValue = kilogramsToPounds(weightValue);
        }

        // Display result
        resultContainer.innerHTML = `<p>${weightInput} is approximately ${convertedValue.toFixed(2)}.</p>`;
    } else {
        resultContainer.innerHTML = "<p>Please enter a valid weight.</p>";
    }
}

// Distance conversion functions
const milesToKilometers = createConversionFunction("mi", "km", 1.60934);
const kilometersToMiles = createConversionFunction("km", "mi", 0.621371);

// Function to handle distance conversion
function convertDistance() {
    const distanceInput = document.getElementById("distanceInput").value;
    const conversionDirection = document.getElementById("distanceConversionDirection").value;
    const resultContainer = document.getElementById("distanceResultContainer");

    if (distanceInput.trim() !== "") {
        const distanceValue = parseFloat(distanceInput);
        let convertedValue;

        if (conversionDirection === "milesToKilometers") {
            convertedValue = milesToKilometers(distanceValue);
        } else if (conversionDirection === "kilometersToMiles") {
            convertedValue = kilometersToMiles(distanceValue);
        }

        // Display result
        resultContainer.innerHTML = `<p>${distanceInput} approximately ${convertedValue.toFixed(2)}.</p>`;
    } else {
        resultContainer.innerHTML = "<p>Please enter a valid distance.</p>";
    }
}

// Function to handle temperature conversion
function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const conversionDirection = document.getElementById("temperatureConversionDirection").value;
    const resultContainer = document.getElementById("temperatureResultContainer");

    if (temperatureInput.trim() !== "") {
        const temperatureValue = parseFloat(temperatureInput);
        let convertedValue;

        if (conversionDirection === "celsiusToFahrenheit") {
            convertedValue = (temperatureValue * 9/5) + 32;
            resultContainer.innerHTML = `<p>${temperatureInput} °C is approximately ${convertedValue.toFixed(2)} °F.</p>`;
        } else if (conversionDirection === "fahrenheitToCelsius") {
            convertedValue = (temperatureValue - 32) * 5/9;
            resultContainer.innerHTML = `<p>${temperatureInput} °F is approximately ${convertedValue.toFixed(2)} °C.</p>`;
        } else {
            resultContainer.innerHTML = "<p>Please select a valid conversion direction.</p>";
        }
    } else {
        resultContainer.innerHTML = "<p>Please enter a valid temperature.</p>";
    }
}


