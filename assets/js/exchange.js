let container = document.querySelector('.container');

createExchangeList();
async function getExchanges(){

    let response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

    let data = await response.json();

    return data;
}

function createExchangeList(){

    getExchanges().then(function(exchanges) {
        let outPut = "";
        exchanges.forEach(function(exchange) {
      outPut+=`
      <a href="${exchange.url}">
      <div class="row platRow mb-1">

      <div class="col-4 mt-4"><img src="${exchange.image}" height=50></div>
      
      <div class="col-4 mt-4"><b>Name</b>: ${exchange.name}</div>
       
      <div class="col-4 mt-4"><b>ID</b>:  ${exchange.id}</div>
      </div></a>`
           
            });

            container.innerHTML = outPut;

        })

        .catch(function(err) {

            console.log(err)

        });

}