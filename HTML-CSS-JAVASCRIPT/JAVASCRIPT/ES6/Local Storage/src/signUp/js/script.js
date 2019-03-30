const onSignUp = e => {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  let users = localStorage.getItem("users");
  if (users == null) {
    users = [];
  } else {
    users = JSON.parse(users);
  }

  const payload = {
    email,
    password
  };

  users.push(payload);

  users = JSON.stringify(users);

  localStorage.setItem("users", users);
  localStorage.setItem("user", JSON.stringify(payload));

  window.location = "../dashboard/dashboard.html";
  return false;
};
