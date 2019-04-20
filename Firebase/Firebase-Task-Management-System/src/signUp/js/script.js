const db = firebase.firestore();

firebase.auth().onAuthStateChanged(user => {
  console.log('user :', user);
});

let onSignUp = (e) => {
  e.preventDefault();
  e.stopPropagation();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const userName = document.querySelector("#userName").value;
  const age = document.querySelector("#age").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)  
    .then(data => {
      return db.collection('users').doc(data.user.uid).set({
        userName,
        email,
        age
      })
    })
    .then(() => {
      window.location = "../login/login.html";
    })
    .catch(function (error) {
         // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('error :', errorMessage);
    })
};


