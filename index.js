let api="http://localhost:3000/users"
     //console.log(api)
     function submitData(name, email) {
      const data = {
        name: name,
        email: email
      };
    
      const jsonData = JSON.stringify(data);
    
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: jsonData
      };
    
      return fetch('http://localhost:3000/users', requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          document.body.innerHTML += `<div>${data.id}</div>`;
          return data;
        })
        .catch(error => {
          if (error.message.includes('Unauthorized Access')) {
            document.body.innerHTML += `<div>Error: Unauthorized Access</div>`;
          } else {
            document.body.innerHTML += `<div>Error: ${error.message}</div>`;
          }
          throw error;
        });
    }
    
      
      