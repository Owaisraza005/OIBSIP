
// =========================
// GET HTML ELEMENTS
// =========================

const form = document.getElementById("converterForm");

const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");

const errorMessage = document.getElementById("errorMessage");
const results = document.getElementById("results");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");


// =========================
// SHOW ERROR MESSAGE
// =========================

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add("show");
    results.hidden = true;
}


// =========================
// FORMAT RESULT
// =========================

function formatTemperature(value) {
    // Avoid displaying negative zero
    if (Object.is(value, -0)) {
        value = 0;
    }

    return Number(value.toFixed(2)).toString();
}


// =========================
// TEMPERATURE CONVERSION
// =========================

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Clear previous error
    errorMessage.textContent = "";
    errorMessage.classList.remove("show");

    // Get input value
    const temperature = temperatureInput.valueAsNumber;

    const selectedUnit = unitSelect.value;

    // Validate empty or invalid input
    if (temperatureInput.value.trim() === "" ||
        !Number.isFinite(temperature)) {

        showError("Please enter a valid numeric temperature.");
        temperatureInput.focus();
        return;
    }

    // Convert input into Celsius first
    let celsius;

    if (selectedUnit === "celsius") {

        celsius = temperature;

    } else if (selectedUnit === "fahrenheit") {

        celsius = (temperature - 32) * 5 / 9;

    } else if (selectedUnit === "kelvin") {

        celsius = temperature - 273.15;

    }

    // Absolute zero validation
    if (celsius < -273.15) {

        showError(
            "Invalid temperature! Temperature cannot be below absolute zero (-273.15 °C)."
        );

        temperatureInput.focus();
        return;
    }

    // Calculate all three units
    const fahrenheit = (celsius * 9 / 5) + 32;

    const kelvin = celsius + 273.15;

    // Display results
    celsiusResult.textContent =
        formatTemperature(celsius) + " °C";

    fahrenheitResult.textContent =
        formatTemperature(fahrenheit) + " °F";

    kelvinResult.textContent =
        formatTemperature(kelvin) + " K";

    // Show result section
    results.hidden = false;

});


// =========================
// RESET FUNCTIONALITY
// =========================

form.addEventListener("reset", function () {

    errorMessage.textContent = "";
    errorMessage.classList.remove("show");

    results.hidden = true;

});
