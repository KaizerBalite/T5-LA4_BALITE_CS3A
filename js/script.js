document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Login successful! Redirecting to Dashboard...");
      window.location.href = "dashboard.html";
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Account created! Redirecting to Login...");
      window.location.href = "login.html";
    });
  }
});
