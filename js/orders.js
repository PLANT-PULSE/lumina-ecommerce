fetch("http://127.0.0.1:8000/api/orders/")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("orders");

    data.forEach(order => {
      container.innerHTML += `
        <div class="order">
          <h3>Order #${order.id}</h3>
          <p>Date: ${order.date}</p>
          <p>Total: ₵${order.total}</p>
        </div>
      `;
    });
  })
  .catch(error => console.error(error));