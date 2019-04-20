const db = firebase.firestore();
let currentUser;
firebase.auth().onAuthStateChanged(user => {
    db.collection('users').doc(user.uid).get()
        .then(doc => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                currentUser = doc.data()
                document.getElementById("userName").innerHTML = currentUser.userName;
                db.collection('users').doc(user.uid)
                    .onSnapshot((user) => {
                        currentUser = user.data();
                        generateTableRows()
                })
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
});

let generateTableRows = () => {
    var tableData = currentUser.tasks.map(task => (
        `
            <tr>
                <td>${task.description}</td>
                <td>${task.priority}</td>
            </tr>
        `
      )).join('');
      
      var tbody = document.querySelector('#body');
      tbody.innerHTML = tableData;
} 



let logout = () => {
    firebase.auth().signOut()
        .then(function(data) {
            console.log('data :', data)
            window.location = "../login/login.html"
        })
}
let addTask = () => {
    window.location = "../task/task.html"
}