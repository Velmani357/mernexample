// const students = ['Velu', 'swathi', 'Suji', 'jooo'];

// students.map((student, index) => {
//   console.log(`${index + 1}. ${student}`);
// });


// function isEven(num) {
//   return num % 2 == 0; 
// }


// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((n) => {
//   if (isEven(n)) {
//     console.log(n + " is even: true");
//   } else {
//     console.log(n + " is even: false");
//   }
// });

// const numbers = [1, 2, 3, 4, 5, 6];
// const isEvenArray = numbers.map((num) => num % 2 === 0);

// console.log(isEvenArray);


// const numbers = [1, 2, 3, 4, 5];


// const tripled = numbers.map(num => num * 3);

// const filtered = tripled.filter(num => num > 5);

// const sum = filtered.reduce((acc, num) => acc + num, 0);

// console.log("Tripled numbers:", tripled);
// console.log("Filtered numbers (>5):", filtered);
// console.log("Sum of filtered tripled numbers:", sum);
   




// const myPromise = new Promise((resolve, reject) => {
//   let number = 7;
//   setTimeout(() => {
//     if (number % 2 === 0) {
//       resolve('Number is even'); 
//     } else {
//       reject('Number is odd'); 
//     }
//   }, 1000);
// });
// myPromise
//   .then(result => console.log('Success:', result))
//   .catch(error => console.error('Error:', error));



// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(todos => {
    
//     const specificFields = todos.map(todo => ({
//       id: todo.id,
//     }));

//     console.log(specificFields);
//   })
//   .catch(error => console.error('Error:', error));


// async function fetchTodos() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const todos = await response.json();
//     const fields = todos.map(todo => ({
//       id: todo.id,
//     }));

//     console.log(fields);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// fetchTodos();


let name = "velu";
let age = 19;
console.log(`iam ${name} and my age is : ${age}`);