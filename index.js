function submitData(userName, userEmail) {
    const formData = {
      name: userName,
      email: userEmail
    };
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", fetchOptions)
      .then(response => response.json())
      .then(data => {
        document.body.innerHTML=data.id;
      })
      .catch(error => {
        document.body.innerHTML = error.message;
      });
  }
  