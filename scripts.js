const form = document.getElementById('registerForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', async function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  try {
    const response = await fetch("https://event-registration-page-pcw5.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, phone, message })
    });

    const result = await response.json();
    if (result.success) {
      successMsg.classList.remove('hidden');
      form.reset();
    } else {
      alert("Registration failed. Try again.");
    }
  } catch (err) {
    alert("Server error. Please try again later.");
    console.error(err);
  }
});
