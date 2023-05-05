// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


const id = document.querySelector('#id');
const title = document.querySelector('#title');
const completed = document.querySelector('#completed');

const myName = document.querySelector('#name')

const handler = async ()  => {
    let result = await fetch('http://localhost:3000/profile');

    const data = await result.json();
    // const data = JSON.parse(result);

    // id.textContent = data.id;
    // title.textContent = data.title;
    // completed.textContent = data.completed;

    myName.textContent = data.name

    console.log(data);
}

handler();