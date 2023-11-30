/********* create variables *********/
var costPerDayFull = 35;
var costPerDayHalf = 20;
var numberOfDays = 0;
var daysSelectors = document.querySelectorAll(".day-selector");
var clearDaysButton = document.getElementById("clear-days-button");
var submitButton = document.getElementById("submit-button");
var halfDayButton = document.getElementById("half-day-button");
var fullDayButton = document.getElementById("full-day-button");
var calculatedCostElement = document.getElementById("calculated-cost");

// Variables for keeping track of the selected days and the selected rate
var selectedDays = [];
var selectedRate = costPerDayFull;

document.addEventListener("DOMContentLoaded", function () {
    resetPage();

    daysSelectors.forEach(function (daySelector) {
        daySelector.addEventListener("click", function (event) {
            toggleDaySelection(event);
        });
    });

    clearDaysButton.addEventListener("click", function () {
        clearSelectedDays();
    });
    submitButton.addEventListener("click", function () {
        handleSubmit();
    });
    halfDayButton.addEventListener("click", function () {
        setRate(costPerDayHalf, halfDayButton, fullDayButton);
    });
    fullDayButton.addEventListener("click", function () {
        setRate(costPerDayFull, fullDayButton, halfDayButton);
    });
});

function toggleDaySelection(event) {
    var selectedDay = event.target.dataset.day;

    if (selectedDays.includes(selectedDay)) {
        selectedDays = selectedDays.filter(function (day) {
            return day !== selectedDay;
        });
        event.target.classList.remove("clicked");
    } else {
        selectedDays.push(selectedDay);
        event.target.classList.add("clicked");
    }

    updateCost();
}

function clearSelectedDays() {
    daysSelectors.forEach(function (daySelector) {
        daySelector.classList.remove("clicked");
    });

    selectedDays = [];
    updateCost();
}

function handleSubmit() {
    var contactPage = document.querySelector(".contact-page");
    contactPage.innerHTML = '<p class="thank-you-message">Thank you for your message</p>';
}

function updateCost() {
    numberOfDays = selectedDays.length;
    var totalCost = selectedRate * numberOfDays;
    calculatedCostElement.innerHTML = "Total Cost: $" + totalCost;
}

function resetPage() {
    selectedDays = [];
    selectedRate = costPerDayFull;
    updateCost();
}

function setRate(rate, addClassButton, removeClassButton) {
    selectedRate = rate;
    addClassButton.classList.add("clicked");
    removeClassButton.classList.remove("clicked");
    updateCost();
}

