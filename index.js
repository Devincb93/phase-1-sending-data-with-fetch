function submitData(userName, userEmail) {
    const dataStuff = {
      name: userName,
      email: userEmail
    };
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(dataStuff)
    })
      .then(response => response.json())
      .then(data => {
        
        const newId = data.id;
  
        const idElement = document.createElement('p');
        idElement.textContent = `New ID: ${newId}`;
        document.body.appendChild(idElement);
      })
      .catch(error =>{
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
      })
  }