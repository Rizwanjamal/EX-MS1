const userId = [1, 2, 3, 4, 5];
const nameField = document.querySelector("#nameField");
const idField = document.querySelector("#idField");

const myPromise = id => {
  return new Promise((resolve, reject) => {
    const data = [
      { name: "a", id: 1 },
      { name: "b", id: 2 },
      { name: "c", id: 3 },
      { name: "d", id: 4 },
      { name: "e", id: 5 }
    ];
    setTimeout(() => {
      const filteredUser = data.filter(user => id == user.id);
      resolve(filteredUser);
    }, 5000);
  });
};

myPromise(3)
  .then(response => {
    console.log(response);
    nameField.innerHTML = response[0].name;
    idField.innerHTML = response[0].id;
  })
  .catch(error => {
    console.log(error);
  });

// let result = [];
// setTimeout(() => {
//   const arr = [1, 2, 3, 4, 5];
//   result = arr;
// }, 5000);

// for (let i = 0; i < result.length; i++) {
//   const element = result[i];
//   list.innerHTML += "<li>" + element + "</li>";
// }

// Promise Chaining Using Regular Function
function getTodo() {
	return new Promise(function (resolve, reject) {
		return resolve(fetch('https://jsonplaceholder.typicode.com/todos/1'))	
	})
}
getTodo()
  .then(function(data) { 
	  return data.json()
  })
  .then(function(jsonData) {
	  console.log('jsonData :', jsonData)
  })


// Promise Chaining Using Arrow Function
let getTodo = () => {
	return new Promise((resolve, reject) => {
		return resolve(fetch('https://jsonplaceholder.typicode.com/todos/1'))	
	})
}
getTodo()
	.then(data => data.json())
	.then(jsonData => console.log('jsonData :', jsonData))
	.catch(err => console.log('err :', err))
