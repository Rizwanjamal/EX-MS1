const onLogin = e => {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  let users = localStorage.getItem("users");
  if (users !== null) {
    users = JSON.parse(users);
  } else {
    users = [];
  }

  const payload = {
    email,
    password
  };
  console.log("TCL: payload", payload);
  const result = users.filter(user => {
    if (user.email == email && user.password == password) {
      return true;
    }
  });
  if (result.length) {
    localStorage.setItem("user", JSON.stringify(result[0]));
    window.location = "../dashboard/dashboard.html";
  } else {
    alert("ERROR!");
  }
  return false;
};
