let page = 1;
$(".btnCatalog").on("click", () => {
  page++;
  console.log(page);
  fetch(
    `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`
  )
    .then((response) => response.json())
    .then((response) =>
      $(".catalogContainer").html(`
    <ul class="card">
        <li class="imgCard"><img src='${response.products[0].image}'></li>
        <li class="nameCard">${response.products[0].name}</li>
        <li class="desCard">${response.products[0].description}</li>
        <li class="amoutCardPrev">De: R$${response.products[0].oldPrice}</li>
        <li class="amoutCardCurrent">Por: R$${response.products[0].price}</li>
        <li class="amoutCardInstallment">ou ${response.products[0].installments.count}x de R$${response.products[0].installments.value}</li>
        <li class="amoutCardInstallmentValue"></li>
        <li class="btnCard"><button><a href="./email.html">Comprar</button></li>
       </ul>  
         
       
    `)
    );
  fetch(
    `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`
  )
    .then((response) => response.json())
    .then((response) =>
      $(".catalogContainer1").html(`
    <ul class="card">
        <li class="imgCard"><img src='${response.products[1].image}'></li>
        <li class="nameCard">${response.products[1].name}</li>
        <li class="desCard">${response.products[1].description}</li>
        <li class="amoutCardPrev">De: R$${response.products[1].oldPrice}</li>
        <li class="amoutCardCurrent">Por: R$${response.products[1].price}</li>
        <li class="amoutCardInstallment">ou ${response.products[1].installments.count}x de R$${response.products[1].installments.value}</li>
        <li class="amoutCardInstallmentValue"></li>
        <li class="btnCard"><button><a href="./email.html">Comprar</button></li>
       </ul>  
         
       
    `)
    );
});
fetch(
  `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`
)
  .then((response) => response.json())
  .then((response) =>
    $(".catalogContainer").html(`
    <ul class="card">
        <li class="imgCard"><img src='${response.products[0].image}'></li>
        <li class="nameCard">${response.products[0].name}</li>
        <li class="desCard">${response.products[0].description}</li>
        <li class="amoutCardPrev">De: R$${response.products[0].oldPrice}</li>
        <li class="amoutCardCurrent">Por: R$${response.products[0].price}</li>
        <li class="amoutCardInstallment">ou ${response.products[0].installments.count}x de R$${response.products[0].installments.value}</li>
        <li class="amoutCardInstallmentValue"></li>
        <li class="btnCard"><button><a href="./email.html">Comprar</button></li>
       </ul>  
         
       
    `)
  );
fetch(
  `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`
)
  .then((response) => response.json())
  .then((response) =>
    $(".catalogContainer1").html(`
    <ul class="card">
        <li class="imgCard"><img src='${response.products[1].image}'></li>
        <li class="nameCard">${response.products[1].name}</li>
        <li class="desCard">${response.products[1].description}</li>
        <li class="amoutCardPrev">De: R$${response.products[1].oldPrice}</li>
        <li class="amoutCardCurrent">Por: R$${response.products[1].price}</li>
        <li class="amoutCardInstallment">ou ${response.products[1].installments.count}x de R$${response.products[1].installments.value}</li>
        <li class="amoutCardInstallmentValue"></li>
        <li class="btnCard"><button><a href="./email.html">Comprar</button></li>
       </ul>  
         
       
    `)
  );
