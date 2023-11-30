// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded

    // Find the submit button and attach a click event listener
    var submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", function () {
        // Get the contact page element
        var contactPage = document.querySelector(".contact-page");

        // Remove existing content
        contactPage.innerHTML = "";

        // Create a new paragraph element
        var thankYouMessage = document.createElement("p");

        // Set the text content for the thank you message
        thankYouMessage.textContent = "Thank you for your message";

        // Add a class to the paragraph for styling
        thankYouMessage.classList.add("thank-you-message");

        // Append the paragraph to the contact page
        contactPage.appendChild(thankYouMessage);
    });
});

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

