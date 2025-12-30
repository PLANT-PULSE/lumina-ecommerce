fetch("http://127.0.0.1:8000/api/products/")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("products");

    data.forEach(product => {
      container.innerHTML += `
        <div class="product">
          <img src="${product.image}">
          <h3>${product.name}</h3>
          <p>₵${product.price}</p>
        </div>
      `;
    });
  })
  .catch(error => console.error(error));

   <script src="js/products.js"></script>
