const form = document.getElementById('registerForm');

form.addEventListener('submit', async function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  try {
    const response = await fetch("https://event-registration-page-pcw5.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, phone, message })
    });

    const result = await response.json();
    if (result.success) {
      window.location.href = "thankyou.html";
    } else {
      alert("Registration failed. Try again.");
    }
  } catch (err) {
    alert("Server error. Please try again later.");
    console.error(err);
  }
});
