function create(){
    data1 = document.getElementById("create").value;
const data = { "task": data1 };

fetch('http://localhost:8000/api/todo/create/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}

function update(){
    data2 = document.getElementById("text").value;
    data1 = document.getElementById("update").value;
const data = { "task": data2 };

fetch('http://localhost:8000/api/todo/'+data1+'/update/', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}

function Delete(){
    data1 = document.getElementById("Delete").value;
const data = { "task": data1 };

fetch('http://localhost:8000/api/todo/'+data1+'/delete/', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}

// api url
const api_url = 
      "http://localhost:8000/api/todos/";
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
// Function to hide the loader
function hideloader() {
    document.getElementById('loading');
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>_id</th>
          <th>Task</th>
          <th>CREATEAT</th>
          <th>UPDATEAT</th>
         </tr>`;
    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr> 
    <td>${r._id} </td>
    <td>${r.task}</td>
    <td>${r.createAt}</td> 
    <td>${r.updateAt}</td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}