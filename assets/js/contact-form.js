'use strict';

/**
 * Contact form submission functionality
 */
export function initContactForm() {
  const form = document.querySelector("#data-form");
  const successMessage = document.querySelector(".success-message");

  if (form && successMessage) {
    successMessage.style.display = "none";

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      console.log("Submitting form...");

      const submitButton = form.querySelector("button[type='submit']");
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML = `<ion-icon name="paper-plane"></ion-icon> <span>Sending...</span>`;
      }

      const formData = new FormData(form);

      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbzgkw7r6-_y3wkr1jyT4AhDBfEVXzJmCttNBFey1fBsP6TAA5P53-D7sEfK-04_YhTu/exec", {
          method: "POST",
          body: new URLSearchParams(formData),
        });

        const result = await response.json();

        if (result.status === "success") {
          console.log("Form submitted successfully!");

          successMessage.classList.add("show");
          successMessage.textContent =
            "Your contact form was submitted! I will reach out to you based on the email you provided.";

          form.reset();
        } else {
          console.error("Form submission failed:", result.message);
          alert("Failed to send the form. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again.");
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.innerHTML = `<ion-icon name="paper-plane"></ion-icon> <span>Send Message</span>`;
        }
      }
    });
  } else {
    console.log("Contact form or success message not found.");
  }
}
