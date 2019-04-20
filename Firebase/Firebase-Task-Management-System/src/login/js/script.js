const onLogin = e => {
  e.preventDefault();
  e.stopPropagation();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  
  // Sign in existing user
  firebase.auth().signInWithEmailAndPassword(email, password)  
    .then(function(data) {
      console.log('data :', data)
      window.location = "../dashboard/dashboard.html"
    })
    .catch(function(err) {
      console.log('err :', err)
    })
};
