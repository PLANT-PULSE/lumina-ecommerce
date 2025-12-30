fetch("http://127.0.0.1:8000/api/payments/")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("payments");

    data.forEach(payment => {
      container.innerHTML += `
        <div class="payment">
          <h3>${payment.method}</h3>
          <p>Last 4: ${payment.last4}</p>
        </div>
      `;
    });
  })
  .catch(error => console.error(error));