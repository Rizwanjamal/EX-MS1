const user = localStorage.getItem("user");

if (user) {
  window.location = "./src/dashboard/dashboard.html";
} else {
  window.location = "./src/login/login.html";
}
