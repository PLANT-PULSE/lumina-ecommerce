fetch("http://127.0.0.1:8000/api/shippings/")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("shippings");

    data.forEach(shipping => {
      container.innerHTML += `
        <div class="shipping">
          <h3>${shipping.address}</h3>
          <p>${shipping.city}</p>
        </div>
      `;
    });
  })
  .catch(error => console.error(error));