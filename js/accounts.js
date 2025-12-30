fetch("http://127.0.0.1:8000/api/accounts/")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("accounts");

    data.forEach(account => {
      container.innerHTML += `
        <div class="account">
          <h3>${account.username}</h3>
          <p>${account.email}</p>
        </div>
      `;
    });
  })
  .catch(error => console.error(error));