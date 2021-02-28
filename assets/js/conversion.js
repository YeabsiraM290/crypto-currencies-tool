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