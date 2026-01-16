


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("attendanceForm");
  const successMsg = document.getElementById("successMsg");

  const fullName = document.getElementById("fullName");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const visitDate = document.getElementById("visitDate");

  visitDate.valueAsDate = new Date();

  const showError = (input, message) => {
    const error = input.nextElementSibling;
    error.textContent = message;
    error.style.display = "block";
  };

  const clearError = (input) => {
    input.nextElementSibling.style.display = "none";
  };

  form.addEventListener("submit", (e) => {
    let valid = true;

    if (fullName.value.trim() === "") {
      showError(fullName, "Full name is required");
      valid = false;
    } else {
      clearError(fullName);
    }

    if (phone.value.trim().length < 7) {
      showError(phone, "Valid phone number required");
      valid = false;
    } else {
      clearError(phone);
    }

    if (email.value && !email.value.includes("@")) {
      showError(email, "Enter a valid email address");
      valid = false;
    } else {
      clearError(email);
    }

    if (!valid) {
      e.preventDefault();
      return;
    }

    successMsg.style.display = "none";
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form)
    });

    if (response.ok) {
      form.reset();
      successMsg.style.display = "block";
    }
  });
});
