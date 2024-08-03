fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{return response.json()})
.then(console.log)
.catch(()=>{})