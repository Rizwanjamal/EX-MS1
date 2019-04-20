const db = firebase.firestore();
let currentUser;

firebase.auth().onAuthStateChanged(user => {
    console.log('user :', user);
    currentUser = user;
});

let logout = () => {
    firebase.auth().signOut()
        .then(function(data) {
            console.log('data :', data)
            window.location = "../login/login.html"
        })
}

const addTask = e => {
    e.preventDefault();
    e.stopPropagation();
    const description = document.querySelector("#description").value;
    const priority = document.querySelector("#priority").value;
    
    db.collection('users').doc(currentUser.uid)
        .update({
            "tasks": firebase.firestore.FieldValue.arrayUnion({ description, priority })
        })
  };
  