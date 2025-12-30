fetch("http://127.0.0.1:8000/api/cart/")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("cart-items");

    data.forEach(item => {
      container.innerHTML += `
        <div class="cart-item">
          <h3>${item.product.name}</h3>
          <p>Qty: ${item.quantity}</p>
          <p>₵${item.product.price * item.quantity}</p>
        </div>
      `;
    });
  })
  .catch(error => console.error(error));