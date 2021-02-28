let convertedValue  = document.querySelector('.convertedValue');
let convertedResult = document.querySelector('.convertedResult');
let convertedOptions = document.querySelector('.converted');
let convertedToOptions = document.querySelector('.convertedTo');
let convertBtn = document.querySelector('.convert');
let trendingCoins = document.querySelector('.trendingCoins');

createCoinList();
setTrending();
async function getSupportedCoin(){

    let response = await fetch('https://api.coingecko.com/api/v3/simple/supported_vs_currencies');

    let data = await response.json();

    return data;

}

async function getCoinList(){

    let response = await fetch('https://api.coingecko.com/api/v3/coins/list');

    let data = await response.json();

    return data;

}

async function getConverted(converted, convertedTo){

    let response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${converted}&vs_currencies=${convertedTo}`);

    let data = await response.json();

    return data;

}

async function getTrending(converted, convertedTo){

    let response = await fetch('https://api.coingecko.com/api/v3/search/trending');

    let data = await response.json();

    return data;

}

function setTrending(){

    getTrending().then(function(coinList) {
        let outPut = "";

        for(i=0;i<7;i++){

            let result = Object.values(Object.values(Object.values(coinList)[0][i]))[0]
            outPut+=`<div class="row Tcoin mt-4">
            <div class="col-12">
            <div class="card">
            <img class="card-img-top" src="${result.large}" height=300 width=300 alt="">
            <div class="card-body">
              <h1 class="card-title text-center">${result.name}</h1>
              <p class="card-text">
               <b>Symbol:</b> ${result.symbol} <br>
               <b>Score:</b> ${result.score} <br>
               <b>Market Cap:</b> ${result.market_cap_rank}
              </p>
            </div>
           </div></div>
      
        </div>`

        }

            trendingCoins.innerHTML = outPut;

        })

        .catch(function(err) {

            console.log(err)

        });

}