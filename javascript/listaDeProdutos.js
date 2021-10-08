// let btnCatalog = document.querySelector('.btnCatalog')
// let page = 1
// btnCatalog.addEventListener('click',()=>{
//     console.log('teste');
   
// })
let page = 1
$('.btnCatalog').on('click',()=>{
    for(let i = 0 ; i > page ; i++){
        page = page + 1
    }
    console.log(page);
    return page
})

fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`)
.then(response => response.json())
.then(response => 
    $('.catalogContainer').html(`
    <ul class="card">
        <li class="imgCard"><img src='${response.products[0].image}'></li>
        <li class="nameCard">${response.products[0].name}</li>
        <li class="desCard">${response.products[0].description}</li>
        <li class="amoutCardPrev">De: R$${response.products[0].oldPrice}</li>
        <li class="amoutCardCurrent">Por: R$${response.products[0].price}</li>
        <li class="amoutCardInstallment">ou ${response.products[0].installments.count}x de R$${response.products[0].installments.value}</li>
        <li class="amoutCardInstallmentValue"></li>
        <li class="btnCard"><button>Compra</button></li>
       </ul>  
         
       
    `))
fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
.then(response => response.json())
.then(response => 
    $('.catalogContainer1').html(`
    <ul class="card">
        <li class="imgCard"><img src='${response.products[1].image}'></li>
        <li class="nameCard">${response.products[1].name}</li>
        <li class="desCard">${response.products[1].description}</li>
        <li class="amoutCardPrev">De: R$${response.products[1].oldPrice}</li>
        <li class="amoutCardCurrent">Por: R$${response.products[1].price}</li>
        <li class="amoutCardInstallment">ou ${response.products[1].installments.count}x de R$${response.products[1].installments.value}</li>
        <li class="amoutCardInstallmentValue"></li>
        <li class="btnCard"><button>Compra</button></li>
       </ul>  
         
       
    `))
fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
.then(response => response.json())
.then(response => 
    $('.catalogContainer2').html(`
    <ul class="card">
        <li class="imgCard"><img src='${response.products[2].image}'></li>
        <li class="nameCard">${response.products[2].name}</li>
        <li class="desCard">${response.products[2].description}</li>
        <li class="amoutCardPrev">De: R$${response.products[2].oldPrice}</li>
        <li class="amoutCardCurrent">Por: R$${response.products[2].price}</li>
        <li class="amoutCardInstallment">ou ${response.products[2].installments.count}x de R$${response.products[2].installments.value}</li>
        <li class="amoutCardInstallmentValue"></li>
        <li class="btnCard"><button>Compra</button></li>
       </ul>  
         
       
    `))
fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
.then(response => response.json())
.then(response => 
    $('.catalogContainer3').html(`
    <ul class="card">
        <li class="imgCard"><img src='${response.products[3].image}'></li>
        <li class="nameCard">${response.products[3].name}</li>
        <li class="desCard">${response.products[3].description}</li>
        <li class="amoutCardPrev">De: R$${response.products[3].oldPrice}</li>
        <li class="amoutCardCurrent">Por: R$${response.products[3].price}</li>
        <li class="amoutCardInstallment">ou ${response.products[3].installments.count}x de R$${response.products[3].installments.value}</li>
        <li class="amoutCardInstallmentValue"></li>
        <li class="btnCard"><button>Compra</button></li>
       </ul>  
         
       
    `))
fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
.then(response => response.json())
.then(response => 
    $('.catalogContainer4').html(`
    <ul class="card">
        <li class="imgCard"><img src='${response.products[4].image}'></li>
        <li class="nameCard">${response.products[4].name}</li>
        <li class="desCard">${response.products[4].description}</li>
        <li class="amoutCardPrev">De: R$${response.products[4].oldPrice}</li>
        <li class="amoutCardCurrent">Por: R$${response.products[4].price}</li>
        <li class="amoutCardInstallment">ou ${response.products[4].installments.count}x de R$${response.products[4].installments.value}</li>
        <li class="amoutCardInstallmentValue"></li>
        <li class="btnCard"><button>Compra</button></li>
       </ul>  
         
       
    `))
fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
.then(response => response.json())
.then(response => 
    $('.catalogContainer5').html(`
    <ul class="card">
        <li class="imgCard"><img src='${response.products[5].image}'></li>
        <li class="nameCard">${response.products[5].name}</li>
        <li class="desCard">${response.products[5].description}</li>
        <li class="amoutCardPrev">De: R$${response.products[5].oldPrice}</li>
        <li class="amoutCardCurrent">Por: R$${response.products[5].price}</li>
        <li class="amoutCardInstallment">ou ${response.products[5].installments.count}x de R$${response.products[5].installments.value}</li>
        <li class="amoutCardInstallmentValue"></li>
        <li class="btnCard"><button>Compra</button></li>
       </ul>  
         
       
    `))
fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
.then(response => response.json())
.then(response => 
    $('.catalogContainer6').html(`
    <ul class="card">
        <li class="imgCard"><img src='${response.products[6].image}'></li>
        <li class="nameCard">${response.products[6].name}</li>
        <li class="desCard">${response.products[6].description}</li>
        <li class="amoutCardPrev">De: R$${response.products[6].oldPrice}</li>
        <li class="amoutCardCurrent">Por: R$${response.products[6].price}</li>
        <li class="amoutCardInstallment">ou ${response.products[6].installments.count}x de R$${response.products[6].installments.value}</li>
        <li class="amoutCardInstallmentValue"></li>
        <li class="btnCard"><button>Compra</button></li>
       </ul>  
         
       
    `))
fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
.then(response => response.json())
.then(response => 
    $('.catalogContainer7').html(`
    <ul class="card">
        <li class="imgCard"><img src='${response.products[7].image}'></li>
        <li class="nameCard">${response.products[7].name}</li>
        <li class="desCard">${response.products[7].description}</li>
        <li class="amoutCardPrev">De: R$${response.products[7].oldPrice}</li>
        <li class="amoutCardCurrent">Por: R$${response.products[7].price}</li>
        <li class="amoutCardInstallment">ou ${response.products[7].installments.count}x de R$${response.products[7].installments.value}</li>
        <li class="amoutCardInstallmentValue"></li>
        <li class="btnCard"><button>Compra</button></li>
       </ul>  
         
       
    `))






// 