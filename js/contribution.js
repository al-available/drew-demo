document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contributionForm");
  const name = document.getElementById("name");
  const type = document.getElementById("type");
  const amount = document.getElementById("amount");
  const success = document.querySelector(".success");

  form.addEventListener("submit", (e) => {
    let valid = true;

    // Reset errors
    document.querySelectorAll(".error").forEach(err => err.style.display = "none");

    if (name.value.trim() === "") {
      name.nextElementSibling.style.display = "block";
      valid = false;
    }

    if (type.value === "") {
      type.nextElementSibling.style.display = "block";
      valid = false;
    }

    if (amount.value.trim() === "") {
      amount.nextElementSibling.style.display = "block";
      valid = false;
    }

    if (!valid) {
      e.preventDefault();
      return;
    }

    // Show success after Web3Forms submission
    setTimeout(() => {
      success.style.display = "block";
      form.reset();
    }, 500);
  });
});
