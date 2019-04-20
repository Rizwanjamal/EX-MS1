let userData;
firebase.auth().onAuthStateChanged(function(user) {
  console.log('Inside home user :', user);
  userData = user;
  if (userData) {
    window.location = "./src/dashboard/dashboard.html";
  } else {
    window.location = "./src/login/login.html";
  }  
});